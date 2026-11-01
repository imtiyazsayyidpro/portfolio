"use client";

import { FileIcon } from "@/components/icons";
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
 * Storyboard: a customer fills an online KYC form → documents upload with a
 * tick → e-signature appears → status moves Pending → Approved → Disbursed.
 */
const STEPS: readonly DemoStep[] = [
  { duration: 1700, cursor: "upload", click: true }, // KYC typing
  { duration: 1700, cursor: "sign", click: true }, // documents upload
  { duration: 1500, cursor: "submit", click: true }, // signature
  { duration: 1400, cursor: "status" }, // pending
  { duration: 1400, cursor: "status" }, // approved
  { duration: 2700, cursor: "disbursal" }, // disbursed
]; // ≈10.4s

const F = { kyc: 0, upload: 1, sign: 2, pending: 3, approved: 4, disbursed: 5 } as const;

const documents = ["PAN card.pdf", "Aadhaar card.pdf", "Bank statement.pdf"];

const statusByFrame = ["Draft", "Draft", "Draft", "Pending", "Approved", "Disbursed"] as const;

const tracker = ["Pending", "Approved", "Disbursed"] as const;

export function LoanDemo() {
  return (
    <DemoFrame
      title="Loans · New application"
      description="Demo of a loan processing system: a customer's KYC details type in, three documents upload with ticks, an e-signature is drawn, and the application moves from Pending to Approved to Disbursed."
      steps={STEPS}
      staticFrame={F.disbursed}
    >
      {(frame) => {
        const status = statusByFrame[frame];
        const reached = frame - F.pending; // -3..2: index into tracker
        const typed = frame === F.kyc;

        return (
          <div className="flex flex-col gap-4">
            {/* Header and status */}
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-label font-semibold text-ink">
                  Rohan Mehta · LN-2087
                </p>
                <p className="text-micro text-stone">
                  Personal loan · applied online
                </p>
              </div>
              <span data-cursor="status">
                <StatusChip
                  key={status}
                  tone={
                    status === "Disbursed"
                      ? "highlight"
                      : status === "Approved"
                        ? "ink"
                        : status === "Pending"
                          ? "soft"
                          : "neutral"
                  }
                  className="animate-pop-in"
                >
                  {status}
                </StatusChip>
              </span>
            </div>

            <ol className="grid grid-cols-3 gap-2">
              {tracker.map((stage, index) => (
                <li key={stage}>
                  <ProgressBar value={index <= reached ? 1 : 0} />
                  <span
                    className={`mt-1.5 block text-micro ${
                      index <= reached ? "font-semibold text-ink" : "text-stone"
                    }`}
                  >
                    {stage}
                  </span>
                </li>
              ))}
            </ol>

            {/* KYC and documents side by side when wide, stacked when narrow */}
            <div className="grid gap-3 @lg:grid-cols-2">
              {/* KYC form */}
              <div className="rounded-xl border border-mist p-3">
                <p className="text-caption font-semibold text-ink">
                  KYC details
                </p>
                <div className="mt-2 space-y-2">
                  <Field label="Full name">Rohan Mehta</Field>
                  <Field label="PAN">
                    {typed ? (
                      <TypedText text="ABCPM4821K" duration={400} />
                    ) : (
                      "ABCPM4821K"
                    )}
                  </Field>
                  <Field label="Mobile">
                    {typed ? (
                      <TypedText text="98765 43210" duration={400} delay={400} />
                    ) : (
                      "98765 43210"
                    )}
                  </Field>
                  <Field label="Loan amount">
                    {typed ? (
                      <TypedText text="₹2,50,000 · 24 months" duration={450} delay={800} />
                    ) : (
                      "₹2,50,000 · 24 months"
                    )}
                  </Field>
                </div>
              </div>

              {/* Documents and signature */}
              <div className="flex flex-col rounded-xl border border-mist p-3">
                <div className="flex items-center justify-between">
                  <p className="text-caption font-semibold text-ink">
                    Documents
                  </p>
                  <UiButton
                    cursor="upload"
                    variant={frame === F.kyc ? "ink" : "outline"}
                  >
                    Upload all
                  </UiButton>
                </div>
                <ul className="mt-2.5 space-y-2.5">
                  {documents.map((doc, index) => {
                    const delay = index * 380;
                    return (
                      <li key={doc} className="flex items-center gap-2">
                        <FileIcon className="size-4 shrink-0 text-ink" />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-micro text-ink">
                            {doc}
                          </span>
                          <span className="mt-1 block">
                            {frame === F.upload ? (
                              <FillBar duration={450} delay={delay} />
                            ) : (
                              <ProgressBar value={frame > F.upload ? 1 : 0} />
                            )}
                          </span>
                        </span>
                        <Tick
                          done={frame >= F.upload}
                          delay={frame === F.upload ? delay + 450 : 0}
                        />
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-auto flex items-center gap-2 border-t border-mist pt-2.5">
                  <svg
                    viewBox="0 0 120 32"
                    className="h-7 flex-1 text-ink"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M118 27H2"
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      strokeDasharray="3 3"
                    />
                    {frame >= F.sign && (
                      <path
                        d="M6 22c6-14 10-16 11-10s-3 10 1 9 7-14 11-13-2 12 2 12 6-8 9-8 1 7 5 7 6-6 9-9c2 4 1 9 6 7s7-8 13-6 6 6 14 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        pathLength={1}
                        strokeDasharray="1"
                        className={frame === F.sign ? "animate-draw" : ""}
                      />
                    )}
                  </svg>
                  {frame >= F.sign ? (
                    <StatusChip tone="soft">Signed</StatusChip>
                  ) : (
                    <UiButton
                      cursor="sign"
                      variant={frame === F.upload ? "ink" : "outline"}
                    >
                      Sign now
                    </UiButton>
                  )}
                </div>
              </div>
            </div>

            {/* Disbursement and submit */}
            <div className="flex min-h-18 items-center justify-between gap-3 rounded-xl bg-canvas px-3.5 py-3 @lg:min-h-0">
              <span data-cursor="disbursal" className="min-w-0">
                <span className="block text-micro text-stone">
                  Disbursement
                </span>
                <span
                  key={status}
                  className="block animate-fade-in text-caption font-semibold text-ink"
                >
                  {
                    {
                      Draft: "₹2,50,000 to account ••4821 after approval",
                      Pending: "Verifying KYC and documents…",
                      Approved: "Approved · releasing funds",
                      Disbursed: "₹2,50,000 sent to account ••4821",
                    }[status]
                  }
                </span>
              </span>
              {frame >= F.disbursed ? (
                <Tick done />
              ) : (
                <UiButton
                  cursor="submit"
                  variant={frame === F.sign ? "ink" : "outline"}
                >
                  Submit application
                </UiButton>
              )}
            </div>
          </div>
        );
      }}
    </DemoFrame>
  );
}
