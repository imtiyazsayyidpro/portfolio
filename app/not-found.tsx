import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { ButtonLink, LinkArrow } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found — Imtiyaz Sayyid",
  robots: { index: false },
};

/** Branded 404: same nav, background and type as the home page. */
export default function NotFound() {
  return (
    <>
      <Nav linkPrefix="/" />
      <main id="main" className="relative isolate">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dot-grid" />
        <Container className="py-24 text-center md:py-32">
          <p className="text-label font-semibold text-highlight-text">Error 404</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-hero-sm font-normal tracking-display text-ink text-balance md:text-hero">
            This page doesn&apos;t exist.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lead text-stone">
            The link may be old or mistyped. Head back to the home page, or book
            a short call if you were looking for help with your business.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
            <BookCallButton location="not_found" />
            <ButtonLink href="/" variant="text">
              Back to the home page
              <LinkArrow />
            </ButtonLink>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
