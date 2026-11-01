import type { ComponentProps } from "react";
import { ArrowRightIcon } from "@/components/icons";

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: "primary" | "text";
  /** Primary buttons only. Every size is at least 44px tall. */
  size?: "compact" | "default" | "large";
};

// Hover darkens the navy by fading in an Ink overlay (opacity only)
const primary =
  "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-button bg-primary font-semibold text-surface shadow-sm before:absolute before:inset-0 before:-z-10 before:bg-ink/50 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100";

const sizes = {
  // Nav on phones: smaller text so the wordmark, button and menu fit at 375px
  compact: "min-h-11 px-4 text-label sm:min-h-12 sm:px-6 sm:text-body",
  default: "min-h-12 px-6 text-body",
  large: "min-h-13 px-8 text-body",
};

// `group` lets an arrow icon inside nudge on hover (see <LinkArrow>)
const text =
  "group inline-flex min-h-11 items-center gap-1.5 rounded-sm text-body font-semibold text-highlight-text underline-offset-4 hover:text-highlight-hover hover:underline";

/** Links styled as the design system's primary (navy pill) button or text link. */
export function ButtonLink({
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: ButtonLinkProps) {
  const styles = variant === "primary" ? `${primary} ${sizes[size]}` : text;
  return <a className={`${styles} ${className}`} {...props} />;
}

/** Arrow for text links: nudges right on hover (no motion when reduced). */
export function LinkArrow() {
  return (
    <ArrowRightIcon className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1" />
  );
}
