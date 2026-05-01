"use client";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AccountForcement({
  badgeText,
  title,
  subTitle,
  buttons,
}) {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-10 right-0 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-emerald-900/10 border border-white/50"
          style={{
            background:
              "linear-gradient(135deg, rgb(84,169,38) 0%, rgb(66,175,200) 100%)",
          }}
        >
          {/* Internal Glass Reflection */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

          <div className="relative z-20 max-w-2xl">
            {/* Badge */}
            {badgeText && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/10 backdrop-blur-md border border-white/10 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-white/90" />
                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-white">
                  {badgeText}
                </span>
              </div>
            )}

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
              {title}
            </h2>

            {/* Subtitle */}
            {subTitle && (
              <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-xl">
                {subTitle}
              </p>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {buttons?.map((btn, i) => (
                <Link
                  key={btn.id}
                  href={btn.link ?? "/"}
                  className={`
                    group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300
                    ${
                      i === 0
                        ? "bg-white text-emerald-700 hover:bg-emerald-50 hover:shadow-lg hover:shadow-black/5 active:scale-95"
                        : "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 active:scale-95"
                    }
                  `}
                >
                  {btn.text}
                  {i === 0 && (
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Decorative Graphic Element (Abstract shape) */}
          <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
