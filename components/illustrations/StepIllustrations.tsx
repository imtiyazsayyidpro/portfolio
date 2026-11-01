import { Illustration } from "./Illustration";

/* Line illustrations for "How we work" (see Illustration for the style). */

/** Understand: a notebook with a process flow sketched on it. */
export function UnderstandIllustration() {
  return (
    <Illustration>
      <rect x="34" y="14" width="96" height="92" rx="6" className="fill-surface" />
      {[28, 42, 56, 70, 84, 98].map((y) => (
        <path key={y} d={`M28 ${y}h12`} />
      ))}
      <rect x="50" y="28" width="28" height="16" rx="4" />
      <rect x="90" y="28" width="28" height="16" rx="4" className="fill-highlight" />
      <rect x="70" y="70" width="28" height="16" rx="4" />
      <path d="M78 36h10m-3-3 3 3-3 3" />
      <path d="M104 44v10c0 4-2 6-6 6H86c-2 0-2 2-2 4v4m-3-3 3 3 3-3" />
      <path d="M64 44v34h4" strokeDasharray="2 4" />
      <path d="M132 92l14-18 4 3-14 18-6 2 2-5Z" className="fill-surface" />
    </Illustration>
  );
}

/** Build: a window being assembled from blocks. */
export function BuildIllustration() {
  return (
    <Illustration>
      <rect x="20" y="16" width="112" height="86" rx="8" className="fill-surface" />
      <path d="M20 30h112" />
      <circle cx="30" cy="23" r="1.5" />
      <circle cx="37" cy="23" r="1.5" />
      <circle cx="44" cy="23" r="1.5" />
      <rect x="30" y="40" width="40" height="26" rx="4" />
      <rect x="78" y="40" width="44" height="10" rx="3" />
      <rect x="78" y="56" width="44" height="10" rx="3" />
      <rect x="30" y="74" width="50" height="18" rx="4" strokeDasharray="3 4" />
      <rect
        x="96"
        y="78"
        width="44"
        height="22"
        rx="4"
        transform="rotate(-10 118 89)"
        className="fill-highlight"
      />
      <path d="M146 70l6-4M148 80h8M144 62l4-6" />
    </Illustration>
  );
}

/** Support: a system window with a heartbeat line and a check. */
export function SupportIllustration() {
  return (
    <Illustration>
      <rect x="18" y="16" width="116" height="80" rx="8" className="fill-surface" />
      <path d="M18 30h116" />
      <circle cx="28" cy="23" r="1.5" />
      <circle cx="35" cy="23" r="1.5" />
      <circle cx="42" cy="23" r="1.5" />
      <path d="M28 64h22l7-16 10 30 8-22 5 8h44" />
      <path d="M28 84h30M66 84h18" />
      <circle cx="128" cy="92" r="15" className="fill-highlight" />
      <path d="m121 92 5 5 9-10" className="stroke-on-highlight" strokeWidth={2.25} />
    </Illustration>
  );
}
