import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found — Imtiyaz Sayyid",
  robots: { index: false },
};

/** Branded 404: same nav, type and footer as the home page. */
export default function NotFound() {
  return (
    <>
      <Nav linkPrefix="/" />
      <main id="main">
        <Container className="py-24 md:py-36">
          <p className="text-[14px] font-semibold text-gold-text">Error 404</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(44px,6vw,84px)] leading-[1] tracking-[-0.035em]">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-6 max-w-xl text-[19px] text-body">
            The link may be old or mistyped. Head back to the home page, or book
            a short call if you were looking for help with your business.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <BookCallButton location="not_found" />
            <ButtonLink href="/" variant="quiet">
              Back to the home page
            </ButtonLink>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
