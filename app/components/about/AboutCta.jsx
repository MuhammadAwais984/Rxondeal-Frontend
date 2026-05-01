"use client";
import Link from "next/link";

export default function AboutCta({ title, subTitle, buttonText, buttonLink }) {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-gray-800 py-20 md:py-28 text-center px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
          {title}
        </h2>
        {subTitle && (
          <p className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto">
            {subTitle}
          </p>
        )}
        {buttonText && (
          <Link
            href={buttonLink ?? "/"}
            className="bg-green-600 text-white px-12 py-4 rounded-full font-normal hover:bg-green-500 shadow-2xl shadow-green-900/30 transition hover:-translate-y-1"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
