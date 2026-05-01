"use client";
import { CheckCircle2, Info } from "lucide-react";

export default function PointsSection({ title, subText, points, note }) {
  if (!title && !points?.length) return null;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Header Content - Left Span */}
          <div className="lg:col-span-5">
            {title && (
              <div className="sticky top-24">
                <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-6">
                  {title}
                </h2>
                <div className="h-1.5 w-16 bg-emerald-500 rounded-full mb-8" />

                {subText && (
                  <div className="space-y-4">
                    {subText.split("\n\n").map((p, i) => (
                      <p
                        key={i}
                        className="text-slate-500 text-lg font-medium leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Points Grid - Right Span */}
          <div className="lg:col-span-7">
            {points?.length > 0 && (
              <div className="grid gap-4">
                {points.map((point, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-100"
                  >
                    <div className="mt-1 bg-white p-1 rounded-lg shadow-sm border border-slate-200 group-hover:border-emerald-200 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="text-slate-700 font-semibold text-sm md:text-base leading-relaxed">
                      {point.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Footnote / Note Section */}
            {note && (
              <div className="mt-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-100 flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100 flex-shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <p className="text-emerald-800 text-sm font-bold leading-relaxed italic">
                  {note}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
