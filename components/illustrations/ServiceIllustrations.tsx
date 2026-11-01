import { Illustration } from "./Illustration";

/* Line illustrations for "What we build" (see Illustration for the style). */

/** Custom business systems: a dashboard with a sidebar, KPI tiles and rows. */
export function BusinessSystemsIllustration() {
  return (
    <Illustration>
      <rect x="12" y="14" width="136" height="92" rx="8" className="fill-surface" />
      <path d="M12 28h136" />
      <circle cx="22" cy="21" r="1.5" />
      <circle cx="29" cy="21" r="1.5" />
      <circle cx="36" cy="21" r="1.5" />
      <path d="M44 28v78" />
      <path d="M21 40h14M21 50h10M21 60h12M21 70h9" />
      <rect x="52" y="36" width="26" height="18" rx="3" />
      <rect x="84" y="36" width="26" height="18" rx="3" className="fill-highlight" />
      <rect x="116" y="36" width="24" height="18" rx="3" />
      <path d="M57 46h10M89 46h12M121 46h9" />
      <path d="M52 66h88M52 78h88M52 90h88" />
      <path d="M58 72h22M58 84h30M58 96h18" />
      <circle cx="132" cy="72" r="2" />
      <circle cx="132" cy="84" r="2" />
      <circle cx="132" cy="96" r="2" />
    </Illustration>
  );
}

/** Websites: a browser window with a headline, a gold button and an image. */
export function WebsiteIllustration() {
  return (
    <Illustration>
      <rect x="14" y="16" width="132" height="88" rx="8" className="fill-surface" />
      <path d="M14 30h132" />
      <circle cx="24" cy="23" r="1.5" />
      <circle cx="31" cy="23" r="1.5" />
      <rect x="44" y="19" width="76" height="8" rx="4" />
      <path d="M28 44h58M28 53h44" />
      <rect x="28" y="62" width="32" height="11" rx="5.5" className="fill-highlight" />
      <rect x="98" y="40" width="36" height="34" rx="4" />
      <path d="m100 70 10-12 8 8 5-5 9 9" />
      <rect x="28" y="84" width="30" height="12" rx="3" />
      <rect x="65" y="84" width="30" height="12" rx="3" />
      <rect x="102" y="84" width="32" height="12" rx="3" />
    </Illustration>
  );
}

/** E-commerce stores: a shopping bag with a gold price tag and a product card. */
export function StoreIllustration() {
  return (
    <Illustration>
      <rect x="92" y="20" width="50" height="62" rx="6" className="fill-surface" />
      <rect x="99" y="27" width="36" height="26" rx="3" />
      <path d="M99 62h24M99 70h14" />
      <path d="M22 44h56l-5 60H27Z" className="fill-surface" />
      <path d="M36 44v-6a14 14 0 0 1 28 0v6" />
      <path d="M38 62h24" />
      <path
        d="M70 76h22l10 10-10 10H70Z"
        className="fill-highlight"
      />
      <circle cx="77" cy="86" r="2.5" className="fill-surface" />
    </Illustration>
  );
}

/** Automation and AI: one document becomes another, with a gold spark. */
export function AutomationIllustration() {
  return (
    <Illustration>
      <rect x="16" y="30" width="42" height="56" rx="4" className="fill-surface" />
      <path d="M24 42h26M24 51h20M24 60h24M24 69h14" />
      <path d="M66 58h24m-6-6 6 6-6 6" />
      <rect x="98" y="30" width="46" height="56" rx="4" className="fill-surface" />
      <path d="M106 44h30M106 53h30M106 62h22" />
      <rect x="106" y="70" width="14" height="8" rx="2" />
      <path
        d="M140 14l3.5 9.5L153 27l-9.5 3.5L140 40l-3.5-9.5L127 27l9.5-3.5Z"
        className="fill-highlight"
      />
    </Illustration>
  );
}

/** Integrations: four connected tools around a gold hub. */
export function IntegrationsIllustration() {
  return (
    <Illustration>
      <rect x="14" y="16" width="38" height="24" rx="5" className="fill-surface" />
      <rect x="108" y="16" width="38" height="24" rx="5" className="fill-surface" />
      <rect x="14" y="80" width="38" height="24" rx="5" className="fill-surface" />
      <rect x="108" y="80" width="38" height="24" rx="5" className="fill-surface" />
      <path d="M22 28h16M116 28h20M22 92h12M116 92h18" />
      <path d="M52 34 69 52M108 34 91 52M52 86l17-18M108 86 91 68" />
      <circle cx="80" cy="60" r="13" className="fill-highlight" />
      <path d="M75 60h10M80 55v10" />
    </Illustration>
  );
}

/** Ongoing support: a system improving over time, kept up to date. */
export function SupportServiceIllustration() {
  return (
    <Illustration>
      <rect x="14" y="20" width="100" height="80" rx="8" className="fill-surface" />
      <path d="M14 34h100" />
      <circle cx="24" cy="27" r="1.5" />
      <circle cx="31" cy="27" r="1.5" />
      <path d="M26 88h76" />
      <rect x="32" y="66" width="12" height="22" rx="2" />
      <rect x="52" y="58" width="12" height="30" rx="2" />
      <rect x="72" y="50" width="12" height="38" rx="2" />
      <rect x="92" y="42" width="12" height="46" rx="2" className="fill-highlight" />
      <path d="M126 44a14 14 0 1 1 4 18" />
      <path d="m126 36 0 8 8 0" />
    </Illustration>
  );
}
