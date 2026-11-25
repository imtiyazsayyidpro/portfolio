import { CompareSlider } from "@/components/CompareSlider";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { trackClick } from "@/lib/analytics";

/**
 * The promise, then the proof: the headline and offer, and below them the
 * before-and-after slider showing a spreadsheet turned into a system.
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-14 md:pt-[88px]">
      <Container>
        <div className="grid items-end gap-x-[72px] gap-y-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <h1
            id="hero-title"
            className="font-display text-[clamp(46px,6.6vw,92px)] leading-[0.98] tracking-[-0.035em] text-balance"
          >
            Software built around how you work.
          </h1>
          <div className="lg:pb-2">
            <p className="text-[18px] leading-[1.55] text-body md:text-[19px]">
              We turn messy Excel sheets and WhatsApp chaos into simple custom
              software your team actually uses. For growing businesses in
              manufacturing, lending, education and events.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookCallButton location="hero" />
              <ButtonLink href="#work" variant="quiet" {...trackClick("see_work_click")}>
                See the work
              </ButtonLink>
            </div>
          </div>
        </div>

        <CompareSlider />
      </Container>
    </section>
  );
}
