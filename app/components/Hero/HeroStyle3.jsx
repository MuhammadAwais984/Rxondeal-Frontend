"use client";

import { HERO_VARIANTS } from "@/app/components/heroVariants";

export default function HeroStyle3({
  badgeText,
  title,
  subTitle,
  variant = "default",
}) {
  const v = HERO_VARIANTS[variant] ?? HERO_VARIANTS.default;
  return (
    <section
      className="relative overflow-hidden text-white py-24 md:py-36"
      style={{ background: v.bg }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="border-l-4 border-white/40 pl-6 md:pl-10">
          {badgeText && (
            <div className="mb-4 text-xs uppercase tracking-widest text-white/70">
              {badgeText}
            </div>
          )}

          <h1 className="text-4xl md:text-6xl leading-tight mb-6">{title}</h1>

          {subTitle && (
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              {subTitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
