import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Track broker click and redirect
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Get broker
    const broker = await db.broker.findUnique({
      where: { id },
    });

    if (!broker) {
      return NextResponse.json({ error: "Broker not found" }, { status: 404 });
    }

    // Increment click count
    await db.broker.update({
      where: { id },
      data: { clicks: { increment: 1 } },
    });

    // Return the link for client-side redirect
    return NextResponse.json({ link: broker.link });
  } catch (error) {
    console.error("Error tracking broker click:", error);
    return NextResponse.json(
      { error: "Failed to track click" },
      { status: 500 }
    );
  }
}
