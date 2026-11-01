"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/useMotion";

/**
 * Smooth, eased scrolling for mouse wheels and trackpads (Lenis). The page
 * still scrolls natively underneath, so the sticky nav, scroll observers and
 * keyboard scrolling all work as normal; touch scrolling stays native.
 * In-page links (#work, the skip link…) glide to their section, land below
 * the sticky nav (Lenis respects scroll-padding-top) and move keyboard focus
 * there. Turned off entirely when the visitor prefers reduced motion.
 */
export function SmoothScroll() {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      // How quickly scrolling catches up each frame. 0.15 settles in about
      // 0.45s: smooth, but without a long, slow tail where single-pixel steps
      // become visible (0.1 felt floaty and "frame-y").
      lerp: 0.15,
      smoothWheel: true,
    });

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      if (!link || !id) return;
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      history.pushState(null, "", `#${id}`);
      lenis.scrollTo(target, {
        duration: 1.1,
        onComplete: () => {
          // Move focus for keyboard and screen-reader users, without jumping
          if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        },
      });
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return null;
}
