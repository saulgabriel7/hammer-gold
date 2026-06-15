"use client";

import { useCallback, useRef, useState } from "react";

export function useBeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragPosition, setDragPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const getPositionFromEvent = useCallback(
    (clientX: number): number => {
      const container = containerRef.current;
      if (!container) return 50;

      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = (x / rect.width) * 100;
      return Math.min(100, Math.max(0, pct));
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);
      const el = containerRef.current;
      if (el) el.setPointerCapture(e.pointerId);
      setDragPosition(getPositionFromEvent(e.clientX));
    },
    [getPositionFromEvent]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      e.preventDefault();
      setDragPosition(getPositionFromEvent(e.clientX));
    },
    [isDragging, getPositionFromEvent]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      setIsDragging(false);
      const el = containerRef.current;
      if (el) el.releasePointerCapture(e.pointerId);
    },
    []
  );

  return {
    dragPosition,
    isDragging,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    containerRef,
  };
}
