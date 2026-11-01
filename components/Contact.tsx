import { Reveal } from "@/components/motion/Reveal";
import { WorkflowLines } from "@/components/patterns/WorkflowLines";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { Container } from "@/components/ui/Container";
import { trackClick } from "@/lib/analytics";
import { site } from "@/lib/site";

const nextSteps = [
  "You book a short call",
  "We understand what's slowing you down",
  "You get a clear plan and quote",
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate bg-brand-stripes py-14 md:py-24"
    >
      {/* Faint gold workflow lines in the navy band, above and below the
          card. Hidden on phones, where the card fills the band. */}
      <WorkflowLines
        variant="divider"
        tone="gold"
        className="absolute inset-x-0 top-0 -z-10 hidden h-24 md:block"
      />
      <WorkflowLines
        variant="divider"
        tone="gold"
        className="absolute inset-x-0 bottom-0 -z-10 hidden h-24 -scale-x-100 md:block"
      />

      <Container>
        <Reveal
          self
          className="rounded-frame bg-surface px-6 py-12 text-center shadow-ui md:px-12 md:py-18"
        >
          <h2
            id="contact-title"
            className="mx-auto max-w-3xl font-display text-headline-sm font-normal tracking-display text-ink text-balance md:text-headline"
          >
            Tell us what&apos;s slowing your business down.
          </h2>
          <p
            className="mx-auto mt-5 max-w-prose text-body-lg text-stone md:text-lead"
          >
            A short call is enough to see if we can help. No pressure, no
            jargon.
          </p>

          <div
            className="mt-9 flex flex-col items-center gap-3"
          >
            <BookCallButton size="large" location="contact" />
          </div>

          <div className="mx-auto mt-12 max-w-4xl border-t border-mist pt-10">
            <h3 className="text-label font-semibold text-stone">
              What happens next
            </h3>
            <ol className="mt-6 grid gap-6 text-left sm:grid-cols-3 sm:gap-8 sm:text-center">
              {nextSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-4 sm:flex-col sm:gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-pill bg-canvas font-display text-heading-sm text-highlight-text"
                  >
                    {index + 1}
                  </span>
                  <span className="text-body font-semibold text-ink">
                    <span className="sr-only">Step {index + 1}: </span>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <ul className="mt-12 flex flex-col items-center justify-center gap-1 text-body text-stone sm:flex-row sm:gap-8 sm:text-label">
            <li>
              Email{" "}
              <a
                href={`mailto:${site.email}`}
                {...trackClick("email_click")}
                className="inline-flex min-h-11 items-center rounded-sm font-semibold break-all text-ink hover:text-highlight-text"
              >
                {site.email}
              </a>
            </li>
            <li>
              WhatsApp{" "}
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                {...trackClick("whatsapp_click")}
                className="inline-flex min-h-11 items-center rounded-sm font-semibold break-all text-ink hover:text-highlight-text"
              >
                {site.whatsappLabel}
                <span className="sr-only"> (opens WhatsApp in a new tab)</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
