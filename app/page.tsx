// "use client";
// import { useState, useEffect } from "react";
// import HeroSection from "./components/home/HeroSection";
// import StatsSection from "./components/home/StatsSection";
// import FeaturesSection from "./components/home/FeaturesSection";
// import ReviewsSection from "./components/home/ReviewsSection";
// import MetricsSection from "./components/home/MetricsSection";
// import FaqsSection from "./components/home/FaqsSection";
// import CtaSection from "./components/home/CtaSection";
// import { PicSection1, PicSection2 } from "./components/home/PicSections";

// // ── Section components ──────────────────────────────────────────

// /* ══════════════════════════════════════════════════
//    STRAPI FETCH
//    Endpoint: GET /api/hero?populate=...
//    Strapi v5: response is { data: { id, ...fields } } — NO .attributes
// ══════════════════════════════════════════════════ */
// async function fetchHomepage() {
//   const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
//   const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

//   try {
//     const url =
//       `${BASE}/api/hero` +
//       `?populate[Hero]=*` +
//       `&populate[Stats]=*` +
//       `&populate[FeaturesCard]=*` +
//       `&populate[Pic1Section][populate]=*` +
//       `&populate[Pic2Section][populate]=*` +
//       `&populate[Reviews][populate][reviews]=*` +
//       `&populate[Matrics]=*` +
//       `&populate[faqs][populate][questionAnswer]=*`;

//     const res = await fetch(url, {
//       headers: {
//         "Content-Type": "application/json",
//         ...(TOKEN && { Authorization: `Bearer ${TOKEN}` }),
//       },
//       cache: "no-store",
//     });

//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const json = await res.json();
//     return json?.data ?? null;
//   } catch (err) {
//     console.error("Strapi fetch error:", err);
//     return null;
//   }
// }

// /* ══════════════════════════════════════════════════
//    MAIN PAGE — thin orchestration layer
// ══════════════════════════════════════════════════ */
// export default function HomePage() {
//   const [cms, setCms] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchHomepage()
//       .then(setCms)
//       .finally(() => setLoading(false));
//   }, []);

//   /* ── Loading ── */
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-12 h-12 rounded-full border-4 border-lime-200 border-t-lime-500 animate-spin" />
//           <p className="text-slate-400 text-sm font-light">Loading…</p>
//         </div>
//       </div>
//     );
//   }

//   /* ── Error ── */
//   if (!cms) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="text-center">
//           <p className="text-red-400 font-medium mb-2">
//             Could not load content from Strapi.
//           </p>
//           <p className="text-slate-400 text-sm">
//             Check that Strapi is running and NEXT_PUBLIC_STRAPI_URL is set.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   /* ── Destructure CMS fields ── */
//   const {
//     Hero, // { badgeText, heading_line1, headingParagraph, heroButton1, heroButton2 }
//     Stats, // [{ label, value }]
//     FeaturesCard, // [{ label, description, topRightext }]
//     Pic1Section, // { badgeText, heading1, subHeading, description, bulletpoints, sideImage }
//     Pic2Section, // { badge, heading1, subHeading, bulletpoints, image }
//     Reviews, // { badge, heading1, reviews[{ comment, name, role }] }
//     Matrics, // [{ heading1, subHeading, subText }]
//     faqs, // { badge, heading1, questionAnswer[{ question, answer }] }
//   } = cms;

//   /* ── Render ── */
//   return (
//     <main className="min-h-screen bg-white text-slate-800 antialiased overflow-x-hidden">
//       <HeroSection hero={Hero} />
//       <StatsSection stats={Stats} />
//       <FeaturesSection features={FeaturesCard} />
//       <PicSection1 data={Pic1Section} />
//       <PicSection2 data={Pic2Section} />
//       <ReviewsSection reviews={Reviews} />
//       <MetricsSection metrics={Matrics} />
//       <FaqsSection faqs={faqs} />
//       <CtaSection />
//     </main>
//   );
// }
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/home");
}
