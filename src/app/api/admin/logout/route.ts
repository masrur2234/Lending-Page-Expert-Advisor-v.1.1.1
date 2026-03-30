import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

// POST - Admin logout
export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (token) {
      // Delete session from database
      try {
        await db.setting.delete({
          where: { key: `session_${token}` },
        });
      } catch {
        // Session might not exist
      }
    }

    // Clear cookie
    cookieStore.delete("admin_token");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error logging out:", error);
    return NextResponse.json(
      { error: "Failed to logout" },
      { status: 500 }
    );
  }
}
