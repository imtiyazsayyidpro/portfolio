"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { navLinks, site } from "@/lib/site";

/**
 * Floating pill nav: white, fully rounded, sticky a little below the top.
 * Below lg the links collapse into a menu button that opens a full-width
 * panel; the wordmark and "Book a call" stay visible at every width.
 */
export function Nav({
  linkPrefix = "",
}: {
  /** "/" on pages other than home, so section links lead back to the home page. */
  linkPrefix?: string;
}) {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape.
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
    <header className="sticky top-3 z-50 px-3 md:top-4 md:px-6">
      <nav
        aria-label="Main"
        className="relative mx-auto flex h-16 max-w-page items-center justify-between gap-3 rounded-pill bg-surface pr-2 pl-4 shadow-float sm:pl-6"
      >
        <a
          href={linkPrefix ? "/" : "#top"}
          onClick={close}
          className="min-w-0 truncate rounded-sm font-display text-heading-sm font-normal tracking-display text-ink sm:text-heading"
        >
          {site.name}
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`${linkPrefix}${link.href}`}
                className="inline-flex min-h-11 items-center rounded-sm text-body font-medium text-ironwood hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1">
          <BookCallButton size="compact" location="nav" />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-pill text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 max-w-page rounded-card bg-surface p-2 shadow-float lg:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`${linkPrefix}${link.href}`}
                onClick={close}
                className="flex min-h-12 items-center rounded-xl px-4 text-lead font-medium text-ink hover:bg-canvas"
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
