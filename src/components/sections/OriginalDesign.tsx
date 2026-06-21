"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function OriginalDesign() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const duration = 0.8;

      gsap.from("[data-design-header]", {
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

      gsap.from("[data-design-left]", {
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

      gsap.from("[data-design-right]", {
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

      gsap.from("[data-design-cta]", {
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
      id="original-design"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div data-design-header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A2E] tracking-tight mb-4 uppercase font-sans">
            <span className="text-[#CC0000]">100%</span> Original Design Since 1997
          </h2>
          <div className="w-20 h-0.5 bg-[#CC0000] mx-auto mb-6" />
          <p className="text-[#4B5563] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {"Because Great Design Makes Great Machines."}
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div data-design-left className="w-full order-2 lg:order-1">
            <div className="relative aspect-[1/1] w-full overflow-hidden rounded-2xl shadow-md border border-gray-100 max-w-[480px] mx-auto lg:max-w-none">
              <Image
                src="/assets/images/original_design.png"
                alt="YR Fitness original design details and weight stack"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div data-design-right className="flex flex-col justify-center order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] leading-tight mb-6">
              Pulley Output Ratio
            </h3>
            <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
              {"Leveraging the power of physics, we've tailored our pulley output ratio for optimal training. Take our butterfly machines: a 2:1 ratio means a 70kg weight selection delivers a 35kg training load. This higher ratio enhances your workout and saves on weight plate costs."}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div data-design-cta className="text-center mt-16">
          <a
            href="#series"
            className="inline-block border-2 border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000] hover:text-white transition-all duration-300 font-semibold px-8 py-3 rounded-md text-sm tracking-wider"
          >
            More About Design
          </a>
        </div>
      </div>
    </section>
  );
}
