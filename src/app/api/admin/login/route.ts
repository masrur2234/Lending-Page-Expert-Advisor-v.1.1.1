import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    // 🔥 BYPASS LOGIN (SEMUA USER BISA MASUK)
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
      message: "Login berhasil (bypass mode) 🚀",
