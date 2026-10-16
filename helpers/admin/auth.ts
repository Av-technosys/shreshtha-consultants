import "server-only";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { getSiteUrl } from "@/helpers/site-url";
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

const defaultAdminEmail = "contact@shreshthaconsultants.com";
const defaultPasswordHash = "$argon2id$v=19$m=65536,t=3,p=1$oMBGpwFp5SR8iViJyuV6fg==$/MDMAoanLrxjXtrZpUHkBjPldZcH+8wP5QAgftoQkIY=";

const failedAttempts = new Map<string, number[]>();

function getSessionSecret(): string {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD_HASH || "shreshtha-consultants-secure-token-2026";
}

function signSession(email: string, expiresAt: Date): string {
  const payload = JSON.stringify({
    email,
    exp: expiresAt.getTime(),
    nonce: randomBytes(16).toString("hex"),
  });
  const encodedPayload = Buffer.from(payload).toString("base64url");
  const signature = createHmac("sha256", getSessionSecret()).update(encodedPayload).digest("base64url");
  return `${encodedPayload}.${signature}`;
}

function verifySessionToken(token: string): AdminIdentity | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return null;
    const [encodedPayload, signature] = parts;
    if (!encodedPayload || !signature) return null;

    const expectedSignature = createHmac("sha256", getSessionSecret()).update(encodedPayload).digest("base64url");
    if (
      signature.length !== expectedSignature.length ||
      !timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))
    ) {
      return null;
    }

    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf-8"));
    if (!payload.email || typeof payload.exp !== "number") return null;

    if (Date.now() > payload.exp) {
      return null;
    }

    return { email: payload.email };
  } catch {
    return null;
  }
}

export function getAdminConfig() {
  const email = normalizeEmail(process.env.ADMIN_EMAIL || defaultAdminEmail);
  const passwordHash = process.env.ADMIN_PASSWORD_HASH || defaultPasswordHash;

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
  const expiresAt = new Date(Date.now() + sessionMaxAgeSeconds * 1000);
  const token = signSession(admin.email, expiresAt);

  const cookieStore = await cookies();
  cookieStore.set(cookieName, token, getSessionCookieOptions(expiresAt));

  return { expiresAt };
}

export async function getAdminSession(): Promise<AdminIdentity | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName)?.value;
  if (!token) return null;

  return verifySessionToken(token);
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
  cookieStore.set(cookieName, "", getExpiredCookieOptions());
}

export async function revokeAllAdminSessions() {
  // Stateless tokens self-expire and verify by cryptographic signature
}

export async function pruneExpiredAdminSessions() {
  // Stateless tokens self-expire
}

export async function isLoginRateLimited(identifier: string, ipAddress: string) {
  const key = `${identifier}:${ipAddress}`;
  const now = Date.now();
  const attempts = (failedAttempts.get(key) || []).filter((t) => now - t < loginWindowMs);
  failedAttempts.set(key, attempts);
  return attempts.length >= maxFailedAttempts;
}

export async function recordLoginAttempt(identifier: string, ipAddress: string, success: boolean) {
  const key = `${identifier}:${ipAddress}`;
  if (success) {
    failedAttempts.delete(key);
  } else {
    const attempts = (failedAttempts.get(key) || []).filter((t) => Date.now() - t < loginWindowMs);
    attempts.push(Date.now());
    failedAttempts.set(key, attempts);
  }
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function validateRequestOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const trusted = getTrustedOrigins(request);
  if (trusted.has(origin)) return true;

  try {
    const originUrl = new URL(origin);
    const hostHeader = request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
    const host = hostHeader.split(":")[0];

    // Same host
    if (originUrl.hostname === host) return true;

    // Allow vercel preview / production domains
    if (originUrl.hostname.endsWith(".vercel.app")) {
      return true;
    }

    // Allow localhost in dev
    if (originUrl.hostname === "localhost" || originUrl.hostname === "127.0.0.1") {
      return true;
    }
  } catch {}

  return false;
}

export function getClientIp(request: Request) {
  const directIp = request.headers.get("x-real-ip")?.trim();
  if (directIp) return directIp;

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || "unknown";
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

  if (host) {
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

  if (process.env.VERCEL_URL) {
    origins.add(`https://${process.env.VERCEL_URL}`);
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    origins.add(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  if (request) {
    const requestUrl = new URL(request.url);
    origins.add(`${requestUrl.protocol}//${requestUrl.host}`);
    const forwardedHost = request.headers.get("x-forwarded-host");
    const forwardedProto = request.headers.get("x-forwarded-proto") || "https";
    if (forwardedHost) {
      origins.add(`${forwardedProto}://${forwardedHost}`);
    }
  }

  return origins;
}
