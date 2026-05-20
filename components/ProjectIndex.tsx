import { projectIndex } from "@/data/projects";

export default function ProjectIndex() {
  return (
    <section>
      <div className="container">
        <div className="section-header reveal">
          <div className="meta">
            <span className="mono">[ 05 ] — Index</span>
          </div>
          <div>
            <h2>
              Everything in <em>one view.</em>
            </h2>
          </div>
        </div>

        <div className="index-table reveal d1">
          {projectIndex.map((item) => (
            <div key={item.num} className="index-row">
              <div className="ix">{item.num}</div>
              <div className="nm">{item.name}</div>
              <div className="ds">{item.description}</div>
              <div className="yr">{item.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
