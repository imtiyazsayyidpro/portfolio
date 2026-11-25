"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { navLinks, site } from "@/lib/site";

/** Below this many pixels from the top, the bar always shows. */
const ALWAYS_SHOW_ABOVE = 80;
/** Ignore scroll movements smaller than this, so tiny jitters don't flicker it. */
const SCROLL_TOLERANCE = 6;

/**
 * Top bar: serif wordmark, three links, "Book a call". Below md the links
 * move into a menu that opens under the bar.
 *
 * It slides away while the visitor scrolls down, to free up the screen, and
 * slides back as soon as they scroll up. It always shows near the top of the
 * page, while the mobile menu is open, and whenever something inside it has
 * keyboard focus.
 */
export function Nav({
  linkPrefix = "",
}: {
  /** "/" on pages other than home, so section links lead back to the home page. */
  linkPrefix?: string;
}) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y < ALWAYS_SHOW_ABOVE) {
        setHidden(false);
      } else if (y > lastY + SCROLL_TOLERANCE) {
        setHidden(true);
      } else if (y < lastY - SCROLL_TOLERANCE) {
        setHidden(false);
      } else {
        return; // small movement: keep lastY so slow scrolls still add up
      }
      lastY = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const showing = !hidden || open || focused;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      className={`sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
        showing ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[72px] max-w-page items-center justify-between gap-4 px-5 md:h-[76px] md:px-12"
      >
        <a
          href={linkPrefix ? "/" : "#top"}
          onClick={close}
          className="font-display text-[23px] tracking-[-0.02em] text-ink no-underline md:text-[25px]"
        >
          {site.name}
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`${linkPrefix}${link.href}`}
                className="inline-flex min-h-11 items-center text-[15px] font-medium text-body no-underline transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <BookCallButton size="compact" location="nav" />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-pill text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-paper md:hidden">
        <ul className="mx-auto flex max-w-page flex-col px-3 py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`${linkPrefix}${link.href}`}
                onClick={close}
                className="flex min-h-12 items-center rounded-xl px-2 font-display text-[22px] text-ink no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
