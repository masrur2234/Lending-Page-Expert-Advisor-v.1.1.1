import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch single broker
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const broker = await db.broker.findUnique({
      where: { id },
    });

    if (!broker) {
      return NextResponse.json({ error: "Broker not found" }, { status: 404 });
    }

    return NextResponse.json(broker);
  } catch (error) {
    console.error("Error fetching broker:", error);
    return NextResponse.json(
      { error: "Failed to fetch broker" },
      { status: 500 }
    );
  }
}

// PUT - Update a broker
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, description, link, logoUrl, features, bonus, rating, isRecommended, order } = body;

    const broker = await db.broker.update({
      where: { id },
      data: {
        name,
        description,
        link,
        logoUrl,
        features: features ? JSON.stringify(features) : null,
        bonus,
        rating,
        isRecommended,
        order,
      },
    });

    return NextResponse.json(broker);
  } catch (error) {
    console.error("Error updating broker:", error);
    return NextResponse.json(
      { error: "Failed to update broker" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a broker
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await db.broker.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting broker:", error);
    return NextResponse.json(
      { error: "Failed to delete broker" },
      { status: 500 }
    );
  }
}
