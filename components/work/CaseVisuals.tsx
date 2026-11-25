import type { ReactNode } from "react";

/*
 * Recreated screens for the four case studies. Invented UIs with sample
 * data and no client branding; decorative, so each is aria-hidden and the
 * case study text carries the meaning.
 */

const card =
  "rounded-card border border-[#e2dccf] bg-surface p-5 shadow-card transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:-translate-y-1 md:p-7";

function CardHeader({ title, meta, children }: { title: string; meta: string; children?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-hairline pb-[18px]">
      <div>
        <div className="font-display text-[22px] leading-tight">{title}</div>
        <div className="text-[14px] text-muted">{meta}</div>
      </div>
      {children}
    </div>
  );
}

function Chip({ tone, children }: { tone: "due" | "ok"; children: ReactNode }) {
  return (
    <span
      className={`inline-flex rounded-pill px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap ${
        tone === "due" ? "bg-gold-tint text-[#6a5022]" : "bg-mist text-navy"
      }`}
    >
      {children}
    </span>
  );
}

/* 1. One order, followed from enquiry to delivery */
const timeline = [
  { label: "Enquiry received", meta: "12 Mar · Instagram", state: "done" },
  { label: "Quotation sent", meta: "13 Mar", state: "done" },
  { label: "Advance received · ₹25,000", meta: "14 Mar", state: "done" },
  { label: "Cutting", meta: "18 Mar · factory", state: "done" },
  { label: "Polishing", meta: "In progress · synced from factory", state: "now" },
  { label: "Quality check", meta: "", state: "next" },
  { label: "Delivery", meta: "Scheduled 2 Apr", state: "next" },
] as const;

export function OrderVisual() {
  return (
    <div aria-hidden="true" className={card}>
      <CardHeader title="Ananya Rao" meta="Teak dining table, 6-seater · ₹84,000">
        <Chip tone="due">₹59,000 due on delivery</Chip>
      </CardHeader>
      <ol className="mt-4">
        {timeline.map((step) => (
          <li key={step.label} className="grid grid-cols-[22px_minmax(0,1fr)_auto] items-center gap-3.5 py-[9px]">
            <span
              className={`size-[18px] rounded-pill border-2 ${
                step.state === "done"
                  ? "border-navy bg-navy"
                  : step.state === "now"
                    ? "border-gold bg-gold-tint"
                    : "border-[#d2cbbd] bg-surface"
              }`}
            />
            <span
              className={`text-[15px] ${
                step.state === "now" ? "font-bold" : step.state === "next" ? "text-muted" : "font-medium"
              }`}
            >
              {step.label}
            </span>
            <span className="hidden text-[13px] text-muted sm:block">{step.meta}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* 2. A live seat map: sold seats, three picked, checkout */
const seatRows = ["A", "B", "C", "D", "E", "F"].map((name, row) => ({
  name,
  seats: Array.from({ length: 12 }, (_, col) => {
    if (row === 2 && col >= 5 && col <= 7) return "picked";
    return (row * 7 + col * 5) % 6 === 0 || (row < 2 && col > 2 && col < 9) ? "sold" : "open";
  }),
}));

export function SeatsVisual() {
  return (
    <div aria-hidden="true" className={card}>
      <CardHeader title="An Evening of Jazz" meta="Sample Theatre · Sat 8:00 pm">
        <span className="text-[13px] text-muted">Seats update live</span>
      </CardHeader>
      <div className="mx-auto mt-5 h-1.5 w-[70%] rounded-b-[40px] bg-[#d8d2c4]" />
      <div className="mt-1 text-center text-[11px] text-muted">Stage</div>
      <div className="mt-4 flex flex-col gap-1.5">
        {seatRows.map((row) => (
          <div key={row.name} className="grid grid-cols-[18px_repeat(12,minmax(0,1fr))] items-center gap-1 sm:gap-1.5">
            <span className="text-[11px] text-muted">{row.name}</span>
            {row.seats.map((seat, index) => (
              <span
                key={index}
                className={`aspect-square rounded-t-[4px] rounded-b-[2px] border-[1.5px] ${
                  seat === "sold"
                    ? "border-navy bg-navy"
                    : seat === "picked"
                      ? "border-[#a8842f] bg-gold"
                      : "border-[#c9c3b6] bg-surface"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-[18px]">
        <span className="text-[15px]">
          <strong>3 seats</strong> · Row C · ₹4,500
        </span>
        <span className="rounded-pill bg-navy px-[18px] py-2.5 text-[14px] font-semibold text-white">
          Continue to checkout
        </span>
      </div>
    </div>
  );
}

/* 3. A plain-English question answered from the CRM's data */
const countries = [
  { name: "UK", n: 46, pct: 100, strong: true },
  { name: "Canada", n: 38, pct: 83, strong: true },
  { name: "Australia", n: 27, pct: 59, strong: false },
  { name: "Germany", n: 17, pct: 37, strong: false },
];

export function CrmVisual() {
  return (
    <div aria-hidden="true" className={card}>
      <div className="flex items-center gap-3 rounded-xl border border-line-strong px-4 py-3.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-text)" strokeWidth="1.8" strokeLinecap="round" className="shrink-0">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span className="text-[15px]">How many applications did each country get this month?</span>
      </div>
      <p className="mt-6 font-display text-[22px] leading-[1.35]">
        128 applications this month. The UK and Canada lead.
      </p>
      <div className="mt-5 flex flex-col gap-3.5">
        {countries.map((country) => (
          <div key={country.name} className="grid grid-cols-[84px_minmax(0,1fr)_32px] items-center gap-3.5 text-[14px]">
            <span className="text-body">{country.name}</span>
            <span className="h-2.5 overflow-hidden rounded-md bg-[#f0ece4]">
              <span
                className={`block h-full origin-left animate-grow rounded-md ${country.strong ? "bg-navy" : "bg-steel"}`}
                style={{ width: `${country.pct}%` }}
              />
            </span>
            <span className="text-right font-bold">{country.n}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[13px] text-muted">
        Answered from the CRM&apos;s live data. Partners only see their own students.
      </p>
    </div>
  );
}

/* 4. A loan moving from KYC to disbursed */
const loanSteps = [
  { label: "KYC", when: "Mon" },
  { label: "Documents", when: "Mon" },
  { label: "E-sign", when: "Tue" },
  { label: "Approved", when: "Wed" },
  { label: "Disbursed", when: "Thu" },
];

export function LoanVisual() {
  return (
    <div aria-hidden="true" className={card}>
      <CardHeader title="Priya Sharma" meta="Business loan · ₹3,50,000 · 24 months">
        <Chip tone="ok">Disbursed today</Chip>
      </CardHeader>
      <div className="mt-5 grid grid-cols-5 gap-2">
        {loanSteps.map((step, index) => (
          <div key={step.label} className="flex min-w-0 flex-col gap-2.5">
            <span className={`h-1 rounded-[3px] ${index === loanSteps.length - 1 ? "bg-gold" : "bg-navy"}`} />
            <span className="truncate text-[12px] font-semibold sm:text-[13px]">{step.label}</span>
            <span className="text-[12px] text-muted">{step.when}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-hairline px-4 py-3.5">
          <div className="text-[12px] text-muted">Signed digitally</div>
          <svg width="150" height="40" viewBox="0 0 150 40" fill="none" stroke="var(--color-ink)" strokeWidth="1.6" strokeLinecap="round" className="mt-1.5">
            <path d="M4 28c10-14 18-20 22-14s-6 18-2 16 12-22 20-20-4 20 4 18 10-14 16-12 0 12 8 10 14-10 22-10 16 6 30 2" />
          </svg>
        </div>
        <div className="rounded-xl border border-hairline px-4 py-3.5">
          <div className="text-[12px] text-muted">KYC documents</div>
          <div className="mt-2 text-[14px] font-semibold">PAN · Aadhaar · Bank statement</div>
          <div className="mt-1 text-[13px] text-muted">All verified</div>
        </div>
      </div>
    </div>
  );
}
