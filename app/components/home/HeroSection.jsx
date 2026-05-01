"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown, Sparkles } from "lucide-react";
import { BRAND_GRADIENT as G } from "./constants";

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function HeroSection({ hero }) {
  if (!hero) return null;

  const imgSrc = hero.image?.[0]?.url ? `${BASE}${hero.image[0].url}` : null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-lime-50/40 to-teal-50/60">
      {/* ── RESPONSIVE BACKGROUND BLOBS ── */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-gradient-to-br from-lime-100/60 to-teal-100/40 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none z-0"
      />

      {/* Grid Pattern: Scaled for density */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,#059669 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* ── LEFT: TEXT CONTENT (Stacked on Mobile) ── */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {hero.badgeText && (
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-[11px] md:text-xs font-bold tracking-wide mb-6 md:mb-8"
                style={{ background: G }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {hero.badgeText}
              </motion.div>
            )}

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-semibold leading-[1.1] text-slate-900 mb-6 tracking-tight"
            >
              {hero.tiltle}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-slate-500 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {hero.subTitle}
            </motion.p>

            {/* Buttons: Stacked on tiny screens, Row on tablet+ */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10"
            >
              {hero.buttons?.map((btn, i) => (
                <Link
                  key={btn.id}
                  href={btn.link ?? "/"}
                  className={`
                    inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-300
                    ${
                      i === 0
                        ? "text-white shadow-lg shadow-lime-200/50 hover:-translate-y-1 hover:shadow-xl active:scale-95"
                        : "border-2 border-slate-200 text-slate-600 hover:border-lime-500 hover:text-lime-600 bg-white/50 backdrop-blur-sm"
                    }
                  `}
                  style={i === 0 ? { background: G } : {}}
                >
                  {i === 1 && <Play className="w-4 h-4 fill-current" />}
                  {btn.text}
                  {i === 0 && <ArrowRight className="w-4 h-4" />}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: IMAGE / DASHBOARD (Top on Mobile) ── */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 w-full max-w-2xl order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative p-2"
            >
              {/* Outer Glow */}
              <div
                className="absolute inset-0 rounded-[2.5rem] blur-3xl scale-105 opacity-20 pointer-events-none"
                style={{ background: G }}
              />

              {imgSrc ? (
                <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 bg-white/80 backdrop-blur-sm p-1">
                  <img
                    src={imgSrc}
                    alt="Dashboard Preview"
                    className="w-full h-full object-cover rounded-[1.8rem]"
                  />
                </div>
              ) : (
                <div className="relative aspect-video bg-slate-100 rounded-3xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                  Preview Image
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator: Hidden on mobile to save space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
