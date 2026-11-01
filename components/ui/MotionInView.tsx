"use client";

import { useRef, type ReactNode } from "react";
import { useInView } from "@/lib/hooks/useMotion";

/**
 * Pauses every CSS animation inside it while it is off-screen
 * (see the data-motion-paused rule in globals.css).
 */
export function MotionInView({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Any visible pixel counts, so reveals inside never freeze mid-way
  const inView = useInView(ref, { threshold: 0 });

  return (
    <div ref={ref} data-motion-paused={!inView} className={className}>
      {children}
    </div>
  );
}
