import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { revealItem } from "@/lib/reveal";
import { services } from "@/lib/services";

// Copy lives in lib/services.ts (shared with the structured data).
const [core, ...supporting] = services;

/** A quiet list: the core service first, marked as where clients start. */
export function Services() {
  return (
    <section id="services" aria-labelledby="services-title">
      <Container className="grid gap-x-[72px] gap-y-10 py-20 md:py-[120px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <Reveal>
          <h2
            {...revealItem()}
            id="services-title"
            className="font-display text-[clamp(40px,5vw,68px)] leading-[1.02] tracking-[-0.03em]"
          >
            How we help
          </h2>
          <p {...revealItem()} className="mt-6 max-w-[380px] text-body">
            Most clients start with one system that runs their day-to-day
            operations. Everything else helps it do more.
          </p>
        </Reveal>

        <Reveal as="ul" className="border-t border-ink">
          <li
            {...revealItem()}
            className="grid gap-x-8 gap-y-2 border-b border-line py-7 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
          >
            <h3>
              <span className="block font-display text-[28px] leading-[1.15]">{core.title}</span>
              <span className="mt-2 block text-[13px] font-semibold text-gold-text">
                Where most clients start
              </span>
            </h3>
            <p className="text-[16px] text-body">{core.description}</p>
          </li>
          {supporting.map((service) => (
            <li
              key={service.title}
              {...revealItem()}
              className="grid gap-x-8 gap-y-2 border-b border-line py-[26px] sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
            >
              <h3 className="font-display text-[24px] leading-[1.2]">{service.title}</h3>
              <p className="text-[16px] text-body">{service.description}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
