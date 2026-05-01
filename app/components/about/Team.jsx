"use client";

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function Team({ badgeText, title, members }) {
  if (!members?.length) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {badgeText && (
            <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
              {badgeText}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => {
            const imgSrc = member.image
              ? `${BASE}${member.image}`
              : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400";

            return (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img
                    src={imgSrc}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="text-lg font-normal text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
