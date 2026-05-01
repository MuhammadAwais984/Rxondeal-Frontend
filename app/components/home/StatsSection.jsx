"use client";
import { StatItem } from "./StatItem";

/**
 * StatsSection
 * Props: stats — array of { value, label }
 */
export default function StatsSection({ stats }) {
  if (!stats?.length) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {stats.map((s, i) => (
            <StatItem key={i} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
