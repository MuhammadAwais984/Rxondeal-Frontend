"use client";

export default function VerticalCards({ title, subTitle, cards }) {
  if (!cards?.length) return null;

  return (
    <section className="py-12 md:py-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {title && (
            <>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                {title}
              </h2>
              <div className="h-px w-12 bg-green-400 mb-6" />
            </>
          )}

          {subTitle && (
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              {subTitle}
            </p>
          )}

          <div className="space-y-5">
            {cards.map((card, i) => (
              <div
                key={i}
                className="p-5 bg-gray-50 border border-gray-100 rounded-xl hover:border-green-100 hover:shadow-sm transition"
              >
                {card.title && (
                  <h4 className="font-normal text-gray-900 mb-2">
                    {card.title}
                  </h4>
                )}
                {card.subText && (
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    {card.subText}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
