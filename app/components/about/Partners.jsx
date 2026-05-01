"use client";
import { motion } from "framer-motion";

export default function Partners({ badgeText, title, subTitle, partners }) {
  if (!partners?.length) return null;

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          {badgeText && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-600 bg-emerald-50 rounded-full border border-emerald-100"
            >
              {badgeText}
            </motion.span>
          )}

          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
            >
              {title}
            </motion.h2>
          )}

          {subTitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-slate-500 font-light leading-relaxed"
            >
              {subTitle}
            </motion.p>
          )}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full relative z-10 bg-white border border-slate-100 rounded-3xl p-8 transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center">
                {p.title && (
                  <h3 className="text-xl font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {p.title}
                  </h3>
                )}

                {p.subTitle && (
                  <p className="mt-2 text-sm text-slate-400 group-hover:text-emerald-600 font-medium transition-colors">
                    {p.subTitle}
                  </p>
                )}

                {/* Animated Brand Gradient Border (OKLAB logic) */}
                <div className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-br from-[rgb(84,169,38)] via-[rgb(75,172,119)] to-[rgb(66,175,200)]" />
                <div className="absolute inset-0 rounded-3xl bg-white -z-10 group-hover:m-[2px] transition-all" />
              </div>

              {/* Floating shadow element behind the card */}
              <div className="absolute inset-x-8 bottom-0 h-10 bg-[rgb(84,169,38)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
