import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductMedia } from "@/components/ui/product-media";
import { series } from "@/data/series";
import { getSeriesImageFit } from "@/lib/series-media";

const localImages: Record<string, string> = {
  forja: "/images/series/serie-forja-racing.jpeg",
  bigorna: "/images/series/serie-bigorna-plate-loaded.jpeg",
  lastro: "/images/series/serie-lastro-pin-selected.avif",
  "dupla-funcao": "/images/series/serie-dupla-funcao.jpeg",
  coletiva: "/images/series/serie-coletiva-multi-jungle.avif",
  acessorios: "/images/series/serie-acessorios.jpeg",
  cardio: "/images/series/serie-cardio-performance.png",
  scan: "/images/produtos/scan/scan-escaneamento-360-02.png",
};

export default function FeaturedSeries() {
  return (
    <section className="section-space bg-white" aria-labelledby="featured-series-title">
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow text-muted">Linhas Hammer Gold</p>
            <h2 id="featured-series-title" className="section-title mt-5">
              Uma arquitetura de produtos para cada operação.
            </h2>
          </div>
          <Link href="/series" className="button-ghost self-start lg:self-auto">
            Conhecer todas as linhas
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {series.map((item, index) => (
            <Link
              key={item.id}
              href={`/series/${item.slug}`}
              className="group block min-w-0 overflow-hidden rounded-xl bg-black"
            >
              <ProductMedia
                src={localImages[item.id] ?? item.image}
                alt={item.name}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                fit={getSeriesImageFit(item.id)}
                imageClassName="grayscale transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              >
                <div className="absolute inset-0 z-1 bg-linear-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-2 p-5 text-white sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                        Série {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold tracking-tight">
                        {item.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/65">
                        {item.description}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </ProductMedia>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
