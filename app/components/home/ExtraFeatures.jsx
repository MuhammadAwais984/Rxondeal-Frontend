"use client";
import { FEATURE_ICONS, BRAND_GRADIENT as G } from "./constants";

function ExtraFeatureCard({ feature, index }) {
  const Icon = FEATURE_ICONS[feature.icons];
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="group flex gap-6 py-8 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 px-4 rounded-2xl transition-all duration-300">
      {/* Number */}
      <span
        className="text-4xl font-light leading-none select-none flex-shrink-0 mt-1"
        style={{
          backgroundImage: G,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {num}
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-3">
          {Icon && (
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0"
              style={{ background: G }}
            >
              <Icon className="w-4 h-4" />
            </div>
          )}
          <h3 className="text-lg font-semibold text-slate-900">
            {feature.title}
          </h3>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function ExtraFeatures({ extraFeatures, badgeText, title }) {
  if (!extraFeatures?.length) return null;

  const half = Math.ceil(extraFeatures.length / 2);
  const col1 = extraFeatures.slice(0, half);
  const col2 = extraFeatures.slice(half);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-lime-600 text-xs font-bold tracking-[0.2em] uppercase">
            {badgeText}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4 leading-tight">
            {title}
          </h2>
        </div>

        {/* Two column list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          <div>
            {col1.map((f, idx) => (
              <ExtraFeatureCard key={idx} feature={f} index={idx} />
            ))}
          </div>
          <div>
            {col2.map((f, idx) => (
              <ExtraFeatureCard key={idx} feature={f} index={half + idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
