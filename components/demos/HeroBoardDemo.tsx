"use client";

import { CheckIcon, SearchIcon } from "@/components/icons";
import { DemoFrame } from "./DemoFrame";
import { Avatar, ProgressBar, StatusChip, Tick, UiButton } from "./parts";
import type { DemoStep } from "./useDemoLoop";

/*
 * Hero storyboard: the cursor clicks a new lead → it becomes a quote → an
 * order → moves across production stages → a "Payment received" toast pops in.
 */
const STEPS: readonly DemoStep[] = [
  { duration: 1500, cursor: "action", click: true }, // new lead
  { duration: 1500, cursor: "action", click: true }, // quote
  { duration: 1500, cursor: "action", click: true }, // order
  { duration: 1200, cursor: "progress" }, // cutting
  { duration: 1200, cursor: "progress" }, // polishing
  { duration: 1500, cursor: "action", click: true }, // quality check
  { duration: 2800, cursor: "toast" }, // delivered + payment
]; // ≈11.2s

const FINAL_FRAME = 6;

/** Lane the highlighted order sits in on each frame. */
const laneForFrame = [0, 1, 2, 3, 3, 3, 4];

type Card = { name: string; item: string; meta: string };

const lanes: { name: string; cards: Card[] }[] = [
  {
    name: "New leads",
    cards: [
      { name: "Vikram Singh", item: "Wardrobe, 3-door", meta: "Instagram" },
      { name: "Neha Kapoor", item: "Queen bed, walnut", meta: "Walk-in" },
    ],
  },
  {
    name: "Quotes",
    cards: [
      { name: "Farhan Ali", item: "L-shaped sofa", meta: "₹1,12,000" },
      { name: "Divya Menon", item: "Oak bookshelf", meta: "₹28,500" },
    ],
  },
  {
    name: "Orders",
    cards: [
      { name: "Rahul Verma", item: "Dining set, 4-seater", meta: "₹96,000" },
      { name: "Sneha Pillai", item: "Coffee table", meta: "₹18,200" },
    ],
  },
  {
    name: "In production",
    cards: [
      { name: "Meera Joshi", item: "Teak bookshelf", meta: "Polishing" },
      { name: "Arjun Patel", item: "3-seater sofa", meta: "Upholstery" },
    ],
  },
  {
    name: "Delivered",
    cards: [
      { name: "Kavya Iyer", item: "Study table", meta: "Paid" },
      { name: "Sameer Desai", item: "TV unit", meta: "Paid" },
    ],
  },
];

const productionSteps = ["Cutting", "Polishing", "Quality check"] as const;

export function HeroBoardDemo({ startDelay = 0 }: { startDelay?: number }) {
  return (
    <DemoFrame
      startDelay={startDelay}
      title="Orders · Board"
      description="Demo of an order tracking board: the cursor opens a new lead for a dining table, sends a quote, confirms the order and starts production. The order moves through cutting, polishing and quality check, is marked delivered, and a 'Payment received' notice pops in."
      steps={STEPS}
      staticFrame={FINAL_FRAME}
    >
      {(frame) => {
        const activeLane = laneForFrame[frame];
        const productionStep = Math.min(Math.max(frame - 3, 0), 2);

        return (
          <div className="flex flex-col gap-4">
            <Toolbar />

            {/* Narrow: one list row per stage, with only the moving order's
                card shown. Wide (@3xl): five board columns. */}
            <ol className="grid gap-2 @3xl:grid-cols-5 @3xl:gap-3">
              {lanes.map((lane, index) => {
                const isHere = activeLane === index;
                return (
                  <li
                    key={lane.name}
                    className="flex flex-col gap-2 rounded-xl bg-canvas px-3 py-2.5 @3xl:p-2.5"
                  >
                    <div className="flex items-center justify-between gap-2 @3xl:px-1 @3xl:pt-0.5">
                      <span className="text-caption font-semibold text-ink @3xl:text-micro">
                        {lane.name}
                      </span>
                      <span className="text-caption text-stone @3xl:text-micro">
                        {lane.cards.length + (isHere ? 1 : 0)} orders
                      </span>
                    </div>

                    <div
                      className={`gap-2 @3xl:grid @3xl:min-h-80 @3xl:content-start ${
                        isHere ? "grid" : "hidden"
                      }`}
                    >
                      {isHere && (
                        <ActiveCard
                          key={`active-${index}`}
                          lane={index}
                          productionStep={productionStep}
                        />
                      )}
                      {lane.cards.map((card) => (
                        <BaseCard key={card.name} card={card} />
                      ))}
                    </div>
                  </li>
                );
              })}
            </ol>

            {frame === FINAL_FRAME && (
              <div
                data-cursor="toast"
                className="absolute inset-x-3 top-3 flex animate-pop-in items-center gap-3 rounded-xl bg-ink px-4 py-3 text-surface shadow-ui @3xl:inset-x-auto @3xl:top-auto @3xl:right-5 @3xl:bottom-5 @3xl:w-72"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-pill bg-glow text-ink">
                  <CheckIcon className="size-4" strokeWidth={2.5} />
                </span>
                <span className="min-w-0">
                  <span className="block text-label font-semibold">
                    Payment received
                  </span>
                  <span className="block truncate text-micro opacity-80">
                    ₹59,000 · Ananya Rao · INV-2214
                  </span>
                </span>
              </div>
            )}
          </div>
        );
      }}
    </DemoFrame>
  );
}

function Toolbar() {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <p className="text-heading-sm font-semibold text-ink">Orders</p>
        <StatusChip tone="neutral">This week</StatusChip>
        <span className="hidden @3xl:inline-flex">
          <StatusChip tone="neutral">All showrooms</StatusChip>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden h-8 w-56 items-center gap-2 rounded-pill border border-mist px-3 text-micro text-stone @3xl:flex">
          <SearchIcon className="size-3.5" />
          Search orders, customers…
        </span>
        <UiButton>+ New lead</UiButton>
      </div>
    </div>
  );
}

/** Other orders in a column; only shown in the wide board layout. */
function BaseCard({ card }: { card: Card }) {
  return (
    <div className="hidden rounded-lg border border-mist bg-surface px-2.5 py-2 @3xl:block">
      <div className="flex items-center gap-2">
        <Avatar name={card.name} />
        <span className="min-w-0">
          <span className="block truncate text-micro font-semibold text-ink">
            {card.name}
          </span>
          <span className="block truncate text-micro text-stone">
            {card.item}
          </span>
        </span>
      </div>
      <span className="mt-1.5 block text-micro font-medium text-ironwood">
        {card.meta}
      </span>
    </div>
  );
}

function ActiveCard({
  lane,
  productionStep,
}: {
  lane: number;
  productionStep: number;
}) {
  const detail = [
    "Website enquiry",
    "Quote ₹84,000",
    "Advance ₹25,000 paid",
    productionSteps[productionStep],
    "Paid in full",
  ][lane];

  return (
    <div className="animate-pop-in rounded-lg border-2 border-highlight bg-surface px-2.5 py-2 shadow-glow">
      <div className="flex items-center gap-2">
        <Avatar name="Ananya Rao" highlight />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-caption font-semibold text-ink @3xl:text-micro">
            Ananya Rao
          </span>
          <span className="block truncate text-caption text-stone @3xl:text-micro">
            Dining table, 6-seater
          </span>
        </span>
        {lane === 4 && <Tick done />}
      </div>

      <span
        key={detail}
        className="mt-1.5 block animate-fade-in text-caption font-semibold text-ink @3xl:text-micro"
      >
        {detail}
      </span>

      <span data-cursor="progress" className="mt-1.5 block h-1">
        {lane === 3 && <ProgressBar value={(productionStep + 1) / 3} />}
      </span>

      <span className="mt-2 flex h-6.5 items-center">
        {lane === 0 && <UiButton cursor="action">Send quote</UiButton>}
        {lane === 1 && <UiButton cursor="action">Confirm order</UiButton>}
        {lane === 2 && <UiButton cursor="action">Start production</UiButton>}
        {lane === 3 && (
          <UiButton
            cursor="action"
            variant={productionStep === 2 ? "ink" : "outline"}
          >
            Mark delivered
          </UiButton>
        )}
        {lane === 4 && <StatusChip tone="highlight">Delivered</StatusChip>}
      </span>
    </div>
  );
}
