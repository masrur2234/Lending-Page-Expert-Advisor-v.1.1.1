import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const username = String(body?.email ?? body?.username ?? "").trim().toLowerCase();
    const password = String(body?.password ?? "").trim();

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      const token = crypto.randomBytes(32).toString("hex");

      const cookieStore = await cookies();
      cookieStore.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        path: "/",
      });

      return NextResponse.json({
        success: true,
        message: "Login berhasil",
      });
    }

    return NextResponse.json(
      { error: "Username atau password salah" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
