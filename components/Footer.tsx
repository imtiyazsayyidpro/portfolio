import { Container } from "@/components/ui/Container";
import { trackClick } from "@/lib/analytics";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="py-10">
      <Container className="flex flex-col gap-6 text-body text-stone md:flex-row md:items-end md:justify-between md:text-label">
        <div className="space-y-1">
          <p>
            <span className="font-semibold text-ink">{site.name}</span> ·{" "}
            {site.tagline}
          </p>
          <p>{site.city}, India</p>
        </div>

        <div className="space-y-1 md:text-right">
          <ul className="flex gap-5 md:justify-end">
            <li>
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                {...trackClick("linkedin_click")}
                className="inline-flex min-h-11 items-center rounded-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                <span className="sr-only">{site.name} on </span>
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                {...trackClick("email_click")}
                className="inline-flex min-h-11 items-center rounded-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                Email
                <span className="sr-only"> {site.name}</span>
              </a>
            </li>
          </ul>
          <p>© 2026 {site.name}</p>
        </div>
      </Container>
    </footer>
  );
}
