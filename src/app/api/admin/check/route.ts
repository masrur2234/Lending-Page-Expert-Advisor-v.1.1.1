import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

// GET - Check if admin is logged in
export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ isAdmin: false });
    }

    // Check session in database
    const session = await db.setting.findUnique({
      where: { key: `session_${token}` },
    });

    if (!session) {
      return NextResponse.json({ isAdmin: false });
    }

    // Get user
    const user = await db.user.findUnique({
      where: { id: session.value },
    });

    if (!user || user.role !== "admin") {
      return NextResponse.json({ isAdmin: false });
    }

    return NextResponse.json({
      isAdmin: true,
      user: { id: user.id, email: user.email, name: user.name }
    });
  } catch (error) {
    console.error("Error checking admin status:", error);
    return NextResponse.json({ isAdmin: false });
  }
}
