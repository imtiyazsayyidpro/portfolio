import { stack } from "@/data/stack";

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="section-header reveal">
          <div className="meta">
            <span className="mono">[ 06 ] — Stack</span>
          </div>
          <div>
            <h2>
              What I <em>build with.</em>
            </h2>
            <p className="intro">
              TypeScript ecosystem, owning the flow from database to deployment.
            </p>
          </div>
        </div>

        <div className="stack-grid reveal d1">
          {stack.map((category) => (
            <div key={category.num} className="stack-col">
              <div className="stack-col-head">
                <span className="ix">[ {category.num} ]</span>
                <h4>{category.title}</h4>
              </div>
              <ul className="stack-list">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
