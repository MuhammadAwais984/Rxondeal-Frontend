import SectionRenderer from "@/app/components/SectionRenderer";

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

async function fetchHome() {
  const params = new URLSearchParams();
  params.set("filters[slug][$eq]", "home");

  const res = await fetch(`${BASE}/api/pages?${params.toString()}`, {
    headers: {
      "Content-Type": "application/json",
      ...(TOKEN && { Authorization: `Bearer ${TOKEN}` }),
    },
    cache: "no-store",
  });

  const json = await res.json();
  return json?.data?.[0] ?? null;
}

export default async function RootPage() {
  const page = await fetchHome();

  if (!page) {
    return <div>Home not found</div>;
  }

  return (
    <main className="min-h-screen">
      <SectionRenderer sections={page.sections ?? []} />
    </main>
  );
}
