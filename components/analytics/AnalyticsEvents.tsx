"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

/**
 * One delegated click listener for every link marked with trackClick(), so
 * server components can be tracked without becoming client components.
 * Sends the event name from data-track and any data-track-* attributes as
 * parameters (e.g. data-track-location="hero" → { location: "hero" }).
 */
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const element = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!element) return;
      const params: Record<string, string> = {};
      for (const [key, value] of Object.entries(element.dataset)) {
        // dataset turns data-track-location into trackLocation
        if (key.startsWith("track") && key !== "track" && value) {
          const name = key.slice("track".length);
          params[name.charAt(0).toLowerCase() + name.slice(1)] = value;
        }
      }
      trackEvent(element.dataset.track as AnalyticsEvent, params);
    };
    // Capture phase, so it runs even if another handler stops the click
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
