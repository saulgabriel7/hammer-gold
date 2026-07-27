import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { catalogProducts } from "@/data/catalog-products";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) {
    return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
  }

  try {
    const sharp = (await import("sharp")).default;
    const imagePath = path.join(
      process.cwd(),
      "public",
      product.image.replace(/^\//, "")
    );
    const source = await readFile(imagePath);
    const image = await sharp(source, { page: 0 })
      .rotate()
      .flatten({ background: "#f4f4f1" })
      .trim({ threshold: 8 })
      .resize({
        width: 1136,
        height: 1136,
        fit: "contain",
        background: "#f4f4f1",
      })
      .extend({
        top: 32,
        right: 32,
        bottom: 32,
        left: 32,
        background: "#f4f4f1",
      })
      .webp({ quality: 88, effort: 4 })
      .toBuffer();

    const body = image.buffer.slice(
      image.byteOffset,
      image.byteOffset + image.byteLength
    ) as ArrayBuffer;

    return new Response(body, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    const safeModel = product.modelCode.replace(/[<>&"']/g, "");
    const placeholder = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200"><rect width="1200" height="1200" fill="#f4f4f1"/><rect x="32" y="32" width="1136" height="1136" rx="28" fill="none" stroke="#ddddda" stroke-width="2"/><text x="600" y="575" fill="#111111" font-family="Arial, sans-serif" font-size="42" font-weight="700" text-anchor="middle">HAMMER GOLD</text><text x="600" y="635" fill="#686868" font-family="Arial, sans-serif" font-size="28" text-anchor="middle">${safeModel}</text><text x="600" y="690" fill="#686868" font-family="Arial, sans-serif" font-size="20" text-anchor="middle">Imagem em atualização</text></svg>`;
    return new Response(placeholder, {
      headers: {
        "Content-Type": "image/svg+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }
}
