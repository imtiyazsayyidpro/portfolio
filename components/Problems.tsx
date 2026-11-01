import type { ComponentType } from "react";
import {
  ChatScene,
  ExcelScene,
  OldSystemScene,
  PaperworkScene,
  SameDataScene,
  StatusScene,
} from "@/components/scenes/ProblemScenes";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MotionInView } from "@/components/ui/MotionInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealItem } from "@/lib/reveal";

type Problem = {
  title: string;
  body: string;
  Scene: ComponentType;
  /** Bento placement and a slight tilt on large screens (the "chaos"). */
  layout: string;
};

const problems: Problem[] = [
  {
    title: "Everything lives in Excel.",
    body: "Leads, orders and payments spread across sheets only one person understands.",
    Scene: ExcelScene,
    layout: "lg:col-span-5 lg:rotate-[-0.6deg]",
  },
  {
    title: "Customers are lost in WhatsApp.",
    body: "Important conversations buried in chats, with no record of who said what.",
    Scene: ChatScene,
    layout: "lg:col-span-4 lg:rotate-[0.5deg]",
  },
  {
    title: "The same data, typed three times.",
    body: "Your team copies information between sheets, apps and paper.",
    Scene: SameDataScene,
    layout: "lg:col-span-3 lg:rotate-[-0.4deg]",
  },
  {
    title: "Nobody knows where things stand.",
    body: "Which order is stuck? Which payment is pending? Finding out takes calls.",
    Scene: StatusScene,
    layout: "lg:col-span-3 lg:rotate-[0.6deg]",
  },
  {
    title: "Paperwork takes days.",
    body: "Forms, approvals and documents that should take minutes.",
    Scene: PaperworkScene,
    layout: "lg:col-span-4 lg:rotate-[-0.5deg]",
  },
  {
    title: "An old system nobody likes.",
    body: "Software that's slow, confusing, or built for someone else's business.",
    Scene: OldSystemScene,
    layout: "lg:col-span-5 lg:rotate-[0.4deg]",
  },
];

export function Problems() {
  return (
    <section aria-labelledby="problems-title" className="py-18 md:py-25">
      <Container>
        <SectionHeading
          id="problems-title"
          title="Sound familiar?"
          subtitle="Most growing businesses hit the same walls. If a few of these ring true, we can help."
        />

        <MotionInView>
          <Reveal
            as="ul"
            className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-6"
          >
            {problems.map(({ title, body, Scene, layout }) => (
              <li
                key={title}
                {...revealItem()}
                className={`card-lift rounded-card bg-surface p-4 pb-6 shadow-float md:p-5 md:pb-7 ${layout}`}
              >
                <Scene />
                <h3 className="mt-5 px-1 text-heading-sm font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 px-1 text-body text-stone">{body}</p>
              </li>
            ))}
          </Reveal>
        </MotionInView>
      </Container>
    </section>
  );
}
