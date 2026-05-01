"use client";
import REGISTRY from "./ComponentRegistry";

/**
 * SectionRenderer
 * ─────────────────────────────────────────────
 * Takes the array of sections from Strapi and
 * renders each one by looking up the registry.
 *
 * Each section in Strapi MUST have a "__component" field
 * (Strapi adds this automatically for Dynamic Zones)
 * OR you add a "type" Text field manually.
 *
 * Props:
 *   sections — array of section objects from Strapi
 */
export default function SectionRenderer({ sections = [] }) {
  if (!sections.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        No sections found for this page.
      </div>
    );
  }

  return (
    <>
      {sections.map((section, idx) => {
        // Strapi Dynamic Zone uses "__component", manual field uses "type"
        const key = section.__component || section.type;

        const entry = REGISTRY[key];

        // Not in registry — skip silently in prod, warn in dev
        if (!entry) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`[SectionRenderer] Unknown section type: "${key}"`);
            return (
              <div
                key={idx}
                className="p-4 bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm mx-6 my-2 rounded-xl"
              >
                Unknown section: <code>{key}</code> — add it to
                ComponentRegistry.jsx
              </div>
            );
          }
          return null;
        }

        const { component: Component, getProps } = entry;
        const props = getProps(section);

        return <Component key={idx} {...props} />;
      })}
    </>
  );
}
