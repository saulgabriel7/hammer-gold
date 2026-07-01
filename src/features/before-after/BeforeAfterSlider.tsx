"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useBeforeAfter } from "./useBeforeAfter";
import { cn } from "@/lib/utils";

const BEFORE_IMAGE = "/assets/images/before.avif";
const AFTER_IMAGE = "/assets/images/after.jpeg";

export default function BeforeAfterSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const {
    dragPosition,
    isDragging,
    handlePointerDown,
    containerRef,
  } = useBeforeAfter();

  // GSAP scroll reveal for the whole section
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const duration = prefersReducedMotion ? 0 : 0.8;

      gsap.from("[data-ba-content]", {
        x: -60,
        opacity: 0,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from("[data-ba-slider]", {
        x: 60,
        opacity: 0,
        duration,
        delay: prefersReducedMotion ? 0 : 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-16">
        {/* Left side — Text */}
        <div data-ba-content className="flex flex-col justify-center">
          {/* Red accent line */}
          <div className="mb-6 h-1 w-16 rounded-full bg-primary" />

          <h2 className="mb-8 text-4xl font-extrabold text-text sm:text-5xl tracking-tight leading-tight uppercase font-sans">
            PROJETADO <span className="text-primary">POR</span> ATLETAS,
            <br />
            <span className="text-primary">PARA</span> ATLETAS
          </h2>

          <div className="space-y-4 font-medium text-lg text-[#4B5563] sm:text-xl leading-relaxed">
            <p>Na YR Fitness, o design transcende a estética.</p>
            <p>{"É sobre funcionalidade."}</p>
            <p>Simples, mas significativo.</p>
          </div>
        </div>

        {/* Right side — Slider */}
        <div data-ba-slider>
          <div
            ref={containerRef}
            onPointerDown={prefersReducedMotion ? undefined : handlePointerDown}
            className={cn(
              "relative aspect-4/3 w-full select-none overflow-hidden rounded-2xl touch-none",
              !prefersReducedMotion && "cursor-ns-resize",
              isDragging && "cursor-ns-resize"
            )}
            role="img"
            aria-label="Comparação antes e depois do design do equipamento"
          >
            {/* Before image (base layer, shown at the bottom) */}
            <Image
              src={BEFORE_IMAGE}
              alt="Antes — design original do equipamento"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />

            {/* "Before" label (bottom center) */}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 rounded bg-[#4a4a4a]/85 backdrop-blur-xs border border-white/20 px-8 py-2 text-xs font-semibold tracking-wider text-white shadow-md min-w-[100px] text-center">
              Antes
            </span>

            {/* After image (clipped overlay, shown at the top) */}
            <div
              ref={afterImageRef}
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 0 ${100 - dragPosition}% 0)`,
              }}
            >
              <Image
                src={AFTER_IMAGE}
                alt="Depois — equipamento redesenhado"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {/* "After" label (top center) */}
              <span className="absolute top-6 left-1/2 -translate-x-1/2 z-20 rounded bg-[#4a4a4a]/85 backdrop-blur-xs border border-white/20 px-8 py-2 text-xs font-semibold tracking-wider text-white shadow-md min-w-[100px] text-center">
                Depois
              </span>
            </div>

            {/* Handle — only when not reduced motion */}
            {!prefersReducedMotion && (
              <div
                className="pointer-events-none absolute left-0 z-30 flex w-full items-center justify-center"
                style={{ top: `${dragPosition}%`, transform: "translateY(-50%)" }}
              >
                {/* Horizontal dividing line */}
                <div className="w-full h-[3px] bg-white shadow-lg absolute left-0" />

                {/* Circle handle */}
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-xl border border-gray-200 pointer-events-auto">
                  <svg
                    className="h-6 w-6 text-text"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l4-4 4 4M16 15l-4 4-4-4"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
