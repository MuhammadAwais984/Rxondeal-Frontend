const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchFooter() {
  try {
    const res = await fetch(`${BASE}/api/footer`, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch {
    return null;
  }
}
