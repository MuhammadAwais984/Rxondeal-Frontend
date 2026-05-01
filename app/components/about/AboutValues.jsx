"use client";
import {
  ShieldCheck,
  Zap,
  Globe,
  Users,
  Lock,
  TrendingUp,
  BarChart3,
  User,
  Settings,
  ShoppingCart,
  Package,
} from "lucide-react";

const VALUE_ICONS = {
  ShieldCheck,
  Zap,
  Globe,
  Users,
  Lock,
  TrendingUp,
  BarChart3, // ← missing
  User, // ← missing
  Settings, // ← missing
  ShoppingCart, // ← missing
  Package, // ← missing
};

export default function AboutValues({ badgeText, title, values }) {
  if (!values?.length) return null;
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          {badgeText && (
            <h4 className="text-emerald-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
              {badgeText}
            </h4>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = VALUE_ICONS[v.icon] ?? ShieldCheck;
            return (
              <div
                key={i}
                className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {v.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-[15px]">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
