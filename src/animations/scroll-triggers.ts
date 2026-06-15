import { gsap, ScrollTrigger } from "./gsap-config";

interface FadeInOptions {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
}

export function createFadeIn(
  element: Element,
  options: FadeInOptions = {}
): ScrollTrigger {
  const { y = 40, duration = 0.8, delay = 0, start = "top 85%" } = options;

  gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    }
  );

  return ScrollTrigger.getAll().pop()!;
}

interface StaggerOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
}

export function createStagger(
  elements: Element[],
  options: StaggerOptions = {}
): ScrollTrigger {
  const {
    y = 30,
    duration = 0.6,
    stagger = 0.1,
    start = "top 85%",
  } = options;

  gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements[0],
        start,
        toggleActions: "play none none none",
      },
    }
  );

  return ScrollTrigger.getAll().pop()!;
}

interface HeaderTriggerOptions {
  scrollThreshold?: number;
  onActivate?: () => void;
  onDeactivate?: () => void;
}

export function createHeaderTrigger(
  header: Element,
  options: HeaderTriggerOptions = {}
): ScrollTrigger {
  const { scrollThreshold = 80 } = options;

  return ScrollTrigger.create({
    trigger: document.body,
    start: `${scrollThreshold}px top`,
    onEnter: () => {
      header.classList.add("header-scrolled");
      options.onActivate?.();
    },
    onLeaveBack: () => {
      header.classList.remove("header-scrolled");
      options.onDeactivate?.();
    },
  });
}
