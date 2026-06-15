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
      className="bg-[#111111] py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
            Explore Our Series
          </h2>
          <p className="mx-auto max-w-xl text-[#9CA3AF]">
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
            "flex gap-4 overflow-x-auto pb-4",
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
                "group relative flex flex-col overflow-hidden rounded-xl bg-[#111111] border border-neutral-800",
                "w-[240px] sm:w-[260px] flex-shrink-0",
                "transition-all duration-300 hover:border-[#CC0000] hover:scale-102",
                "snap-start"
              )}
              style={{ scrollSnapAlign: "start" }}
              draggable={false}
              onClick={(e) => {
                if (isDragging) e.preventDefault();
              }}
            >
              {/* Image Container */}
              <div className="relative h-[200px] w-full bg-[#1c1c1e] p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  width={240}
                  height={200}
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{ mixBlendMode: "multiply" }}
                  draggable={false}
                />
              </div>

              {/* Text Area */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="mb-1 text-base font-bold text-white group-hover:text-[#CC0000] transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#CC0000]">
                  <span>View Line</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
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
