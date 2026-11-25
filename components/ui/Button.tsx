import type { ComponentProps } from "react";

type Variant = "navy" | "quiet" | "gold" | "ghost-light";

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  /** Compact is for the nav; every size stays at least 44px tall. */
  size?: "compact" | "default";
};

const variants: Record<Variant, string> = {
  // Primary on light grounds
  navy: "bg-navy text-white hover:bg-navy-deep",
  // Secondary on light grounds: a hairline outline that darkens on hover
  quiet: "text-ink shadow-[inset_0_0_0_1px_#cfc8ba] hover:shadow-[inset_0_0_0_1px_var(--color-ink)]",
  // Primary on the navy contact band
  gold: "bg-gold text-ink hover:bg-gold-bright",
  // Secondary on the navy contact band
  "ghost-light":
    "text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.3)] hover:shadow-[inset_0_0_0_1px_var(--color-white)]",
};

const sizes = {
  compact: "min-h-11 px-5",
  default: "",
};

/** A link styled as a pill button. */
export function ButtonLink({
  variant = "navy",
  size = "default",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <a className={`btn ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
