"use client";

export default function Overview({ title, paragraph }) {
  if (!title && !paragraph) return null;

  return (
    <section className="py-16 md:py-24 justify-center items-center flex ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            {title}
          </h2>
          <div className="h-px w-12 bg-green-400 mb-6" />
          <div className="space-y-4">
            {paragraph?.split("\n\n").map((p, i) => (
              <p key={i} className="text-gray-600 font-light leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
