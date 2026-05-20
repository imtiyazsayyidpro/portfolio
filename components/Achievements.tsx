import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section>
      <div className="container">
        <div className="section-header reveal">
          <div className="meta">
            <span className="mono">[ 09 ] — Highlights</span>
          </div>
          <div>
            <h2>
              A few <em>highlights.</em>
            </h2>
          </div>
        </div>

        <div className="ach-grid reveal d1">
          {achievements.map((item) => (
            <div key={item.num} className="ach-cell">
              <div className="ix">[ {item.num} ]</div>
              <div className="nm">{item.title}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
