import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/data/solutions";

export function SolutionsSection() {
  return (
    <section className="section-space bg-paper">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow text-muted">Soluções de Projeto</p>
          <h2 className="section-title mt-5">Engenharia de espaço pensada para o seu objetivo.</h2>
          <p className="body-large mt-6 max-w-2xl text-muted">
            Curadorias de equipamentos projetadas para entregar alta performance, otimização de espaço e experiência superior em cada projeto.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => {
            const isHero = index === 0;
            const isBottomBanner = index >= 5;

            return (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-zinc-950 shadow-md ring-1 ring-white/10 transition-all duration-500 hover:shadow-2xl hover:ring-white/25 ${
                  isHero
                    ? "min-h-[380px] sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[660px]"
                    : isBottomBanner
                    ? "min-h-[260px] sm:col-span-2 lg:col-span-2 lg:min-h-[300px]"
                    : "col-span-1 min-h-[310px]"
                }`}
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes={
                    isHero || isBottomBanner
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 25vw"
                  }
                  className="object-cover contrast-[1.12] brightness-[1.08] grayscale transition-all duration-700 group-hover:scale-105 group-hover:brightness-[1.15] group-hover:contrast-[1.20] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/15" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
                      {solution.eyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-2xl">
                      {solution.title}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
