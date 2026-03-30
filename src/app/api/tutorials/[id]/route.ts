import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch single tutorial
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const tutorial = await db.tutorial.findUnique({
      where: { id },
    });

    if (!tutorial) {
      return NextResponse.json({ error: "Tutorial not found" }, { status: 404 });
    }

    return NextResponse.json(tutorial);
  } catch (error) {
    console.error("Error fetching tutorial:", error);
    return NextResponse.json(
      { error: "Failed to fetch tutorial" },
      { status: 500 }
    );
  }
}

// PUT - Update a tutorial
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, description, type, content, thumbnail, order, isActive } = body;

    const tutorial = await db.tutorial.update({
      where: { id },
      data: {
        title,
        description,
        type,
        content,
        thumbnail,
        order,
        isActive,
      },
    });

    return NextResponse.json(tutorial);
  } catch (error) {
    console.error("Error updating tutorial:", error);
    return NextResponse.json(
      { error: "Failed to update tutorial" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a tutorial
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await db.tutorial.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting tutorial:", error);
    return NextResponse.json(
      { error: "Failed to delete tutorial" },
      { status: 500 }
    );
  }
}
