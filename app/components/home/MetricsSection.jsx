"use client";
import { METRIC_GRADIENTS } from "./constants";

/**
 * MetricsSection
 * Props: metrics — array of { heading1, subHeading, subText }
 */
export default function MetricsSection({ metrics }) {
  if (!metrics?.length) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${METRIC_GRADIENTS[i % METRIC_GRADIENTS.length]} rounded-3xl p-10 text-white`}
            >
              {/* Big stat */}
              <div className="text-6xl font-light mb-2 tracking-tight">
                {m.title}
              </div>
              {/* Label */}
              <div className="text-lg font-semibold mb-1">{m.subTitle}</div>
              {/* Sub-label */}
              <div className="text-white/70 text-sm font-light">
                {m.subText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
