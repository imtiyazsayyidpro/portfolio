"use client";

import { CheckIcon } from "@/components/icons";
import { DemoFrame } from "./DemoFrame";
import { ProgressBar, StatusChip, Tick, UiButton } from "./parts";
import type { DemoStep } from "./useDemoLoop";

/*
 * Storyboard: an event page → the cursor picks 3 seats on a live seat map →
 * adds a snack → checkout → an e-ticket with a QR code → the door scanner
 * reads the QR and the cursor taps Admit for 2 of 3 guests.
 * Fake show, fake venue, fake data. No real platform or client names.
 */
const STEPS: readonly DemoStep[] = [
  { duration: 1200, cursor: "choose-seats", click: true }, // 0 event page
  { duration: 950, cursor: "seat-1", click: true }, // 1 seat map
  { duration: 950, cursor: "seat-2", click: true }, // 2 one seat picked
  { duration: 950, cursor: "seat-3", click: true }, // 3 two seats picked
  { duration: 1000, cursor: "continue", click: true }, // 4 three seats picked
  { duration: 1000, cursor: "add-snack", click: true }, // 5 add-ons
  { duration: 1000, cursor: "pay", click: true }, // 6 snack added
  { duration: 1300, cursor: "ticket" }, // 7 e-ticket
  { duration: 900, cursor: "viewfinder" }, // 8 scanning
  { duration: 1000, cursor: "admit", click: true }, // 9 admit 2 of 3
  { duration: 1200, cursor: "admitted" }, // 10 admitted
]; // ≈11.5s, so it finishes within the 12s tab auto-advance

const F = { event: 0, seats: 1, seatsDone: 4, extras: 5, extrasDone: 6, ticket: 7, scan: 8, admit: 9, admitted: 10 } as const;

const views = ["Event", "Seats", "Extras", "Ticket", "Door"] as const;

function viewFor(frame: number) {
  if (frame === F.event) return 0;
  if (frame <= F.seatsDone) return 1;
  if (frame <= F.extrasDone) return 2;
  if (frame === F.ticket) return 3;
  return 4;
}

const PRICE = 120;
const SNACK_PRICE = 25;

export function TicketingDemo() {
  return (
    <DemoFrame
      title="Tickets · An Evening of Jazz"
      description="Demo of a white-label ticketing platform: on the event page for 'An Evening of Jazz' at Sample Theatre, the cursor picks three seats on a live seat map, adds popcorn, and checks out. An e-ticket with one QR code appears. Then the door scanner reads the QR and the cursor admits 2 of 3 guests."
      steps={STEPS}
      staticFrame={F.admit}
    >
      {(frame) => {
        const view = viewFor(frame);
        return (
          <div className="flex flex-col gap-3.5">
            {/* Journey: website → scanner app */}
            <ol className="flex items-center gap-1 text-micro @lg:gap-1.5">
              {views.map((name, index) => (
                <li key={name} className="flex items-center gap-1.5">
                  {index > 0 && <span className="hidden h-px w-4 bg-bone @lg:block" />}
                  <span
                    className={`rounded-pill px-1.5 py-0.5 @lg:px-2 ${
                      index === view
                        ? "bg-primary font-semibold text-surface"
                        : index < view
                          ? "text-ink"
                          : "text-stone"
                    }`}
                  >
                    {name}
                  </span>
                </li>
              ))}
            </ol>

            <div key={view} className="h-80 animate-fade-in overflow-hidden">
              {view === 0 && <EventView />}
              {view === 1 && <SeatView picked={Math.max(frame - F.seats, 0)} frame={frame} />}
              {view === 2 && <ExtrasView added={frame === F.extrasDone} />}
              {view === 3 && <TicketView />}
              {view === 4 && <ScannerView frame={frame} />}
            </div>
          </div>
        );
      }}
    </DemoFrame>
  );
}

/* 1. Event page ------------------------------------------------------------ */

function EventView() {
  return (
    <div className="grid h-full gap-3 @lg:grid-cols-[170px_1fr] @lg:gap-5">
      {/* Poster */}
      <div className="relative flex h-24 flex-col justify-end overflow-hidden rounded-xl bg-brand-stripes p-3 @lg:h-full">
        <span className="absolute top-3 right-3 size-8 rounded-pill bg-highlight @lg:size-12" />
        <span className="absolute top-6 right-9 size-4 rounded-pill border-2 border-glow @lg:top-10 @lg:right-14 @lg:size-6" />
        <span className="font-display text-heading-sm leading-tight text-surface @lg:text-heading">
          An Evening of Jazz
        </span>
        <span className="text-micro text-glow">Live at Sample Theatre</span>
      </div>

      <div className="flex min-h-0 flex-col">
        <p className="text-label font-semibold text-ink">An Evening of Jazz</p>
        <p className="text-micro text-stone">
          Sample Theatre · Fri 14 Mar · 8:00 pm
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <StatusChip tone="neutral">Live music</StatusChip>
          <StatusChip tone="neutral">2 hrs</StatusChip>
          <StatusChip tone="soft">86 seats left</StatusChip>
        </div>
        <p className="mt-3 hidden text-caption text-stone @lg:block">
          A quintet plays the standards in an intimate, seated evening. Doors
          open at 7:30 pm.
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-mist pt-3">
          <span>
            <span className="block text-micro text-stone">From</span>
            <span className="block text-label font-semibold text-ink">
              AED {PRICE}
            </span>
          </span>
          <UiButton cursor="choose-seats">Choose seats</UiButton>
        </div>
      </div>
    </div>
  );
}

/* 2. Seat map with live availability ---------------------------------------- */

// Wide: rows A–F × 12 seats. Narrow: rows A–D × 8 seats (the rest hidden).
const ROWS = ["A", "B", "C", "D", "E", "F"];
const SEATS = 12;
const NARROW_ROWS = 4;
const NARROW_SEATS = 8;

const sold: Record<string, number[]> = {
  A: [1, 2, 7, 8, 11],
  B: [3, 4, 9],
  C: [1, 2, 10, 11],
  D: [6, 7, 8, 12],
  E: [2, 3, 4, 5],
  F: [9, 10, 11],
};

/** The cursor's picks, present in both layouts. */
const picks = ["C4", "C5", "C6"];
/** Another buyer takes this seat while you choose: "live" availability. */
const LIVE_SOLD = "D3";

function SeatView({ picked, frame }: { picked: number; frame: number }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <p className="text-caption font-semibold text-ink">Choose your seats</p>
        <span className="flex items-center gap-1.5 text-micro text-stone">
          <span className="size-1.5 animate-blink rounded-pill bg-highlight-strong" />
          Live
        </span>
      </div>

      <div className="mt-3 rounded-pill bg-mist py-1 text-center text-micro text-ironwood">
        Stage
      </div>

      <div className="mt-3 flex flex-1 flex-col items-center gap-1.5">
        {ROWS.map((row, r) => (
          <div
            key={row}
            className={`items-center gap-1.5 ${r >= NARROW_ROWS ? "hidden @lg:flex" : "flex"}`}
          >
            <span className="w-3 text-micro text-stone">{row}</span>
            {Array.from({ length: SEATS }, (_, i) => {
              const n = i + 1;
              const id = `${row}${n}`;
              const pickIndex = picks.indexOf(id);
              const isPicked = pickIndex >= 0 && pickIndex < picked;
              const isSold =
                sold[row].includes(n) || (id === LIVE_SOLD && frame >= 2);
              return (
                <span
                  key={id}
                  data-cursor={pickIndex >= 0 ? `seat-${pickIndex + 1}` : undefined}
                  className={`size-[18px] rounded-[5px] border ${
                    n > NARROW_SEATS ? "hidden @lg:block" : "block"
                  } ${
                    isPicked
                      ? "animate-pop-in border-on-highlight bg-highlight"
                      : isSold
                        ? `border-mist bg-mist ${id === LIVE_SOLD ? "animate-pop-in" : ""}`
                        : "border-bone bg-surface"
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-micro text-stone">
        <Legend className="border-bone bg-surface">Available</Legend>
        <Legend className="border-mist bg-mist">Sold</Legend>
        <Legend className="border-on-highlight bg-highlight">Your seats</Legend>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 border-t border-mist pt-3">
        <span className="text-caption text-ink">
          <span className="font-semibold">
            {picked} {picked === 1 ? "seat" : "seats"}
          </span>{" "}
          · AED {picked * PRICE}
        </span>
        <UiButton cursor="continue" variant={picked === 3 ? "ink" : "outline"}>
          Continue
        </UiButton>
      </div>
    </div>
  );
}

function Legend({
  className,
  children,
}: {
  className: string;
  children: string;
}) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`size-2.5 rounded-[3px] border ${className}`} />
      {children}
    </span>
  );
}

/* 3. Add to your night ------------------------------------------------------ */

const extras = [
  { name: "Popcorn", note: "Collect at the bar", price: SNACK_PRICE },
  { name: "Mezze box", note: "Served at your seat", price: 45 },
  { name: "Soft drink", note: "Collect at the bar", price: 15 },
];

function ExtrasView({ added }: { added: boolean }) {
  const total = 3 * PRICE + (added ? SNACK_PRICE : 0);
  return (
    <div className="flex h-full flex-col">
      <p className="text-caption font-semibold text-ink">Add to your night</p>
      <p className="text-micro text-stone">Seats C4, C5, C6 · held for 10:00</p>

      <ul className="mt-3 space-y-2">
        {extras.map((extra, index) => (
          <li
            key={extra.name}
            className="flex items-center justify-between gap-3 rounded-xl border border-mist px-3 py-2.5"
          >
            <span className="min-w-0">
              <span className="block text-caption font-semibold text-ink">
                {extra.name}
              </span>
              <span className="block truncate text-micro text-stone">
                {extra.note} · AED {extra.price}
              </span>
            </span>
            {index === 0 && added ? (
              <StatusChip tone="highlight" className="animate-pop-in">
                Added
              </StatusChip>
            ) : (
              <UiButton
                cursor={index === 0 ? "add-snack" : undefined}
                variant="outline"
              >
                Add
              </UiButton>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-mist pt-3">
        <span>
          <span className="block text-micro text-stone">
            3 seats{added ? " + popcorn" : ""}
          </span>
          <span
            key={total}
            className="block animate-fade-in text-label font-semibold text-ink"
          >
            AED {total}
          </span>
        </span>
        <UiButton cursor="pay" variant={added ? "ink" : "outline"}>
          Pay AED {total}
        </UiButton>
      </div>
    </div>
  );
}

/* 4. E-ticket ---------------------------------------------------------------- */

function TicketView() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mb-3 flex items-center gap-2 text-caption font-semibold text-ink">
        <span className="flex size-5 items-center justify-center rounded-pill bg-highlight text-on-highlight">
          <CheckIcon className="size-3" strokeWidth={3} />
        </span>
        Booking confirmed
      </div>

      <div
        data-cursor="ticket"
        className="animate-pop-in overflow-hidden rounded-xl border border-mist shadow-float"
      >
        <div className="flex items-center justify-between bg-brand-stripes px-3.5 py-2 text-micro text-glow">
          <span>E-ticket · JZ-4821</span>
          <span>Paid</span>
        </div>
        <div className="flex items-center gap-3.5 p-3.5">
          <div className="min-w-0 flex-1">
            <p className="text-label font-semibold text-ink">An Evening of Jazz</p>
            <p className="text-micro text-stone">Sample Theatre</p>
            <dl className="mt-2.5 grid gap-x-3 gap-y-1.5 text-micro @lg:grid-cols-2">
              <div>
                <dt className="text-stone">Date</dt>
                <dd className="font-semibold text-ink">Fri 14 Mar, 8 pm</dd>
              </div>
              <div>
                <dt className="text-stone">Seats</dt>
                <dd className="font-semibold text-ink">C4, C5, C6</dd>
              </div>
              <div>
                <dt className="text-stone">Guests</dt>
                <dd className="font-semibold text-ink">3</dd>
              </div>
              <div>
                <dt className="text-stone">Extras</dt>
                <dd className="font-semibold text-ink">Popcorn × 1</dd>
              </div>
            </dl>
          </div>
          <QrCode className="size-22 shrink-0 @lg:size-26" />
        </div>
        <p className="border-t border-dashed border-bone px-3.5 py-2 text-micro text-stone">
          Sent to your email · one QR code for the whole booking
        </p>
      </div>
    </div>
  );
}

/* 5. Door scanner app ------------------------------------------------------- */

function ScannerView({ frame }: { frame: number }) {
  const scanned = frame >= F.admit;
  const admitted = frame === F.admitted;
  const checkedIn = admitted ? 150 : 148;

  return (
    <div className="flex h-full items-center justify-center gap-6">
      {/* Door summary, wide layout only */}
      <div className="hidden w-44 @lg:block">
        <p className="text-caption font-semibold text-ink">Main entrance</p>
        <p className="text-micro text-stone">Tonight · An Evening of Jazz</p>
        <p className="mt-4 text-micro text-stone">Checked in</p>
        <p key={checkedIn} className="animate-fade-in text-heading font-semibold text-ink">
          {checkedIn}
          <span className="text-caption font-normal text-stone"> / 312</span>
        </p>
        <span className="mt-2 block">
          <ProgressBar value={checkedIn / 312} />
        </span>
      </div>

      {/* Phone */}
      <div className="flex h-full w-48 flex-col overflow-hidden rounded-[28px] border-[6px] border-ink bg-ink text-surface shadow-ui">
        <div className="flex items-center justify-between px-3 pt-2 pb-1.5 text-micro">
          <span className="font-semibold">Door scanner</span>
          <span className="text-glow">Main entrance</span>
        </div>

        <div className="flex flex-1 items-start justify-center pt-3">
          <div data-cursor="viewfinder" className="relative size-28">
            {/* Corner brackets */}
            <span className="absolute top-0 left-0 size-5 rounded-tl-md border-t-2 border-l-2 border-glow" />
            <span className="absolute top-0 right-0 size-5 rounded-tr-md border-t-2 border-r-2 border-glow" />
            <span className="absolute bottom-0 left-0 size-5 rounded-bl-md border-b-2 border-l-2 border-glow" />
            <span className="absolute right-0 bottom-0 size-5 rounded-br-md border-r-2 border-b-2 border-glow" />
            <div className="absolute inset-3 rounded-md bg-surface p-1.5">
              <QrCode className="size-full" />
            </div>
            {!scanned && (
              <span className="absolute inset-x-1 top-0 h-0.5 animate-scan rounded-pill bg-highlight" />
            )}
          </div>
        </div>

        {/* Result sheet */}
        <div
          className={`rounded-t-2xl bg-surface p-3 text-ink ${scanned ? "animate-pop-in" : ""}`}
        >
          {!scanned && (
            <p className="py-5 text-center text-micro text-stone">
              Point at a ticket QR code
            </p>
          )}
          {scanned && !admitted && (
            <>
              <p className="text-micro text-stone">JZ-4821 · Row C · 3 tickets</p>
              <p className="mt-0.5 text-caption font-semibold">
                Admit 2 of 3 guests
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="flex items-center gap-2 text-caption">
                  <span className="flex size-6 items-center justify-center rounded-pill border border-bone">
                    −
                  </span>
                  <span className="font-semibold">2</span>
                  <span className="flex size-6 items-center justify-center rounded-pill border border-bone">
                    +
                  </span>
                </span>
                <UiButton cursor="admit">Admit</UiButton>
              </div>
            </>
          )}
          {admitted && (
            <div data-cursor="admitted" className="flex items-center gap-2.5 py-2.5">
              <Tick done />
              <span>
                <span className="block text-caption font-semibold">
                  2 guests admitted
                </span>
                <span className="block text-micro text-stone">
                  1 still to arrive on this booking
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* QR code ------------------------------------------------------------------- */

const QR_SIZE = 21;

/** A fixed, made-up QR-like pattern with the three corner finder squares. */
const qrCells: boolean[] = Array.from({ length: QR_SIZE * QR_SIZE }, (_, i) => {
  const x = i % QR_SIZE;
  const y = Math.floor(i / QR_SIZE);
  const inFinder = (fx: number, fy: number) =>
    x >= fx && x < fx + 7 && y >= fy && y < fy + 7;
  for (const [fx, fy] of [[0, 0], [QR_SIZE - 7, 0], [0, QR_SIZE - 7]]) {
    if (inFinder(fx, fy)) {
      const dx = x - fx;
      const dy = y - fy;
      const ring = dx === 0 || dx === 6 || dy === 0 || dy === 6;
      const core = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
      return ring || core;
    }
  }
  return (x * 7 + y * 13 + x * y * 3) % 5 < 2;
});

function QrCode({ className }: { className: string }) {
  return (
    <svg
      viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {qrCells.map((on, i) =>
        on ? (
          <rect
            key={i}
            x={i % QR_SIZE}
            y={Math.floor(i / QR_SIZE)}
            width="1"
            height="1"
            className="fill-ink"
          />
        ) : null,
      )}
    </svg>
  );
}
