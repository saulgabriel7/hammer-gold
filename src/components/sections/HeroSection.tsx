"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const duration = prefersReducedMotion ? 0 : 1;
      const staggerDelay = prefersReducedMotion ? 0 : 0.15;

      gsap.from("[data-hero-headline]", {
        y: 40,
        opacity: 0,
        duration,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from("[data-hero-subtext]", {
        y: 20,
        opacity: 0,
        duration,
        stagger: staggerDelay,
        delay: 0.7,
        ease: "power3.out",
      });

      gsap.from("[data-hero-image]", {
        x: 40,
        opacity: 0,
        duration: duration * 1.2,
        delay: 0.5,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-white"
      id="hero"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h1
              data-hero-headline
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] uppercase"
            >
              <span className="block text-primary">STRENGTH EQUIPMENT</span>
              <span className="block text-text">MANUFACTURER IN</span>
              <span className="block text-dark">CHINA</span>
            </h1>

            <div className="mt-8 space-y-4 max-w-xl text-neutral-800 font-medium text-base sm:text-lg">
              <p data-hero-subtext>Built by athletes, for athletes.</p>
              <p data-hero-subtext>Built tough to handle every strength training.</p>
              <p data-hero-subtext>Built with precise movement angles since 1997.</p>
            </div>
          </div>

          {/* Product Image */}
          <div
            data-hero-image
            className="lg:col-span-5 flex items-center justify-center relative w-full aspect-square max-w-md mx-auto"
          >
            <video
              src="/assets/videos/gsap-config.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-contain max-h-[450px] select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
