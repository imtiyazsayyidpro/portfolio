"use client";

import { useCallback } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function Nav() {
  const toggleTheme = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next = (root.dataset.theme || "dark") === "light" ? "dark" : "light";
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const r = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (_) {}
    };
    if ("startViewTransition" in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const t = (document as any).startViewTransition(apply);
      t.ready.then(() => {
        document.documentElement.animate(
          [
            { clipPath: `circle(0 at ${x}px ${y}px)` },
            { clipPath: `circle(${r}px at ${x}px ${y}px)` },
          ],
          {
            duration: 700,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
    } else {
      apply();
    }
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-mark">IS</div>
          <span>{siteConfig.name}</span>
        </div>

        <div className="nav-links">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light / dark mode"
            title="Toggle theme"
          >
            <span className="ico">
              <span className="sun" />
              <span className="moon" />
            </span>
          </button>
          <a href="#contact" className="btn primary">
            Let&apos;s Talk <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
