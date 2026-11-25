import { BookCallButton } from "@/components/ui/BookCallButton";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { trackClick } from "@/lib/analytics";
import { site } from "@/lib/site";

const nextSteps = [
  "You book a short call.",
  "We understand what's slowing you down.",
  "You get a clear plan and quote.",
];

/** The one dark section on the page, so the call to action stands apart. */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-night text-white">
      <Container className="grid items-end gap-x-[88px] gap-y-14 py-24 md:py-32 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div>
          <h2
            id="contact-title"
            className="font-display text-[clamp(40px,5.4vw,76px)] leading-[1.02] tracking-[-0.03em] text-balance"
          >
            Tell us what&apos;s slowing your business down.
          </h2>
          <p className="mt-7 max-w-[520px] text-[18px] text-on-navy md:text-[19px]">
            A short call is enough to see if we can help. No pressure, no jargon.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <BookCallButton location="contact" variant="gold" />
            <ButtonLink
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost-light"
              {...trackClick("whatsapp_click")}
            >
              Message on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </ButtonLink>
          </div>
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-gold-soft">What happens next</h3>
          <ol className="mt-[18px] flex list-decimal flex-col gap-3 pl-5 text-on-navy-strong marker:text-gold-soft">
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-8 border-t border-white/15 pt-6 text-[15px] text-on-navy">
            Prefer email?{" "}
            <a
              href={`mailto:${site.email}`}
              {...trackClick("email_click")}
              className="font-semibold break-all text-white underline decoration-gold underline-offset-4 hover:text-gold-soft"
            >
              {site.email}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
