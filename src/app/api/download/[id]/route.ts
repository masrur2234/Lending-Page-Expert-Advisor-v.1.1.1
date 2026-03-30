import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { readFile } from "fs/promises";
import path from "path";

// GET - Download a product file
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const product = await db.product.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Increment download count
    await db.product.update({
      where: { id },
      data: { downloads: { increment: 1 } },
    });

    // Handle Google Drive download
    if (product.googleDriveId) {
      // Redirect to Google Drive direct download
      // Using the uc?export=download format for direct download
      const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${product.googleDriveId}`;
      
      // Return a redirect response
      return NextResponse.redirect(directDownloadUrl);
    }

    // Handle local file download
    if (product.fileUrl) {
      const filePath = path.join(process.cwd(), "public", product.fileUrl);
      const fileBuffer = await readFile(filePath);

      // Return file with proper headers
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": `attachment; filename="${product.fileName || "download"}"`,
          "Content-Length": String(fileBuffer.length),
        },
      });
    }

    return NextResponse.json(
      { error: "No file available for download" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error downloading file:", error);
    return NextResponse.json(
      { error: "Failed to download file" },
      { status: 500 }
    );
  }
}
