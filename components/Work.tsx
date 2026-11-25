import type { ComponentType } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { CrmVisual, LoanVisual, OrderVisual, SeatsVisual } from "@/components/work/CaseVisuals";
import { revealItem } from "@/lib/reveal";

type CaseStudy = {
  business: string;
  system: string;
  /** The outcome in one plain sentence, set large. */
  result: string;
  story: string;
  Visual: ComponentType;
};

const caseStudies: CaseStudy[] = [
  {
    business: "Furniture manufacturer and retailer",
    system: "Order tracking system",
    result: "Every order, from first enquiry to delivery, in one place.",
    story:
      "Leads, quotes and payments lived in Excel, and checking on an order meant calling the factory. Now sales, invoicing and production share one system, connected to the factory's own software, so anyone can see where an order stands without asking around.",
    Visual: OrderVisual,
  },
  {
    business: "Event ticketing company",
    system: "Branded ticketing platform",
    result: "No seat sold twice, even under heavy load.",
    story:
      "Event organisers wanted ticketing under their own brand, from booking to the door. We set up an organiser dashboard, a mobile site where customers pick their own seats live, and a door-scanner app. A theatre in the Middle East now runs its box office and door entry on it.",
    Visual: SeatsVisual,
  },
  {
    business: "Study-abroad company",
    system: "Student CRM",
    result: "Replaced in three months, without losing a single record.",
    story:
      "After five years, their old system had become slow and frustrating. We replaced it and moved every record across safely. The team now manages leads, students, franchises and applications in one place, and partners get answers about their own numbers just by asking in plain English.",
    Visual: CrmVisual,
  },
  {
    business: "Lending company",
    system: "Loan processing system",
    result: "From months of paperwork to a few days. ₹5 Cr disbursed to 180 clients.",
    story:
      "KYC and loan approvals were done on paper, and a single loan could take months. In under 15 days we moved the whole process online: KYC, digital signatures and disbursement in one flow.",
    Visual: LoanVisual,
  },
];

/** Four case studies, alternating sides, each with its own recreated screen. */
export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-y border-line bg-sand">
      <Container className="py-20 md:py-[120px]">
        <Reveal className="grid items-end gap-x-[72px] gap-y-5 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <h2
            {...revealItem()}
            id="work-title"
            className="font-display text-[clamp(40px,5vw,68px)] leading-[1.02] tracking-[-0.03em]"
          >
            Results
          </h2>
          <p {...revealItem()} className="text-body">
            Four of the 10+ systems we&apos;ve delivered for growing businesses.
            Client names stay private; the screens are recreations with sample
            data.
          </p>
        </Reveal>

        {caseStudies.map(({ business, system, result, story, Visual }, index) => {
          const visualFirst = index % 2 === 1;
          return (
            <Reveal
              key={system}
              className={`group grid items-center gap-x-[72px] gap-y-8 ${
                index === 0 ? "mt-14 md:mt-[88px]" : "mt-20 md:mt-[120px]"
              } ${
                visualFirst
                  ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
                  : "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
              }`}
            >
              <article {...revealItem()} className={visualFirst ? "lg:order-2" : ""}>
                <p className="text-[14px] font-semibold text-gold-text">{business}</p>
                <h3 className="mt-2.5 font-display text-[32px] leading-[1.1] tracking-[-0.02em] md:text-[38px]">
                  {system}
                </h3>
                <p className="mt-6 font-display text-[22px] leading-[1.3] md:text-[24px]">{result}</p>
                <p className="mt-5 text-[16px] text-body">{story}</p>
              </article>
              <div {...revealItem()} className={visualFirst ? "lg:order-1" : ""}>
                <Visual />
              </div>
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
