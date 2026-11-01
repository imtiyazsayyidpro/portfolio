import type { ReactNode } from "react";

/**
 * Fluid container for a demo. It is a size container, so each demo adapts
 * its layout to its own width with container queries (@lg, @3xl) instead of
 * being shrunk: phones get a simpler UI at full-size text. The cursor
 * measures targets relative to this element ([data-demo-stage]); overflow is
 * clipped so the cursor can never cause horizontal scrolling.
 */
export function DemoStage({ children }: { children: ReactNode }) {
  return (
    <div data-demo-stage className="@container relative w-full overflow-hidden">
      {children}
    </div>
  );
}
