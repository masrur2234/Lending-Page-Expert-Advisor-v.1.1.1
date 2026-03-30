import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // DEBUG - Lihat apa yang diterima
    console.log("=== DEBUG LOGIN ===");
    console.log("Raw body:", body);
    console.log("Type of body:", typeof body);
    
    const rawUser = body?.email ?? body?.username ?? "";
    const rawPass = body?.password ?? "";
    
    const username = String(rawUser).trim().toLowerCase();
    const password = String(rawPass).trim();

    // DEBUG - Lihat hasil parse
    console.log("Username:", JSON.stringify(username));
    console.log("Password:", JSON.stringify(password));
    console.log("Username len:", username.length);
    console.log("Password len:", password.length);
    console.log("User match:", username === "admin");
    console.log("Pass match:", password === "admin123");

    // Cek login
    if (username === "admin" && password === "admin123") {
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
      { 
        error: "Username atau password salah",
        debug: {
          receivedUsername: username,
          receivedPasswordLength: password.length,
          expectedPasswordLength: "admin123".length,
        }
      },
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
