import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { catalogProducts } from "@/data/catalog-products";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function cleanOpaqueBackground(
  pixels: Uint8Array,
  width: number,
  height: number
): void {
  const corners = [
    0,
    (width - 1) * 4,
    (height - 1) * width * 4,
    ((height - 1) * width + (width - 1)) * 4,
  ];

  let totalR = 0,
    totalG = 0,
    totalB = 0;
  for (const c of corners) {
    totalR += pixels[c];
    totalG += pixels[c + 1];
    totalB += pixels[c + 2];
  }
  const bgR = Math.round(totalR / 4);
  const bgG = Math.round(totalG / 4);
  const bgB = Math.round(totalB / 4);

  const isUniformBackground = corners.every((c) => {
    const dr = Math.abs(pixels[c] - bgR);
    const dg = Math.abs(pixels[c + 1] - bgG);
    const db = Math.abs(pixels[c + 2] - bgB);
    return dr + dg + db < 35;
  });

  if (!isUniformBackground) return;

  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let tail = 0;

  const startIndices = [
    0,
    width - 1,
    (height - 1) * width,
    (height - 1) * width + (width - 1),
  ];

  for (const idx of startIndices) {
    if (!visited[idx]) {
      visited[idx] = 1;
      queue[tail++] = idx;
    }
  }

  let head = 0;
  const tolerance = 45;

  while (head < tail) {
    const idx = queue[head++];
    const px = idx % width;
    const py = (idx / width) | 0;
    const pOff = idx * 4;

    const r = pixels[pOff];
    const g = pixels[pOff + 1];
    const b = pixels[pOff + 2];

    const dist = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
    if (dist <= tolerance) {
      pixels[pOff + 3] = 0;

      if (px > 0 && !visited[idx - 1]) {
        visited[idx - 1] = 1;
        queue[tail++] = idx - 1;
      }
      if (px < width - 1 && !visited[idx + 1]) {
        visited[idx + 1] = 1;
        queue[tail++] = idx + 1;
      }
      if (py > 0 && !visited[idx - width]) {
        visited[idx - width] = 1;
        queue[tail++] = idx - width;
      }
      if (py < height - 1 && !visited[idx + width]) {
        visited[idx + width] = 1;
        queue[tail++] = idx + width;
      }
    }
  }
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) {
    return NextResponse.json(
      { error: "Produto não encontrado" },
      { status: 404 }
    );
  }

  try {
    const sharp = (await import("sharp")).default;
    const imagePath = path.join(
      process.cwd(),
      "public",
      product.image.replace(/^\//, "")
    );
    const source = await readFile(imagePath);

    const rawImg = await sharp(source, { page: 0 })
      .rotate()
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    cleanOpaqueBackground(rawImg.data, rawImg.info.width, rawImg.info.height);

    const image = await sharp(rawImg.data, {
      raw: {
        width: rawImg.info.width,
        height: rawImg.info.height,
        channels: 4,
      },
    })
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
