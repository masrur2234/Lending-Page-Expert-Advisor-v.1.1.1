import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch all active testimonials
export async function GET() {
  try {
    const testimonials = await db.testimonial.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // If no testimonials exist, create default ones
    if (testimonials.length === 0) {
      const defaultTestimonials = [
        {
          name: "Rizky Trader",
          comment: "EA nya work bro! Profit konsisten tiap bulan 🔥",
          rating: 5,
          isActive: true,
        },
        {
          name: "Andi Forex",
          comment: "Gratis tapi kualitas premium, recommended banget!",
          rating: 5,
          isActive: true,
        },
        {
          name: "Dewi Invest",
          comment: "Auto cuan! Gak perlu ribet analisa manual lagi",
          rating: 5,
          isActive: true,
        },
        {
          name: "Budi Pro",
          comment: "Platform terbaik untuk cari EA gratis. No ribet!",
          rating: 5,
          isActive: true,
        },
      ];

      for (const t of defaultTestimonials) {
        await db.testimonial.create({
          data: t,
        });
      }

      const newTestimonials = await db.testimonial.findMany({
        where: { isActive: true },
        orderBy: { createdAt: "desc" },
      });

      return NextResponse.json(newTestimonials);
    }

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

// POST - Create a new testimonial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, avatar, comment, rating } = body;

    const testimonial = await db.testimonial.create({
      data: {
        name,
        avatar,
        comment,
        rating: rating || 5,
        isActive: true,
      },
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}
