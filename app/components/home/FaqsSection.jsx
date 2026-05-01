"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqsSection({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!faqs) return null;

  const toggle = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header - Professional Typography */}
        <div className="text-center mb-16">
          {faqs.badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">
                {faqs.badge}
              </span>
            </div>
          )}
          {faqs.title && (
            <h2 className="text-4xl md:text-5xl  text-slate-900 tracking-tight leading-tight">
              {faqs.title}
            </h2>
          )}
        </div>

        {/* Accordion List */}
        {faqs.questionAnswer?.length > 0 && (
          <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
            {faqs.questionAnswer.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="group transition-all duration-300">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between py-7 text-left gap-6 group"
                  >
                    <div className="flex items-start gap-4">
                      <HelpCircle
                        className={`w-5 h-5 mt-0.5 transition-colors duration-300 ${
                          isOpen
                            ? "text-emerald-500"
                            : "text-slate-300 group-hover:text-slate-400"
                        }`}
                      />
                      <span
                        className={`font-bold text-base md:text-lg tracking-tight transition-colors duration-300 ${
                          isOpen
                            ? "text-emerald-700"
                            : "text-slate-700 group-hover:text-slate-900"
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-emerald-500 text-white rotate-180"
                          : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 mb-8" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-9 pr-14">
                      <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
