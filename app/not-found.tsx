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
      className="relative  w-full bg-white text-[#12181f] flex flex-col justify-between overflow-hidden px-4 md:px-8 py-6 select-none"
    >
      {/* Background Dot Texture */}
      <div className="absolute inset-0 grid-texture pointer-events-none" />

      {/* Interactive Accent Grid Spotlight */}
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

      {/* Main Content Area */}
      <section className="relative z-10 w-full max-w-2xl mx-auto my-auto py-12 flex flex-col items-start">
        {/* Large Technical Code Badge */}
        <div className="inline-block bg-surface bg-white px-3 py-1 mb-6 rounded-sm">
          <p className="font-mono text-xs uppercase tracking-widest text-[#75787b]">
          4xx Errors: Client-Side Request Issues
          </p>
        </div>

        <h1 className="font-mono text-6xl sm:text-8xl font-bold tracking-tight text-[#12181f] mb-4">
          404<span className="text-[#00629b]">.</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-[#12181f] mb-3">
          Requested resource or page does not exist.
        </h2>

        <p className="text-base text-[#75787b] leading-relaxed mb-8 max-w-lg">
          The link you followed may be broken, or the page may have been moved, renamed, or deleted from the server index.
        </p>

        {/* Scanline Divider */}
        <div className="scanline-divider w-full mb-8" />

        {/* Navigation & Search Actions Container */}
        <div className="w-full bg-surface bg-white p-6 rounded-sm shadow-sm">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#75787b] mb-4">
            Suggested Navigation Options
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#00629b] text-white text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-[#004f7c] transition-colors focus-visible:outline-none"
            >
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center bg-white text-[#12181f] border border-[rgba(117,120,123,0.35)] text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-gray-50 transition-colors focus-visible:outline-none"
            >
              Previous Page
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
