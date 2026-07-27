import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award, Cpu, ShieldCheck, Zap } from "lucide-react";
import { WhatsappIcon } from "@/components/icons";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre a Hammer Gold | Engenharia & Performance",
  description:
    "Conheça a Hammer Gold: equipamentos profissionais de musculação e cardio construídos com engenharia de alta precisão, biomecânica avançada e excelente eficiência de investimento.",
};

const pillars = [
  {
    icon: Award,
    title: "Engenharia Biomecânica",
    description:
      "Equipamentos projetados com trajetórias guiadas e curva de tensão uniforme, garantindo o máximo estímulo muscular com absoluto conforto articular.",
  },
  {
    icon: ShieldCheck,
    title: "Alta Rodagem & Durabilidade",
    description:
      "Chassis em aço carbono reforçado, pintura eletrostática texturizada e estofamentos com costura dupla preparados para operações comerciais intensas.",
  },
  {
    icon: Zap,
    title: "Eficiência de Investimento",
    description:
      "Entrega do padrão de acabamento e desempenho das marcas globais de topo de linha com uma relação de custo-benefício altamente competitiva.",
  },
  {
    icon: Cpu,
    title: "Inovação & Biometria IA",
    description:
      "Integração contínua de tecnologia com a linha Scan para escaneamento corporal 360°, análise postural e avaliação biométrica inteligente.",
  },
];

const stats = [
  { label: "Linhas Especializadas", value: "8", detail: "Do peso livre ao cardio e avaliação por IA" },
  { label: "Custo-Benefício", value: "1/5", detail: "Do investimento frente às marcas importadas tradicionais" },
  { label: "Curadoria de Projeto", value: "100%", detail: "Consultoria personalizada para a metragem do seu espaço" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section / Page Intro */}
      <section className="page-top dark-grid text-white">
        <div className="site-container py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-white/45">Engenharia & Posicionamento</p>
              <h1 className="display-title mt-6">
                Construído para a força. Projetado para o topo.
              </h1>
              <p className="body-large mt-6 text-white/60">
                A Hammer Gold nasceu para conectar a engenharia biomecânica de alta precisão a uma solução comercial inteligente e consultiva para operações exigentes.
              </p>
            </div>

            {/* Imagem de Produto no topo */}
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image
                src="/images/institucional/leg-press-engenharia.jpeg"
                alt="Equipamento Hammer Gold Leg Press"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/90">
                  Leg Press 45° — Série Lastro
                </p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  Engenharia de precisão
                </span>
              </div>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs transition-all duration-300 hover:border-white/20 hover:bg-white/8"
              >
                <p className="text-4xl font-black tracking-tight text-white lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-xs text-white/50">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto & DNA Section */}
      <section className="section-space bg-white">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Container com o Logo da Hammer Gold Centralizado */}
          <div className="relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black p-8 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative h-32 w-52 sm:h-40 sm:w-64">
                <Image
                  src="/images/logo/logo-hammer-gold-transparente.png"
                  alt="Logo Hammer Gold"
                  fill
                  sizes="(max-width: 640px) 208px, 256px"
                  className="scale-[1.35] object-contain"
                  priority
                />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                Engenharia & Performance
              </p>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                Padrão Hammer Gold
              </span>
            </div>
          </div>

          <div>
            <p className="eyebrow text-muted">Nosso Manifesto</p>
            <h2 className="section-title mt-5">
              Uma arquitetura de produtos criada para elevar seu espaço.
            </h2>
            <div className="mt-7 space-y-5 leading-7 text-muted">
              <p>
                Acreditamos que a academia moderna precisa entregar mais do que apenas máquinas de exercício. Ela precisa transmitir autoridade, sofisticação visual e uma experiência de treino verdadeiramente memorável.
              </p>
              <p>
                Cada equipamento da Hammer Gold é desenvolvido respeitando os princípios da física aplicada e da ergonomia contemporânea. Das roldanas calibradas ao acabamento de alta densidade, nosso foco é eliminar pontos mortos e entregar uma repetição perfeita.
              </p>
              <p>
                Atendemos academias comerciais, condomínios de alto padrão, hotéis, clubes e studios com um atendimento próximo e personalizado desde a especificação inicial até a entrega final.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/quote" className="button-primary">
                Solicitar cotação de projeto
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/" className="button-secondary">
                Explorar catálogo completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars Section */}
      <section className="section-space border-t border-black/5 bg-paper">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow text-muted">Pilares de Atuação</p>
            <h2 className="section-title mt-5">
              O que diferencia a Hammer Gold no mercado.
            </h2>
            <p className="body-large mt-6 max-w-2xl text-muted">
              Quatro compromissos fundamentais que orientam nosso desenvolvimento de produto e nosso relacionamento comercial.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-black/8 bg-white p-7 shadow-2xs transition-all duration-300 hover:border-black/20 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-black">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-space bg-white">
        <div className="site-container">
          <div className="overflow-hidden rounded-4xl bg-black px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="eyebrow text-white/45">Atendimento Comercial</p>
                <h2 className="section-title mt-5 max-w-3xl">
                  Pronto para estruturar seu projeto com a Hammer Gold?
                </h2>
                <p className="body-large mt-6 max-w-2xl text-white/55">
                  Monte sua seleção de equipamentos pelo site ou converse diretamente com nossa equipe técnica comercial via WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/quote" className="button-secondary w-full">
                  Montar cotação de projeto
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Olá, gostaria de conhecer mais sobre os equipamentos Hammer Gold para o meu projeto."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-xs font-bold uppercase tracking-wider text-white hover:border-white"
                >
                  <WhatsappIcon className="h-4 w-4" aria-hidden="true" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
