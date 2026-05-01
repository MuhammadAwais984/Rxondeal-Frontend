import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
export default function AboutStory({
  title,
  subTitle,
  paragraph,
  stats,
  image,
}) {
  const imgSrc = image ? `${BASE}${image}` : null;
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
              {subTitle}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-6">
              {title}
            </h2>

            {/* paragraph is a plain string — split by newlines */}
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              {paragraph?.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {stats?.length > 0 && (
              <div className="grid grid-cols-2 gap-6 mt-10">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="p-6 bg-green-50 rounded-2xl border border-green-100"
                  >
                    <h3 className="text-3xl font-light text-green-600 mb-2">
                      {s.value}
                    </h3>
                    <p className="text-sm text-gray-600 font-light">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative w-full aspect-[4/3]">
            <div className="absolute -inset-4 bg-green-200 rounded-3xl blur-3xl opacity-20" />
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={title ?? "Story image"}
                fill
                className="object-cover rounded-2xl shadow-2xl border border-gray-100"
                unoptimized={imgSrc.includes("localhost")}
              />
            ) : (
              <div className="w-full h-full rounded-2xl bg-green-50 border border-green-100" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
