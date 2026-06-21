"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap-config";
import { createFadeIn } from "@/animations/scroll-triggers";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Image from "next/image";

interface Series {
  subtitle: string;
  name: string;
  image: string;
  imageAlt: string;
  bullets: string[];
}

interface TableRow {
  label: string;
  values: [string, string, string];
}

const series: Series[] = [
  {
    subtitle: "Tough",
    name: "73 Series",
    image: "/assets/images/7304-1024x867.png",
    imageAlt: "73 Tough Series gym equipment",
    bullets: ["Heavy-Duty Frame", "Pro-Level Movement", "High-End Line"],
  },
  {
    subtitle: "Racing",
    name: "61A Series",
    image: "/assets/images/61A01.jpg",
    imageAlt: "61A Racing Series gym equipment",
    bullets: ["Durable", "Affordable", "Best-Selling"],
  },
  {
    subtitle: "Revival",
    name: "C4 Series",
    image: "/assets/images/C4A10.jpg",
    imageAlt: "C4 Revival Series gym equipment",
    bullets: ["Modern Aesthetics", "Advanced Adjustability", "Innovation"],
  },
];

const tableRows: TableRow[] = [
  { label: "Launch Year", values: ["2008", "2016", "2025"] },
  {
    label: "Design Focus",
    values: [
      "High-end performance and biomechanics",
      "Space-saving, budget-friendly, market-driven",
      "Combines 61A's simplicity with 73's advanced features",
    ],
  },
  {
    label: "Frame Tubing",
    values: [
      "75×130×3.0 mm (main) + 58×101×3.0 mm (functional)",
      "75×118×3.0 mm (main) + 50×120 / 40×80 / 50×100 mm",
      "150×50×3.0 mm (main) + 50×120 / 40×80 / 50×100 mm",
    ],
  },
  {
    label: "Aesthetic Design",
    values: [
      "Parabolic, bold, aluminum accents",
      "Compact and practical",
      "Stylish, modern, fits younger gym aesthetics",
    ],
  },
  {
    label: "Durability Level",
    values: [
      "Heavy-duty, custom-engineered components",
      "Very durable, many still running after 20+ years",
      "Same durability level with upgraded styling and adjustability",
    ],
  },
  {
    label: "Movement Types",
    values: [
      "Independent converging/diverging paths",
      "Standard movement paths",
      "Includes both standard and independent paths (split models)",
    ],
  },
  {
    label: "Adjustability",
    values: [
      "Basic adjustability",
      "Standard user adjustability",
      "Advanced: rotating handles, adjustable pads, backrests, etc.",
    ],
  },
  {
    label: "Innovation Level",
    values: [
      "First of its kind globally in 2008",
      "Refined through years of customer feedback",
      "Integrated innovation from both series + unique new machines",
    ],
  },
  {
    label: "Series Size",
    values: ["62 models", "62 models", "74 models (still expanding)"],
  },
  {
    label: "Target Buyer",
    values: [
      "High-end gyms, serious training centers",
      "Budget-conscious gyms, franchise chains",
      "Gyms that want both performance and style",
    ],
  },
  {
    label: "Pricing",
    values: [
      "Premium",
      "Most affordable",
      "Mid-range, with excellent feature-to-price ratio",
    ],
  },
  {
    label: "Production Method",
    values: [
      "Partially handmade due to complex design",
      "Fully industrialized",
      "Industrial production with some specialty detailing",
    ],
  },
  {
    label: "After-Sales Service",
    values: ["Lifetime support", "Lifetime support", "Lifetime support"],
  },
];

const colHeaders = ["73 Tough Series", "61A Racing Series", "C4 Revival Series"];

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Series Cards fade-in with stagger
      createFadeIn(".series-card", ".cards-grid", {
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        start: "top 80%",
      });

      // 2. Comparison table fade-in
      createFadeIn(".comparison-table-wrap", ".comparison-table-wrap", {
        y: 30,
        duration: 0.7,
        start: "top 85%",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} id="comparison" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-dark">
            Compare Our{" "}
            <span className="text-primary">Key Series</span>
          </h2>
        </div>

        {/* ── Image Cards ── */}
        <div className="cards-grid grid grid-cols-1 sm:grid-cols-3 gap-12 mb-20">
          {series.map((s) => (
            <div
              key={s.name}
              className="series-card group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ aspectRatio: "1 / 1" }}
            >
              {/* Background image */}
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />

              {/* Default grey overlay */}
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-400 group-hover:opacity-0" />

              {/* Hover dark overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

              {/* Text content */}
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <p className="text-white/80 text-sm font-light mb-1 leading-none">
                  {s.subtitle}
                </p>
                <h3 className="text-white text-xl font-bold leading-tight">
                  {s.name}
                </h3>
                <ul className="mt-4 space-y-1 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-white text-sm font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ── Comparison Table ── */}
        <div className="comparison-table-wrap">
          {/* Table sub-title */}
          <p className="text-center text-sm font-semibold tracking-widest text-black mb-6">
            Quick Comparison At A Glance
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              {/* thead */}
              <thead>
                <tr>
                  <th className="text-left py-6 px-5 font-bold text-white bg-[#3a3a3a] border border-[#555] w-[20%]">
                    Feature
                  </th>
                  {colHeaders.map((h) => (
                    <th
                      key={h}
                      className="text-center py-4 px-5 font-bold text-white bg-[#3a3a3a] border border-[#555] w-[26%]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* tbody */}
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}
                  >
                    <td className="py-4 px-5 font-bold text-[#222] border-b border-[#e5e5e5] align-top leading-snug">
                      {row.label}
                    </td>
                    {row.values.map((val, ci) => (
                      <td
                        key={ci}
                        className="py-4 px-5 text-center text-[#444] border-b border-[#e5e5e5] align-top leading-snug"
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Row count */}
          <p className="mt-3 text-xs text-muted">
            Showing 1 to {tableRows.length} of {tableRows.length} entries
          </p>

          {/* CTA */}
          <div className="flex justify-center mt-10">
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary font-semibold text-sm rounded hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Choose My Series
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
