import { NextResponse } from "next/server";
import { destroyAdminSession, validateRequestOrigin } from "@/helpers/admin/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!validateRequestOrigin(request)) {
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 403 });
  }

  await destroyAdminSession();

  return NextResponse.redirect(new URL("/admin/login", request.url), { status: 303 });
}

