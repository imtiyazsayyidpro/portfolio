import type { ComponentType } from "react";
import {
  BuildIllustration,
  SupportIllustration,
  UnderstandIllustration,
} from "@/components/illustrations/StepIllustrations";
import { Reveal } from "@/components/motion/Reveal";
import { WorkflowLines } from "@/components/patterns/WorkflowLines";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealItem } from "@/lib/reveal";

const steps: { title: string; body: string; Illustration: ComponentType }[] = [
  {
    title: "Understand",
    body: "We sit with you and your team to learn how work actually flows today, including the workarounds.",
    Illustration: UnderstandIllustration,
  },
  {
    title: "Build",
    body: "We design and build simple software shaped around that flow. You see progress every week, and launch in weeks, not months.",
    Illustration: BuildIllustration,
  },
  {
    title: "Support",
    body: "We stay after launch. We train your team, fix issues and keep improving the system as you grow.",
    Illustration: SupportIllustration,
  },
];

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-title"
      className="relative isolate py-18 md:py-25"
    >
      {/* Side margins: vertical workflow lines, only where there's room */}
      <WorkflowLines
        variant="side"
        className="absolute top-1/2 left-6 -z-10 hidden h-160 w-24 -translate-y-1/2 min-[1440px]:block"
      />
      <WorkflowLines
        variant="side"
        className="absolute top-1/2 right-6 -z-10 hidden h-160 w-24 -translate-y-1/2 -scale-x-100 min-[1440px]:block"
      />

      <Container>
        <SectionHeading
          id="how-we-work-title"
          align="center"
          title="How we work"
          subtitle="No jargon, no bloated software. Just a system that fits your business."
        />

        <Reveal
          as="ol"
          className="relative mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-10"
        >
          {/* Thin line connecting the steps. It draws itself when the steps
              scroll into view: downwards on phones, across from md up. */}
          <span
            aria-hidden="true"
            {...revealItem()}
            data-reveal-draw="y"
            className="absolute top-6 bottom-6 left-12 w-px origin-top bg-bone md:hidden"
          />
          <span
            aria-hidden="true"
            {...revealItem()}
            data-reveal-draw="x"
            className="absolute top-16 right-[16%] left-[16%] hidden h-px origin-left bg-bone md:block"
          />
          {steps.map(({ title, body, Illustration }, index) => (
            <li
              key={title}
              {...revealItem()}
              className="relative grid grid-cols-[96px_1fr] items-start gap-5 md:flex md:flex-col md:items-center md:text-center"
            >
              <div className="relative w-24 rounded-card border border-mist bg-surface p-2 md:w-40 md:p-3">
                <Illustration />
              </div>
              <div>
                <p className="text-label font-semibold text-highlight-text">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 font-display text-title-sm font-normal text-ink">
                  {title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-body text-stone">{body}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
