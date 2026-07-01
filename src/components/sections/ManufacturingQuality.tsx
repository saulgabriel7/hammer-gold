"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ManufacturingQuality() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const duration = 0.8;

      gsap.from("[data-quality-header]", {
        y: 30,
        opacity: 0,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-quality-left]", {
        x: -40,
        opacity: 0,
        duration,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-quality-right]", {
        x: 40,
        opacity: 0,
        duration,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-quality-cta]", {
        y: 20,
        opacity: 0,
        duration,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="manufacturing-quality"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16" data-quality-header>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight mb-4 uppercase font-sans">
            <span className="text-primary">Padrão de Qualidade</span> Hammer Gold
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-[#4B5563] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {"É por isso que temos a confiança de competir com a qualidade de grandes marcas, mas por 1/5 do preço."}
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center" data-quality-left>
            <h3 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-6">
              Construído com Força: Tubos de
              <br />
              Aço Sólido de 3,0 mm
            </h3>
            <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
              {"Usamos tubos de aço "}
              <span className="font-semibold text-text">
                {"Q235 espessos de 3,0 mm+ para cada parte da máquina"}
              </span>
              {" — seja a estrutura ou a área de treino, não importa o tamanho. Com dobras de reforço adicionadas, nossas máquinas permanecem fortes e estáveis. Sem tremores, apenas potência sólida."}
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full" data-quality-right>
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl shadow-md border border-gray-100">
              <Image
                src="/assets/images/quality_steel.png"
                alt="Medição de tubos de aço de qualidade na YR Fitness"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16" data-quality-cta>
          <a
            href="#quality"
            className="inline-block border-2 border-primary text-primary] hover:bg-primary hover:text-white transition-all duration-300 font-semibold px-8 py-3 rounded-md text-sm tracking-wider"
          >
            Saiba Mais Sobre a Qualidade
          </a>
        </div>
      </div>
    </section>
  );
}
