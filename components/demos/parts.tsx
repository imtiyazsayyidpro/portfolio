import type { ReactNode } from "react";
import { CheckIcon } from "@/components/icons";

/** Small building blocks shared by the mock UIs inside the demos. */

type Tone = "neutral" | "soft" | "ink" | "highlight";

const toneStyles: Record<Tone, string> = {
  neutral: "border border-bone bg-surface text-ironwood",
  soft: "border border-glow bg-glow text-ink",
  ink: "border border-ink bg-ink text-surface",
  highlight: "border border-highlight bg-highlight text-on-highlight",
};

export function StatusChip({
  tone,
  children,
  className = "",
}: {
  tone: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-pill px-2 py-0.5 text-micro font-semibold whitespace-nowrap ${toneStyles[tone]} ${className}`}
    >
      {tone === "highlight" && <CheckIcon className="size-3" strokeWidth={2.5} />}
      {children}
    </span>
  );
}

/** Round tick that pops in when `done` turns true. */
export function Tick({ done, delay = 0 }: { done: boolean; delay?: number }) {
  return (
    <span className="relative flex size-4.5 shrink-0 items-center justify-center rounded-pill border border-mist">
      {done && (
        <span
          className="absolute -inset-px flex animate-pop-in items-center justify-center rounded-pill bg-highlight text-on-highlight"
          style={{ animationDelay: `${delay}ms` }}
        >
          <CheckIcon className="size-2.5" strokeWidth={3} />
        </span>
      )}
    </span>
  );
}

/** Single-line text that types itself in, one character per step. */
export function TypedText({
  text,
  duration = 500,
  delay = 0,
}: {
  text: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <span
      className="inline-block animate-type whitespace-nowrap"
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationTimingFunction: `steps(${text.length}, end)`,
      }}
    >
      {text}
    </span>
  );
}

/** Thin bar that fills once mounted. */
export function FillBar({
  duration = 700,
  delay = 0,
}: {
  duration?: number;
  delay?: number;
}) {
  return (
    <span className="block h-1 w-full overflow-hidden rounded-pill bg-mist">
      <span
        className="block h-full origin-left animate-fill-bar rounded-pill bg-highlight-strong"
        style={{ animationDuration: `${duration}ms`, animationDelay: `${delay}ms` }}
      />
    </span>
  );
}

/** Bar at a given fraction (0–1); changes animate with a transform. */
export function ProgressBar({ value }: { value: number }) {
  return (
    <span className="block h-1 w-full overflow-hidden rounded-pill bg-mist">
      <span
        className="block h-full origin-left rounded-pill bg-highlight-strong transition-transform duration-700"
        style={{ transform: `scaleX(${value})` }}
      />
    </span>
  );
}

/** Small UI button the cursor can target via `cursor`. */
export function UiButton({
  children,
  cursor,
  variant = "ink",
  className = "",
}: {
  children: ReactNode;
  cursor?: string;
  variant?: "ink" | "outline";
  className?: string;
}) {
  return (
    <span
      data-cursor={cursor}
      className={`inline-flex items-center justify-center gap-1 rounded-pill px-3 py-1.5 text-micro font-semibold whitespace-nowrap ${
        variant === "ink"
          ? "bg-ink text-surface"
          : "border border-bone bg-surface text-ink"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function Avatar({
  name,
  highlight = false,
}: {
  name: string;
  highlight?: boolean;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  return (
    <span
      className={`flex size-7 shrink-0 items-center justify-center rounded-pill text-micro font-semibold ${
        highlight ? "bg-highlight text-on-highlight" : "bg-canvas text-ironwood"
      }`}
    >
      {initials}
    </span>
  );
}

/** Labelled input box. */
export function Field({
  label,
  children,
  cursor,
}: {
  label: string;
  children: ReactNode;
  cursor?: string;
}) {
  return (
    <div>
      <span className="block text-micro text-stone">{label}</span>
      <span
        data-cursor={cursor}
        className="mt-1 flex h-8 items-center overflow-hidden rounded-lg border border-bone bg-surface px-2.5 text-caption text-ink"
      >
        {children}
      </span>
    </div>
  );
}
