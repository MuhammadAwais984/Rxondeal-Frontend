import SectionRenderer from "@/app/components/SectionRenderer";
/**
 * app/[slug]/page.jsx
 * ─────────────────────────────────────────────
 * ONE file handles ALL pages.
 *
 * URL /home     → fetches slug "home"    from Strapi → renders its sections
 * URL /contact  → fetches slug "contact" from Strapi → renders its sections
 * URL /about    → fetches slug "about"   from Strapi → renders its sections
 *
 * To add a NEW page:
 *   1. Strapi → Pages collection → Add entry → set slug e.g. "pricing"
 *   2. Add sections via the Dynamic Zone
 *   3. Visit /pricing — it works. Zero new Next.js files needed.
 */

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

async function fetchPage(slug: string) {
  try {
    const params = new URLSearchParams();
    params.set("filters[slug][$eq]", slug);
    params.set("status", "draft");

    const url = `${BASE}/api/pages?${params.toString()}`;
    console.log("[fetchPage] URL:", url);

    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...(TOKEN && { Authorization: `Bearer ${TOKEN}` }),
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[fetchPage] Strapi error:", errText);
      throw new Error(`HTTP ${res.status}`);
    }

    const json = await res.json();
    console.log("[fetchPage] data:", JSON.stringify(json?.data?.[0]?.sections));
    return json?.data?.[0] ?? null;
  } catch (err) {
    console.error(`[DynamicPage] fetch error for slug "${slug}":`, err);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${BASE}/api/pages?fields=slug`, {
      headers: { ...(TOKEN && { Authorization: `Bearer ${TOKEN}` }) },
    });
    const json = await res.json();
    return (json?.data ?? []).map((page: { slug: string }) => ({
      slug: page.slug,
    }));
  } catch {
    return [];
  }
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchPage(slug);

  if (!page) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-6xl font-light text-slate-300 mb-4">404</h1>
          <p className="text-slate-500">
            Page <code className="bg-slate-100 px-2 py-1 rounded">/{slug}</code>{" "}
            not found in Strapi.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Add a Page entry with slug "{slug}" in Strapi to create this page.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-800 antialiased overflow-x-hidden">
      <SectionRenderer sections={page.sections ?? []} />
    </main>
  );
}
