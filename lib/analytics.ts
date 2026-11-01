/**
 * Custom Google Analytics 4 events. The one place events are sent from.
 * Does nothing when Analytics isn't loaded (development, missing ID, blocked
 * by the visitor, or not loaded yet).
 */

export type AnalyticsEvent =
  | "book_call_click"
  | "whatsapp_click"
  | "email_click"
  | "linkedin_click"
  | "see_work_click"
  | "work_tab_view";

type Gtag = (command: "event", name: string, params?: Record<string, string>) => void;

export function trackEvent(name: AnalyticsEvent, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params);
}

/**
 * Data attributes that mark a link for click tracking, read by
 * <AnalyticsEvents>. Plain function so server components can use it.
 * `params` become data-track-* attributes, e.g. { location: "hero" }.
 */
export function trackClick(name: AnalyticsEvent, params: Record<string, string> = {}) {
  const attributes: Record<string, string> = { "data-track": name };
  for (const [key, value] of Object.entries(params)) {
    attributes[`data-track-${key}`] = value;
  }
  return attributes;
}
