import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// Helper function to extract Google Drive file ID from URL
function extractGoogleDriveId(url: string): string | null {
  // Handle various Google Drive URL formats:
  // https://drive.google.com/file/d/FILE_ID/view
  // https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // https://drive.google.com/open?id=FILE_ID
  // https://drive.google.com/uc?id=FILE_ID
  // https://drive.google.com/uc?export=download&id=FILE_ID
  
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/open\?id=([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

// GET - Fetch all products
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const type = searchParams.get("type");
    const search = searchParams.get("search");
    const limit = searchParams.get("limit");

    let whereClause: any = {};

    if (category && category !== "all") {
      whereClause.category = { slug: category };
    }

    if (type && type !== "all") {
      whereClause.type = type;
    }

    if (search) {
      whereClause.OR = [
        { name: { contains: search } },
        { description: { contains: search } },
      ];
    }

    const products = await db.product.findMany({
      where: whereClause,
      include: {
        category: true,
      },
      orderBy: [
        { isHot: "desc" },
        { downloads: "desc" },
        { createdAt: "desc" },
      ],
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST - Create a new product
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
    const file = formData.get("file") as File | null;
    const image = formData.get("image") as File | null;
    const googleDriveUrl = formData.get("googleDriveUrl") as string | null;
    const fileNameOverride = formData.get("fileName") as string | null;

    if (!name || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Must have either file upload or Google Drive URL
    if (!file && !googleDriveUrl) {
      return NextResponse.json(
        { error: "Either file upload or Google Drive URL is required" },
        { status: 400 }
      );
    }

    let fileUrl: string | null = null;
    let fileName: string | null = null;
    let fileSize: number | null = null;
    let googleDriveId: string | null = null;

    // Handle Google Drive URL
    if (googleDriveUrl && !file) {
      googleDriveId = extractGoogleDriveId(googleDriveUrl);
      if (!googleDriveId) {
        return NextResponse.json(
          { error: "Invalid Google Drive URL. Please use a valid share link." },
          { status: 400 }
        );
      }
      fileName = fileNameOverride || "EA File";
    }

    // Handle file upload (local storage)
    if (file && file.size > 0) {
      // Create uploads directory if it doesn't exist
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      const filesDir = path.join(uploadsDir, "files");

      await mkdir(filesDir, { recursive: true });

      // Save file
      const fileExtension = file.name.split(".").pop();
      const savedFileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExtension}`;
      const filePath = path.join(filesDir, savedFileName);
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      await writeFile(filePath, fileBuffer);

      fileUrl = `/uploads/files/${savedFileName}`;
      fileName = file.name;
      fileSize = file.size;
    }

    // Save image if provided
    let imageUrl: string | null = null;
    if (image && image.size > 0) {
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      const imagesDir = path.join(uploadsDir, "images");

      await mkdir(imagesDir, { recursive: true });

      const imageExtension = image.name.split(".").pop();
      const imageName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${imageExtension}`;
      const imagePath = path.join(imagesDir, imageName);
      const imageBuffer = Buffer.from(await image.arrayBuffer());
      await writeFile(imagePath, imageBuffer);
      imageUrl = `/uploads/images/${imageName}`;
    }

    // Generate slug
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Create product
    const product = await db.product.create({
      data: {
        name,
        slug,
        description,
        type,
        platform,
        strategy: strategy || null,
        categoryId: categoryId || null,
        isHot,
        isFree,
        fileUrl,
        fileName,
        fileSize,
        googleDriveUrl: googleDriveUrl || null,
        googleDriveId,
        imageUrl,
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
