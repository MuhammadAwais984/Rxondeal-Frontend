const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

export async function fetchNav() {
  try {
    const res = await fetch(`${BASE}/api/navigation?populate=*`, {
      headers: {
        ...(TOKEN && { Authorization: `Bearer ${TOKEN}` }),
      },
      next: { revalidate: 60 }, // cache 60s — nav rarely changes
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch {
    return null;
  }
}
