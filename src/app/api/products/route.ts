import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// Helper function to extract Google Drive file ID from URL
function extractGoogleDriveId(url: string): string | null {
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

// Helper function to generate unique slug
async function generateUniqueSlug(name: string): Promise<string> {
  const baseSlug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const existing = await db.product.findUnique({
      where: { slug },
    });
    
    if (!existing) break;
    
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}

export async function GET() {
  try {
    const products = await db.product.findMany({
      orderBy: [
        { isHot: "desc" },
        { downloads: "desc" },
        { createdAt: "desc" },
      ],
      include: { category: true },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const googleDriveUrl = formData.get("googleDriveUrl") as string;

    if (!name || !googleDriveUrl) {
      return NextResponse.json({ error: "Nama dan Link Google Drive wajib diisi!" }, { status: 400 });
    }

    const slug = await generateUniqueSlug(name);
    const googleDriveId = extractGoogleDriveId(googleDriveUrl);

    const product = await db.product.create({
      data: {
        name,
        slug,
        description: (formData.get("description") as string) || "",
        type: (formData.get("type") as string) || "ea",
        platform: (formData.get("platform") as string) || "mt4",
        strategy: (formData.get("strategy") as string) || null,
        categoryId: (formData.get("categoryId") as string) || null,
        isHot: formData.get("isHot") === "true",
        isFree: formData.get("isFree") === "true",
        googleDriveUrl: googleDriveUrl,
        googleDriveId: googleDriveId,
        fileName: (formData.get("fileName") as string) || name,
        fileUrl: null,
        imageUrl: null,
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    console.error("Database Error:", error);
    if (error.code === 'P2002') {
      return NextResponse.json({ error: "Link Google Drive ini sudah pernah digunakan!" }, { status: 400 });
    }
    return NextResponse.json({ error: "Gagal menyimpan ke database. Cek koneksi DB Anda." }, { status: 500 });
  }
}
