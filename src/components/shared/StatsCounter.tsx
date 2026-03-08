"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  suffix: string;
  label: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function StatsCounter({
  value,
  suffix,
  label,
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
      <span className="block text-4xl md:text-5xl font-heading text-amber leading-none">
        {displayValue}
        {suffix}
      </span>
      <span className="block mt-2 text-sm text-subtle uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}
