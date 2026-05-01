"use client";
import { Star } from "lucide-react";
import { BRAND_GRADIENT as G } from "./constants";

/**
 * ReviewCard — single review card
 */
function ReviewCard({ review }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-lime-200 hover:shadow-xl hover:shadow-lime-50/80 transition-all duration-300 hover:-translate-y-1">
      {/* 5 stars */}
      <div className="flex gap-0.5 mb-5">
        {[...Array(5)].map((_, s) => (
          <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Comment */}
      <p className="text-slate-600 font-light leading-relaxed mb-6 italic text-sm">
        "{review.comment}"
      </p>

      {/* Author */}
      <div className="border-t border-slate-100 pt-5 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ background: G }}
        >
          {review.name?.[0] ?? "?"}
        </div>
        <div>
          <div className="font-semibold text-slate-800 text-sm">
            {review.name}
          </div>
          <div className="text-xs text-slate-400">{review.role}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * ReviewsSection
 * Props: reviews (Strapi Reviews object)
 *   reviews.badge, reviews.heading1,
 *   reviews.reviews[i] { comment, name, role }
 */
export default function ReviewsSection({ reviews }) {
  if (!reviews) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          {reviews.badge && (
            <span className="text-lime-600 text-xs font-bold tracking-[0.2em] uppercase">
              {reviews.badge}
            </span>
          )}
          {reviews.heading1 && (
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mt-4">
              <em>{reviews.heading1}</em>
            </h2>
          )}
        </div>

        {/* Cards grid */}
        {reviews.reviews?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.reviews.map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
