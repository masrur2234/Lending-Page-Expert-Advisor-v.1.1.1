import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

// 🔐 GANTI SESUAI MAU LO
const ADMIN_USER = "masrur";
const ADMIN_EMAIL = "masrur@gmail.com";
const ADMIN_PASS = "bebas123";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Ambil username/email & password
    const username = String(body?.email ?? body?.username ?? "")
      .trim()
      .toLowerCase();

    const password = String(body?.password ?? "").trim();

    // 🔑 VALIDASI LOGIN
    const isValidUser =
      (username === ADMIN_USER || username === ADMIN_EMAIL) &&
      password === ADMIN_PASS;

    if (isValidUser) {
      // Generate token
      const token = crypto.randomBytes(32).toString("hex");

      // Set cookie login
      const cookieStore = await cookies();
      cookieStore.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 hari
        path: "/",
      });

      return NextResponse.json({
        success: true,
        message: "Login berhasil 🚀",
      });
    }

    // ❌ kalau salah
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
