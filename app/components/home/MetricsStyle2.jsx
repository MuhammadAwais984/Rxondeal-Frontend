"use client";

import React from "react";

/**
 * High-End Metrics Section
 * Aesthetic: Glassmorphism, Soft Depth, Fluid Motion
 */
export default function MetricsStyle2({ matrics }) {
  if (!matrics?.length) return null;

  return (
    <section className="relative py-28 overflow-hidden bg-[#fafafa]">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-50/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {matrics.map((m, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl border border-white bg-white/40 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] hover:-translate-y-2"
            >
              {/* Glass Reflection Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-4xl tracking-tighter text-slate-900 mb-4">
                  {m.title}
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {m.subTitle}
                </h3>

                <p className="text-slate-500 leading-relaxed font-light">
                  {m.subText}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-4 right-4 text-slate-100 transition-colors duration-500 group-hover:text-indigo-100">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
