import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// POST - Rate a product
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { rating } = body;

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Invalid rating. Must be between 1 and 5" },
        { status: 400 }
      );
    }

    const product = await db.product.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Calculate new average rating
    const newRatingCount = product.ratingCount + 1;
    const newRating =
      (product.rating * product.ratingCount + rating) / newRatingCount;

    const updatedProduct = await db.product.update({
      where: { id },
      data: {
        rating: newRating,
        ratingCount: newRatingCount,
      },
    });

    return NextResponse.json({
      success: true,
      rating: updatedProduct.rating,
      ratingCount: updatedProduct.ratingCount,
    });
  } catch (error) {
    console.error("Error rating product:", error);
    return NextResponse.json(
      { error: "Failed to rate product" },
      { status: 500 }
    );
  }
}
