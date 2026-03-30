import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch all categories
export async function GET() {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        order: "asc",
      },
    });

    // If no categories exist, create default ones
    if (categories.length === 0) {
      const defaultCategories = [
        { name: "Scalping EA", slug: "scalping", icon: "zap", description: "EA untuk strategi scalping cepat", order: 1 },
        { name: "Auto Trading", slug: "auto-trading", icon: "bot", description: "EA otomatis full autopilot", order: 2 },
        { name: "Indicator", slug: "indicator", icon: "bar-chart", description: "Indicator analisis teknikal", order: 3 },
        { name: "Tools Trading", slug: "tools", icon: "settings", description: "Utility dan tools pendukung", order: 4 },
      ];

      for (const cat of defaultCategories) {
        await db.category.create({
          data: cat,
        });
      }

      const newCategories = await db.category.findMany({
        orderBy: { order: "asc" },
      });

      return NextResponse.json(newCategories);
    }

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

// POST - Create a new category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, icon, description, order } = body;

    const category = await db.category.create({
      data: {
        name,
        slug: slug || name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        icon,
        description,
        order: order || 0,
      },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}
