import type { ReactNode } from "react";
import { FileIcon, PhoneIcon } from "@/components/icons";

/*
 * Small coded scenes for "Sound familiar?". Each shows the pain in the design
 * system's colours, with one tiny ambient motion. They share a shell so they
 * read as one family. Errors and alerts use the gold highlight, never red.
 */

function SceneShell({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-48 overflow-hidden rounded-image bg-canvas"
    >
      {children}
    </div>
  );
}

/* Everything lives in Excel ---------------------------------------------- */

const sheet = [
  ["Lead", "Phone", "Order", "Paid?", "Notes"],
  ["Ramesh G.", "98xxx 4421", "Sofa", "yes??", "call back"],
  ["Sunita", "#N/A", "Bed", "#REF!", "see WA"],
  ["R. Gupta", "98xxx 4421", "Sofa", "50%", "dup?"],
  ["Mehul", "ask Raju", "#REF!", "pending", "urgent!!"],
];

const errorCells = new Set(["2-1", "2-3", "4-2"]);

export function ExcelScene() {
  return (
    <SceneShell>
      <div className="absolute top-5 -right-3 -left-1 rotate-[-2.5deg] rounded-lg border border-bone bg-surface shadow-float">
        <div className="grid grid-cols-[20px_repeat(5,1fr)] text-micro">
          <span className="border-r border-b border-mist bg-canvas" />
          {["A", "B", "C", "D", "E"].map((letter) => (
            <span
              key={letter}
              className="border-r border-b border-mist bg-canvas py-0.5 text-center text-stone"
            >
              {letter}
            </span>
          ))}
          {sheet.map((row, r) => (
            <Row key={r} index={r} cells={row} />
          ))}
        </div>
        <div className="flex gap-1 border-t border-mist bg-canvas px-2 pt-1 pb-1.5 text-micro">
          <span className="px-2 py-0.5 text-stone">Sheet1</span>
          <span className="rounded-b-md bg-surface px-2 py-0.5 font-semibold text-ink shadow-sm">
            Final_v3_REAL.xlsx
          </span>
          <span className="truncate px-2 py-0.5 text-stone">
            Copy of Final (2)
          </span>
        </div>
      </div>
    </SceneShell>
  );
}

function Row({ index, cells }: { index: number; cells: string[] }) {
  return (
    <>
      <span className="border-r border-b border-mist bg-canvas py-1 text-center text-stone">
        {index + 1}
      </span>
      {cells.map((cell, c) => {
        const isError = errorCells.has(`${index}-${c}`);
        return (
          <span
            key={c}
            className={`relative truncate border-r border-b border-mist px-1.5 py-1 ${
              index === 0 ? "font-semibold text-ink" : "text-ironwood"
            } ${isError ? "bg-glow font-semibold text-highlight-text" : ""}`}
          >
            {isError && (
              <span
                className="absolute inset-0 animate-flash border border-highlight bg-highlight/15"
                style={{ animationDelay: `${c * 500}ms` }}
              />
            )}
            <span className="relative">{cell}</span>
          </span>
        );
      })}
    </>
  );
}

/* Customers are lost in WhatsApp ------------------------------------------- */

const chats = [
  { from: "Mr. Shah", text: "Sir, what is the status of my order??", unread: 3, pos: "top-4 left-4 rotate-[-3deg]" },
  { from: "Showroom group", text: "Please send the quote again, can't find it", unread: 12, pos: "top-14 left-14 rotate-[2deg]" },
  { from: "Neha (accounts)", text: "Payment done. Check and confirm pls", unread: 7, pos: "top-25 left-7 rotate-[-1.5deg]" },
];

export function ChatScene() {
  return (
    <SceneShell>
      {chats.map((chat) => (
        <Bubble key={chat.from} {...chat} />
      ))}
      <div className="absolute right-4 bottom-4 animate-arrive">
        <div className="rounded-2xl rounded-br-sm bg-ink px-3 py-2 text-micro text-surface shadow-float">
          Hello?? Anyone there?
        </div>
      </div>
    </SceneShell>
  );
}

function Bubble({
  from,
  text,
  unread,
  pos,
}: {
  from: string;
  text: string;
  unread: number;
  pos: string;
}) {
  return (
    <div
      className={`absolute flex w-60 items-start gap-2 rounded-2xl rounded-tl-sm bg-surface px-3 py-2 shadow-float ${pos}`}
    >
      <span className="min-w-0 flex-1">
        <span className="block text-micro font-semibold text-ink">{from}</span>
        <span className="block truncate text-micro text-stone">{text}</span>
      </span>
      <span className="mt-0.5 flex h-5 min-w-5 items-center justify-center rounded-pill bg-highlight px-1 text-micro font-semibold text-on-highlight">
        {unread}
      </span>
    </div>
  );
}

/* The same data, typed three times ---------------------------------------- */

export function SameDataScene() {
  return (
    <SceneShell>
      {/* Spreadsheet row */}
      <div className="absolute top-4 left-3 w-44 rotate-[-4deg] rounded-md border border-bone bg-surface text-micro shadow-float">
        <span className="block border-b border-mist bg-canvas px-2 py-0.5 text-stone">
          Excel
        </span>
        <span className="grid grid-cols-[60px_1fr]">
          <span className="border-r border-mist px-2 py-1 text-stone">Cust. name</span>
          <span className="px-2 py-1 text-ink">Ramesh Gupta</span>
        </span>
      </div>

      {/* Paper slip */}
      <div className="absolute top-17 right-3 w-40 rotate-[3deg] rounded-sm border border-dashed border-bone bg-surface px-3 py-2 shadow-float">
        <span className="block text-micro text-stone">Paper order slip</span>
        <span className="mt-1 block border-b border-mist pb-0.5 text-label text-ink italic">
          R. Gupta
        </span>
      </div>

      {/* App form */}
      <div className="absolute bottom-4 left-6 w-48 rotate-[-1deg] rounded-lg border border-mist bg-surface p-2.5 shadow-float">
        <span className="block text-micro text-stone">Billing app · Customer</span>
        <span className="mt-1 flex h-7 items-center rounded-md border border-bone px-2 text-micro text-ink">
          GUPTA RAMESH K.
          <span className="ml-px inline-block h-3 w-px animate-blink bg-ink" />
        </span>
      </div>
    </SceneShell>
  );
}

/* Nobody knows where things stand ----------------------------------------- */

export function StatusScene() {
  return (
    <SceneShell>
      <div className="absolute top-6 left-4 w-48 rotate-[-2deg] rounded-xl border border-mist bg-surface p-3 shadow-float">
        <span className="block text-micro text-stone">Order #2291</span>
        <span className="block text-caption font-semibold text-ink">
          L-shaped sofa
        </span>
        <span className="mt-2 flex items-center justify-between">
          <span className="text-micro text-stone">Status</span>
          <span className="flex size-6 items-center justify-center rounded-pill border border-dashed border-highlight-text text-label font-semibold text-highlight-text">
            ?
          </span>
        </span>
        <span className="mt-1.5 flex items-center justify-between">
          <span className="text-micro text-stone">Payment</span>
          <span className="text-micro font-semibold text-ironwood">
            Not sure…
          </span>
        </span>
      </div>

      <div className="absolute right-5 bottom-6 flex flex-col items-center gap-2">
        <span className="flex size-12 animate-ring items-center justify-center rounded-pill bg-ink text-surface shadow-float">
          <PhoneIcon className="size-5" />
        </span>
        <span className="rounded-pill bg-highlight px-2 py-0.5 text-micro font-semibold text-on-highlight">
          3 missed calls
        </span>
      </div>
    </SceneShell>
  );
}

/* Paperwork takes days ---------------------------------------------------- */

function Sheet({ className }: { className: string }) {
  return (
    <div
      className={`absolute h-32 w-28 rounded-sm border border-mist bg-surface p-2.5 shadow-float ${className}`}
    >
      <FileIcon className="size-3.5 text-stone" />
      <span className="mt-2 block space-y-1.5">
        {[90, 70, 85, 60, 75].map((width, index) => (
          <span
            key={index}
            className="block h-1 rounded-pill bg-mist"
            style={{ width: `${width}%` }}
          />
        ))}
      </span>
    </div>
  );
}

export function PaperworkScene() {
  return (
    <SceneShell>
      <Sheet className="top-7 left-[18%] rotate-[-9deg]" />
      <Sheet className="top-5 left-[32%] rotate-[5deg]" />
      <div className="absolute top-8 left-[44%] animate-nudge">
        <Sheet className="relative rotate-[-2deg]" />
      </div>
      <span className="absolute right-[10%] bottom-6 rotate-[-12deg] rounded-md border-2 border-highlight-text bg-surface/80 px-2.5 py-1 text-label font-semibold text-highlight-text">
        Pending approval
      </span>
      <span className="absolute bottom-5 left-5 rounded-pill bg-surface px-2 py-0.5 text-micro text-stone shadow-sm">
        Day 9 of waiting
      </span>
    </SceneShell>
  );
}

/* An old system nobody likes ---------------------------------------------- */

const oldFields = ["Cust_ID", "Cust_Nm", "Addr1", "Addr2", "Ph1", "Ph2", "Ord_Ref", "Ord_Dt", "Remarks"];

export function OldSystemScene() {
  return (
    <SceneShell>
      <div className="absolute top-4 right-4 left-4 rotate-[1.5deg] border border-smoke bg-mist shadow-float">
        <div className="flex items-center justify-between bg-smoke px-1.5 py-0.5 text-micro text-surface">
          <span>CRM v2.3 – [Customer Master]</span>
          <span className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-2 border border-surface" />
            ))}
          </span>
        </div>
        <div className="flex gap-2 border-b border-smoke px-1.5 py-0.5 text-micro text-ironwood">
          {["File", "Edit", "View", "Records", "Tools", "Help"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-x-1.5 gap-y-1 p-1.5">
          {oldFields.map((field) => (
            <span key={field} className="flex items-center gap-1 text-micro text-ironwood">
              <span className="w-10 shrink-0 truncate">{field}</span>
              <span className="h-3.5 flex-1 border border-smoke bg-surface" />
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 translate-y-1 items-center gap-2 border border-smoke bg-surface px-3 py-2 shadow-float">
        <span className="size-4 animate-spin rounded-pill border-2 border-mist border-t-ironwood" />
        <span className="text-micro text-ironwood">Loading… please wait</span>
      </div>
    </SceneShell>
  );
}
