"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type StatsCounterSize = "default" | "sm" | "hero";

interface StatsCounterProps {
  value: number;
  suffix: string;
  label: string;
  size?: StatsCounterSize;
}

const numberStyles: Record<StatsCounterSize, string> = {
  default: "text-4xl md:text-5xl font-heading text-amber leading-none",
  sm: "text-2xl md:text-3xl font-heading text-amber leading-none",
  hero: "text-xl sm:text-2xl lg:text-3xl font-heading text-amber leading-none",
};

const labelStyles: Record<StatsCounterSize, string> = {
  default: "mt-2 text-sm text-subtle uppercase tracking-wide",
  sm: "mt-1 text-xs text-subtle uppercase tracking-wide",
  hero: "mt-1 text-[11px] lg:text-xs text-white/50 uppercase tracking-wide",
};

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function StatsCounter({
  value,
  suffix,
  label,
  size = "default",
}: StatsCounterProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    let startTime: number | null = null;
    let animationId: number;

    const animate = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      setDisplayValue(Math.round(easedProgress * value));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <span className={`block ${numberStyles[size]}`}>
        {displayValue}
        {suffix}
      </span>
      <span className={`block ${labelStyles[size]}`}>{label}</span>
    </div>
  );
}
