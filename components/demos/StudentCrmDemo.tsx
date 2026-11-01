"use client";

import { SparkIcon } from "@/components/icons";
import { DemoFrame } from "./DemoFrame";
import { Avatar, StatusChip, TypedText, UiButton } from "./parts";
import type { DemoStep } from "./useDemoLoop";

/*
 * Storyboard: a new student lead arrives → moves through application stages →
 * a partner types a plain-English question and an answer appears.
 */
const STEPS: readonly DemoStep[] = [
  { duration: 1500, cursor: "next-stage", click: true }, // new lead arrives
  { duration: 1150, cursor: "next-stage", click: true }, // counselling
  { duration: 1150, cursor: "next-stage", click: true }, // applied
  { duration: 1300, cursor: "ask-input", click: true }, // offer received
  { duration: 1800, cursor: "ask-button", click: true }, // typing question
  { duration: 900, cursor: "ask-button" }, // thinking
  { duration: 3000, cursor: "answer" }, // answer
]; // ≈10.8s

const F = { offer: 3, typing: 4, thinking: 5, answer: 6 } as const;

const stages = ["New lead", "Counselling", "Applied", "Offer received"] as const;

const QUESTION = "How many applications this month?";

const students = [
  { name: "Karan Shah", course: "MBA · Canada", stage: "Applied", owner: "Pune" },
  { name: "Sana Khan", course: "BSc Nursing · Australia", stage: "Counselling", owner: "Nashik" },
  { name: "Rohit Menon", course: "MS Computer Science · Germany", stage: "Offer received", owner: "Kochi" },
  { name: "Aisha Qureshi", course: "MA Design · UK", stage: "Visa filed", owner: "Pune" },
];

const breakdown = [
  { country: "UK", count: 18 },
  { country: "Canada", count: 14 },
  { country: "Australia", count: 9 },
  { country: "Germany", count: 7 },
];

export function StudentCrmDemo() {
  return (
    <DemoFrame
      title="Students · Pipeline"
      description="Demo of a student CRM: a new student lead arrives and the cursor moves her from New lead to Counselling, Applied and Offer received. Then a partner types 'How many applications this month?' and the system answers: 48 applications, with a breakdown by country."
      steps={STEPS}
      staticFrame={F.answer}
    >
      {(frame) => {
        const stageIndex = Math.min(frame, 3);

        return (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <StatusChip tone="ink">All 248</StatusChip>
                <StatusChip tone="neutral">New 13</StatusChip>
                <span className="hidden @lg:inline-flex">
                  <StatusChip tone="neutral">Applied 64</StatusChip>
                </span>
              </div>
              <span className="hidden text-micro text-stone @lg:inline">
                All franchises
              </span>
            </div>

            <ul className="divide-y divide-mist rounded-xl border border-mist">
              {/* Incoming lead */}
              <li
                className={`bg-canvas px-3 py-2.5 ${
                  frame === 0 ? "animate-pop-in" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Avatar name="Priya Nair" highlight />
                  <span className="min-w-0 flex-1">
                    <span className="block text-caption font-semibold text-ink">
                      Priya Nair
                    </span>
                    <span className="block truncate text-micro text-stone">
                      MSc Data Science · UK · Thane
                    </span>
                  </span>
                  <StatusChip
                    key={stageIndex}
                    tone={stageIndex === 3 ? "highlight" : "soft"}
                    className="animate-pop-in"
                  >
                    {stages[stageIndex]}
                  </StatusChip>
                </div>
                <div className="mt-2 flex items-center gap-3 pl-10">
                  <span className="grid flex-1 grid-cols-4 gap-1">
                    {stages.map((stage, index) => (
                      <span
                        key={stage}
                        className="h-1 overflow-hidden rounded-pill bg-mist"
                      >
                        <span
                          className={`block h-full origin-left bg-highlight-strong transition-transform duration-500 ${
                            index <= stageIndex ? "scale-x-100" : "scale-x-0"
                          }`}
                        />
                      </span>
                    ))}
                  </span>
                  <UiButton
                    cursor="next-stage"
                    variant={stageIndex === 3 ? "outline" : "ink"}
                  >
                    Next stage
                  </UiButton>
                </div>
              </li>

              {students.map((student, index) => (
                <li
                  key={student.name}
                  // Narrow layout shows one fewer row
                  className={`items-center gap-3 px-3 py-2.5 ${
                    index === students.length - 1 ? "hidden @lg:flex" : "flex"
                  }`}
                >
                  <Avatar name={student.name} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-caption font-semibold text-ink">
                      {student.name}
                    </span>
                    <span className="block truncate text-micro text-stone">
                      {student.course} · {student.owner}
                    </span>
                  </span>
                  <StatusChip tone="neutral">{student.stage}</StatusChip>
                </li>
              ))}
            </ul>

            {/* Ask about your data */}
            <div className="rounded-xl bg-canvas p-3.5">
              <p className="flex items-center gap-1.5 text-micro font-semibold text-ink">
                <SparkIcon className="size-3.5" />
                Ask about your data
              </p>
              {/* Narrow: input full width with the Ask button below it */}
              <div className="mt-2 flex flex-col gap-2 @lg:flex-row @lg:items-center">
                <span
                  data-cursor="ask-input"
                  className="flex h-9 min-w-0 flex-1 items-center overflow-hidden rounded-lg border border-bone bg-surface px-3 text-micro whitespace-nowrap text-ink @lg:text-caption"
                >
                  {frame < F.typing && (
                    <span className="truncate text-stone">
                      Try “Which students are waiting on offers?”
                    </span>
                  )}
                  {frame === F.typing && (
                    <TypedText text={QUESTION} duration={1100} />
                  )}
                  {frame > F.typing && QUESTION}
                </span>
                <UiButton cursor="ask-button" className="self-end @lg:self-auto">
                  Ask
                </UiButton>
              </div>

              <div data-cursor="answer" className="mt-3 h-20 @lg:h-16">
                {frame === F.thinking && (
                  <span className="flex gap-1 px-1 py-3" aria-hidden="true">
                    {[0, 150, 300].map((delay) => (
                      <span
                        key={delay}
                        className="size-1.5 animate-blink rounded-pill bg-ink"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </span>
                )}
                {frame === F.answer && (
                  <div className="animate-fade-in">
                    <p className="text-caption text-ink">
                      <span className="font-semibold">48 applications</span>{" "}
                      this month, 12 more than last month.
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {breakdown.map((item) => (
                        <li
                          key={item.country}
                          className="rounded-pill border border-mist bg-surface px-2 py-0.5 text-micro text-ironwood"
                        >
                          {item.country} {item.count}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {frame < F.thinking && (
                  <p className="py-1 text-micro text-stone">
                    Answers come from your own data: leads, students,
                    franchises and applications.
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </DemoFrame>
  );
}
