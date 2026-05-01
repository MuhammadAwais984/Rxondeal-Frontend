"use client";
import { CheckCircle2 } from "lucide-react";
import { BRAND_GRADIENT as G } from "./constants";

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export function PicSection1({ data }) {
  if (!data) return null;

  const imgSrc = data.image?.url ? `${BASE}${data.image.url}` : null;

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-lime-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image or placeholder */}
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute -inset-6 bg-lime-200/30 rounded-3xl blur-2xl" />
              {imgSrc ? (
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white">
                  <img
                    src={imgSrc}
                    alt={data.title ?? "Section image"}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-[4/3] rounded-3xl bg-lime-50 border border-lime-100" />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            {data.badgeText && (
              <span className="text-lime-600 text-xs font-bold tracking-[0.2em] uppercase">
                {data.badgeText}
              </span>
            )}
            {data.title && (
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-3 leading-tight">
                {data.title}
              </h2>
            )}
            {data.subTitle && (
              <p className="text-lg text-slate-500 mb-4">{data.subTitle}</p>
            )}
            {data.description && (
              <p className="text-slate-500 font-light leading-relaxed mb-8">
                {data.description}
              </p>
            )}
            {data.bulletPoints?.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mb-8">
                {data.bulletPoints.map((bp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-slate-700 text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" />
                    {bp.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PicSection2({ data }) {
  if (!data) return null;

  const imgSrc = data.image?.url ? `${BASE}${data.image.url}` : null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Image or placeholder */}
          <div className="flex-1 w-full">
            <div className="bg-slate-900 p-2 rounded-3xl shadow-2xl">
              {imgSrc ? (
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={data.title ?? "Section image"}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[4/3] rounded-2xl bg-slate-800" />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            {data.badgeText && (
              <span className="text-lime-600 text-xs font-bold tracking-[0.2em] uppercase">
                {data.badgeText}
              </span>
            )}
            {data.title && (
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-3 leading-tight">
                {data.title}
              </h2>
            )}
            {data.subTitle && (
              <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                {data.subTitle}
              </p>
            )}
            {data.bulletPoints?.length > 0 && (
              <div className="space-y-3">
                {data.bulletPoints.map((bp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-lime-200 hover:bg-lime-50/40 transition-all duration-200"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ background: G }}
                    >
                      ✓
                    </div>
                    <span className="text-slate-700 font-medium text-sm">
                      {bp.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
