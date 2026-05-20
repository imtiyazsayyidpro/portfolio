"use client";

import { useEffect } from "react";

/**
 * Mounts client-only side effects that need to run once on page load:
 *  1. Smooth-scroll for anchor links (href="#section")
 *  2. IntersectionObserver scroll-reveal (.reveal → .in)
 *
 * Renders nothing — pure effect.
 */
export default function ClientInit() {
  // ── Anchor smooth-scroll ─────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']");
      if (!a) return;
      const id = (a.getAttribute("href") ?? "").slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // ── Scroll reveal ─────────────────────────────────────────────────────────
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
