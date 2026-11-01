"use client";

import { useLayoutEffect, useRef } from "react";

/** Time the cursor takes to glide to a new target (matches the CSS below). */
const GLIDE_MS = 650;

type CursorProps = {
  /** `data-cursor` name to glide to; stays put when undefined. */
  target?: string;
  /** Press once the glide finishes. */
  click?: boolean;
  /** When to press, in ms from the start of the step. */
  clickAt: number;
  /** Changes every step, so the press animation replays. */
  stepKey: number;
};

/**
 * Animated cursor: glides between elements marked with `data-cursor`,
 * presses with a small scale-down and a ripple. Positions are measured from
 * the DOM and applied as a transform, so they follow any responsive layout.
 */
export function Cursor({ target, click, clickAt, stepKey }: CursorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const targetRef = useRef(target);

  useLayoutEffect(() => {
    targetRef.current = target;
    const cursor = ref.current;
    const stage = cursor?.closest<HTMLElement>("[data-demo-stage]");
    if (!cursor || !stage) return;

    const place = () => {
      const name = targetRef.current;
      if (!name) return;
      const element = stage.querySelector<HTMLElement>(`[data-cursor="${name}"]`);
      if (!element) return;
      const stageRect = stage.getBoundingClientRect();
      const rect = element.getBoundingClientRect();
      const x = rect.left - stageRect.left + rect.width * 0.55;
      const y = rect.top - stageRect.top + rect.height * 0.6;
      if (cursor.dataset.placed) {
        cursor.style.transform = `translate(${x}px, ${y}px)`;
      } else {
        // First appearance: jump straight to the target (no fly-in from the
        // corner), then fade in. Later moves glide.
        cursor.style.transitionProperty = "opacity";
        cursor.style.transform = `translate(${x}px, ${y}px)`;
        void cursor.offsetWidth; // apply the jump before restoring transitions
        cursor.style.transitionProperty = "";
        cursor.dataset.placed = "true";
      }
      cursor.style.opacity = "1";
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [target, stepKey]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-0 z-30 opacity-0 transition-[transform,opacity] ease-[cubic-bezier(0.45,0,0.2,1)]"
      style={{ transitionDuration: `${GLIDE_MS}ms` }}
    >
      {click && (
        <span
          key={`ripple-${stepKey}`}
          className="absolute -top-4 -left-4 size-8 animate-ripple rounded-pill border-2 border-highlight"
          style={{ animationDelay: `${clickAt}ms` }}
        />
      )}
      <span
        key={`press-${stepKey}`}
        className={`block origin-top-left ${click ? "animate-cursor-press" : ""}`}
        style={click ? { animationDelay: `${clickAt}ms` } : undefined}
      >
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true">
          <path
            d="M2 2l17 9.6-7.3 1.7L8.4 21 2 2Z"
            className="fill-ink stroke-surface"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

/** Default press time for a step: after the glide, before the step ends. */
export function defaultClickAt(duration: number) {
  return Math.max(GLIDE_MS + 100, duration - 300);
}
