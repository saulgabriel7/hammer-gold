import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "A página que você procura não existe ou foi movida. Volte para a Hammer Gold e explore nossos equipamentos.",
};

export default function NotFound() {
  return (
    <section className="dark-grid page-top relative isolate flex min-h-[calc(100svh-88px)] items-center overflow-hidden text-white">
      {/* Radial glow accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-140 w-140 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10 w-full py-20 text-center">
        {/* 404 display number */}
        <p
          className="select-none text-[clamp(8rem,25vw,18rem)] font-black leading-none tracking-tighter text-white/4"
          aria-hidden="true"
        >
          404
        </p>

        {/* Content overlay */}
        <div className="-mt-16 sm:-mt-24 md:-mt-32">
          <span className="eyebrow text-white/40">
            Erro 404
          </span>

          <h1 className="section-title mt-5 text-white">
            Página não<br /> encontrada
          </h1>

          <p className="body-large mx-auto mt-6 max-w-lg text-white/50">
            O endereço que você acessou não existe ou foi removido.
            Explore nossos equipamentos de musculação profissional.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="button-secondary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
