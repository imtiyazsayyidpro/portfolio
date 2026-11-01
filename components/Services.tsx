import type { ComponentType } from "react";
import {
  AutomationIllustration,
  BusinessSystemsIllustration,
  IntegrationsIllustration,
  StoreIllustration,
  SupportServiceIllustration,
  WebsiteIllustration,
} from "@/components/illustrations/ServiceIllustrations";
import { Reveal } from "@/components/motion/Reveal";
import { WorkflowLines } from "@/components/patterns/WorkflowLines";
import { Container } from "@/components/ui/Container";
import { revealItem } from "@/lib/reveal";
import { services } from "@/lib/services";

// Copy lives in lib/services.ts (shared with the structured data); the
// first entry is the featured service, the rest get these illustrations.
const [featured, ...supporting] = services;
const illustrations: ComponentType[] = [
  WebsiteIllustration,
  StoreIllustration,
  AutomationIllustration,
  IntegrationsIllustration,
  SupportServiceIllustration,
];

/**
 * "What we build". Deliberately calm and aligned (flat bordered cards in an
 * even grid) so it reads differently from the tilted "Sound familiar?" bento.
 */
export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative isolate bg-band py-18 md:py-25"
    >
      {/* Section divider: workflow lines in the top padding */}
      <WorkflowLines
        variant="divider"
        className="absolute inset-x-0 top-0 -z-10 h-16 md:h-24"
      />

      <Container>
        {/* Split heading: title left, subtitle right on large screens */}
        <Reveal className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2
            {...revealItem()}
            id="services-title"
            className="font-display text-headline-sm font-normal tracking-display text-ink text-balance md:text-headline"
          >
            What we build
          </h2>
          <p
            {...revealItem()}
            className="max-w-prose text-body-lg text-stone md:text-lead lg:pb-2"
          >
            Custom business systems are our core. Everything else supports
            them.
          </p>
        </Reveal>

        {/* Featured service. Cards lift on hover and their gold accent
            pulses once (data-illustration-hover, see globals.css). */}
        <Reveal self className="mt-10 md:mt-14">
          <article
            data-illustration-hover
            className="card-lift grid items-center gap-8 rounded-frame border border-mist bg-canvas p-6 md:grid-cols-[1fr_1fr] md:gap-10 md:p-10 lg:p-12"
          >
            <div>
              <h3 className="font-display text-title-sm font-normal tracking-display text-ink md:text-title">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-prose text-body-lg text-stone md:text-lead">
                {featured.description}
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm rounded-card border border-mist bg-surface p-4 md:max-w-none md:p-6">
              <BusinessSystemsIllustration />
            </div>
          </article>
        </Reveal>

        {/* Supporting services: 1 column on phones, 2 on tablets, 5 on wide */}
        <Reveal as="ul" className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {supporting.map(({ title, description }, index) => {
            const Illustration = illustrations[index];
            return (
            <li
              key={title}
              {...revealItem()}
              data-illustration-hover
              className="card-lift rounded-card border border-mist bg-canvas p-6 sm:last:col-span-2 xl:last:col-span-1"
            >
              <div className="w-28 rounded-xl border border-mist bg-surface p-2">
                <Illustration />
              </div>
              <h3 className="mt-5 text-heading-sm font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-body text-stone">{description}</p>
            </li>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
