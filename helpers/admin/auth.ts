import "server-only";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { createHash, randomBytes } from "node:crypto";
import { getSiteUrl } from "@/helpers/site-url";
import {
  countRecentFailedAttempts,
  deleteAllSessions,
  deleteSession,
  findSession,
  pruneExpiredSessions,
  saveLoginAttempt,
  saveSession,
} from "./session-store";
import { isValidPasswordHash, verifyPasswordHash } from "./argon2";

export type AdminIdentity = {
  email: string;
};

const cookieName = "admin_session";
const sessionMaxAgeSeconds = 8 * 60 * 60;
const loginWindowMs = 15 * 60 * 1000;
const maxFailedAttempts = 5;
const maxEmailLength = 254;
const maxPasswordLength = 1024;

export function getAdminConfig() {
  const email = normalizeEmail(process.env.ADMIN_EMAIL ?? "");
  const passwordHash = process.env.ADMIN_PASSWORD_HASH ?? "";

  if (!email || !passwordHash || !isValidPasswordHash(passwordHash)) {
    throw new Error("Admin authentication is not configured.");
  }

  return { email, passwordHash };
}

export async function verifyAdminCredentials(email: string, password: string) {
  const config = getAdminConfig();
  const normalizedEmail = normalizeEmail(email);

  if (
    !normalizedEmail ||
    normalizedEmail.length > maxEmailLength ||
    password.length > maxPasswordLength ||
    normalizedEmail !== config.email ||
    !password
  ) {
    return null;
  }

  const validPassword = await verifyPasswordHash(password, config.passwordHash);
  return validPassword ? { email: config.email } : null;
}

export async function createAdminSession(admin: AdminIdentity) {
  const token = randomBytes(32).toString("base64url");
  const tokenHash = hashSessionToken(token);
  const expiresAt = new Date(Date.now() + sessionMaxAgeSeconds * 1000);

  await saveSession({
    tokenHash,
    adminEmail: admin.email,
    expiresAt: expiresAt.toISOString(),
    createdAt: new Date().toISOString(),
  });

  const cookieStore = await cookies();
  cookieStore.set(cookieName, token, getSessionCookieOptions(expiresAt));

  return { expiresAt };
}

export async function getAdminSession(): Promise<AdminIdentity | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName)?.value;
  if (!token) return null;

  const tokenHash = hashSessionToken(token);
  const session = await findSession(tokenHash);
  if (!session) return null;

  if (new Date(session.expiresAt).getTime() <= Date.now()) {
    await deleteSession(tokenHash);
    return null;
  }

  return { email: session.adminEmail };
}

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  return session;
}

export async function requireAdminForAction() {
  const validOrigin = await validateServerActionOrigin();
  if (!validOrigin) {
    throw new Error("Unauthorized");
  }

  return requireAdmin();
}

export async function destroyAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName)?.value;

  if (token) {
    await deleteSession(hashSessionToken(token));
  }

  cookieStore.set(cookieName, "", getExpiredCookieOptions());
}

export async function revokeAllAdminSessions() {
  await deleteAllSessions();
}

export async function pruneExpiredAdminSessions() {
  await pruneExpiredSessions();
}

export async function isLoginRateLimited(identifier: string, ipAddress: string) {
  const since = new Date(Date.now() - loginWindowMs);
  const attemptCount = await countRecentFailedAttempts(identifier, ipAddress, since);
  return attemptCount >= maxFailedAttempts;
}

export async function recordLoginAttempt(identifier: string, ipAddress: string, success: boolean) {
  await saveLoginAttempt({
    identifier,
    ipAddress,
    success,
    createdAt: new Date().toISOString(),
  });
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function validateRequestOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  return getTrustedOrigins(request).has(origin);
}

export function getClientIp(request: Request) {
  const directIp = request.headers.get("x-real-ip")?.trim();
  if (directIp) return directIp;

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || "unknown";
}

function hashSessionToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function getSessionCookieOptions(expires: Date) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    expires,
    maxAge: sessionMaxAgeSeconds,
    priority: "high" as const,
  };
}

function getExpiredCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    expires: new Date(0),
    maxAge: 0,
    priority: "high" as const,
  };
}

async function validateServerActionOrigin() {
  const headerStore = await headers();
  const origin = headerStore.get("origin");
  if (!origin) return true;

  const trustedOrigins = getTrustedOrigins();
  const host = headerStore.get("host");

  if (process.env.NODE_ENV !== "production" && host) {
    trustedOrigins.add(`http://${host}`);
    trustedOrigins.add(`https://${host}`);
  }

  return trustedOrigins.has(origin);
}

function getTrustedOrigins(request?: Request) {
  const origins = new Set<string>();
  const configuredOrigins = process.env.ADMIN_ALLOWED_ORIGINS?.split(",") ?? [];

  configuredOrigins.forEach((origin) => {
    const cleanOrigin = origin.trim().replace(/\/+$/, "");
    if (cleanOrigin) origins.add(cleanOrigin);
  });

  origins.add(getSiteUrl());

  if (process.env.NODE_ENV !== "production" && request) {
    const requestUrl = new URL(request.url);
    origins.add(`${requestUrl.protocol}//${requestUrl.host}`);
  }

  return origins;
}
