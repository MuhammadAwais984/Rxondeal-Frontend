"use client";

import { BRAND_GRADIENT } from "../home/constants";

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function CeoMessage({
  badgeText,
  title,
  subText,
  message,
  name,
  role,
  image,
}) {
  const imgSrc = image
    ? `${BASE}${image}`
    : "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Photo side */}
            <div
              className="md:col-span-1 p-8 flex flex-col items-center justify-center text-white"
              style={{ background: BRAND_GRADIENT }}
            >
              <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden mb-6 border-4 border-white/30">
                <img
                  src={imgSrc}
                  alt={name ?? "CEO"}
                  className="w-full h-full object-cover"
                />
              </div>
              {name && <h3 className="text-2xl font-light mb-1">{name}</h3>}
              {role && (
                <p className="text-green-100 text-sm font-light">{role}</p>
              )}
            </div>

            {/* Message side */}
            <div className="md:col-span-2 p-8 md:p-12">
              {badgeText && (
                <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
                  {badgeText}
                </span>
              )}
              {title && (
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mt-3 mb-6">
                  {title}
                </h2>
              )}

              {subText && (
                <p className="text-lg italic border-l-2 border-green-500 pl-4 bg-green-50/50 py-3 mb-4 text-gray-600 font-light">
                  "{subText}"
                </p>
              )}

              {message && (
                <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                  {message.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100">
                {name && <p className="font-normal text-gray-900">{name}</p>}
                {role && (
                  <p className="text-sm text-gray-500 font-light">{role}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
