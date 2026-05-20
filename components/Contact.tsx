import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  const { email, location, website, websiteLabel, instagram, social } =
    siteConfig;

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <span className="mono reveal">[ 11 ] — Contact</span>
        <h2 className="reveal d1">
          Have a workflow that <em>needs software?</em>
        </h2>

        <div className="contact-body">
          <div className="reveal d2">
            <p>
              If you&apos;re building a CRM, internal tool, dashboard, AI
              workflow, or custom platform — I can help turn the idea into a
              working product.
            </p>
            <p style={{ color: "var(--fg-3)", fontSize: 15 }}>
              Open to selected freelance projects and technical collaborations.
            </p>
            <div className="contact-actions">
              <a href={`mailto:${email}`} className="btn primary">
                Email Me <span className="arrow">→</span>
              </a>
              <a
                href={social.linkedin}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={social.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="contact-info reveal d3">
            <div className="contact-info-row">
              <div className="k">Email</div>
              <div className="v">
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
            <div className="contact-info-row">
              <div className="k">Location</div>
              <div className="v">{location}</div>
            </div>
            <div className="contact-info-row">
              <div className="k">Website</div>
              <div className="v">
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {websiteLabel}
                </a>
              </div>
            </div>
            <div className="contact-info-row">
              <div className="k">Instagram</div>
              <div className="v">{instagram}</div>
            </div>
          </div>
        </div>

        <div className="wordmark reveal d4">
          Imtiyaz <em>Sayyid</em>
        </div>
      </div>
    </section>
  );
}
