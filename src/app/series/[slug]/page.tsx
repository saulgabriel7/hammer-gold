import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCatalog } from "@/components/catalog/ProductCatalog";
import { ProductMedia } from "@/components/ui/product-media";
import { series } from "@/data/series";
import { getSeriesImageFit } from "@/lib/series-media";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return series.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = series.find((candidate) => candidate.slug === slug);
  return item ? { title: item.name, description: item.description } : {};
}

export default async function SeriesPage({ params }: Props) {
  const { slug } = await params;
  const item = series.find((candidate) => candidate.slug === slug);
  if (!item) notFound();

  return (
    <>
      <section className="page-top dark-grid text-white">
        <div className="site-container grid min-h-155 items-end gap-10 py-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow text-white/45">Série Hammer Gold</p>
            <h1 className="display-title mt-6 max-w-[10ch]">{item.name}</h1>
            <p className="body-large mt-7 max-w-2xl text-white/60">
              {item.description}
            </p>
          </div>
          <ProductMedia
            src={item.image}
            alt={item.name}
            sizes="(max-width: 1024px) 100vw, 42vw"
            fit={getSeriesImageFit(item.id)}
            priority
            className="rounded-xl"
            imageClassName="grayscale"
          />
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="site-container">
          <p className="eyebrow text-muted">Catálogo da série</p>
          <h2 className="section-title mb-10 mt-5">
            Todos os equipamentos desta linha.
          </h2>
          <ProductCatalog initialSeries={item.name} />
        </div>
      </section>
    </>
  );
}
