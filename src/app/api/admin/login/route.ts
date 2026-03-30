import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import crypto from "crypto";

// Default admin credentials
const DEFAULT_ADMIN_USERNAME = "admin";
const DEFAULT_ADMIN_PASSWORD = "admin123";

// POST - Admin login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email: username, password } = body;

    // Simple credential check
    // Accept username "admin" with password "admin123"
    const isAdmin = 
      (username === DEFAULT_ADMIN_USERNAME && password === DEFAULT_ADMIN_PASSWORD) ||
      (username === "admin@eaplatform.com" && password === DEFAULT_ADMIN_PASSWORD);

    if (!isAdmin) {
      return NextResponse.json(
        { error: "Username atau password salah" },
        { status: 401 }
      );
    }

    // Check if admin user exists in database
    let user = await db.user.findFirst({
      where: {
        email: "admin@eaplatform.com",
        role: "admin",
      },
    });

    // Create admin user if not exists
    if (!user) {
      user = await db.user.create({
        data: {
          email: "admin@eaplatform.com",
          password: hashPassword(DEFAULT_ADMIN_PASSWORD),
          name: "Admin",
          role: "admin",
        },
      });
    }

    // Create session token
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: expiresAt,
    });

    // Store session in database (using Setting model)
    await db.setting.upsert({
      where: { key: `session_${token}` },
      update: { value: user.id },
      create: { key: `session_${token}`, value: user.id },
    });

    return NextResponse.json({ 
      success: true, 
      user: { id: user.id, email: user.email, name: user.name } 
    });
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat login" },
      { status: 500 }
    );
  }
}

// Simple password hashing
function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}
