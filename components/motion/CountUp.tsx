"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, usePrefersReducedMotion } from "@/lib/hooks/useMotion";

const DURATION_MS = 1000;

/**
 * Counts the leading number of `value` up from 0 once, the first time it
 * scrolls into view ("10+" counts 0 → 10, keeping the "+"). Server render and
 * reduced motion show the final value. Screen readers always get the final
 * value; the moving number is hidden from them.
 */
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const countable = match !== null;
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { threshold: 0.6, once: true });
  const reducedMotion = usePrefersReducedMotion();
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    if (!countable || !inView || reducedMotion) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - (1 - t) ** 3;
      setCurrent(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [countable, inView, reducedMotion, target]);

  const shown = current === null ? value : `${current}${suffix}`;

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
