import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import type { PDFFont, PDFPage, RGB } from "pdf-lib";
import { catalogProducts } from "@/data/catalog-products";
import { TRANSLATED_MUSCLE_GROUPS, TRANSLATED_SPECS } from "@/lib/constants";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 42;
const FOOTER_HEIGHT = 34;
const CONTENT_BOTTOM = FOOTER_HEIGHT + 20;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

function clean(value: string) {
  return value
    .normalize("NFC")
    .replace(/[–—−‑]/g, "-")
    .replace(/×/g, "x")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/…/g, "...")
    .replace(/[\u00a0\u202f]/g, " ")
    .replace(/[\u200b-\u200d\ufeff]/g, "")
    .replace(/[^\x20-\x7e\u00a0-\u00ff]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function splitLongWord(word: string, font: PDFFont, size: number, maxWidth: number) {
  const parts: string[] = [];
  let current = "";

  for (const character of word) {
    const candidate = `${current}${character}`;
    if (current && font.widthOfTextAtSize(candidate, size) > maxWidth) {
      parts.push(current);
      current = character;
    } else {
      current = candidate;
    }
  }

  if (current) parts.push(current);
  return parts;
}

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number) {
  const words = clean(text).split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";

  for (const originalWord of words) {
    const parts =
      font.widthOfTextAtSize(originalWord, size) > maxWidth
        ? splitLongWord(originalWord, font, size, maxWidth)
        : [originalWord];

    for (const word of parts) {
      const candidate = current ? `${current} ${word}` : word;
      if (current && font.widthOfTextAtSize(candidate, size) > maxWidth) {
        lines.push(current);
        current = word;
      } else {
        current = candidate;
      }
    }
  }

  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

function drawLines({
  page,
  lines,
  x,
  y,
  font,
  size,
  lineHeight,
  color,
}: {
  page: PDFPage;
  lines: string[];
  x: number;
  y: number;
  font: PDFFont;
  size: number;
  lineHeight: number;
  color: RGB;
}) {
  lines.forEach((line, index) => {
    page.drawText(line, {
      x,
      y: y - index * lineHeight,
      font,
      size,
      color,
    });
  });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) {
    return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
  }

  const [{ PDFDocument, StandardFonts, rgb }, sharpModule] = await Promise.all([
    import("pdf-lib"),
    import("sharp"),
  ]);
  const sharp = sharpModule.default;
  const pdf = await PDFDocument.create();
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const black = rgb(0.035, 0.035, 0.035);
  const gray = rgb(0.38, 0.38, 0.38);
  const border = rgb(0.82, 0.82, 0.8);
  const light = rgb(0.95, 0.95, 0.94);
  const white = rgb(1, 1, 1);

  pdf.setTitle(clean(`${product.modelCode} - ${product.name}`));
  pdf.setAuthor("Hammer Gold");
  pdf.setSubject("Ficha técnica de equipamento profissional");
  pdf.setCreator("Hammer Gold");

  let logo: Awaited<ReturnType<typeof pdf.embedPng>> | null = null;
  try {
    logo = await pdf.embedPng(
      await readFile(
        path.join(process.cwd(), "public", "assets", "logo-hammer-gold-transparente.png")
      )
    );
  } catch {
    logo = null;
  }

  let productImage: Awaited<ReturnType<typeof pdf.embedJpg>> | null = null;
  try {
    const productPath = path.join(
      process.cwd(),
      "public",
      product.image.replace(/^\//, "")
    );
    const jpegBytes = await sharp(await readFile(productPath), { page: 0 })
      .rotate()
      .resize({
        width: 1000,
        height: 1000,
        fit: "contain",
        withoutEnlargement: true,
        background: "#f4f4f1",
      })
      .flatten({ background: "#f4f4f1" })
      .jpeg({ quality: 88 })
      .toBuffer();
    productImage = await pdf.embedJpg(jpegBytes);
  } catch {
    productImage = null;
  }

  let page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - 146;

  const drawFirstHeader = () => {
    page.drawRectangle({
      x: 0,
      y: PAGE_HEIGHT - 122,
      width: PAGE_WIDTH,
      height: 122,
      color: black,
    });

    if (logo) {
      const scaled = logo.scaleToFit(86, 86);
      page.drawImage(logo, {
        x: MARGIN,
        y: PAGE_HEIGHT - 105,
        width: scaled.width,
        height: scaled.height,
      });
    } else {
      page.drawText("HAMMER GOLD", {
        x: MARGIN,
        y: PAGE_HEIGHT - 72,
        size: 18,
        font: bold,
        color: white,
      });
    }

    page.drawText("FICHA TECNICA", {
      x: PAGE_WIDTH - MARGIN - 112,
      y: PAGE_HEIGHT - 54,
      size: 9,
      font: bold,
      color: rgb(0.7, 0.7, 0.7),
    });
    page.drawText(clean(product.modelCode), {
      x: PAGE_WIDTH - MARGIN - 112,
      y: PAGE_HEIGHT - 79,
      size: 16,
      font: bold,
      color: white,
    });
  };

  const addContinuationPage = (continuationTitle?: string) => {
    page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    page.drawRectangle({
      x: 0,
      y: PAGE_HEIGHT - 56,
      width: PAGE_WIDTH,
      height: 56,
      color: black,
    });
    page.drawText("HAMMER GOLD", {
      x: MARGIN,
      y: PAGE_HEIGHT - 35,
      size: 10,
      font: bold,
      color: white,
    });
    page.drawText(clean(product.modelCode), {
      x: PAGE_WIDTH - MARGIN - 72,
      y: PAGE_HEIGHT - 35,
      size: 10,
      font: bold,
      color: white,
    });
    y = PAGE_HEIGHT - 84;

    if (continuationTitle) {
      const continuationLines = wrapText(
        `${continuationTitle} - continuacao`,
        bold,
        9,
        CONTENT_WIDTH
      );
      drawLines({
        page,
        lines: continuationLines,
        x: MARGIN,
        y,
        font: bold,
        size: 9,
        lineHeight: 12,
        color: gray,
      });
      y -= continuationLines.length * 12 + 12;
    }
  };

  const ensureSpace = (requiredHeight: number, continuationTitle?: string) => {
    if (y - requiredHeight < CONTENT_BOTTOM) {
      addContinuationPage(continuationTitle);
      return true;
    }
    return false;
  };

  const drawSectionHeading = (title: string) => {
    ensureSpace(42);
    page.drawText(clean(title).toUpperCase(), {
      x: MARGIN,
      y,
      size: 9,
      font: bold,
      color: black,
    });
    y -= 16;
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: PAGE_WIDTH - MARGIN, y },
      thickness: 0.7,
      color: border,
    });
    y -= 18;
  };

  drawFirstHeader();

  const heroTop = y;
  const imageSize = 226;
  const imageX = MARGIN;
  const imageY = heroTop - imageSize;
  const textX = MARGIN + imageSize + 28;
  const textWidth = PAGE_WIDTH - MARGIN - textX;

  page.drawRectangle({
    x: imageX,
    y: imageY,
    width: imageSize,
    height: imageSize,
    color: light,
  });

  if (productImage) {
    const scaled = productImage.scaleToFit(imageSize - 20, imageSize - 20);
    page.drawImage(productImage, {
      x: imageX + (imageSize - scaled.width) / 2,
      y: imageY + (imageSize - scaled.height) / 2,
      width: scaled.width,
      height: scaled.height,
    });
  } else {
    page.drawText("IMAGEM INDISPONIVEL", {
      x: imageX + 42,
      y: imageY + imageSize / 2,
      size: 8,
      font: bold,
      color: gray,
    });
  }

  page.drawText(clean(product.category).toUpperCase(), {
    x: textX,
    y: heroTop - 4,
    size: 8,
    font: bold,
    color: gray,
  });

  const titleLines = wrapText(product.name, bold, 18, textWidth);
  const titleStartY = heroTop - 31;
  drawLines({
    page,
    lines: titleLines,
    x: textX,
    y: titleStartY,
    font: bold,
    size: 18,
    lineHeight: 21,
    color: black,
  });

  const descriptionLines = wrapText(product.description, regular, 9, textWidth);
  const descriptionStartY = titleStartY - titleLines.length * 21 - 13;
  drawLines({
    page,
    lines: descriptionLines,
    x: textX,
    y: descriptionStartY,
    font: regular,
    size: 9,
    lineHeight: 13,
    color: gray,
  });

  const textHeight =
    31 + titleLines.length * 21 + 13 + descriptionLines.length * 13;
  const heroHeight = Math.max(imageSize, textHeight);
  y = heroTop - heroHeight - 28;

  drawSectionHeading("Informacoes do produto");
  const information = [
    ["Serie", product.series],
    ["Categoria", product.category],
    ["Tipo de carga", product.loadType],
    ["Configuracao", product.equipmentType],
    [
      "Grupos musculares",
      product.muscleGroups
        .map((group) => TRANSLATED_MUSCLE_GROUPS[group] ?? group)
        .join(", "),
    ],
    ["Segmentos", product.recommendedSegments.join(", ")],
  ];

  for (const [label, value] of information) {
    const valueLines = wrapText(value, bold, 9, CONTENT_WIDTH - 150);
    const rowHeight = Math.max(32, valueLines.length * 12 + 14);
    ensureSpace(rowHeight);
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: PAGE_WIDTH - MARGIN, y },
      thickness: 0.45,
      color: border,
    });
    page.drawText(clean(label).toUpperCase(), {
      x: MARGIN,
      y: y - 20,
      size: 7,
      font: bold,
      color: gray,
    });
    drawLines({
      page,
      lines: valueLines,
      x: MARGIN + 150,
      y: y - 19,
      font: bold,
      size: 9,
      lineHeight: 12,
      color: black,
    });
    y -= rowHeight;
  }
  y -= 14;

  if (product.specifications?.length) {
    drawSectionHeading("Especificacoes");
    const gap = 10;
    const cellWidth = (CONTENT_WIDTH - gap) / 2;

    for (let index = 0; index < product.specifications.length; index += 2) {
      const pair = product.specifications.slice(index, index + 2).map((specification) => {
        const label = TRANSLATED_SPECS[specification.label] ?? specification.label;
        const labelLines = wrapText(label.toUpperCase(), bold, 7, cellWidth - 24);
        const valueLines = wrapText(specification.value, bold, 10, cellWidth - 24);
        const height = 18 + labelLines.length * 10 + valueLines.length * 13 + 16;
        return { labelLines, valueLines, height };
      });

      const rowHeight = Math.max(...pair.map((item) => item.height), 58);
      ensureSpace(rowHeight + 10);

      pair.forEach((item, columnIndex) => {
        const x = MARGIN + columnIndex * (cellWidth + gap);
        page.drawRectangle({
          x,
          y: y - rowHeight,
          width: cellWidth,
          height: rowHeight,
          color: light,
          borderColor: border,
          borderWidth: 0.5,
        });
        drawLines({
          page,
          lines: item.labelLines,
          x: x + 12,
          y: y - 16,
          font: bold,
          size: 7,
          lineHeight: 10,
          color: gray,
        });
        drawLines({
          page,
          lines: item.valueLines,
          x: x + 12,
          y: y - 18 - item.labelLines.length * 10 - 6,
          font: bold,
          size: 10,
          lineHeight: 13,
          color: black,
        });
      });

      y -= rowHeight + 10;
    }
    y -= 8;
  }

  if (product.detailSections?.length) {
    const detailLayouts = product.detailSections.map((section) => {
      const titleLines = wrapText(section.title, bold, 14, CONTENT_WIDTH - 34);
      const headerHeight = titleLines.length * 17 + 26;
      const bullets = section.bullets.map((bullet) => {
        const lines = wrapText(`- ${bullet}`, regular, 9, CONTENT_WIDTH - 16);
        return { lines, height: lines.length * 13 + 8 };
      });

      return {
        titleLines,
        headerHeight,
        bullets,
        totalHeight:
          headerHeight + bullets.reduce((total, bullet) => total + bullet.height, 0) + 16,
      };
    });
    const availableOnContinuationPage =
      PAGE_HEIGHT - 84 - CONTENT_BOTTOM;
    const sectionHeadingHeight = 34;
    const keepSectionBottom = CONTENT_BOTTOM + 48;

    if (
      y < 320 ||
      (detailLayouts[0].totalHeight + sectionHeadingHeight <=
        availableOnContinuationPage &&
        y - detailLayouts[0].totalHeight - sectionHeadingHeight < keepSectionBottom)
    ) {
      addContinuationPage();
    }

    drawSectionHeading("Detalhes do equipamento");

    for (let sectionIndex = 0; sectionIndex < product.detailSections.length; sectionIndex += 1) {
      const section = product.detailSections[sectionIndex];
      const layout = detailLayouts[sectionIndex];

      if (
        layout.totalHeight <= availableOnContinuationPage &&
        y - layout.totalHeight < keepSectionBottom
      ) {
        addContinuationPage();
      } else {
        ensureSpace(layout.headerHeight + 24);
      }

      page.drawText(String(sectionIndex + 1).padStart(2, "0"), {
        x: MARGIN,
        y,
        size: 8,
        font: bold,
        color: gray,
      });
      drawLines({
        page,
        lines: layout.titleLines,
        x: MARGIN + 34,
        y: y + 1,
        font: bold,
        size: 14,
        lineHeight: 17,
        color: black,
      });
      y -= layout.headerHeight;

      for (const bullet of layout.bullets) {
        ensureSpace(bullet.height, section.title);
        drawLines({
          page,
          lines: bullet.lines,
          x: MARGIN + 16,
          y,
          font: regular,
          size: 9,
          lineHeight: 13,
          color: gray,
        });
        y -= bullet.height;
      }

      y -= 16;
    }
  }

  const pages = pdf.getPages();
  pages.forEach((currentPage, index) => {
    currentPage.drawRectangle({
      x: 0,
      y: 0,
      width: PAGE_WIDTH,
      height: FOOTER_HEIGHT,
      color: black,
    });
    currentPage.drawText(
      "HAMMER GOLD  |  Equipamentos profissionais para academias",
      {
        x: MARGIN,
        y: 13,
        size: 7,
        font: regular,
        color: rgb(0.72, 0.72, 0.72),
      }
    );
    currentPage.drawText(`${index + 1} / ${pages.length}`, {
      x: PAGE_WIDTH - MARGIN - 24,
      y: 13,
      size: 7,
      font: bold,
      color: rgb(0.72, 0.72, 0.72),
    });
  });

  const bytes = await pdf.save();
  const body = bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength
  ) as ArrayBuffer;
  const filename = `${product.modelCode}-${product.name}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");

  return new Response(body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}.pdf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
