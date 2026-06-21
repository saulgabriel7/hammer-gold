"use client";

import { useCallback, useRef, useState, useEffect } from "react";

export function useBeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragPosition, setDragPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const getPositionFromEvent = useCallback((clientY: number): number => {
    const container = containerRef.current;
    if (!container) return 50;

    const rect = container.getBoundingClientRect();
    const y = clientY - rect.top;
    const pct = (y / rect.height) * 100;
    return Math.min(100, Math.max(0, pct));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.button !== 0) return; // Only left-click / touch
      e.preventDefault();
      setIsDragging(true);
      setDragPosition(getPositionFromEvent(e.clientY));
    },
    [getPositionFromEvent]
  );

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      setDragPosition(getPositionFromEvent(e.clientY));
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, getPositionFromEvent]);

  return {
    dragPosition,
    isDragging,
    handlePointerDown,
    containerRef,
  };
}
