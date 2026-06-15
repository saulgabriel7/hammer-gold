"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We equipped our entire 15,000 sq ft facility with Hammer Gold machines. The build quality is exceptional — after 3 years of heavy commercial use, they still feel brand new.",
    author: "Marcus Chen",
    role: "Owner & Founder",
    company: "IronWorks Fitness, Singapore",
  },
  {
    quote:
      "The biomechanics on the C4 Revival series are the best I've seen at this price point. Our members consistently comment on how smooth the machines feel compared to competitors.",
    author: "Elena Kowalski",
    role: "Head of Operations",
    company: "FitZone Europe, Germany",
  },
  {
    quote:
      "From initial inquiry to container delivery, the team was professional and responsive. The custom color matching for our brand was a game-changer for our gym's aesthetic.",
    author: "James Okafor",
    role: "Managing Director",
    company: "Peak Performance Gyms, Nigeria",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const cards = sectionRef.current.querySelectorAll(".testimonial-card");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      id="testimonials"
      className="py-24 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Trusted by gym owners and fitness professionals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card rounded-2xl bg-white p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-primary/20 mb-6"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>

              <p className="text-text leading-relaxed mb-6">{t.quote}</p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-dark">{t.author}</p>
                <p className="text-sm text-muted">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
