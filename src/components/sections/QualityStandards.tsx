"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const certifications = [
  {
    name: "CE",
    description: "European Conformity",
    icon: "CE",
  },
  {
    name: "TÜV",
    description: "Technical Inspection",
    icon: "TÜV",
  },
  {
    name: "ISO",
    description: "ISO 9001:2015",
    icon: "ISO",
  },
];

export default function QualityStandards() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".quality-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".cert-badge",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="quality"
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://www.yanrefitness.com/wp-content/uploads/2021/03/yr-fitness-design-before.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-dark/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="quality-content text-center text-white max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Quality Without Compromise
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            Every machine passes through 14-point quality inspection. Our
            equipment meets the strictest international standards for safety,
            durability, and biomechanical accuracy.
          </p>

          {/* Certification badges */}
          <div className="flex items-center justify-center gap-8 mb-12">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="cert-badge flex flex-col items-center gap-2"
              >
                <div className="w-20 h-20 rounded-full border-2 border-primary bg-white/10 backdrop-blur flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {cert.icon}
                  </span>
                </div>
                <span className="text-sm text-gray-400">
                  {cert.description}
                </span>
              </div>
            ))}
          </div>

          <a
            href="/strength-equipment#comparison"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Full Certifications
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
