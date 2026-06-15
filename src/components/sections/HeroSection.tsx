"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const duration = prefersReducedMotion ? 0 : 1;
      const staggerDelay = prefersReducedMotion ? 0 : 0.2;

      gsap.from("[data-hero-headline]", {
        y: 40,
        opacity: 0,
        duration,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from("[data-hero-subtext]", {
        y: 30,
        opacity: 0,
        duration,
        stagger: staggerDelay,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from("[data-hero-cta]", {
        y: 20,
        opacity: 0,
        duration,
        stagger: staggerDelay,
        delay: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      {!videoFailed && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        />
      )}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1
          data-hero-headline
          className="mb-8 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Built by Athletes, For Athletes
        </h1>

        <div className="mb-10 flex max-w-2xl flex-col gap-3">
          <p
            data-hero-subtext
            className="text-base text-white/90 sm:text-lg"
          >
            Built tough to handle every strength training.
          </p>
          <p
            data-hero-subtext
            className="text-base text-white/90 sm:text-lg"
          >
            Built with precise movement angles since 1997.
          </p>
          <p
            data-hero-subtext
            className="text-base text-white/90 sm:text-lg"
          >
            Trusted by 5,000+ commercial gyms in 86 countries.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            data-hero-cta
            href="#products"
            className={cn(
              "rounded-lg bg-[#CC0000] px-8 py-3.5 text-sm font-semibold text-white",
              "transition-colors hover:bg-[#AA0000]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            )}
          >
            See All Products
          </a>
          <a
            data-hero-cta
            href="#contact"
            className={cn(
              "rounded-lg border-2 border-white bg-transparent px-8 py-3.5 text-sm font-semibold text-white",
              "transition-colors hover:bg-white/10",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            )}
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Scroll-down Arrow */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#series"
          aria-label="Scroll down"
          className="flex flex-col items-center text-white/70 transition-colors hover:text-white"
        >
          <svg
            className="h-8 w-8 animate-hero-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      {/* CSS bounce keyframes */}
      <style jsx>{`
        @keyframes hero-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-hero-bounce {
          animation: hero-bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
