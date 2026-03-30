// Tutorial API Routes
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch all active tutorials
export async function GET() {
  try {
    const tutorials = await db.tutorial.findMany({
      where: { isActive: true },
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

// POST - Create a new tutorial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, type, content, thumbnail, order, isActive } = body;

    const tutorial = await db.tutorial.create({
      data: {
        title,
        description,
        type,
        content,
        thumbnail,
        order: order || 0,
        isActive: isActive ?? true,
      },
    });

    return NextResponse.json(tutorial, { status: 201 });
  } catch (error) {
    console.error("Error creating tutorial:", error);
    return NextResponse.json(
      { error: "Failed to create tutorial" },
      { status: 500 }
    );
  }
}
