// Tutorial Admin API Routes - Fetch all tutorials including inactive
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch all tutorials (including inactive for admin)
export async function GET() {
  try {
    const tutorials = await db.tutorial.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    return NextResponse.json(tutorials);
  } catch (error) {
    console.error("Error fetching tutorials:", error);
    return NextResponse.json(
      { error: "Failed to fetch tutorials" },
      { status: 500 }
    );
  }
}
