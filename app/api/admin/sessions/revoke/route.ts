import { NextResponse } from "next/server";
import { getAdminSession, revokeAllAdminSessions, validateRequestOrigin } from "@/helpers/admin/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!validateRequestOrigin(request)) {
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 403 });
  }

  const admin = await getAdminSession();
  if (!admin) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  await revokeAllAdminSessions();

  return NextResponse.json({ ok: true });
}
