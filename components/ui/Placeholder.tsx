import type { ReactNode } from "react";

/**
 * Marks content-brief placeholders (e.g. "[PHOTO]") so they are easy to find
 * without distorting the design. Remove once real content is in.
 * - inline: dotted gold underline, for text inside sentences
 * - tag: small dotted pill, for standalone slots
 */
export function Placeholder({
  children,
  variant = "inline",
}: {
  children: ReactNode;
  variant?: "inline" | "tag";
}) {
  if (variant === "tag") {
    return (
      <span className="inline-flex items-center rounded-pill border border-dashed border-bone bg-surface px-2.5 py-0.5 text-caption font-medium text-stone">
        {children}
      </span>
    );
  }

  return (
    <span className="underline decoration-highlight-text decoration-dotted decoration-2 underline-offset-4">
      {children}
    </span>
  );
}
