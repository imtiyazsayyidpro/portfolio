import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="hero no-border">
      <div className="container">
        <div className="hero-grid">
          {/* Eyebrow */}
          <div className="hero-eyebrow anim-rise">
            <span className="tag">
              <span className="dot" />
              {hero.eyebrow.badge}
            </span>
            {hero.eyebrow.pills.map((pill) => (
              <span key={pill} className="pill">
                {pill}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="anim-rise d1">
            {hero.headline1}
            <br />
            {hero.headline2}{" "}
            <em>
              real
              <br />
              business workflows.
            </em>
          </h1>

          {/* Sub */}
          <p className="hero-sub anim-rise d2">
            I&apos;m <strong>Imtiyaz Sayyid</strong>, a full-stack developer
            from Mumbai. I build CRM systems, admin dashboards, AI-powered
            tools, and production web applications — software that sits where
            business operations meet code.
          </p>

          {/* CTAs */}
          <div className="hero-actions anim-rise d3">
            <a href="#work" className="btn primary">
              View My Work <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn">
              Get in Touch
            </a>
          </div>

          {/* Credentials grid */}
          <div className="hero-cred anim-rise d4">
            {hero.credentials.map((cred) => (
              <div key={cred.num} className="hero-cred-item">
                <span className="num">{cred.num}</span>
                <span className="lbl">{cred.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
