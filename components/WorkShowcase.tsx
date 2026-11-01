"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import dynamic from "next/dynamic";
import { Reveal } from "@/components/motion/Reveal";
import { trackEvent } from "@/lib/analytics";
import { useInView, usePrefersReducedMotion } from "@/lib/hooks/useMotion";
import { revealItem } from "@/lib/reveal";

const AUTO_ADVANCE_MS = 12000;

/*
 * Demos are code-split: each loads as its own chunk. The visible one is
 * still server-rendered (no layout shift); the others download when the
 * browser is idle, or when their tab is picked.
 */
const loadOrderDemo = () => import("@/components/demos/OrderDemo").then((m) => m.OrderDemo);
const loadTicketingDemo = () =>
  import("@/components/demos/TicketingDemo").then((m) => m.TicketingDemo);
const loadStudentCrmDemo = () =>
  import("@/components/demos/StudentCrmDemo").then((m) => m.StudentCrmDemo);
const loadLoanDemo = () => import("@/components/demos/LoanDemo").then((m) => m.LoanDemo);

const OrderDemo = dynamic(loadOrderDemo);
const TicketingDemo = dynamic(loadTicketingDemo);
const StudentCrmDemo = dynamic(loadStudentCrmDemo);
const LoanDemo = dynamic(loadLoanDemo);

type CaseStudy = {
  id: string;
  /** Sent with the work_tab_view Analytics event. */
  analyticsId: string;
  tab: string;
  business: string;
  system: string;
  before: ReactNode;
  built: ReactNode;
  after: ReactNode;
  stats?: { value: string; label: string }[];
  Demo: ComponentType;
};

const caseStudies: CaseStudy[] = [
  {
    id: "order-tracking",
    analyticsId: "order_tracking",
    tab: "Order tracking",
    business: "A furniture manufacturer and retailer",
    system: "Order tracking system",
    before:
      "Leads, customers and orders were tracked across Excel sheets, disconnected from the factory.",
    built:
      "One system covering leads, quotations, invoicing, payments and production tracking, connected to their existing manufacturing software.",
    after:
      "Every order can be followed from first enquiry to delivery in one place. Sales and the factory now work from the same information, so tracking an order no longer means asking around.",
    Demo: OrderDemo,
  },
  {
    id: "ticketing-platform",
    analyticsId: "ticketing",
    tab: "Ticketing platform",
    business: "An event ticketing company",
    system: "White-label ticketing platform",
    before:
      "Event organisers needed their own branded ticketing, from seat booking to door entry, without building a platform from scratch for each one.",
    built:
      "One platform that each client gets as their own branded copy, set up through a guided onboarding with their name, colours and logo. It has three parts: a dashboard for organisers (events, a reserved seating layout builder, bookings and refunds, promo codes, a box office and a merch and food shop), a fast mobile-first website where customers pick their seats live and check out, and a phone scanner app for door staff.",
    after:
      "The first client, a theatre in the Middle East, runs its events, box office and door entry on it. E-tickets go out by email with one QR code per booking, and seats can never be sold twice, even under heavy load.",
    stats: [{ value: "Seats never sold twice", label: "Even under heavy load" }],
    Demo: TicketingDemo,
  },
  {
    id: "student-crm",
    analyticsId: "student_crm",
    tab: "Student CRM",
    business: "A study-abroad company",
    system: "Student CRM",
    before: "A five-year-old system that had become slow, messy and hard to use.",
    built:
      "A complete rebuild in three months, with all data moved over safely. It covers leads, students, franchises and applications, plus AI tools that let partners ask questions about their own data in plain English.",
    after:
      "A faster, cleaner system the team enjoys using, with much clearer visibility into every lead and application.",
    Demo: StudentCrmDemo,
  },
  {
    id: "loan-processing",
    analyticsId: "loan_processing",
    tab: "Loan processing",
    business: "A lending company",
    system: "Loan processing system",
    before:
      "Customer KYC and loan processing were done manually, with paperwork that took months to complete.",
    built:
      "An online platform for KYC, digital signatures and loan disbursement, delivered in under 15 days.",
    after:
      "Processing time dropped from months to a few days. ₹5 Cr has been disbursed to 180 clients through the system.",
    stats: [
      { value: "Months → days", label: "Processing time" },
      { value: "₹5 Cr", label: "Disbursed to 180 clients" },
    ],
    Demo: LoanDemo,
  },
];

/**
 * Tabbed case-study showcase. Tabs auto-advance every 12 seconds while the
 * section is on screen, until the visitor picks one themselves.
 */
export function WorkShowcase() {
  const [active, setActive] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const inView = useInView(rootRef, { threshold: 0.25 });
  const reducedMotion = usePrefersReducedMotion();

  const autoAdvance = inView && !interacted && !reducedMotion;

  // Fetch the other demos once the browser is idle, so tab switches are instant
  useEffect(() => {
    const preload = () => {
      void loadOrderDemo();
      void loadTicketingDemo();
      void loadStudentCrmDemo();
      void loadLoanDemo();
    };
    // Safari has no requestIdleCallback; fall back to a short delay
    if (typeof window.requestIdleCallback === "function") {
      const handle = window.requestIdleCallback(preload, { timeout: 4000 });
      return () => window.cancelIdleCallback(handle);
    }
    const timer = window.setTimeout(preload, 2500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!autoAdvance) return;
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % caseStudies.length),
      AUTO_ADVANCE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [autoAdvance, active]);

  // Only real visitor choices (click or arrow keys) land here; auto-advance
  // changes the tab directly, so it never sends work_tab_view.
  const select = (index: number, focus = false) => {
    setInteracted(true);
    setActive(index);
    trackEvent("work_tab_view", { project: caseStudies[index].analyticsId });
    if (focus) tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const last = caseStudies.length - 1;
    const next = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(next, true);
  };

  const study = caseStudies[active];

  return (
    <div ref={rootRef}>
      <Reveal
        self
        role="tablist"
        aria-label="Projects"
        onKeyDown={onKeyDown}
        className="-mx-6 flex snap-x gap-2 overflow-x-auto px-6 py-2 [scrollbar-width:none] md:mx-0 md:px-0"
      >
        {caseStudies.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(index)}
              className={`relative shrink-0 snap-start overflow-hidden rounded-pill px-5 py-3 text-body font-semibold whitespace-nowrap ${
                selected
                  ? "bg-primary text-surface"
                  : "bg-surface text-ironwood shadow-sm hover:text-ink"
              }`}
            >
              <span
                className={`mr-2 text-caption ${selected ? "text-glow" : "text-stone"}`}
              >
                0{index + 1}
              </span>
              {item.tab}
              {selected && autoAdvance && (
                <span
                  key={active}
                  aria-hidden="true"
                  className="absolute inset-x-5 bottom-1.5 h-0.5 origin-left animate-tab-progress rounded-pill bg-glow"
                />
              )}
            </button>
          );
        })}
      </Reveal>

      {/* Reveal group per tab: the text, then the demo frame, on first scroll.
          A new tab mounts while already in view, so it just appears. */}
      <Reveal
        key={study.id}
        role="tabpanel"
        id={`panel-${study.id}`}
        aria-labelledby={`tab-${study.id}`}
        tabIndex={0}
        className="mt-8 grid animate-fade-in items-start gap-10 rounded-sm md:mt-10 lg:grid-cols-[5fr_7fr] lg:gap-14"
      >
        <div {...revealItem()} className="lg:pt-4">
          <p className="text-label font-semibold text-stone">{study.business}</p>
          <h3 className="mt-2 font-display text-title-sm font-normal tracking-display text-ink md:text-title">
            {study.system}
          </h3>

          {study.stats && (
            <dl
              className={`mt-7 grid gap-3 ${
                study.stats.length > 1 ? "sm:grid-cols-2" : ""
              }`}
            >
              {study.stats.map((stat) => (
                <div key={stat.label} className="rounded-card bg-surface p-4 shadow-float">
                  <dt className="text-caption text-stone">{stat.label}</dt>
                  <dd className="mt-1 font-display text-heading-lg text-ink md:text-[32px]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <dl className="mt-7 space-y-5">
            <CaseBlock term="Before">{study.before}</CaseBlock>
            <CaseBlock term="What we built">{study.built}</CaseBlock>
            <CaseBlock term="After" highlight>
              {study.after}
            </CaseBlock>
          </dl>
        </div>

        <div {...revealItem()}>
          <study.Demo />
        </div>
      </Reveal>
    </div>
  );
}

function CaseBlock({
  term,
  highlight = false,
  children,
}: {
  term: string;
  highlight?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`grid gap-1.5 border-l-2 pl-4 sm:grid-cols-[110px_1fr] sm:gap-4 ${
        highlight ? "border-highlight" : "border-mist"
      }`}
    >
      <dt
        className={`text-label font-semibold ${highlight ? "text-highlight-text" : "text-ink"}`}
      >
        {term}
      </dt>
      <dd className="text-body text-stone">{children}</dd>
    </div>
  );
}
