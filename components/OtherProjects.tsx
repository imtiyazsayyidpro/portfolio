import { otherProjects } from "@/data/projects";

const delayClasses = ["d1", "d2", "d3", "d4"];

export default function OtherProjects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <div className="meta">
            <span className="mono">[ 03 ] — Other Real-World</span>
          </div>
          <div>
            <h2>
              Live platforms &amp; <em>client builds.</em>
            </h2>
            <p className="intro">
              Other production projects, internal tools, and freelance work.
            </p>
          </div>
        </div>

        <div className="grid-2">
          {otherProjects.map((project, i) => (
            <div
              key={project.title}
              className={`card reveal ${delayClasses[i] ?? ""}`}
            >
              <div className="top">
                <h3>{project.title}</h3>
                <div className="lbl">{project.label}</div>
              </div>
              <div className="desc">{project.description}</div>
              <div className="foot">
                <div className="impact">{project.impact}</div>
                <div className="stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
