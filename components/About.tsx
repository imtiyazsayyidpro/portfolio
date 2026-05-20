export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <div className="meta">
            <span className="mono">[ 10 ] — About</span>
          </div>
          <div>
            <h2>
              About <em>me.</em>
            </h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="left reveal d1">
            <p>
              I&apos;m <em>Imtiyaz Sayyid</em>, a full-stack developer from
              Mumbai.
            </p>
            <p>
              I care about clean structure, practical UI, reliable backends, and
              software that makes work easier.
            </p>
          </div>

          <div className="right reveal d2">
            <p>
              I work mostly with{" "}
              <strong>
                TypeScript, Next.js, Node.js, Prisma, and MySQL
              </strong>
              . I enjoy software that sits close to business operations — CRM
              systems, dashboards, workflow platforms, and AI-powered tools.
            </p>
            <p>
              My strength isn&apos;t just writing code. It&apos;s understanding
              how a business works, finding where the workflow is messy, and
              turning that into a system people actually use.
            </p>
            <p>
              Outside client work, I build personal products around fitness,
              journaling, AI, and memory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
