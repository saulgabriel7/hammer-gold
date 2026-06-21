"use client";

import { useState } from "react";
import { useMuscleFilter } from "./useMuscleFilter";
import { cn } from "@/lib/utils";
import type { MuscleGroup } from "@/types/product";
import Image from "next/image";

/**
 * Maps each muscle-group filter to the corresponding overlay image.
 * Image 1 is the base (gray body); images 2-9 are per-group highlights.
 */
const muscleGroupImageMap: Record<MuscleGroup, string> = {
  Hip: "/assets/muscle-groups/2.jpg",
  Arm: "/assets/muscle-groups/3.jpg",
  Back: "/assets/muscle-groups/4.jpg",
  Abdominal: "/assets/muscle-groups/5.jpg",
  Shoulder: "/assets/muscle-groups/6.jpg",
  Leg: "/assets/muscle-groups/7.jpg",
  Chest: "/assets/muscle-groups/8.jpg",
  "Full Body": "/assets/muscle-groups/9.jpg",
};

const BUTTON_ORDER: MuscleGroup[] = [
  "Leg",
  "Shoulder",
  "Arm",
  "Chest",
  "Abdominal",
  "Back",
  "Hip",
  "Full Body",
];

/**
 * SVG path zones extracted from the reference site.
 * These are precise polygon outlines matching each muscle area on the body,
 * drawn inside a 1000×1333 viewBox that maps exactly onto the body images.
 */
interface MuscleZone {
  group: MuscleGroup;
  d: string;
}

const MUSCLE_ZONES: MuscleZone[] = [
  // Hip (glutes — back view)
  {
    group: "Hip",
    d: `m 691,616 34,-27 21,-1 16,21 1,52 -7,18 -37,9 -25,12 5,-58 z
        m 91,62 35,9 22,12 -5,-58 9,-24 -32,-29 -24,1 -11,16 -2,53 z`,
  },
  // Arm (biceps, triceps, forearms — front + back)
  {
    group: "Arm",
    d: `m 115.24,436.02 12.04,-13.76 20.64,-17.2 14.62,17.2 -6.02,53.32 -12.9,80.84 -37.84,77.4 -12.9,-3.44 35.26,-92.02 -6.88,-54.18 z
        m 194.36,-13.76 13.76,-18.06 22.36,17.2 9.46,14.62 -6.88,91.16 -2.58,7.74 34.4,96.32 -10.32,4.3 -39.56,-78.26 z
        m 355.18,11.18 22.36,-14.62 9.46,7.74 v 59.34 l -18.06,42.14 3.44,36.98 -47.3,67.94 -8.6,-6.02 8.6,-60.2 19.78,-52.46 2.58,-35.26 z
        m 171.14,-7.74 10.32,-9.46 23.22,16.34 9.46,49.88 6.02,34.4 18.92,56.76 7.74,55.04 -6.88,4.3 -49.88,-69.66 0.86,-32.68 -16.34,-45.58 z`,
  },
  // Back (traps, lats, rhomboids — back view + small front areas)
  {
    group: "Back",
    d: `m 172.86,344 30.1,-17.2 4.3,17.2 -21.5,6.88 z
        m 93.74,0.86 3.44,-17.2 28.38,15.48 -9.46,7.74 z
        m 480.74,-46.44 13.76,-9.46 14.62,0.86 12.9,11.18 1.72,26.66 34.4,18.06 -1.72,10.32 -13.76,12.9 -9.46,66.22 0.86,1.72 h 17.2 l 12.9,-8.6 4.3,13.76 -12.04,57.62 -23.22,28.38 2.58,24.08 -2.58,2.58 -18.06,-31.82 -1.72,-36.98 -7.74,-6.02 H 761.1 l -5.16,6.88 -1.72,32.68 -16.34,33.54 -5.16,-0.86 3.44,-22.36 -22.36,-27.52 -11.18,-50.74 v -23.22 l 12.9,8.6 h 14.62 l 6.88,-1.72 -11.18,-63.64 -14.62,-17.2 -3.44,-7.74 36.98,-17.2 z`,
  },
  // Abdominal (abs, obliques — front + small back areas)
  {
    group: "Abdominal",
    d: `m 175,470 26,-19 30,-14 h 11 l 32,14 22,21 -2,19 -2,5 2,18 3,24 13,29 -18,30 -13,-1 -37,48 -11,-1 -28,-38 -8,-8 h -10 l -22,-29 13,-23 2,-20 3,-31 z
        m 541,46 16,24 -4,11 -22,3 z
        m 87,24 18,-27 9,41 -21,-2 z`,
  },
  // Shoulder (deltoids — front + back)
  {
    group: "Shoulder",
    d: `m 154.8,342.28 25.8,15.48 -14.62,30.1 -22.36,9.46 -12.04,17.2 v -43.86 z
        m 139.32,18.06 23.22,-16.34 24.08,26.66 1.72,44.72 L 331.1,396.46 307.02,387 Z
        m 389.58,-7.74 14.62,-3.44 18.06,17.2 -0.86,8.6 -10.32,5.16 -6.88,23.22 -27.52,22.36 -2.58,-44.72 z
        m 132.44,14.62 2.58,6.88 11.18,6.88 7.74,20.64 28.38,22.36 0.86,-43.86 -18.06,-26.66 -12.04,-3.44 z`,
  },
  // Leg (quads, hamstrings, calves — front + back)
  {
    group: "Leg",
    d: `m 164.26,577.92 9.46,9.46 47.3,117.82 0.86,38.7 -18.06,-50.74 h -6.88 l 7.74,51.6 -11.18,67.08 -14.62,21.5 -27.52,-82.56 6.88,-47.3 -6.88,-7.74 -6.02,-61.06 z
        m 138.46,9.46 -49.02,117.82 -2.58,39.56 18.92,-52.46 6.88,4.3 -8.6,47.3 12.9,66.22 15.48,23.22 24.08,-86.86 -5.16,-43 6.02,-11.18 7.74,-57.62 -19.78,-56.76 z
        m -132.44,296.7 -9.46,69.66 31.82,110.94 17.2,6.88 -16.34,-62.78 16.34,45.58 v -62.78 l 10.32,-28.38 2.58,-25.8 -9.46,-31.82 -4.3,-8.6 12.9,-24.08 -1.72,-24.08 -20.64,41.28 1.72,24.08 6.88,2.58 -6.02,39.56 -12.04,-29.24 z
        m 83.42,-37.84 -1.72,26.66 13.76,28.38 -14.62,36.98 1.72,27.52 10.32,24.94 -1.72,62.78 v 17.2 l 21.5,-6.88 30.1,-112.66 -9.46,-67.08 -21.5,47.3 -15.48,-6.88 8.6,-34.4 z
        m 462.68,9.46 8.6,6.02 -0.86,88.58 4.3,30.1 24.08,24.94 0.86,12.9 -8.6,98.9 -6.88,-2.58 -1.72,-58.48 -14.62,-60.2 -18.06,-37.84 4.3,-62.78 8.6,-17.2 z
        m 12.04,-159.1 9.46,20.64 0.86,50.74 12.9,33.54 -0.86,79.12 -21.5,-36.98 -13.76,-70.52 z
        m 77.4,0 -8.6,20.64 v 49.88 l -14.62,35.26 3.44,76.54 18.06,-33.54 12.9,-70.52 z
        m -21.5,307.02 19.78,-17.2 6.88,-35.26 V 860 l 6.88,-4.3 1.72,13.76 8.6,29.24 2.58,61.92 -14.62,29.24 -2.58,8.6 -14.62,64.5 v 51.6 l -9.46,1.72 -0.86,-61.06 z`,
  },
  // Chest (pecs — front + small back areas)
  {
    group: "Chest",
    d: `m 187.29844,356.35353 34.05427,4.8649 8.51356,63.24363 -34.05426,20.6758 -23.10825,-9.72979 -9.72979,-29.18937 -12.16224,-9.72979 21.89203,-6.08111 z
        m 66.89231,7.29735 30.40559,-6.08112 15.8109,30.40559 20.67581,8.51357 -13.37846,13.37846 -4.8649,25.5407 -25.54069,8.51357 -35.27049,-19.45958 z
        m 382.89422,24.32447 17.02713,-12.16224 13.37846,52.29762 -23.10825,1.21622 -17.02713,-18.24335 z
        m 107.02768,-10.94601 -10.94601,52.29761 h 25.54069 l 13.37846,-20.6758 -8.51356,-10.94601 -1.21622,-12.16224 z`,
  },
];

export default function MuscleFilter() {
  const { activeFilter, setFilter, clearFilter } = useMuscleFilter();
  const [hoverGroup, setHoverGroup] = useState<MuscleGroup | null>(null);

  // Show overlay for hover OR active selection (hover takes priority)
  const visibleGroup = hoverGroup || activeFilter;

  const activeImage = visibleGroup ? muscleGroupImageMap[visibleGroup] : null;

  return (
    <section id="muscle-filter" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A2E] tracking-tight">
            Choose By Muscle Groups
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {BUTTON_ORDER.map((group) => (
            <button
              key={group}
              type="button"
              onClick={() =>
                activeFilter === group ? clearFilter() : setFilter(group)
              }
              onMouseEnter={() => setHoverGroup(group)}
              onMouseLeave={() => setHoverGroup(null)}
              className={cn(
                "rounded px-4 py-2 text-sm font-medium transition-all duration-200",
                activeFilter === group
                  ? "bg-[#E0E0E0] text-[#1A1A2E]"
                  : "bg-[#F0F0F0] text-[#555] hover:bg-[#E0E0E0] hover:text-[#1A1A2E]"
              )}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Body diagram with precise SVG hover zones */}
        <div className="relative mx-auto select-none" style={{ maxWidth: 520 }}>
          {/* Base body image (always visible) */}
          <Image
            src="/assets/muscle-groups/1.jpg"
            alt="Human body muscle diagram"
            width={1000}
            height={1333}
            className="w-full h-auto pointer-events-none"
            priority
            draggable={false}
          />

          {/* Overlay images — one per muscle group */}
          {BUTTON_ORDER.map((group) => (
            <Image
              key={group}
              src={muscleGroupImageMap[group]}
              alt={`${group} muscles highlighted`}
              width={1000}
              height={1333}
              className={cn(
                "absolute inset-0 w-full h-auto pointer-events-none transition-opacity duration-300",
                activeImage === muscleGroupImageMap[group]
                  ? "opacity-100"
                  : "opacity-0"
              )}
              draggable={false}
            />
          ))}

          {/* SVG overlay with precise hover zones matching muscle contours */}
          <svg
            viewBox="0 0 1000 1333"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full"
          >
            {MUSCLE_ZONES.map((zone, i) => (
              <a
                key={`${zone.group}-${i}`}
                href={`#products`}
                onClick={(e) => {
                  e.preventDefault();
                  if (activeFilter === zone.group) {
                    clearFilter();
                  } else {
                    setFilter(zone.group);
                  }
                }}
              >
                <path
                  d={zone.d}
                  fill="transparent"
                  stroke="none"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoverGroup(zone.group)}
                  onMouseLeave={() => setHoverGroup(null)}
                />
              </a>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
