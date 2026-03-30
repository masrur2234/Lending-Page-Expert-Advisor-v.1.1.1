import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function POST() {
  try {
    console.log("🔥 LOGIN API FINAL TERPAKAI");

    const token = crypto.randomBytes(32).toString("hex");

    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return NextResponse.json({
      success: true,
      message: "LOGIN BERHASIL 🚀",
    });

  } catch (err) {
    console.error("❌ ERROR LOGIN:", err);

    return NextResponse.json(
      { error: "SERVER ERROR" },
      { status: 500 }
    );
  }
}
