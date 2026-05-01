"use client";
import { ArrowUpRight } from "lucide-react";
import { FEATURE_ICONS, BRAND_GRADIENT as G } from "./constants";

/**
 * FeatureCard — single card
 */
function FeatureCard({ feature, index }) {
  const Icon = FEATURE_ICONS[feature.icons];
  return (
    <div className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-lime-200 transition-all duration-500 hover:shadow-2xl hover:shadow-lime-50/80 hover:-translate-y-1 overflow-hidden">
      {/* Hover tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50/0 to-teal-50/0 group-hover:from-lime-50/60 group-hover:to-teal-50/40 transition-all duration-500 rounded-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          {/* Icon */}
          {Icon && (
            <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-500 flex items-center justify-center group-hover:bg-lime-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <Icon className="w-6 h-6" />{" "}
            </div>
          )}
          {/* Tag */}
          {feature.topRightext && (
            <span className="text-xs font-semibold text-lime-600 bg-lime-50 px-3 py-1 rounded-full border border-lime-100">
              {feature.topRightext}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          {feature.label}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed font-light">
          {feature.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"
        style={{ background: G }}
      />
    </div>
  );
}

/**
 * FeaturesSection
 * Props: features — array of { label, description, topRightext }
 */
export default function FeaturesSection({ features, badgeText, title }) {
  if (!features?.length) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-lime-600 text-xs font-bold tracking-[0.2em] uppercase">
            {badgeText}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4 leading-tight">
            {title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <FeatureCard key={idx} feature={f} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
