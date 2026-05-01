import {
  BarChart3,
  ShieldCheck,
  TrendingUp,
  User,
  Settings,
  ShoppingCart,
  Package,
  Globe,
} from "lucide-react";

export const BRAND_GRADIENT =
  "linear-gradient(to right in oklab, rgb(84,169,38) 0px, rgb(66,175,200) 100%)";

export const FEATURE_ICONS = {
  BarChart3: BarChart3,
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp,
  User: User,
  Settings: Settings,
  ShoppingCart: ShoppingCart,
  Package: Package,
  Globe: Globe,
};

export const METRIC_GRADIENTS = [
  "from-lime-500 to-teal-600",
  "from-teal-500 to-cyan-600",
  "from-cyan-500 to-lime-600",
];

const BASE = () =>
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/**
 * Resolves a Strapi media field to { src, width, height }.
 * Handles both Strapi v4 (.data.attributes) and v5 (flat) shapes.
 */
export function imgMeta(mediaField) {
  const flat = mediaField?.url ? mediaField : null;
  const nested = mediaField?.data?.attributes ?? null;
  const field = flat ?? nested;

  if (!field?.url) return { src: "", width: 800, height: 600 };

  const src = field.url.startsWith("http")
    ? field.url
    : `${BASE()}${field.url}`;

  return {
    src,
    width: field.width ?? 800,
    height: field.height ?? 600,
  };
}

/** Legacy helper — returns just the URL string */
export function imgUrl(mediaField) {
  return imgMeta(mediaField).src;
}
