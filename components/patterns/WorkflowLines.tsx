import type { CSSProperties } from "react";
import { MotionInView } from "@/components/ui/MotionInView";

/*
 * "Workflow" background pattern: straight lines with right-angle turns
 * connecting small nodes, like a simple automation diagram. Now and then a
 * gold dot travels along part of a line, like data moving through a system
 * (slow, mostly idle, paused off-screen, hidden with reduced motion).
 */

type Point = [number, number];

type Design = {
  viewBox: string;
  /** How the SVG fits its box: dividers crop from the centre, never squash. */
  fit: string;
  lines: string[];
  nodes: { at: Point; shape: "circle" | "square" }[];
  /** Each route is 4 points, matching the `travel` keyframes. */
  routes: { points: [Point, Point, Point, Point]; delay: number }[];
};

const designs: Record<"divider" | "side", Design> = {
  divider: {
    viewBox: "0 0 1200 96",
    fit: "xMidYMid slice",
    lines: [
      "M0 48H150V22H430V48H690V74H930V48H1200",
      "M430 48V74H560",
      "M930 48V22H1060",
    ],
    nodes: [
      { at: [290, 22], shape: "circle" },
      { at: [560, 74], shape: "square" },
      { at: [690, 48], shape: "circle" },
      { at: [810, 74], shape: "circle" },
      { at: [1060, 22], shape: "square" },
      { at: [1130, 48], shape: "circle" },
      { at: [60, 48], shape: "circle" },
    ],
    routes: [
      { points: [[150, 48], [150, 22], [430, 22], [430, 48]], delay: 0 },
      { points: [[690, 48], [690, 74], [930, 74], [930, 48]], delay: 5500 },
    ],
  },
  side: {
    viewBox: "0 0 120 800",
    fit: "xMidYMid meet",
    lines: ["M60 0V140H24V360H96V560H60V800", "M96 460H116", "M24 250H4"],
    nodes: [
      { at: [60, 90], shape: "circle" },
      { at: [24, 250], shape: "square" },
      { at: [96, 460], shape: "circle" },
      { at: [60, 660], shape: "square" },
    ],
    routes: [{ points: [[60, 140], [24, 140], [24, 360], [96, 360]], delay: 2000 }],
  },
};

const tones = {
  // Navy lines at ~9% on light sections; gold at ~20% inside navy panels
  navy: { colour: "text-primary", lineOpacity: 0.09, nodeFill: "fill-canvas" },
  gold: { colour: "text-highlight", lineOpacity: 0.2, nodeFill: "fill-primary" },
};

function routeStyle(points: Point[], delay: number): CSSProperties {
  const vars: Record<string, string> = { animationDelay: `${delay}ms` };
  points.forEach(([x, y], i) => {
    vars[`--x${i}`] = `${x}px`;
    vars[`--y${i}`] = `${y}px`;
  });
  return vars as CSSProperties;
}

export function WorkflowLines({
  variant,
  tone = "navy",
  className = "",
}: {
  variant: "divider" | "side";
  tone?: "navy" | "gold";
  className?: string;
}) {
  const design = designs[variant];
  const { colour, lineOpacity, nodeFill } = tones[tone];

  return (
    <MotionInView className={`pointer-events-none ${className}`}>
      <svg
        viewBox={design.viewBox}
        preserveAspectRatio={design.fit}
        aria-hidden="true"
        focusable="false"
        className={`block size-full ${colour}`}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeOpacity={lineOpacity}
          strokeLinejoin="round"
        >
          {design.lines.map((d) => (
            <path key={d} d={d} vectorEffect="non-scaling-stroke" />
          ))}
          {design.nodes.map(({ at: [x, y], shape }) =>
            shape === "circle" ? (
              <circle key={`${x}-${y}`} cx={x} cy={y} r={4} className={nodeFill} />
            ) : (
              <rect
                key={`${x}-${y}`}
                x={x - 4.5}
                y={y - 4.5}
                width={9}
                height={9}
                rx={2}
                className={nodeFill}
              />
            ),
          )}
        </g>
        {design.routes.map(({ points, delay }) => (
          <circle
            key={delay}
            r={3.5}
            // Invisible except while travelling (also hidden with reduced motion)
            className="animate-travel fill-highlight opacity-0"
            style={routeStyle(points, delay)}
          />
        ))}
      </svg>
    </MotionInView>
  );
}
