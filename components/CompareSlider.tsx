"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Hero proof: the same five furniture orders twice. On the left, the
 * spreadsheet a business really runs on (typos, #N/A, a duplicate row); on the
 * right, the system we'd build from that same data. Drag (or use the arrow
 * keys) to compare. It sweeps once when it first comes into view so visitors
 * see it moves, and stops the moment they touch it. Sample data only.
 */

type Cell = { text: string; tone?: "bold" | "yellow" | "error" | "selected" };

/** Columns hidden on phones, so the sheet stays readable at 375px. */
const DESKTOP_ONLY_COLUMNS = new Set([0, 5, 6]);

const sheetHeader = ["Date", "Customer", "Item", "Amount", "Paid?", "Status", "Notes"];

const sheetRows: Cell[][] = [
  [{ text: "12/3" }, { text: "Ananya Rao" }, { text: "teak dining tbl 6 seat" }, { text: "84000" }, { text: "25k adv??", tone: "yellow" }, { text: "polishing?" }, { text: "ask factory" }],
  [{ text: "14-03" }, { text: "Farhan Ali" }, { text: "L shape sofa grey" }, { text: "1,12,000" }, { text: "YES" }, { text: "#N/A", tone: "error" }, { text: "see WA" }],
  [{ text: "15/3/26" }, { text: "R Gupta" }, { text: "wardrobe 3 door" }, { text: "96k" }, { text: "50%", tone: "yellow" }, { text: "cutting", tone: "selected" }, { text: "urgent!!", tone: "yellow" }],
  [{ text: "16 Mar" }, { text: "Neha Kapoor" }, { text: "Queen bed walnut" }, { text: "" }, { text: "no" }, { text: "quote sent??" }, { text: "call back" }],
  [{ text: "" }, { text: "Ananya R." }, { text: "dining table (same?)" }, { text: "84,000" }, { text: "" }, { text: "dup?", tone: "error" }, { text: "" }],
  [{ text: "18/3" }, { text: "Sneha Pillai" }, { text: "coffee table" }, { text: "18200" }, { text: "paid" }, { text: "delivered" }, { text: "" }],
  [{ text: "" }, { text: "" }, { text: "" }, { text: "#REF!", tone: "error" }, { text: "" }, { text: "" }, { text: "pls dont delete" }],
];

type Order = {
  customer: string;
  item: string;
  value: string;
  payment: string;
  paymentTone: "ok" | "due" | "none";
  stage: string;
  /** Production stages done, out of 5. */
  done: number;
};

const orders: Order[] = [
  { customer: "Ananya Rao", item: "Teak dining table, 6-seater", value: "₹84,000", payment: "₹59,000 due", paymentTone: "due", stage: "Polishing", done: 3 },
  { customer: "Farhan Ali", item: "L-shaped sofa, grey", value: "₹1,12,000", payment: "Paid in full", paymentTone: "ok", stage: "Quality check", done: 4 },
  { customer: "Rajesh Gupta", item: "Wardrobe, 3-door", value: "₹96,000", payment: "₹48,000 due", paymentTone: "due", stage: "Cutting", done: 2 },
  { customer: "Neha Kapoor", item: "Queen bed, walnut", value: "₹62,000", payment: "Quote sent", paymentTone: "none", stage: "Not started", done: 0 },
  { customer: "Sneha Pillai", item: "Coffee table", value: "₹18,200", payment: "Paid in full", paymentTone: "ok", stage: "Delivered", done: 5 },
];

const chipTone = {
  ok: "bg-mist text-navy",
  due: "bg-gold-tint text-[#6a5022]",
  none: "bg-[#f2f0eb] text-muted",
};

const cellTone = {
  bold: "font-bold",
  yellow: "bg-sheet-yellow",
  error: "bg-[#fbeed3] font-semibold text-gold-text",
  selected: "shadow-[inset_0_0_0_2px_var(--color-navy)]",
};

// Sheet grid: row number + 4 columns on phones, row number + 7 from md
const sheetGrid =
  "grid grid-cols-[28px_minmax(84px,0.9fr)_minmax(110px,1.3fr)_minmax(64px,0.7fr)_minmax(70px,0.7fr)] md:grid-cols-[36px_64px_118px_minmax(150px,1.4fr)_92px_92px_minmax(110px,1fr)_minmax(100px,1fr)]";
const sheetCell =
  "flex h-[34px] items-center overflow-hidden border-r border-b border-sheet-line px-2 whitespace-nowrap text-ellipsis md:px-[9px]";
const headCell = `${sheetCell} justify-center bg-sheet-head text-[12px] text-sheet-muted`;

// System table: customer, payment, production on phones; all five from md
const orderGrid =
  "grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-3 px-4 md:grid-cols-[minmax(150px,1.1fr)_minmax(170px,1.4fr)_110px_minmax(150px,1fr)_minmax(150px,1fr)] md:gap-4 md:px-[22px]";

const SWEEP_MS = 3200;

export function CompareSlider() {
  const [split, setSplit] = useState(50);
  const touched = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // One gentle sweep the first time the slider is mostly in view.
  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now() + 500;
        const tick = (now: number) => {
          if (touched.current) return;
          const t = now - start;
          if (t >= 0) {
            const p = Math.min(1, t / SWEEP_MS);
            const swing = Math.sin(2 * Math.PI * p) * (1 - 0.35 * p);
            setSplit(p >= 1 ? 50 : 50 - 30 * swing);
            if (p >= 1) return;
          }
          frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const onInput = (value: number) => {
    touched.current = true;
    setSplit(value);
  };

  return (
    <figure className="mt-14 md:mt-[72px]">
      <div
        ref={rootRef}
        className="group relative h-[520px] overflow-hidden rounded-card border border-line-strong bg-surface shadow-hero md:h-[470px]"
      >
        {/* Before: the spreadsheet */}
        <div aria-hidden="true" className="absolute inset-0 bg-surface text-[12px] text-sheet-text md:text-[13px]">
          <div className="flex h-11 items-center gap-3.5 border-b border-sheet-line bg-[#f7f6f3] px-4">
            <span className="truncate text-[13px] font-semibold">Orders_FINAL_v3 (2).xlsx</span>
            <span className="hidden text-[12px] text-[#8a8984] sm:inline">Last edited by Ramesh, 3 days ago</span>
          </div>
          <div className="flex h-[34px] items-center gap-2.5 overflow-hidden border-b border-sheet-line px-3 text-[12px] whitespace-nowrap text-[#55554f]">
            <span className="text-[#8a8984] italic">fx</span>
            <span>=IF(F4=&quot;&quot;,&quot;CHECK!!&quot;,VLOOKUP(B4,Sheet3!A:F,4,FALSE))</span>
          </div>
          <div className={sheetGrid}>
            <span className={headCell} />
            {["A", "B", "C", "D", "E", "F", "G"].map((letter, index) => (
              <span
                key={letter}
                className={`${headCell} ${DESKTOP_ONLY_COLUMNS.has(index) ? "hidden md:flex" : ""}`}
              >
                {letter}
              </span>
            ))}
            <span className={headCell}>1</span>
            {sheetHeader.map((label, index) => (
              <span
                key={label}
                className={`${sheetCell} font-bold ${DESKTOP_ONLY_COLUMNS.has(index) ? "hidden md:flex" : ""}`}
              >
                {label}
              </span>
            ))}
            {sheetRows.map((row, rowIndex) => (
              <SheetRow key={rowIndex} number={rowIndex + 2} cells={row} />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex h-[38px] items-stretch overflow-hidden border-t border-sheet-line bg-sheet-head text-[12px] whitespace-nowrap">
            <span className="flex items-center bg-surface px-4 font-semibold">Orders_FINAL</span>
            <span className="flex items-center px-4 text-sheet-muted">Copy of Orders</span>
            <span className="flex items-center px-4 text-sheet-muted">Sheet3</span>
            <span className="flex items-center px-4 text-sheet-muted">Factory (old)</span>
          </div>
        </div>

        {/* After: the system, revealed to the right of the handle */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-surface"
          style={{ clipPath: `inset(0 0 0 ${split}%)` }}
        >
          <div className="flex h-16 items-center justify-between gap-4 border-b border-hairline px-4 md:px-[22px]">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[24px]">Orders</span>
              <span className="hidden text-[13px] text-muted sm:inline">
                5 active · updated live from the factory
              </span>
            </div>
            <div className="hidden gap-1.5 text-[13px] font-semibold lg:flex">
              <span className="rounded-pill bg-navy px-3 py-[7px] text-white">All</span>
              <span className="rounded-pill px-3 py-[7px] text-body">Payment due</span>
              <span className="rounded-pill px-3 py-[7px] text-body">In production</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-hairline bg-wash px-4 py-3 md:px-[22px] md:py-3.5">
            <SearchGlyph />
            <span className="text-[14px]">Which orders still have money pending?</span>
            <span className="text-[14px] md:ml-auto">
              <strong className="font-bold">2 orders</strong>
              <span className="text-muted"> · ₹1,07,000 to collect</span>
            </span>
          </div>

          <div className={`${orderGrid} h-10 border-b border-hairline bg-wash text-[12px] font-semibold text-muted`}>
            <span>Customer</span>
            <span className="hidden md:block">Item</span>
            <span className="hidden md:block">Value</span>
            <span>Payment</span>
            <span>Production</span>
          </div>
          {orders.map((order) => (
            <div
              key={order.customer}
              className={`${orderGrid} h-[58px] border-b border-hairline text-[14px] md:h-[52px] ${
                order.paymentTone === "due" ? "bg-gold-wash" : ""
              }`}
            >
              <span className="min-w-0">
                <span className="block truncate font-semibold">{order.customer}</span>
                <span className="block truncate text-[12px] text-muted md:hidden">{order.item}</span>
              </span>
              <span className="hidden truncate text-body md:block">{order.item}</span>
              <span className="hidden md:block">{order.value}</span>
              <span>
                <span
                  className={`inline-flex rounded-pill px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap ${chipTone[order.paymentTone]}`}
                >
                  {order.payment}
                </span>
              </span>
              <span className="flex min-w-0 flex-col gap-1.5">
                <span className="truncate text-[13px]">{order.stage}</span>
                <span className="flex gap-[3px]">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <span
                      key={step}
                      className={`h-[5px] w-3 rounded-[3px] md:w-[18px] ${step < order.done ? "bg-navy" : "bg-line"}`}
                    />
                  ))}
                </span>
              </span>
            </div>
          ))}
          <p className="px-4 py-3 text-[13px] text-muted md:px-[22px]">
            1 duplicate merged · 1 broken formula removed
          </p>
        </div>

        {/* Divider and handle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-0"
          style={{ left: `${split}%` }}
        >
          <div className="absolute inset-y-0 -left-px w-0.5 bg-ink" />
          <div className="absolute top-1/2 left-0 flex size-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill bg-ink shadow-knob transition-transform duration-200 group-hover:scale-105">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6-5 6 5 6" />
              <path d="m15 6 5 6-5 6" />
            </svg>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[50px] left-3 rounded-pill bg-ink px-2.5 py-[5px] text-[12px] font-semibold text-white transition-opacity duration-300 md:left-4"
          style={{ opacity: split > 14 ? 1 : 0 }}
        >
          Today
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 bottom-3 rounded-pill bg-gold px-2.5 py-[5px] text-[12px] font-semibold text-ink transition-opacity duration-300 md:right-4 md:bottom-4"
          style={{ opacity: split < 86 ? 1 : 0 }}
        >
          With your system
        </span>

        {/* The control: a real range input over the whole area (drag, tap or arrow keys) */}
        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={split}
          onChange={(event) => onInput(Number(event.target.value))}
          aria-label="Compare the spreadsheet with the finished system"
          aria-valuetext={`${Math.round(100 - split)}% showing the finished system`}
          className="absolute inset-0 m-0 size-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-4 flex flex-wrap justify-between gap-x-6 gap-y-1 text-[14px] text-muted">
        <span>Drag to compare: the same five orders, as a spreadsheet and as a system.</span>
        <span>Recreation with sample data.</span>
      </figcaption>
    </figure>
  );
}

function SheetRow({ number, cells }: { number: number; cells: Cell[] }) {
  return (
    <>
      <span className={headCell}>{number}</span>
      {cells.map((cell, index) => (
        <span
          key={index}
          className={`${sheetCell} ${cell.tone ? cellTone[cell.tone] : ""} ${
            DESKTOP_ONLY_COLUMNS.has(index) ? "hidden md:flex" : ""
          }`}
        >
          {cell.text}
        </span>
      ))}
    </>
  );
}

function SearchGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-text)" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
