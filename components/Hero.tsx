import { Fragment } from "react";
import { HeroBoardDemo } from "@/components/demos/HeroBoardDemo";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { ButtonLink, LinkArrow } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { trackClick } from "@/lib/analytics";

const headline = "Software built around how you work.".split(" ");

/*
 * Load sequence (the page's one big moment, ~1.5s, pure CSS):
 * headline words rise in one after another → subline → buttons → the demo
 * frame slides up → the demo's cursor starts. Reduced motion shows the final
 * state at once. The headline only moves (never fades), so it is visible in
 * the first paint and nothing delays it for search engines or LCP.
 */
const WORD_STEP = 70;
const SUBLINE_DELAY = 420;
const BUTTONS_DELAY = 540;
const DEMO_DELAY = 600;
/** The demo starts once its frame has (almost) finished sliding up. */
const DEMO_START = DEMO_DELAY + 650;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate pt-16 pb-16 md:pt-24 md:pb-24"
    >
      {/* Background: faint dot grid fading out towards the edges */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dot-grid" />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1
            id="hero-title"
            className="font-display text-hero-sm font-normal tracking-display text-ink text-balance md:text-hero"
          >
            {headline.map((word, index) => (
              <Fragment key={index}>
                <span
                  className="inline-block animate-word-rise"
                  style={{ animationDelay: `${index * WORD_STEP}ms` }}
                >
                  {word}
                </span>
                {index < headline.length - 1 && " "}
              </Fragment>
            ))}
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl animate-rise-in text-lead text-stone md:text-heading-sm md:font-normal"
            style={{ animationDelay: `${SUBLINE_DELAY}ms` }}
          >
            We turn messy Excel sheets and WhatsApp chaos into simple custom
            software your team actually uses.
          </p>
          {/* Stacked on phones, side by side from sm */}
          <div
            className="mt-9 flex animate-rise-in flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8"
            style={{ animationDelay: `${BUTTONS_DELAY}ms` }}
          >
            <BookCallButton location="hero" />
            <ButtonLink href="#work" variant="text" {...trackClick("see_work_click")}>
              See our work
              <LinkArrow />
            </ButtonLink>
          </div>
        </div>

        <div
          className="mt-14 animate-slide-up md:mt-18"
          style={{ animationDelay: `${DEMO_DELAY}ms` }}
        >
          <HeroBoardDemo startDelay={DEMO_START} />
        </div>
      </Container>
    </section>
  );
}
