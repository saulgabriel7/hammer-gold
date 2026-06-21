import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { getRelatedProducts } from "@/lib/product-utils";

// ── Types ────────────────────────────────────────────────────────
interface Props {
  params: { slug: string };
}

// ── Static Generation ────────────────────────────────────────────
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.modelCode} | Hammer Gold`,
    description: product.description,
  };
}

// ── Page Component ───────────────────────────────────────────────
export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <div className="border-b border-border bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <nav aria-label="Breadcrumb" className="text-xs text-muted">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link
                  href="/strength-equipment"
                  className="transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#D1D5DB]">/</li>
              <li>
                <Link
                  href="/strength-equipment#products"
                  className="transition-colors hover:text-primary"
                >
                  Strength Equipment
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#D1D5DB]">/</li>
              <li>
                <span className="transition-colors hover:text-primary">
                  {product.series}
                </span>
              </li>
              <li aria-hidden="true" className="text-[#D1D5DB]">/</li>
              <li className="font-medium text-text">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ── Title (mobile only) ───────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-8 md:hidden">
        <h1 className="text-2xl font-black uppercase tracking-tight text-text">
          {product.name}
          <span className="ml-2 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
        </h1>
      </div>

      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-14">
        {/* Desktop title */}
        <h1 className="mb-10 hidden text-4xl font-black uppercase tracking-tight text-text md:block lg:text-5xl">
          {product.name}
          <span className="ml-3 inline-block h-3 w-3 rounded-full bg-primary" />
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {/* ── Image Gallery ────────────────────────────────── */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-[#F9FAFB]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Thumbnail strip (show if gallery images exist) */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded border-2 border-primary bg-[#F9FAFB]">
                  <Image
                    src={product.image}
                    alt={`${product.name} - main`}
                    width={80}
                    height={80}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                {product.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="h-20 w-20 shrink-0 overflow-hidden rounded border border-border bg-[#F9FAFB] transition-colors hover:border-primary"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - view ${i + 2}`}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Decorative red accent bar (matches reference) */}
            <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
          </div>

          {/* ── Product Info Panel ────────────────────────────── */}
          <div>
            <p className="mb-1 text-sm font-medium tracking-wider text-muted">
              {product.modelCode}
            </p>
            <p className="mb-6 text-xl font-bold text-primary">
              {product.name}
            </p>

            {/* Action Buttons */}
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="rounded bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#A30000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Add to Cart
              </button>
              <Link
                href="/contact"
                className="rounded bg-text px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#111122] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
              >
                Enquiry
              </Link>
            </div>

            {/* Description */}
            <p className="mb-6 leading-relaxed text-[#4B5563]">
              {product.description}
            </p>

            {/* Series badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-[#F9FAFB] px-4 py-2 text-sm">
              <span className="text-muted">Series:</span>
              <span className="font-semibold text-text">
                {product.series}
              </span>
            </div>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2">
              {product.muscleGroups.map((mg) => (
                <span
                  key={mg}
                  className="rounded-full bg-[#FEE2E2] px-3 py-1 text-xs font-medium text-primary"
                >
                  {mg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Description Sections ──────────────────────────────── */}
      {product.detailSections && product.detailSections.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <h2 className="mb-8 text-2xl font-bold text-text">
              Description
            </h2>

            <div className="space-y-8">
              {product.detailSections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="mb-3 text-lg font-semibold text-text">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-sm leading-relaxed text-[#4B5563]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Specifications ────────────────────────────────────── */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="border-t border-border bg-[#FAFAFA]">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <h2 className="mb-6 text-2xl font-bold text-text">Specs</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.specifications.map((spec, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-border bg-white p-4"
                >
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                    {spec.label}
                  </p>
                  <p className="text-lg font-bold text-text">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Products ──────────────────────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="mb-10 text-center text-3xl font-bold text-text">
              Related Products
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((rp) => (
                <article
                  key={rp.id}
                  className="group flex flex-col overflow-hidden rounded-sm border border-border bg-white transition-shadow duration-300 hover:shadow-lg"
                >
                  <Link
                    href={`/products/${rp.slug}`}
                    className="relative block aspect-square overflow-hidden bg-[#F9FAFB]"
                  >
                    <Image
                      src={rp.image}
                      alt={rp.name}
                      width={300}
                      height={300}
                      loading="lazy"
                      className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-4 text-center">
                    <span className="mb-1 text-xs font-medium tracking-wider text-muted">
                      {rp.modelCode}
                    </span>
                    <h3 className="mb-3 text-xs font-extrabold uppercase leading-tight tracking-wide text-text">
                      {rp.name}
                    </h3>
                    <div className="mt-auto flex items-center gap-2">
                      <Link
                        href={`/products/${rp.slug}`}
                        className="flex-1 rounded-sm bg-primary px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#A30000]"
                      >
                        View Product
                      </Link>
                      <button
                        type="button"
                        aria-label={`Add ${rp.name} to cart`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary text-white transition-colors hover:bg-[#A30000]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back Link ─────────────────────────────────────────── */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/strength-equipment#products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            <span>←</span> Back to all equipment
          </Link>
        </div>
      </div>
    </div>
  );
}
