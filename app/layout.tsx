import Providers from "./providers";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import { fetchFooter } from "@/lib/fetchFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const footer = await fetchFooter();

<Footer
  logo={footer?.logo?.url ?? null}
  description={footer?.description}
  columns={footer?.columns}
  socialLinks={footer?.socialLinks}
  copyright={footer?.copyright}
/>;
const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

async function fetchNavPages() {
  try {
    const res = await fetch(
      `${BASE}/api/nav-items?sort=order:asc&populate[dropdownItems]=*`,
      { cache: "no-store" },
    );
    const json = await res.json();
    return json?.data ?? [];
  } catch {
    return [];
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await fetchNavPages();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <div className="">
            <Navbar pages={pages} />
            <main className="mt-6">
              <div className="" />
              <div className="">{children}</div>
            </main>
            <Footer
              logo={footer?.logo?.url ?? null}
              description={footer?.description}
              copyright={footer?.copyright}
              columns={footer?.columns ?? []}
              socialLinks={footer?.socialLinks ?? []}
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}
