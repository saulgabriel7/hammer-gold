import { gsap, ScrollTrigger } from "./gsap-config";

export interface FadeInOptions {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  ease?: string;
}

export function createFadeIn(
  selector: gsap.DOMTarget,
  triggerSelector: gsap.DOMTarget,
  options: FadeInOptions = {}
): gsap.core.Tween {
  const {
    y = 40,
    duration = 0.7,
    delay = 0,
    stagger,
    start = "top 85%",
    ease = "power2.out",
  } = options;

  return gsap.fromTo(
    selector,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: triggerSelector,
        start,
        toggleActions: "play none none none",
      },
    }
  );
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
