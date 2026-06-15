"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Image from "next/image";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import { series } from "@/data/series";

export default function FeaturedSeries() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // ── Drag-to-scroll state ──
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = scrollContainerRef.current;
      if (!el) return;
      dragState.current.isDown = true;
      dragState.current.startX = e.pageX - el.offsetLeft;
      dragState.current.scrollLeft = el.scrollLeft;
      setIsDragging(true);
      el.setPointerCapture(e.pointerId);
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragState.current.isDown) return;
      const el = scrollContainerRef.current;
      if (!el) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - dragState.current.startX) * 1.5;
      el.scrollLeft = dragState.current.scrollLeft - walk;
    },
    []
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      dragState.current.isDown = false;
      setIsDragging(false);
      const el = scrollContainerRef.current;
      if (el) el.releasePointerCapture(e.pointerId);
    },
    []
  );

  // ── GSAP stagger reveal ──
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const duration = prefersReducedMotion ? 0 : 0.6;

      gsap.from("[data-series-card]", {
        y: 60,
        opacity: 0,
        duration,
        stagger: prefersReducedMotion ? 0 : 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="series"
      className="bg-[#111111] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Explore Our Series
          </h2>
          <p className="mx-auto max-w-xl text-[#6B7280]">
            Six equipment lines engineered for different training goals,
            budgets, and floor plans.
          </p>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className={cn(
            "flex gap-6 overflow-x-auto pb-4",
            "scroll-snap-x-mandatory",
            isDragging ? "cursor-grabbing" : "cursor-grab",
            "select-none"
          )}
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {series.map((s) => (
            <a
              key={s.id}
              href={`/strength-equipment/${s.slug}`}
              data-series-card
              className={cn(
                "group relative flex-shrink-0 overflow-hidden rounded-2xl",
                "w-[280px] sm:w-[300px]",
                "transition-transform duration-300 hover:scale-105",
                "snap-start"
              )}
              style={{ scrollSnapAlign: "start" }}
              draggable={false}
              onClick={(e) => {
                if (isDragging) e.preventDefault();
              }}
            >
              {/* Image */}
              <div className="relative h-[400px] w-full">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {s.name}
                </h3>
                <p className="text-sm leading-snug text-white/70">
                  {s.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
