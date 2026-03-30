import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch all products
export async function GET() {
  try {
    const products = await db.product.findMany({
      orderBy: { createdAt: "desc" },
      include: { category: true },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST - Create a new product (Google Drive Only)
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const type = formData.get("type") as string;
    const platform = formData.get("platform") as string;
    const strategy = formData.get("strategy") as string;
    const categoryId = formData.get("categoryId") as string;
    const isHot = formData.get("isHot") === "true";
    const isFree = formData.get("isFree") === "true";
    const googleDriveUrl = formData.get("googleDriveUrl") as string;
    const fileName = formData.get("fileName") as string;

    // Simpan ke database (Tanpa proses file lokal agar tidak error 500 di Vercel)
    const product = await db.product.create({
      data: {
        name,
        description,
        type,
        platform,
        strategy,
        categoryId: categoryId || null,
        isHot,
        isFree,
        googleDriveUrl,
        fileName: fileName || name,
        // Kita kosongkan fileUrl karena menggunakan Google Drive
        fileUrl: null, 
        imageUrl: null, 
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
