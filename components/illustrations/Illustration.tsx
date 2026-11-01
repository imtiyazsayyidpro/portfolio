import type { ReactNode } from "react";

/**
 * Shared frame for the custom line illustrations: navy strokes at one width,
 * round caps and joins, on a 160 × 120 grid. Each illustration adds one
 * small gold-filled shape (outlined in navy) as its accent.
 */
export function Illustration({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-auto w-full text-primary"
    >
      <g stroke="currentColor">{children}</g>
    </svg>
  );
}
