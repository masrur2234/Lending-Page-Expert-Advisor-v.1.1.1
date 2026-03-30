import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const products = await db.product.findMany({
      orderBy: { createdAt: "desc" },
      include: { category: true },
    });
    return NextResponse.json(products);
  } catch (error) {
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

    const product = await db.product.create({
      data: {
        name,
        description: (formData.get("description") as string) || "",
        type: (formData.get("type") as string) || "ea",
        platform: (formData.get("platform") as string) || "mt4",
        strategy: (formData.get("strategy") as string) || null,
        categoryId: (formData.get("categoryId") as string) || null,
        isHot: formData.get("isHot") === "true",
        isFree: formData.get("isFree") === "true",
        googleDriveUrl: googleDriveUrl,
        fileName: (formData.get("fileName") as string) || name,
        fileUrl: null,
        imageUrl: null,
      },
    });

    return NextResponse.json(product);
  } catch (error: any) {
    console.error("Database Error:", error);
    if (error.code === 'P2002') {
      return NextResponse.json({ error: "Link Google Drive ini sudah pernah digunakan!" }, { status: 400 });
    }
    return NextResponse.json({ error: "Gagal menyimpan ke database. Cek koneksi DB Anda." }, { status: 500 });
  }
}
