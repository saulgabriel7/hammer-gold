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
        <div data-quality-header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A2E] tracking-tight mb-4 uppercase font-sans">
            <span className="text-[#CC0000]">Quality Standard</span> of YR Fitness
          </h2>
          <div className="w-20 h-0.5 bg-[#CC0000] mx-auto mb-6" />
          <p className="text-[#4B5563] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {"That's why we are confident to compete with big brand quality, but at 1/5 price."}
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div data-quality-left className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] leading-tight mb-6">
              Built with Strength: 3.0mm
              <br />
              Solid Steel Pipes
            </h3>
            <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
              {"We use thick "}
              <span className="font-semibold text-[#1A1A2E]">
                {"3.0mm+ Q235 steel pipes for every part of the machine"}
              </span>
              {" — whether it's the frame or the training area, no matter the size. With added reinforcement bends, our machines stay strong and steady. No shaking, just solid power."}
            </p>
          </div>

          {/* Right Image */}
          <div data-quality-right className="w-full">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-md border border-gray-100">
              <Image
                src="/assets/images/quality_steel.png"
                alt="Quality steel pipes measurement at YR Fitness"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div data-quality-cta className="text-center mt-16">
          <a
            href="#quality"
            className="inline-block border-2 border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000] hover:text-white transition-all duration-300 font-semibold px-8 py-3 rounded-md text-sm tracking-wider"
          >
            More About Quality
          </a>
        </div>
      </div>
    </section>
  );
}
