"use client";

import { DemoFrame } from "./DemoFrame";
import {
  Field,
  FillBar,
  ProgressBar,
  StatusChip,
  Tick,
  TypedText,
  UiButton,
} from "./parts";
import type { DemoStep } from "./useDemoLoop";

/*
 * Storyboard: a new lead → becomes a quotation → becomes an order → moves
 * through production stages (synced from the factory) → "Delivered".
 */
const STEPS: readonly DemoStep[] = [
  { duration: 1800, cursor: "create-quote", click: true }, // lead
  { duration: 1700, cursor: "convert", click: true }, // quotation
  { duration: 1500, cursor: "send-factory", click: true }, // order
  { duration: 1300, cursor: "production" }, // cutting
  { duration: 1300, cursor: "production" }, // polishing
  { duration: 1500, cursor: "deliver", click: true }, // quality check
  { duration: 2600, cursor: "summary" }, // delivered
]; // ≈11.7s

const FINAL_FRAME = 6;

const stages = ["Lead", "Quotation", "Order", "Production", "Delivered"] as const;
const stageForFrame = [0, 1, 2, 3, 3, 3, 4];

const quoteLines = [
  { item: "Teak dining table", qty: "1", amount: "₹72,000" },
  { item: "Upholstered chairs", qty: "6", amount: "₹12,000" },
  { item: "Delivery and fitting", qty: "1", amount: "Free" },
];

const productionSteps = ["Cutting", "Polishing", "Quality check"] as const;

export function OrderDemo() {
  return (
    <DemoFrame
      title="Orders · ORD-1187"
      description="Demo of an order tracking system: a lead's details type in, the cursor creates a quotation, converts it to an order and sends it to the factory. Production moves through cutting, polishing and quality check, and the order is marked delivered."
      steps={STEPS}
      staticFrame={FINAL_FRAME}
    >
      {(frame) => {
        const stage = stageForFrame[frame];

        return (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-label font-semibold text-ink">
                  Ananya Rao · ORD-1187
                </p>
                <p className="truncate text-micro text-stone">
                  Teak dining table, 6-seater · Andheri showroom
                </p>
              </div>
              <StatusChip
                key={stage}
                tone={stage === 4 ? "highlight" : "soft"}
                className="animate-pop-in"
              >
                {stages[stage]}
              </StatusChip>
            </div>

            {/* Narrow: stages as a segmented bar above the panel.
                Wide (@lg): a stage list beside it. */}
            <div className="grid gap-3 @lg:grid-cols-[120px_1fr] @lg:gap-4">
              <ol className="grid grid-cols-5 gap-1 @lg:block @lg:space-y-1">
                {stages.map((name, index) => (
                  <li key={name}>
                    <span
                      className={`block h-1.5 rounded-pill @lg:hidden ${
                        index <= stage ? "bg-highlight-strong" : "bg-mist"
                      }`}
                    />
                    <span
                      className={`hidden items-center gap-2 rounded-lg px-2 py-2 text-caption @lg:flex ${
                        index === stage
                          ? "bg-canvas font-semibold text-ink"
                          : index < stage
                            ? "text-ink"
                            : "text-stone"
                      }`}
                    >
                      <Tick done={index < stage || stage === 4} />
                      {name}
                    </span>
                  </li>
                ))}
              </ol>

              <div
                key={stage}
                className="h-66 animate-fade-in rounded-xl border border-mist p-4"
              >
                {stage === 0 && <LeadPanel />}
                {stage === 1 && <QuotePanel />}
                {stage === 2 && <OrderPanel />}
                {stage === 3 && <ProductionPanel step={frame - 3} />}
                {stage === 4 && <DeliveredPanel />}
              </div>
            </div>
          </div>
        );
      }}
    </DemoFrame>
  );
}

function PanelTitle({ children }: { children: string }) {
  return <p className="text-caption font-semibold text-ink">{children}</p>;
}

function LeadPanel() {
  return (
    <div className="flex h-full flex-col">
      <PanelTitle>New lead</PanelTitle>
      <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5">
        <Field label="Customer">
          <TypedText text="Ananya Rao" duration={350} />
        </Field>
        <Field label="Phone">
          <TypedText text="98201 44567" duration={350} delay={350} />
        </Field>
        <div className="col-span-2">
          <Field label="Interested in">
            <TypedText
              text="Teak dining table, 6-seater"
              duration={450}
              delay={700}
            />
          </Field>
        </div>
        <Field label="Source">
          <TypedText text="Showroom walk-in" duration={350} delay={1150} />
        </Field>
        <Field label="Budget">
          <TypedText text="₹80,000–90,000" duration={300} delay={1300} />
        </Field>
      </div>
      <div className="mt-auto flex justify-end">
        <UiButton cursor="create-quote">Create quotation</UiButton>
      </div>
    </div>
  );
}

function QuotePanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <PanelTitle>Quotation QT-0412</PanelTitle>
        <span className="text-micro text-stone">Valid 15 days</span>
      </div>
      <table className="mt-3 w-full text-left text-micro">
        <thead className="text-stone">
          <tr className="border-b border-mist">
            <th className="pb-1.5 font-medium">Item</th>
            <th className="pb-1.5 font-medium">Qty</th>
            <th className="pb-1.5 text-right font-medium">Amount</th>
          </tr>
        </thead>
        <tbody className="text-ink">
          {quoteLines.map((line, index) => (
            <tr
              key={line.item}
              className="animate-pop-in border-b border-mist"
              style={{ animationDelay: `${index * 160}ms` }}
            >
              <td className="py-2">{line.item}</td>
              <td className="py-2">{line.qty}</td>
              <td className="py-2 text-right">{line.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="mt-3 flex animate-pop-in items-center justify-between rounded-lg bg-canvas px-3 py-2"
        style={{ animationDelay: "500ms" }}
      >
        <span className="text-micro text-stone">Total incl. GST</span>
        <span className="text-label font-semibold text-ink">₹84,000</span>
      </div>
      <div className="mt-auto flex justify-end gap-2">
        <span className="hidden @lg:inline-flex">
          <UiButton variant="outline">Share on WhatsApp</UiButton>
        </span>
        <UiButton cursor="convert">Convert to order</UiButton>
      </div>
    </div>
  );
}

function OrderPanel() {
  const rows = [
    { label: "Invoice", value: "INV-2214 created", done: true },
    { label: "Advance", value: "₹25,000 received", done: true },
    { label: "Balance", value: "₹59,000 on delivery", done: false },
    { label: "Delivery date", value: "14 Nov", done: false },
  ];
  return (
    <div className="flex h-full flex-col">
      <PanelTitle>Order confirmed</PanelTitle>
      <ul className="mt-3 space-y-2">
        {rows.map((row, index) => (
          <li
            key={row.label}
            className="flex animate-pop-in items-center justify-between gap-3 rounded-lg bg-canvas px-3 py-2"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span className="text-micro text-stone">{row.label}</span>
            <span className="flex items-center gap-2 text-micro font-semibold text-ink">
              {row.value}
              {row.done && <Tick done />}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex justify-end">
        <UiButton cursor="send-factory">Send to factory</UiButton>
      </div>
    </div>
  );
}

function ProductionPanel({ step }: { step: number }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center justify-between gap-1.5">
        <PanelTitle>Production</PanelTitle>
        <StatusChip tone="neutral">Synced from factory software</StatusChip>
      </div>
      <ul data-cursor="production" className="mt-4 space-y-4">
        {productionSteps.map((name, index) => (
          <li key={name}>
            <div className="mb-1.5 flex items-center justify-between text-micro">
              <span className="font-semibold text-ink">{name}</span>
              <span className="text-stone">
                {index < step
                  ? "Done"
                  : index === step
                    ? "In progress"
                    : "Up next"}
              </span>
            </div>
            {index === step ? (
              <FillBar key={`fill-${step}`} duration={1100} />
            ) : (
              <ProgressBar value={index < step ? 1 : 0} />
            )}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-micro text-stone">
        Workshop 2 · Supervisor: Rakesh
      </p>
      <div className="mt-auto flex justify-end">
        <UiButton cursor="deliver" variant={step === 2 ? "ink" : "outline"}>
          Mark delivered
        </UiButton>
      </div>
    </div>
  );
}

function DeliveredPanel() {
  const rows = [
    { label: "Delivered", value: "14 Nov, 11:30 am" },
    { label: "Balance", value: "₹59,000 paid" },
    { label: "Invoice", value: "INV-2214 closed" },
  ];
  return (
    <div className="flex h-full flex-col">
      <PanelTitle>Delivered</PanelTitle>
      <ul className="mt-3 space-y-2">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between gap-3 rounded-lg bg-canvas px-3 py-2"
          >
            <span className="text-micro text-stone">{row.label}</span>
            <span className="flex items-center gap-2 text-micro font-semibold text-ink">
              {row.value}
              <Tick done />
            </span>
          </li>
        ))}
      </ul>
      <div
        data-cursor="summary"
        className="mt-auto rounded-lg border border-mist px-3 py-2.5"
      >
        <span className="block text-micro text-stone">Enquiry to delivery</span>
        <span className="block text-label font-semibold text-ink">
          18 days, tracked in one place
        </span>
      </div>
    </div>
  );
}
