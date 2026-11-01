import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { revealItem } from "@/lib/reveal";

type SectionHeadingProps = {
  id: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Fraunces section heading (h2) with an optional Figtree subtitle.
 * Title then subtitle fade in while rising, once, when scrolled into view.
 */
export function SectionHeading({
  id,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <Reveal className={`max-w-3xl ${alignment} ${className}`}>
      <h2
        {...revealItem()}
        id={id}
        className="font-display text-headline-sm font-normal tracking-display text-ink text-balance md:text-headline"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          {...revealItem()}
          className={`mt-5 max-w-prose text-body-lg text-stone md:text-lead ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
