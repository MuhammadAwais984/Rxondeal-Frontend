"use client";
import { useState, useEffect, useRef } from "react";

/** Animate a number from 0 → target when it enters the viewport */
export function useCountUp(target, duration = 1800) {
  const [val, setVal] = useState("0");
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        const num = parseFloat(String(target));
        const suffix = String(target).replace(/[0-9.]/g, "");
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal((eased * num).toFixed(num % 1 !== 0 ? 1 : 0) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return [ref, val];
}

/**
 * Single animated stat cell.
 * Props: value (number | string), label (string)
 */
export function StatItem({ value, label }) {
  const [ref, display] = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-light text-lime-600 mb-2 tabular-nums tracking-tight">
        {display}
      </div>
      <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
        {label}
      </div>
    </div>
  );
}
