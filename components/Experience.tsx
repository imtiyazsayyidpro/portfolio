import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section>
      <div className="container">
        <div className="section-header reveal">
          <div className="meta">
            <span className="mono">[ 08 ] — Experience</span>
          </div>
          <div>
            <h2>
              Where I&apos;ve <em>built things.</em>
            </h2>
          </div>
        </div>

        <div className="exp-list reveal d1">
          {experience.map((job, i) => (
            <div key={i} className="exp-row">
              <div className="yr">{job.period}</div>
              <div className="co">
                {job.company}
                <span className="role">{job.role}</span>
              </div>
              <div className="ds">{job.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
