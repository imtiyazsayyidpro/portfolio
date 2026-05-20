const pillars = [
  {
    num: "01",
    title: "Business-first",
    body: "Understand the process before writing the code.",
  },
  {
    num: "02",
    title: "Full-stack execution",
    body: "Frontend, backend, database, APIs, deployment.",
  },
  {
    num: "03",
    title: "Workflow-heavy",
    body: "Roles, permissions, statuses, operational flows.",
  },
  {
    num: "04",
    title: "AI-ready",
    body: "Tools that use AI meaningfully — not as a sticker.",
  },
];

export default function Intro() {
  return (
    <section>
      <div className="container">
        <div className="section-header reveal">
          <div className="meta">
            <span className="mono">[ 01 ] — Approach</span>
          </div>
        </div>

        <p className="intro-statement reveal d1">
          I don&apos;t just build screens. I build{" "}
          <em>systems people actually use.</em>
        </p>

        <p className="intro-body reveal d2">
          The work I enjoy most starts with understanding how a business runs —
          who handles what, where data moves, what gets approved, what should be
          automated. From there I build full-stack systems that fit the workflow
          instead of fighting it.
        </p>

        <div className="pillar-grid reveal d3">
          {pillars.map((p) => (
            <div key={p.num} className="pillar">
              <div className="idx">[ {p.num} ]</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
