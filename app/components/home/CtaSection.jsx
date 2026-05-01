"use client";
import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { BRAND_GRADIENT as G } from "./constants";

/**
 * CtaSection — Full-width gradient CTA footer band.
 * No Strapi data; content is static.
 */
export default function CtaSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: G }}
    >
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-lime-200 text-xs font-semibold mb-8">
          <Sparkles className="w-3.5 h-3.5" /> No credit card required
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
          Start saving on
          <br />
          <em className="text-lime-300">pharma costs today</em>
        </h2>

        <p className="text-white/70 font-light text-lg mb-12 max-w-xl mx-auto">
          Join thousands of pharmacies that have modernised their procurement
          with RxonDeal.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-white text-lime-800 font-bold text-sm hover:bg-lime-50 transition-all hover:-translate-y-0.5 shadow-2xl"
          >
            Create Free Account <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl border-2 border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all"
          >
            <MessageSquare className="w-4 h-4" /> Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
