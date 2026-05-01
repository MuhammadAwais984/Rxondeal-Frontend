"use client";

import { motion } from "framer-motion";

import { HERO_VARIANTS } from "@/app/components/heroVariants";

export default function HeroStyle2({
  badgeText,
  title,
  subTitle,
  image,
  variant = "default",
}) {
  const v = HERO_VARIANTS[variant] ?? HERO_VARIANTS.default;
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative overflow-hidden py-20 md:py-32 text-white"
      style={{ background: v.bg }}
    >
      {/* Background Pulse Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/10 blur-[140px] rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          {badgeText && (
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs tracking-widest uppercase"
            >
              {badgeText}
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-semibold leading-tight mb-6"
          >
            {title}
          </motion.h1>

          {subTitle && (
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 max-w-lg leading-relaxed"
            >
              {subTitle}
            </motion.p>
          )}
        </div>

        {/* RIGHT (Glass Block Visual) */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative group"
        >
          <div className="h-[320px] md:h-[380px] rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <img
              src={image}
              alt="Pharmacy Hero"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-emerald-500/10 mix-blend-multiply pointer-events-none" />
          </div>

          {/* Animated Floating Accent */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl -z-10"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  );
}
