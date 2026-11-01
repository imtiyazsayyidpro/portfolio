"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView, usePrefersReducedMotion } from "@/lib/hooks/useMotion";

/** One state of a demo, plus what the cursor does while it is showing. */
export type DemoStep = {
  /** How long this state is shown, in ms. */
  duration: number;
  /** `data-cursor` name of the element the cursor glides to. */
  cursor?: string;
  /** Press the target near the end of the step, triggering the next state. */
  click?: boolean;
};

type DemoLoop = {
  frame: number;
  /** How many times the loop has wrapped back to the first frame. */
  loop: number;
  /** False until `startDelay` has passed (e.g. while the hero slides in). */
  started: boolean;
  /** True while the loop is actively advancing. */
  running: boolean;
  /** False when reduced motion is on and a static frame is shown. */
  animated: boolean;
  userPaused: boolean;
  togglePause: () => void;
};

/**
 * Steps through `steps` on a loop. Advances only while `ref` is on screen and
 * the user hasn't paused it. With reduced motion, holds `staticFrame`.
 */
export function useDemoLoop(
  ref: RefObject<HTMLElement | null>,
  steps: readonly DemoStep[],
  staticFrame: number,
  startDelay = 0,
): DemoLoop {
  const reducedMotion = usePrefersReducedMotion();
  const inView = useInView(ref, { threshold: 0.3 });
  const [frame, setFrame] = useState(0);
  const [loop, setLoop] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [started, setStarted] = useState(startDelay === 0);

  useEffect(() => {
    if (started) return;
    const timer = window.setTimeout(() => setStarted(true), startDelay);
    return () => window.clearTimeout(timer);
  }, [started, startDelay]);

  const running = started && inView && !userPaused && !reducedMotion;

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      const last = frame === steps.length - 1;
      setFrame(last ? 0 : frame + 1);
      if (last) setLoop((count) => count + 1);
    }, steps[frame].duration);
    return () => window.clearTimeout(timer);
  }, [running, frame, steps]);

  return {
    frame: reducedMotion ? staticFrame : frame,
    loop,
    started,
    running,
    animated: !reducedMotion,
    userPaused,
    togglePause: () => setUserPaused((paused) => !paused),
  };
}
