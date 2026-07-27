import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { ProductMedia } from "@/components/ui/product-media";
import { series } from "@/data/series";
import { getSeriesImageFit } from "@/lib/series-media";

export const metadata: Metadata = {
  title: "Séries",
  description: "Conheça as séries de equipamentos profissionais Hammer Gold.",
};

export default function SeriesIndexPage() {
  return (
    <>
      <PageIntro
        dark
        eyebrow="Linhas de produto"
        title="Sete séries. Uma seleção construída para uso profissional."
        description="Compare propostas, configurações e aplicações para montar uma seleção coerente com o seu público e a intensidade da operação."
      />
      <section className="section-space bg-white">
        <div className="site-container grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {series.map((item) => (
            <Link
              key={item.id}
              href={`/series/${item.slug}`}
              className="group flex min-w-0 flex-col bg-white"
            >
              <ProductMedia
                src={item.image}
                alt={item.name}
                sizes="(max-width: 768px) 100vw, 50vw"
                fit={getSeriesImageFit(item.id)}
                imageClassName="grayscale transition-transform duration-500 group-hover:scale-[1.035]"
              />
              <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                <div>
                  <p className="eyebrow text-muted">Série</p>
                  <h2 className="mt-5 text-2xl font-extrabold tracking-tight">
                    {item.name}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                  Ver equipamentos
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
