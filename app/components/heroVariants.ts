export const HERO_VARIANTS = {
  // Your primary brand gradient - High Energy
  default: {
    bg: "linear-gradient(to right in oklab, rgb(84,169,38) 0%, rgb(66,175,200) 100%)",
    badge: "bg-white/10 border-white/20 text-white/90 backdrop-blur-md",
    title: "text-white",
    subtitle: "text-white/80",
    border: "border-white/30",
  },
  // Professional "Deep Sea" - Dark but on-brand
  dark: {
    bg: "linear-gradient(145deg, #064e3b 0%, #022c22 50%, #0f172a 100%)",
    badge:
      "bg-emerald-500/10 border-emerald-400/20 text-emerald-300 backdrop-blur-md",
    title: "text-emerald-50",
    subtitle: "text-emerald-100/60",
    border: "border-emerald-500/20",
  },
  // "Mint Whisper" - Clean, medical, airy
  light: {
    bg: "linear-gradient(135deg, #f0fdf4 0%, #fafff8 50%, #f0f9ff 100%)",
    badge: "bg-emerald-100 border-emerald-200 text-emerald-700 font-medium",
    title: "text-slate-900",
    subtitle: "text-slate-600",
    border: "border-emerald-100",
  },
  // Modern Monochrome
  minimal: {
    bg: "#ffffff",
    badge:
      "bg-slate-100 border-slate-200 text-slate-600 uppercase tracking-widest font-bold",
    title: "text-slate-950",
    subtitle: "text-slate-500 leading-relaxed",
    border: "border-slate-100",
  },
  // "Forest Glass" - Very premium dark-emerald
  oceanic: {
    bg: "linear-gradient(135deg, #0f7c6e 0%, #065f46 100%)",
    badge: "bg-white/10 border-white/20 text-emerald-50",
    title: "text-white",
    subtitle: "text-emerald-50/70",
    border: "border-white/10",
  },
} as const;

export type HeroVariant = keyof typeof HERO_VARIANTS;
