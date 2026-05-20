import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section>
      <div className="container">
        <div className="section-header reveal">
          <div className="meta">
            <span className="mono">[ 07 ] — Process</span>
          </div>
          <div>
            <h2>
              How I approach <em>projects.</em>
            </h2>
          </div>
        </div>

        <div className="process-grid reveal d1">
          {processSteps.map((step) => (
            <div key={step.num} className="process-step">
              <div className="n">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
