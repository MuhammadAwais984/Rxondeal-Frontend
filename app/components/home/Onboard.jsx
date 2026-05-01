"use client";
import Link from "next/link";
import { FEATURE_ICONS } from "../home/constants";

const CARD_STYLES = [
  {
    bg: "from-green-50 to-white",
    border: "border-green-100",
    numBg: "bg-green-100",
    numText: "text-green-600",
    btnBg: "bg-green-600 hover:bg-green-700",
  },
  {
    bg: "from-teal-50 to-white",
    border: "border-teal-100",
    numBg: "bg-teal-100",
    numText: "text-teal-600",
    btnBg: "bg-teal-600 hover:bg-teal-700",
  },
  {
    bg: "from-blue-50 to-white",
    border: "border-blue-100",
    numBg: "bg-blue-100",
    numText: "text-blue-600",
    btnBg: "bg-blue-600 hover:bg-blue-700",
  },
  {
    bg: "from-purple-50 to-white",
    border: "border-purple-100",
    numBg: "bg-purple-100",
    numText: "text-purple-600",
    btnBg: "bg-purple-600 hover:bg-purple-700",
  },
];

export default function OnboardCards({ onboard }) {
  if (!onboard?.length) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {onboard.map((card, i) => {
            const style = CARD_STYLES[i % CARD_STYLES.length];
            const Icon = FEATURE_ICONS[card.icons?.icons];

            return (
              <div
                key={i}
                className={`bg-gradient-to-br ${style.bg} p-8 md:p-10 rounded-3xl border ${style.border} shadow-sm hover:shadow-xl transition`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${style.btnBg} text-white`}
                >
                  {Icon ? (
                    <Icon className="w-7 h-7" />
                  ) : (
                    <span className="text-2xl">📦</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                  {card.title}
                </h3>

                {/* Subtext */}
                {card.subText && (
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    {card.subText}
                  </p>
                )}

                {/* Steps */}
                {card.points?.length > 0 && (
                  <div className="space-y-4 mb-8">
                    {card.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 ${style.numBg} ${style.numText} rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5`}
                        >
                          {idx + 1}
                        </div>
                        <span className="text-gray-700 font-light">
                          {point.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Button */}
                {card.button?.text && (
                  <Link
                    href={card.button.link ?? "/"}
                    className={`block w-full text-center text-white py-3 rounded-full font-normal transition ${style.btnBg}`}
                  >
                    {card.button.text}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
