"use client";

import { useMuscleFilter } from "./useMuscleFilter";
import { muscleGroupDefs, getActivePathIds } from "./muscle-data";
import { cn } from "@/lib/utils";

const ACTIVE_FILL = "#CC0000";
const DEFAULT_FILL = "#E5E7EB";

function pathFill(pathId: string, activeIds: string[]): string {
  return activeIds.includes(pathId) ? ACTIVE_FILL : DEFAULT_FILL;
}

export default function MuscleFilter() {
  const { activeFilter, setFilter, clearFilter } = useMuscleFilter();
  const activeIds = getActivePathIds(activeFilter);

  return (
    <section id="muscle-filter" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Shop by Muscle Group
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Select a muscle group to find the right equipment for your training
            goals.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {muscleGroupDefs
            .filter((d) => d.name !== "Full Body")
            .map((group) => (
              <button
                key={group.name}
                type="button"
                onClick={() => setFilter(group.name)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                  activeFilter === group.name
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white text-dark border border-border hover:border-primary hover:text-primary"
                )}
              >
                {group.name}
              </button>
            ))}
          {activeFilter && (
            <button
              type="button"
              onClick={clearFilter}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-muted hover:text-dark transition-colors"
            >
              ✕ Clear
            </button>
          )}
        </div>

        {/* SVG body diagrams */}
        <div className="flex items-center justify-center gap-8 sm:gap-16">
          {/* Front view */}
          <div className="text-center">
            <p className="text-sm font-medium text-muted mb-4 uppercase tracking-wider">
              Front
            </p>
            <svg
              viewBox="0 0 200 450"
              className="w-32 sm:w-44 h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Head */}
              <ellipse cx="100" cy="35" rx="22" ry="28" fill="#D1D5DB" />
              {/* Neck */}
              <rect x="90" y="58" width="20" height="15" rx="4" fill="#D1D5DB" />

              {/* Shoulders */}
              <path
                id="front-shoulder"
                d="M60 75 Q50 78 45 95 L55 100 Q62 85 70 80 Z M140 75 Q150 78 155 95 L145 100 Q138 85 130 80 Z"
                fill={pathFill("front-shoulder", activeIds)}
                style={{ transition: "fill 0.3s" }}
              />

              {/* Chest */}
              <path
                id="front-chest"
                d="M65 80 Q100 75 135 80 L135 120 Q100 130 65 120 Z"
                fill={pathFill("front-chest", activeIds)}
                style={{ transition: "fill 0.3s" }}
              />

              {/* Abs */}
              <path
                id="front-abs"
                d="M72 122 L128 122 L125 200 Q100 210 75 200 Z"
                fill={pathFill("front-abs", activeIds)}
                style={{ transition: "fill 0.3s" }}
              />

              {/* Arms */}
              <path
                id="front-arm"
                d="M45 98 L38 170 L55 175 L60 105 Z M155 98 L162 170 L145 175 L140 105 Z"
                fill={pathFill("front-arm", activeIds)}
                style={{ transition: "fill 0.3s" }}
              />

              {/* Hands */}
              <ellipse cx="44" cy="185" rx="10" ry="14" fill="#D1D5DB" />
              <ellipse cx="156" cy="185" rx="10" ry="14" fill="#D1D5DB" />

              {/* Legs */}
              <path
                id="front-leg"
                d="M78 205 L70 350 L90 355 L100 215 Z M122 205 L130 350 L110 355 L100 215 Z"
                fill={pathFill("front-leg", activeIds)}
                style={{ transition: "fill 0.3s" }}
              />

              {/* Feet */}
              <ellipse cx="80" cy="365" rx="14" ry="8" fill="#D1D5DB" />
              <ellipse cx="120" cy="365" rx="14" ry="8" fill="#D1D5DB" />

              {/* Outline */}
              <path
                d="M100 7 Q130 7 122 35 Q135 55 140 75 Q155 78 158 98 L165 175 Q168 195 156 200 L155 185 L145 175 L140 105 L135 80 L135 120 Q100 130 65 120 L65 80 L60 105 L55 175 L45 185 L44 200 Q32 195 35 175 L42 98 Q45 78 60 75 Q65 55 78 35 Q70 7 100 7 Z"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Back view */}
          <div className="text-center">
            <p className="text-sm font-medium text-muted mb-4 uppercase tracking-wider">
              Back
            </p>
            <svg
              viewBox="0 0 200 450"
              className="w-32 sm:w-44 h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Head */}
              <ellipse cx="100" cy="35" rx="22" ry="28" fill="#D1D5DB" />
              {/* Neck */}
              <rect x="90" y="58" width="20" height="15" rx="4" fill="#D1D5DB" />

              {/* Back / Shoulders */}
              <path
                id="back-shoulder"
                d="M60 75 Q100 70 140 75 L140 140 Q100 150 60 140 Z"
                fill={pathFill("back-shoulder", activeIds)}
                style={{ transition: "fill 0.3s" }}
              />

              {/* Hip / Glutes */}
              <path
                id="back-hip"
                d="M70 155 Q100 150 130 155 L128 210 Q100 220 72 210 Z"
                fill={pathFill("back-hip", activeIds)}
                style={{ transition: "fill 0.3s" }}
              />

              {/* Arms */}
              <path
                id="back-arm"
                d="M45 98 L38 170 L55 175 L60 105 Z M155 98 L162 170 L145 175 L140 105 Z"
                fill={pathFill("back-arm", activeIds)}
                style={{ transition: "fill 0.3s" }}
              />

              {/* Shoulders (deltoids) */}
              <path
                d="M60 75 Q50 78 45 95 L55 100 Q62 85 70 80 Z M140 75 Q150 78 155 95 L145 100 Q138 85 130 80 Z"
                fill={pathFill("back-shoulder", activeIds)}
                style={{ transition: "fill 0.3s" }}
              />

              {/* Hands */}
              <ellipse cx="44" cy="185" rx="10" ry="14" fill="#D1D5DB" />
              <ellipse cx="156" cy="185" rx="10" ry="14" fill="#D1D5DB" />

              {/* Legs */}
              <path
                id="back-leg"
                d="M78 215 L70 350 L90 355 L100 225 Z M122 215 L130 350 L110 355 L100 225 Z"
                fill={pathFill("back-leg", activeIds)}
                style={{ transition: "fill 0.3s" }}
              />

              {/* Feet */}
              <ellipse cx="80" cy="365" rx="14" ry="8" fill="#D1D5DB" />
              <ellipse cx="120" cy="365" rx="14" ry="8" fill="#D1D5DB" />

              {/* Outline */}
              <path
                d="M100 7 Q130 7 122 35 Q135 55 140 75 Q155 78 158 98 L165 175 Q168 195 156 200 L155 185 L145 175 L140 105 L140 75 Q100 70 60 75 L60 105 L55 175 L45 185 L44 200 Q32 195 35 175 L42 98 Q45 78 60 75 Q65 55 78 35 Q70 7 100 7 Z"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
