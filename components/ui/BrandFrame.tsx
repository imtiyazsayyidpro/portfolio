import type { ReactNode } from "react";

/**
 * Brand frame: a rounded navy panel with soft, gold-tinted vertical bands.
 * Holds a white UI card (a demo or a content card) inset inside it. Small
 * blueprint-style crop marks sit just outside each corner.
 */
export function BrandFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <CropMarks />
      <div className="rounded-frame bg-brand-stripes p-3 sm:p-6 md:p-10">
        {children}
      </div>
    </div>
  );
}

/** Crop marks: a short horizontal and vertical tick 5px off each corner. */
function CropMarks() {
  const corners = [
    "top-0 left-0",
    "top-0 right-0 -scale-x-100",
    "bottom-0 left-0 -scale-y-100",
    "right-0 bottom-0 -scale-100",
  ];
  return (
    <span aria-hidden="true" className="pointer-events-none">
      {corners.map((position) => (
        <span key={position} className={`absolute size-0 ${position}`}>
          <span className="absolute top-0 -left-4.5 h-px w-3 bg-primary/25" />
          <span className="absolute -top-4.5 left-0 h-3 w-px bg-primary/25" />
        </span>
      ))}
    </span>
  );
}
