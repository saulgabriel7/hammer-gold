"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap-config";

type AnimationSetup = () => void;

export function useScrollAnimation(setup: AnimationSetup) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(setup, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
