import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function HeroSection() {

  return (
    <section
      id="hero"
      className="dark-grid page-top relative flex min-h-svh flex-col overflow-hidden text-white"
    >
      <div className="absolute inset-0 lg:left-[56%]">
        <Image
          src="/images/series/serie-forja-racing.jpeg"
          alt="Equipamento profissional Hammer Gold em ambiente industrial"
          fill
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="object-cover opacity-55 grayscale lg:opacity-85"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black lg:bg-gradient-to-r lg:from-black lg:via-black/25 lg:to-black/10" />
      </div>

      <div className="site-container relative z-10 flex min-w-0 flex-1 items-center py-10 sm:py-14 lg:py-10">
        <div className="min-w-0 max-w-4xl">
          <p className="t-stagger-line eyebrow max-w-full text-pretty text-white/55">
            Importadora de equipamentos profissionais
          </p>
          <h1 className="t-stagger-line t-stagger-line--2 hero-title mt-5 max-w-[12ch] sm:mt-7">
            Engenharia para quem exige mais de cada treino.
          </h1>
          <div className="t-stagger-line t-stagger-line--3">
            <p className="body-large mt-5 max-w-2xl text-pretty text-white/65 sm:mt-7">
              Hammer Gold. Equipamentos preparados para suportar a força dos atletas e a
              rotina das melhores academias.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Link href="/products" className="button-secondary w-full sm:w-auto">
                Explorar equipamentos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Olá, gostaria de falar com um consultor da Hammer Gold."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:border-white hover:bg-white/10 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Falar com consultor
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 shrink-0 border-t border-white/10 bg-black/65 backdrop-blur-md">
        <div className="site-container grid grid-cols-3 divide-x divide-white/10 py-4 text-center sm:py-5">
          <div className="min-w-0 px-1 sm:px-3">
            <p className="text-xl font-black sm:text-2xl">289</p>
            <p className="mt-1 text-[8px] leading-tight uppercase tracking-[0.06em] text-white/45 sm:text-[10px] sm:tracking-wider">
              Equipamentos
            </p>
          </div>
          <div className="min-w-0 px-1 sm:px-3">
            <p className="text-xl font-black sm:text-2xl">8</p>
            <p className="mt-1 text-[8px] leading-tight uppercase tracking-[0.06em] text-white/45 sm:text-[10px] sm:tracking-wider">
              Categorias
            </p>
          </div>
          <div className="min-w-0 px-1 sm:px-3">
            <p className="text-xl font-black sm:text-2xl">1/5</p>
            <p className="mt-1 text-[8px] leading-tight uppercase tracking-[0.06em] text-white/45 sm:text-[10px] sm:tracking-wider">
              Do preço de grandes marcas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
