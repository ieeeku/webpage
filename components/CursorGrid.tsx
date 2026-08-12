"use client";

import { useEffect, useRef } from "react";

export default function CursorGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip entirely for touch devices (no cursor to follow) and for
    // people who've asked for reduced motion.
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const withinBounds = y >= -80 && y <= rect.height + 80;

      el!.style.setProperty("--spot-x", `${x}px`);
      el!.style.setProperty("--spot-y", `${y}px`);
      el!.style.setProperty("--spot-opacity", withinBounds ? "1" : "0");
    }

    function handleLeave() {
      el!.style.setProperty("--spot-opacity", "0");
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="cursor-grid pointer-events-none absolute inset-0" />
  );
}
