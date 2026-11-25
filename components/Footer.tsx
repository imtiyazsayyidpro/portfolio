import { Container } from "@/components/ui/Container";
import { trackClick } from "@/lib/analytics";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-9 text-[14px] text-body">
        <p>
          <span className="font-display text-[20px] text-ink">{site.name}</span>
          <span className="ml-3.5">Business automation and custom systems · {site.city}, India</span>
        </p>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              {...trackClick("linkedin_click")}
              className="inline-flex min-h-11 items-center font-semibold text-ink no-underline hover:text-gold-text"
            >
              <span className="sr-only">{site.name} on </span>LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              {...trackClick("email_click")}
              className="inline-flex min-h-11 items-center font-semibold text-ink no-underline hover:text-gold-text"
            >
              Email<span className="sr-only"> {site.name}</span>
            </a>
          </li>
          <li>© 2026</li>
        </ul>
      </Container>
    </footer>
  );
}
