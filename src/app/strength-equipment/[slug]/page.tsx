import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { series } from "@/data/series";

const SERIES_IMAGES: Record<string, string> = {
  "c4-revival": "/assets/images/1.avif",
  "61a-racing": "/assets/images/2.avif",
  "73-tough": "/assets/images/3.avif",
  "c4d-dual": "/assets/images/5.avif",
  "multi-station": "/assets/images/6.avif",
  "82-plate-loaded": "/assets/images/7.avif",
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = series.find((s) => s.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.name} | Hammer Gold`,
    description: s.description,
  };
}

export default function SeriesPage({ params }: Props) {
  const s = series.find((s) => s.slug === params.slug);
  if (!s) notFound();

  const image = SERIES_IMAGES[s.id] || s.image;

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col">
      {/* Hero */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={image}
          alt={s.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-4xl">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">
            Product Series
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
            {s.name}
          </h1>
          <div className="w-12 h-0.5 bg-primary mt-4 mb-6" />
          <p className="text-neutral-300 text-lg md:text-xl max-w-xl leading-relaxed">
            {s.description}
          </p>
        </div>
      </div>

      {/* Back */}
      <div className="px-8 md:px-16 py-10">
        <Link
          href="/strength-equipment"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium"
        >
          <span>←</span> Back to all equipment
        </Link>
      </div>
    </main>
  );
}
