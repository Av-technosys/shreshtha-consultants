import { NextResponse } from "next/server";
import {
  createAdminSession,
  getClientIp,
  isLoginRateLimited,
  normalizeEmail,
  recordLoginAttempt,
  validateRequestOrigin,
  verifyAdminCredentials,
} from "@/helpers/admin/auth";

export const runtime = "nodejs";

const maxBodyBytes = 4096;
const maxEmailLength = 254;
const maxPasswordLength = 1024;

export async function POST(request: Request) {
  if (!validateRequestOrigin(request)) {
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maxBodyBytes) {
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 413 });
  }

  const ipAddress = getClientIp(request);
  let email = "";
  let password = "";

  try {
    const rawBody = await request.text();
    if (rawBody.length > maxBodyBytes) {
      return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 413 });
    }

    const body = JSON.parse(rawBody);
    email = typeof body.email === "string" ? body.email : "";
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ message: "Invalid email or password." }, { status: 400 });
  }

  if (!email || !password || email.length > maxEmailLength || password.length > maxPasswordLength) {
    return NextResponse.json({ message: "Invalid email or password." }, { status: 400 });
  }

  const identifier = normalizeEmail(email) || "unknown";

  if (await isLoginRateLimited(identifier, ipAddress)) {
    return NextResponse.json({ message: "Too many attempts. Please try again later." }, { status: 429 });
  }

  try {
    const admin = await verifyAdminCredentials(email, password);

    if (!admin) {
      await recordLoginAttempt(identifier, ipAddress, false);
      return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
    }

    await createAdminSession(admin);
    await recordLoginAttempt(identifier, ipAddress, true);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
