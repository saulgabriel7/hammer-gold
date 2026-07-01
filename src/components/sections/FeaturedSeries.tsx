import Image from "next/image";
import { cn } from "@/lib/utils";
import { series } from "@/data/series";

const SERIES_IMAGES: Record<string, string> = {
  "c4-revival": "/assets/images/1.jpeg",
  "61a-racing": "/assets/images/2.jpeg",
  "73-tough": "/assets/images/3.jpeg",
  "c4d-dual": "/assets/images/5.jpeg",
  "multi-station": "/assets/images/6.avif",
  "82-plate-loaded": "/assets/images/7.avif",
};

const SERIES_TITLES: Record<string, string> = {
  "c4-revival": "SÉRIE C4 REVIVAL",
  "61a-racing": "SÉRIE 61A RACING",
  "73-tough": "SÉRIE 73 TOUGH",
  "c4d-dual": "SÉRIE C4D DUAL FUNCTION",
  "multi-station": "SÉRIE MULTI STATION",
  "82-plate-loaded": "SÉRIE 82 PLATE LOADED",
};

const orderedSeries = [
  series.find((s) => s.id === "c4-revival"),
  series.find((s) => s.id === "61a-racing"),
  series.find((s) => s.id === "73-tough"),
  series.find((s) => s.id === "c4d-dual"),
  series.find((s) => s.id === "multi-station"),
  series.find((s) => s.id === "82-plate-loaded"),
].filter(Boolean);

export default function FeaturedSeries() {
  return (
    <section id="series" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-text uppercase tracking-tight">
            Séries de Produtos em Destaque
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {orderedSeries.map((s) => {
            if (!s) return null;

            const isC4Revival = s.id === "c4-revival";
            const colSpanClass =
              s.id === "c4-revival" || s.id === "82-plate-loaded"
                ? "md:col-span-2 lg:col-span-2"
                : "md:col-span-1 lg:col-span-1";

            const textPositionClass = isC4Revival
              ? "top-6 left-6"
              : "bottom-6 left-6";

            return (
              <a
                key={s.id}
                href={`/strength-equipment/${s.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded-lg bg-neutral-900",
                  "h-[300px] sm:h-[350px] md:h-[380px] w-full",
                  "transition-all duration-300 hover:shadow-xl",
                  colSpanClass
                )}
              >
                {/* Background Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={SERIES_IMAGES[s.id] || s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                    priority={s.id === "c4-revival" || s.id === "61a-racing"}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/40" />
                </div>

                {/* Text Overlay */}
                <div className={cn("absolute p-6 z-10", textPositionClass)}>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide uppercase">
                    {SERIES_TITLES[s.id] || s.name}
                  </h3>
                  <div className="w-10 h-0.5 bg-primary mt-2 transition-all duration-300 group-hover:w-16" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
