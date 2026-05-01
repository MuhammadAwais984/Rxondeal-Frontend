"use client";
import { motion } from "framer-motion";
import { HERO_VARIANTS } from "@/app/components/heroVariants";

export default function AboutHero({
  badgeText,
  title,
  subTitle,
  variant = "default",
}) {
  const v = HERO_VARIANTS[variant] ?? HERO_VARIANTS.default;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="relative overflow-hidden py-32 flex items-center justify-center text-center min-h-[60vh]"
      style={{ background: v.bg }}
    >
      {/* Dynamic Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Top Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/20 blur-[140px] rounded-full"
        />

        {/* Animated Bottom Glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-black/10 blur-[120px] rounded-full"
        />

        {/* Subtle Grid with Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:5rem_5rem]"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        {/* Badge */}
        {badgeText && (
          <motion.div
            variants={item}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md mb-8 ${v.badge}`}
          >
            <span className="w-2 h-2 rounded-full bg-current opacity-70 animate-pulse" />
            <span className="text-xs tracking-[0.25em] uppercase font-bold">
              {badgeText}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          variants={item}
          className={`text-5xl sm:text-7xl md:text-8xl leading-[1.02] tracking-tight mb-8 font-semibold ${v.title}`}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subTitle && (
          <motion.p
            variants={item}
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90 ${v.subtitle}`}
          >
            {subTitle}
          </motion.p>
        )}
      </motion.div>

      {/* Bottom Fade Transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent"
      />
    </section>
  );
}
