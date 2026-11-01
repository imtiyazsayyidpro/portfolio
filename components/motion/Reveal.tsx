"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode, type RefObject } from "react";

/** Elements rendered before this (ms since navigation) may already be shown
 *  by the CSS failsafe, so ones in view are left visible instead of re-hidden. */
const LATE_MS = 1900;
/** Trigger slightly early: as soon as an element is ~6% into the viewport. */
const ROOT_MARGIN = "0px 0px -6% 0px";
/** A long run of items entering together never waits more than this many steps. */
const MAX_STAGGER_STEPS = 4;
const REVEAL_ANIMATIONS = new Set(["reveal", "draw-x", "draw-y"]);

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "div" | "ul" | "ol";
  /** Reveal the container itself instead of children marked with revealItem(). */
  self?: boolean;
  /** Delay between items that come into view together, in ms. */
  stagger?: number;
};

/**
 * Scroll reveal, used everywhere for consistency. Each item fades in while
 * rising 20px, once per page load, when it scrolls into view. Items that
 * enter together (a row of cards) follow each other with a small stagger.
 *
 * Item state lives in a data-reveal attribute that this component sets on the
 * DOM directly (React always renders "pending", so re-renders never reset it):
 *   pending  server HTML; hidden, with a CSS failsafe that reveals it after
 *            ~2s in case JavaScript never runs (and never hidden at all when
 *            scripting is off)
 *   waiting  JS is running; hidden until it scrolls into view
 *   shown    animating in (staggered via --reveal-delay)
 *   done     visible, no animation: after the reveal finishes (which also
 *            releases its GPU layer), or when mounted late while in view
 * The motion is CSS (see "Scroll reveal" in globals.css). With reduced motion,
 * nothing is ever hidden or animated.
 */
export function Reveal({
  children,
  as = "div",
  self = false,
  stagger = 90,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const group = ref.current;
    if (!group) return;

    const items = self
      ? [group]
      : Array.from(group.querySelectorAll<HTMLElement>("[data-reveal-item]")).filter(
          (item) => item.closest("[data-reveal-group]") === group,
        );

    const late = performance.now() > LATE_MS;
    const waiting: HTMLElement[] = [];
    for (const item of items) {
      const { top, bottom } = item.getBoundingClientRect();
      const inView = top < window.innerHeight && bottom > 0;
      if (late && inView) {
        item.dataset.reveal = "done";
      } else {
        item.dataset.reveal = "waiting";
        waiting.push(item);
      }
    }
    if (waiting.length === 0) return;

    // Items entering within the same frame start together, on a frame
    // boundary, staggered in reading order.
    let queue: HTMLElement[] = [];
    let frame = 0;

    const finish = (event: AnimationEvent) => {
      const item = event.currentTarget as HTMLElement;
      if (event.target !== item || !REVEAL_ANIMATIONS.has(event.animationName)) return;
      item.dataset.reveal = "done";
      item.style.removeProperty("--reveal-delay");
      item.removeEventListener("animationend", finish);
    };

    const flush = () => {
      frame = 0;
      queue
        .sort((a, b) =>
          a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
        )
        .forEach((item, index) => {
          const step = Math.min(index, MAX_STAGGER_STEPS);
          item.style.setProperty("--reveal-delay", `${step * stagger}ms`);
          item.addEventListener("animationend", finish);
          item.dataset.reveal = "shown";
        });
      queue = [];
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          queue.push(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
        if (queue.length && !frame) frame = requestAnimationFrame(flush);
      },
      { rootMargin: ROOT_MARGIN, threshold: 0 },
    );
    waiting.forEach((item) => observer.observe(item));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [self, stagger]);

  const props = {
    ...rest,
    "data-reveal-group": "",
    ...(self ? { "data-reveal-item": "", "data-reveal": "pending" } : {}),
  };

  if (as === "ul") {
    return (
      <ul ref={ref as RefObject<HTMLUListElement>} {...props}>
        {children}
      </ul>
    );
  }
  if (as === "ol") {
    return (
      <ol ref={ref as RefObject<HTMLOListElement>} {...props}>
        {children}
      </ol>
    );
  }
  return (
    <div ref={ref as RefObject<HTMLDivElement>} {...props}>
      {children}
    </div>
  );
}
