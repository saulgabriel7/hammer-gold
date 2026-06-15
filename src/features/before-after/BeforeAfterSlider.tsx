"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useBeforeAfter } from "./useBeforeAfter";
import { cn } from "@/lib/utils";

const BEFORE_IMAGE =
  "https://www.yanrefitness.com/wp-content/uploads/2021/03/yr-fitness-design-before.jpg";
const AFTER_IMAGE =
  "https://www.yanrefitness.com/wp-content/uploads/2023/03/yanre-yr-design-before-after-new-1.png";

export default function BeforeAfterSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const {
    dragPosition,
    isDragging,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    containerRef,
  } = useBeforeAfter();

  // Update clip-path with gsap.set for performance
  useEffect(() => {
    if (!afterImageRef.current) return;
    const clipValue = `inset(0 ${100 - dragPosition}% 0 0)`;
    gsap.set(afterImageRef.current, { clipPath: clipValue });
  }, [dragPosition]);

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
    <section ref={sectionRef} className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-5 md:items-center md:gap-16">
        {/* Left side — Text (40%) */}
        <div data-ba-content className="md:col-span-2">
          {/* Red accent line */}
          <div className="mb-4 h-1 w-16 rounded-full bg-[#CC0000]" />

          <h2 className="mb-6 text-3xl font-bold text-[#1A1A2E] sm:text-4xl">
            Designed by Athletes,
            <br />
            For Athletes
          </h2>

          <p className="max-w-lg leading-relaxed text-[#6B7280]">
            Every Hammer Gold machine starts with athlete insight. Our in-house
            team of competitive lifters and sport-science engineers co-design
            every pivot point, pad angle, and weight stack ratio — ensuring
            biomechanically accurate movement that builds real strength, reduces
            injury risk, and feels right from the very first rep.
          </p>

          <p className="mt-4 max-w-lg leading-relaxed text-[#6B7280]">
            The result: equipment that top-tier gyms trust to survive 18-hour
            operating days, year after year, with minimal maintenance.
          </p>
        </div>

        {/* Right side — Slider (60%) */}
        <div data-ba-slider className="md:col-span-3">
          <div
            ref={containerRef}
            onPointerDown={prefersReducedMotion ? undefined : handlePointerDown}
            onPointerMove={prefersReducedMotion ? undefined : handlePointerMove}
            onPointerUp={prefersReducedMotion ? undefined : handlePointerUp}
            onPointerLeave={prefersReducedMotion ? undefined : handlePointerUp}
            className={cn(
              "relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl",
              !prefersReducedMotion && "cursor-ew-resize",
              isDragging && "cursor-ew-resize"
            )}
            role="img"
            aria-label="Before and after comparison of equipment design"
          >
            {/* Before image (base layer) */}
            <Image
              src={BEFORE_IMAGE}
              alt="Before — original equipment design"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />

            {/* "Before" label */}
            <span className="absolute bottom-4 left-4 z-20 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
              Before
            </span>

            {/* After image (clipped overlay) */}
            <div
              ref={afterImageRef}
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - dragPosition}% 0 0)`,
              }}
            >
              <Image
                src={AFTER_IMAGE}
                alt="After — redesigned equipment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {/* "After" label */}
              <span className="absolute bottom-4 right-4 z-20 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                After
              </span>
            </div>

            {/* Handle — only when not reduced motion */}
            {!prefersReducedMotion && (
              <div
                className="pointer-events-none absolute top-0 z-30 flex h-full items-center"
                style={{ left: `${dragPosition}%`, transform: "translateX(-50%)" }}
              >
                {/* Vertical line */}
                <div className="h-full w-0.5 bg-white shadow-lg" />

                {/* Circle handle */}
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                  <svg
                    className="h-5 w-5 text-[#1A1A2E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l4-4 4 4M8 15l4 4 4-4"
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
