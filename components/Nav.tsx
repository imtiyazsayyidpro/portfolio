"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { navLinks, site } from "@/lib/site";

/**
 * Sticky top bar: serif wordmark, three links, "Book a call". Below md the
 * links move into a menu that opens under the bar.
 */
export function Nav({
  linkPrefix = "",
}: {
  /** "/" on pages other than home, so section links lead back to the home page. */
  linkPrefix?: string;
}) {
  const [open, setOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
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
