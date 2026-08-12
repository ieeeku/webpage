"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setCursorPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[70vh] w-full select-none flex-col justify-between overflow-hidden bg-white px-4 py-6 text-[#12181f] sm:px-6 md:px-8"
    >
      <div className="absolute inset-0 grid-texture pointer-events-none" />

      <div
        className="absolute inset-0 cursor-grid pointer-events-none"
        style={
          {
            "--spot-x": `${cursorPos.x}px`,
            "--spot-y": `${cursorPos.y}px`,
            "--spot-opacity": cursorPos.opacity,
          } as React.CSSProperties
        }
      />

      <section className="relative z-10 mx-auto my-auto flex w-full max-w-2xl flex-col items-start py-8 sm:py-12">
        <div className="mb-6 inline-block rounded-sm bg-surface bg-white px-3 py-1">
          <p className="font-mono text-xs uppercase tracking-widest text-[#75787b]">
            4xx Errors: Client-Side Request Issues
          </p>
        </div>

        <h1 className="mb-4 font-mono text-5xl font-bold tracking-tight text-[#12181f] sm:text-7xl md:text-8xl">
          404<span className="text-[#00629b]">.</span>
        </h1>

        <h2 className="mb-3 text-lg font-semibold text-[#12181f] sm:text-xl md:text-2xl">
          Requested resource or page does not exist.
        </h2>

        <p className="mb-8 max-w-lg text-sm leading-relaxed text-[#75787b] sm:text-base">
          The link you followed may be broken, or the page may have been moved, renamed, or deleted from the server index.
        </p>

        <div className="mb-8 w-full scanline-divider" />

        <div className="w-full rounded-sm bg-surface bg-white p-4 shadow-sm sm:p-6">
          <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-[#75787b]">
            Suggested Navigation Options
          </h3>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-sm bg-[#00629b] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#004f7c] focus-visible:outline-none sm:w-auto"
            >
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex w-full items-center justify-center rounded-sm border border-[rgba(117,120,123,0.35)] bg-white px-5 py-2.5 text-sm font-medium text-[#12181f] transition-colors hover:bg-gray-50 focus-visible:outline-none sm:w-auto"
            >
              Previous Page
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
