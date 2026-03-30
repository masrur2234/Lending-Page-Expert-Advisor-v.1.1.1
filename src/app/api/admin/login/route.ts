import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    console.log("🔥 LOGIN API TERPAKAI (BYPASS)");

    // Generate token random
    const token = crypto.randomBytes(32).toString("hex");

    // Set cookie login
    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 hari
    });

    // Response sukses
    return NextResponse.json({
      success: true,
      message: "Login berhasil 🚀 (BYPASS MODE)",
    });

  } catch (error) {
    console.error("❌ LOGIN ERROR:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
