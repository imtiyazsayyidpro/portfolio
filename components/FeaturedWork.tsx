"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { featuredProjects } from "@/data/projects";

const TOTAL = featuredProjects.length;

function useFeaturedScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);

  const scrollTo = useCallback((idx: number) => {
    idx = Math.max(0, Math.min(TOTAL - 1, idx));
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = scroller.querySelectorAll<HTMLElement>(".fcard");
    const target = cards[idx];
    if (!target) return;
    const offset =
      target.offsetLeft - (scroller.clientWidth - target.clientWidth) / 2;
    scroller.scrollTo({ left: offset, behavior: "smooth" });
    currentRef.current = idx;
    setCurrent(idx);
  }, []);

  // Sync current index on scroll
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let t: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const center = scroller.scrollLeft + scroller.clientWidth / 2;
        const cards = scroller.querySelectorAll<HTMLElement>(".fcard");
        let closest = 0;
        let closestDist = Infinity;
        cards.forEach((c, i) => {
          const dist = Math.abs(c.offsetLeft + c.clientWidth / 2 - center);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        if (closest !== currentRef.current) {
          currentRef.current = closest;
          setCurrent(closest);
        }
      }, 80);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  // Keyboard arrow navigation (only when section is in view)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const featured = document.querySelector(".featured");
      if (!featured) return;
      const r = featured.getBoundingClientRect();
      if (
        r.top >= window.innerHeight * 0.6 ||
        r.bottom <= window.innerHeight * 0.3
      )
        return;
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollTo(currentRef.current - 1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollTo(currentRef.current + 1);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [scrollTo]);

  return { scrollerRef, current, scrollTo };
}

export default function FeaturedWork() {
  const { scrollerRef, current, scrollTo } = useFeaturedScroller();
  const curLabel = String(current + 1).padStart(2, "0");

  return (
    <section id="work" className="featured">
      {/* Header */}
      <div className="featured-head reveal">
        <div className="left">
          <span className="mono">[ 02 ] — Featured Work</span>
          <h2>
            Four projects, <em>real teams using them.</em>
          </h2>
          <p className="intro">
            Each card is one project — swipe, drag, or use the arrows.
          </p>
        </div>
        <div className="featured-nav">
          <div className="scroll-pos">
            <span className="cur">{curLabel}</span>
            <span>&nbsp;/&nbsp;04</span>
          </div>
          <div className="nav-arrows">
            <button
              className="nav-arrow"
              onClick={() => scrollTo(current - 1)}
              disabled={current === 0}
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              className="nav-arrow"
              onClick={() => scrollTo(current + 1)}
              disabled={current === TOTAL - 1}
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable track */}
      <div className="scroller reveal d1" ref={scrollerRef}>
        {featuredProjects.map((project, i) => (
          <article
            key={project.num}
            className={`fcard${current === i ? " is-current" : ""}`}
            data-idx={i}
          >
            {/* Browser mock */}
            <div className="fcard-mock">
              <div className="fcard-mock-bar">
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="url">{project.url}</div>
                <div style={{ width: 40 }} />
              </div>
              <div className="fcard-mock-body">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-screenshot"
                />
              </div>
            </div>

            {/* Content */}
            <div className="fcard-content">
              <div className="fcard-header">
                <div>
                  <div className="fcard-num">PROJECT / {project.num}</div>
                  <div className="fcard-label" style={{ marginTop: 6 }}>
                    {project.label}
                  </div>
                </div>
                <div className="fcard-tag">
                  <span className="dot" />
                  {project.tag}
                </div>
              </div>

              <h3>
                {project.titlePre}
                <em>{project.titleEm}</em>
              </h3>

              <p className="fcard-desc">{project.description}</p>

              <ul className="fcard-feats">
                {project.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>

              <div className="fcard-foot">
                <div className="blk">
                  <div className="l">Role</div>
                  <div className="v">
                    {project.role[0]}
                    <br />
                    {project.role[1]}
                  </div>
                </div>
                <div className="blk">
                  <div className="l">Stack</div>
                  <div className="stack-chips">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="impact">
                  {project.impactPre}
                  <strong>{project.impactBold}</strong>
                  {project.impactPost}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Progress dots */}
      <div className="scroller-progress">
        {featuredProjects.map((_, i) => (
          <button
            key={i}
            className={current === i ? "on" : ""}
            onClick={() => scrollTo(i)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      <div className="featured-foot">
        <span className="swipe-hint">Drag, swipe, or use the arrows</span>
      </div>
    </section>
  );
}
