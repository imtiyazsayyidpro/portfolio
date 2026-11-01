"use client";

import { useRef, type ReactNode } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";
import { BrandFrame } from "@/components/ui/BrandFrame";
import { Cursor, defaultClickAt } from "./Cursor";
import { DemoStage } from "./DemoStage";
import { useDemoLoop, type DemoStep } from "./useDemoLoop";

type DemoFrameProps = {
  /** Window title shown in the mock app's top bar. */
  title: string;
  /** Plain description of what the demo shows, for screen readers. */
  description: string;
  steps: readonly DemoStep[];
  /** Frame shown when the user prefers reduced motion. */
  staticFrame: number;
  className?: string;
  /** Hold the loop (and hide the cursor) for this long after mounting, in ms. */
  startDelay?: number;
  children: (frame: number) => ReactNode;
};

/**
 * Shared shell for every animated demo: a brand frame holding a white app
 * window, the animated cursor, and a caption with a pause control.
 */
export function DemoFrame({
  title,
  description,
  steps,
  staticFrame,
  className = "",
  startDelay = 0,
  children,
}: DemoFrameProps) {
  const ref = useRef<HTMLElement>(null);
  const { frame, loop, started, running, animated, userPaused, togglePause } =
    useDemoLoop(ref, steps, staticFrame, startDelay);
  const step = steps[frame];

  return (
    <figure ref={ref} className={`w-full ${className}`}>
      <BrandFrame>
        <div role="img" aria-label={description} data-motion-paused={!running}>
          <DemoStage>
            <div className="overflow-hidden rounded-image bg-surface shadow-ui">
              <div className="flex items-center gap-3 border-b border-mist px-4 py-2.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-pill bg-mist" />
                  <span className="size-2.5 rounded-pill bg-mist" />
                  <span className="size-2.5 rounded-pill bg-mist" />
                </span>
                <span className="truncate text-caption font-medium text-stone">
                  {title}
                </span>
              </div>
              {/* Demos reserve space for every element up front, so the
                  height stays constant from frame to frame. */}
              {/* Re-mounted with a short fade each time the loop restarts,
                  so the jump back to the first frame isn't a hard cut */}
              <div
                key={loop}
                className={`relative p-3.5 @lg:p-5 ${loop > 0 ? "animate-fade-in" : ""}`}
              >
                {children(frame)}
              </div>
            </div>
            {animated && started && (
              <Cursor
                target={step.cursor}
                click={step.click}
                clickAt={defaultClickAt(step.duration)}
                stepKey={frame}
              />
            )}
          </DemoStage>
        </div>
      </BrandFrame>

      <figcaption className="mt-6 flex items-center justify-between gap-4 px-1">
        <span className="text-caption text-stone">Demo with sample data</span>
        {animated && (
          <button
            type="button"
            onClick={togglePause}
            className="-mr-2 inline-flex min-h-11 items-center gap-1.5 rounded-pill px-3 text-caption font-medium text-stone hover:text-ink"
          >
            {userPaused ? (
              <PlayIcon className="size-3.5" />
            ) : (
              <PauseIcon className="size-3.5" />
            )}
            {userPaused ? "Play demo" : "Pause demo"}
          </button>
        )}
      </figcaption>
    </figure>
  );
}
