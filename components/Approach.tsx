import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { revealItem } from "@/lib/reveal";

const steps = [
  {
    title: "We start with your business",
    body: "We spend time with you and your team to see how work really gets done, workarounds and all, so the system fits the way you already run things.",
  },
  {
    title: "Results in weeks, not months",
    body: "You see it working on your own data within weeks, with progress every week until your team is using it day to day.",
  },
  {
    title: "We stay with you",
    body: "We train your team, fix issues quickly and keep improving things as your business grows.",
  },
];

/**
 * The problem in the owner's own words, then how we work, in three plain
 * points. Replaces a long list of pain points with one line people recognise.
 */
export function Approach() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="approach-title"
      className="mt-24 border-t border-line md:mt-[136px]"
    >
      <Container className="py-20 md:py-[120px]">
        <Reveal>
          <h2
            {...revealItem()}
            id="approach-title"
            className="max-w-[980px] font-display text-[clamp(34px,4.6vw,64px)] leading-[1.08] tracking-[-0.03em] text-balance"
          >
            Leads in Excel. Customers in WhatsApp.{" "}
            <span className="text-faint">Orders in someone&apos;s head.</span>
          </h2>
          <p {...revealItem()} className="mt-8 max-w-prose text-[18px] text-body md:text-[19px]">
            It works, until you grow. Then orders slip, payments get missed and
            your best people spend their day copying data from one place to
            another. We bring it all into one system that does the repetitive
            work for you, so you always know where things stand.
          </p>
        </Reveal>

        <Reveal as="ol" className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <li
              key={step.title}
              {...revealItem()}
              className={`border-t-2 pt-6 ${index === steps.length - 1 ? "border-gold" : "border-ink"}`}
            >
              <h3 className="text-[20px] leading-[1.3] font-semibold">{step.title}</h3>
              <p className="mt-2.5 text-[16px] text-body">{step.body}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
