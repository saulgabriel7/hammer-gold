"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface SeriesRow {
  label: string;
  values: [string, string, string];
}

const seriesNames = ["73 Tough", "61A Racing", "C4 Revival"] as const;

const rows: SeriesRow[] = [
  { label: "Launch Year", values: ["2019", "2020", "2023"] },
  {
    label: "Design Focus",
    values: ["Durability", "Aesthetics", "Biomechanics"],
  },
  {
    label: "Frame",
    values: [
      "11-gauge steel",
      "Reinforced alloy",
      "Q235 + custom finish",
    ],
  },
  {
    label: "Adjustability",
    values: ["Standard", "Multi-position", "Micro-adjust"],
  },
  {
    label: "Durability",
    values: ["★★★★★", "★★★★☆", "★★★★★"],
  },
];

const highlightCol = 2; // C4 Revival

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} id="comparison" className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Compare Our Series
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Find the perfect line for your facility.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-muted uppercase tracking-wider w-[25%]">
                  Feature
                </th>
                {seriesNames.map((name, i) => (
                  <th
                    key={name}
                    className={cn(
                      "text-center py-4 px-6 text-sm font-bold uppercase tracking-wider w-[25%]",
                      i === highlightCol
                        ? "text-primary border-t-4 border-t-primary bg-red-50/50"
                        : "text-dark"
                    )}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr
                  key={row.label}
                  className={cn(
                    rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  )}
                >
                  <td className="py-4 px-6 text-sm font-medium text-dark">
                    {row.label}
                  </td>
                  {row.values.map((val, colIdx) => (
                    <td
                      key={colIdx}
                      className={cn(
                        "text-center py-4 px-6 text-sm",
                        colIdx === highlightCol
                          ? "bg-red-50/30 font-semibold text-dark"
                          : "text-muted"
                      )}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
