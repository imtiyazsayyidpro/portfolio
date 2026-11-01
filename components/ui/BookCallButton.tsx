import type { ComponentProps } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { trackClick } from "@/lib/analytics";
import { site } from "@/lib/site";

type BookCallButtonProps = Omit<ComponentProps<typeof ButtonLink>, "href" | "children"> & {
  /** Where the button sits, sent with the book_call_click Analytics event. */
  location: "nav" | "hero" | "contact" | "mobile_menu" | "not_found";
};

/** "Book a call" primary button: opens the booking page in a new tab. */
export function BookCallButton({ location, ...props }: BookCallButtonProps) {
  return (
    <ButtonLink
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      {...trackClick("book_call_click", { location })}
      {...props}
    >
      Book a call
      <span className="sr-only"> (opens in a new tab)</span>
    </ButtonLink>
  );
}
