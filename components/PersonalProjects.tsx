import { personalProjects } from "@/data/projects";

const delayClasses = ["d1", "d2"];

export default function PersonalProjects() {
  return (
    <section>
      <div className="container">
        <div className="section-header reveal">
          <div className="meta">
            <span className="mono">[ 04 ] — Personal</span>
          </div>
          <div>
            <h2>
              Personal products &amp; <em>experiments.</em>
            </h2>
          </div>
        </div>

        {personalProjects.map((project, i) => (
          <div
            key={project.title}
            className={`personal-card reveal ${delayClasses[i] ?? ""}`}
            style={i < personalProjects.length - 1 ? { marginBottom: 18 } : undefined}
          >
            <div className="left">
              <h3>{project.title}</h3>
              <div className="label">
                <span className="pill">{project.pill}</span>
              </div>
              <p>{project.description}</p>
              {project.url && (
                <a
                  className="url"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.urlLabel}
                </a>
              )}
            </div>

            <div className="right">
              {project.sections.map((section, si) => (
                <div key={section.heading}>
                  <h5 style={si > 0 ? { marginTop: 18 } : undefined}>
                    {section.heading}
                  </h5>

                  {section.type === "chips" && (
                    <div className="features">
                      {section.items.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {section.type === "quotes" && (
                    <div>
                      {section.items.map((item, qi) => (
                        <div key={qi}>
                          <div className="quote-block">
                            <p>&ldquo;{item}&rdquo;</p>
                          </div>
                          {qi < section.items.length - 1 && (
                            <div style={{ height: 8 }} />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
