# Imtiyaz Sayyid — Design System

Brand design system for imtiyazsayyid.in and all related materials (website, documents, proposals, business cards).

The layout language was originally inspired by Harvest's marketing site: a soft canvas, white floating cards, product UIs in bold framed panels, and generous space. Use it as a visual language, not a copy of Harvest's site: no copying their layouts, copy, illustrations, screenshots or logo. The colour identity is Navy & Gold.

---

## 1. Brand feel

- **Who it's for:** owners and managers of small and mid-sized businesses (manufacturing, lending, education, retail), mostly non-technical. Secondary: employers and recruiters.
- **Feel:** calm, trustworthy, clear, confident. "A sharp person who understands business," not "a flashy tech startup."
- **Core idea:** a soft off-white page, white cards that float above it, deep navy for weight (buttons and brand frames), and gold used sparingly for the things that matter.
- **Visual proof:** animated mock UIs of systems built (always invented, with fake data and no client branding), shown inside navy brand frames.
- **Storyline:** every page tells one story, "messy operations → organised system." Problems look scattered and slightly tilted; solutions look calm, aligned and orderly.

---

## 2. Colors: Navy & Gold

Two brand colours with distinct jobs:
- **Navy (primary)** carries weight: buttons, active tabs and brand frames.
- **Gold (highlight)** is for small details, links and active states.

Everything else is neutral.

### Brand

| Name | Hex | Use |
|------|-----|-----|
| Navy (primary) | `#1b2a4a` | Primary buttons, active tabs, brand frames, text on gold fills. Never body text. |
| Navy Hover | Navy with a 50% Ink overlay (about `#1c2433`) | Hover state of navy buttons: the overlay fades in, so the button darkens smoothly. |
| Navy Stripe | `#2d364a` | The soft vertical bands inside brand frames (navy with a little gold mixed in). |
| Gold (highlight) | `#c9a14a` | Small fills and details: ticks, badges, unread counts, active-card borders, illustration accents, cursor ripple. **Never as text.** |
| Gold Text | `#81672f` | Gold as readable text: text links, step labels, small labels, focus rings, thin progress bars. |
| Gold Text Hover | `#6a5427` | Hover state of gold text links. |
| Glow | derived: gold 20% + white (about `#f4ecdb`) | Soft washes, sticky notes, soft status chips, and gold details that sit on navy. Atmosphere only. |
| Background | `#f8f8f6` | Page background. |
| Band | `#ffffff` | Alternate full-width section background ("How we work", "About"). |

### Neutrals (text and lines)

| Name | Hex | Use |
|------|-----|-----|
| Paper White | `#ffffff` | Cards, nav, inputs, UI windows |
| Ink | `#1d1e1c` | Primary text, headings, icons, illustration strokes. Warm near-black, never pure `#000`. |
| Ironwood | `#4a4a47` | Strong secondary text |
| Warm Stone | `#615f5c` | Secondary body text, card body copy, captions |
| Ash | `#777571` | Helper text |
| Driftwood | `#8e8b87` | Tertiary text, metadata, placeholders |
| Smoke | `#a5a19c` | Disabled text; the "dated software" look in problem scenes |
| Bone | `#c0bbb6` | Input borders |
| Mist | `#d9d9d9` | Hairline dividers, progress-bar tracks |

### Errors and alerts

There is no red. In UI scenes and demos, errors, alerts and unread badges use gold (or Gold Text where it carries text), always with a text label or symbol so colour is never the only signal.

### Contrast

All ratios are WCAG contrast ratios. AA for normal text needs 4.5:1; UI parts and large text need 3:1.

| Pairing | Ratio | Result |
|---------|-------|--------|
| White text on Navy (buttons, active tab) | 14.2 | ✓ AA |
| White text on Navy Hover | 15.6 | ✓ AA |
| Gold Text on Background | 5.1 | ✓ AA |
| Gold Text on white / Band | 5.4 | ✓ AA |
| Gold Text Hover on Background | 6.8 | ✓ AA |
| Navy text on Gold fills (badges, ticks) | 5.9 | ✓ AA |
| Glow on Navy (tab numbers, tab progress line) | 12.1 | ✓ AA |
| Gold Text on Glow (decorative scenes only) | 4.6 | ✓ AA |
| Warm Stone body text on Background / Band | 6.0 / 6.4 | ✓ AA |
| Focus ring (Gold Text) on Background | 5.1 | ✓ above 3:1 |
| Gold on white | 2.4 | ✗ never use gold as text |
| Gold bar on Mist track | 1.7 | ✗ bars use Gold Text instead (3.8) |

Rules that follow from this:
- **Gold is never text.** Links and labels use Gold Text; anything sitting on a gold fill uses Navy.
- **Thin marks use Gold Text.** Progress bars and similar marks on the light grey track would disappear in gold.
- **Gold shapes get an outline.** Illustrations outline their gold shape in Navy, so it keeps a visible edge on white.
- **Brand frame stripes stay subtle**, at about 1.18:1 against the navy.

---

## 3. Typography

The original fonts (MuotoWeb and Monarch) are paid and proprietary. These Google Fonts are the closest free equivalents.

| Role | Font | Google Fonts | Replaces |
|------|------|--------------|----------|
| Body, UI, small headings | **Figtree** | variable, 400–700 | MuotoWeb: friendly geometric sans with open, rounded letterforms |
| Wordmark, section headings and display moments | **Fraunces** | variable, weight 400, optical size on | Monarch: characterful display serif |

Backup options if needed: **Plus Jakarta Sans** (for Figtree) and **Instrument Serif** (for Fraunces).

### Rules

- **Fraunces is used for:**
  - the wordmark;
  - all section headings (h1 and h2);
  - a few display moments: step titles in "How we work", case-study titles, the About headline and fact numbers.

  Everything else is Figtree.
- Fraunces is always weight 400, with slight negative letter-spacing (`-0.01em`).
- Add slight positive letter-spacing (`0.015em`) to Figtree text. It makes the sans feel softer and friendlier.
- Sentence case everywhere, including buttons, tabs and small labels. No all-caps labels.
- Keep line length under about 75 characters for body text.

### Type scale

| Role | Font | Size | Weight | Line height |
|------|------|------|--------|-------------|
| Hero headline (h1) | Fraunces | 76px (mobile 46px) | 400 | 1.08 |
| Section headline (h2) | Fraunces | 56px (mobile 38px) | 400 | 1.1 |
| Title (case study) | Fraunces | 40px (mobile 30px) | 400 | 1.15 |
| Wordmark | Fraunces | 24px | 400 | 1.26 |
| Heading large | Figtree | 28px | 600 | 1.2 |
| Heading | Figtree | 24px | 600 | 1.26 |
| Heading small (card titles) | Figtree | 20px | 600 | 1.3 |
| Subheading / lead | Figtree | 19px | 400 | 1.5 |
| Body | Figtree | 16–17px | 400 | 1.5 |
| Small label | Figtree | 14px | 600 | 1.4 |
| Caption | Figtree | 13px | 400 | 1.35 |
| Micro (inside mock UIs only) | Figtree | 11px | 400–600 | 1.3 |

---

## 4. Spacing and shape

### Layout

| Token | Value |
|-------|-------|
| Page max width | 1200px |
| Page side padding | 24px mobile, 40px desktop |
| Section padding | 100px desktop, 72px mobile |
| Card padding | 20–36px |
| Element gap | 20px |

Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 100px.

### Corner radius

| Element | Radius |
|---------|--------|
| Buttons, tabs, nav, pills | 999px |
| Inputs | 16px |
| Images, UI windows | 16px |
| Cards | 20px |
| Brand frames, large panels | 24px |

No sharp corners (0–4px) on cards or buttons. The soft, rounded feel is part of the identity.

### Shadows

Shadows are tinted from navy (the glow from gold, the small button shadow from Ink). Never neutral grey.

| Name | Value | Use |
|------|-------|-----|
| Small | `0 1px 4px` Ink at 20% | Buttons, inactive tabs |
| Glow | `6px 4px 24px` gold at 25% | Highlighted cards inside UIs |
| Float | `0 10px 30px` navy at 12% | Floating nav, bento cards, notes |
| UI | `0 18px 40px` (navy 55% + Ink) at 32% | White UI windows sitting inside brand frames |

---

## 5. Components

### Wordmark
- "Imtiyaz Sayyid" set in Fraunces 24px, weight 400, Ink
- No icon, dot or other decoration

### Primary button
- Fill Navy `#1b2a4a`, text `#ffffff`, Figtree 16px weight 600
- Pill shape (999px), padding 12px 24px, small shadow
- Hover: darkens smoothly as an Ink overlay fades in (opacity only)
- Text says exactly what happens, e.g. "Book a call," not "Submit"
- "Book a call" opens the booking page in a new tab, with screen-reader text saying so

### Text link
- Gold Text `#81672f`, Figtree 16px weight 600, no background
- Hover: Gold Text Hover `#6a5427` plus underline; a trailing arrow nudges 4px right

### Floating nav
- White pill (999px radius), Float shadow, max width 1200px
- Sticky, sitting 12–16px below the top edge, with the background showing around it
- Wordmark left, links centred, navy "Book a call" pill right
- Below 1024px: the links collapse into a menu button that opens a full-width white panel under the pill. The wordmark and a compact "Book a call" stay visible at every width

### Brand frame
- Rounded (24px) navy panel with soft, gold-tinted vertical bands: a repeating horizontal gradient from Navy to Navy Stripe and back, about 112px per band
- A white UI window (16px radius, UI shadow) sits inset inside it, with 12–40px of navy showing around it
- Used for the hero demo, case-study demos, and as a full-width band behind the contact card
- This is the one place large areas of brand colour are allowed
- Small blueprint-style crop marks sit just outside each corner: a 12px horizontal and vertical tick, 6px off the corner, Navy at 25%

### Animated cursor
- An SVG pointer in Ink with a white outline, about 22px
- Glides between UI elements (about 650ms, eased), presses with a small scale-down (to about 82%) and a gold ripple ring, and the UI moves to its next state
- Never targets something that isn't there; it rests on the result (a toast, a status) when there's nothing to click
- Hidden when the visitor prefers reduced motion

### Mock UI window (demos)
- White window with a thin top bar (three Mist dots and a small title), Mist hairlines
- Fluid, never scaled: each demo switches to a simpler layout when narrow (fewer columns and cards, stacked panels, full-size text) using container queries on the demo's own width
- Dense, realistic sample data in every state: fields type themselves in, board columns hold 2–3 cards, lists have several rows. Never empty bars or blank rows
- Status chips always carry a text label; a gold chip with a navy tick and text marks "done"
- Progress bars fill in Gold Text on a Mist track
- Caption under each: "Demo with sample data", with a small "Pause demo" control

### Bento scene card
- White card (20px radius, Float shadow) with a small coded scene on a background-coloured panel at the top, then a Figtree title and body text
- Mixed card sizes in a 12-column grid (two rows on desktop), stacking on mobile
- Problem scenes may tilt slightly (under 1° for cards, a few degrees for elements inside scenes) to suggest mess
- Hover: the card lifts 4px and a softer, larger navy-tinted shadow fades in (Service cards do the same)

### Line illustration
- SVG, Navy strokes at 1.75px, round caps and joins, white fills
- One small gold-filled shape per illustration, outlined in Navy
- Used for the "How we work" steps and the "What we build" service cards
- On service cards, the gold shape pulses once (scales to about 114% and back) when the card is hovered
- Drawn on a consistent 160 × 120 grid so a set looks like one family

### Tabs (showcase)
- Pills in a row: the active tab is Navy with white text and a Glow number; inactive is white with a small shadow
- A thin Glow progress line inside the active tab while tabs auto-advance
- Horizontally scrollable on mobile

### Section heading
- Title: Fraunces, 38–56px, Ink
- Optional subtitle: 17–19px Warm Stone, max width about 700px
- Alignment varies by section (see page rhythm)

### Fact tiles (About)
- Small cards on the background colour with a Mist border
- A Fraunces number (e.g. "10+") over a short Warm Stone label
- The numbers count up once from 0 when they first come into view

### Placeholders (drafts only)
- Inline: the bracketed text with a dotted Gold Text underline
- Standalone: a small pill with a dashed Bone border and Warm Stone text
- Never big coloured boxes; the design must stay judgeable

---

## 6. Visual language

- **Imagery:** coded mock UIs, scenes and line illustrations. No stock photos, stock illustrations, generic 3D renders or external images (the About photo is the one exception).
- **Icons:** simple outlined icons in Ink. No colourful icons.
- **Page rhythm:** alternate full-width bands so no two neighbouring sections look alike: hero and "Sound familiar?" on the background, "What we build" on white, "How we work" on the background, "Work" on white, "About" on the background, then a striped navy band for contact. Mix layouts: centred hero, tilted bento, featured card with an even grid, horizontal flow, tabs, split layout, full-width panel.
- **Background patterns and motion:** see sections 11 and 12.
- **Density:** generous breathing room around sections; dense, realistic detail inside UIs.
- **Responsive:** works from 375px to 1440px with no horizontal scrolling. Tap targets are at least 44px tall, body text is at least 16px on phones, and section padding drops from 100px to 72px on phones.

---

## 7. Do's and don'ts

**Do**
- Use `#f8f8f6` as the page background, with white bands to separate chapters
- Use Fraunces for the wordmark and every section heading
- Put product UIs inside navy brand frames
- Keep gold small: details, links, active states
- Keep corners soft and shadows tinted
- Keep client work anonymous in all visuals

**Don't**
- Don't use gold as text; use Gold Text `#81672f`
- Don't put white text on gold; use Navy
- Don't add a third brand colour (no red for errors, no green for success)
- Don't use pure black text
- Don't fill large areas with flat navy or gold; large navy areas are always a striped brand frame holding white content
- Don't use all-caps labels or cold grey shadows

---

## 8. CSS variables

```css
:root {
  /* Brand: Navy & Gold */
  --color-primary: #1b2a4a;
  --color-primary-stripe: #2d364a;
  --color-highlight: #c9a14a;
  --color-on-highlight: #1b2a4a;
  --color-highlight-text: #81672f;
  --color-highlight-hover: #6a5427;
  --color-highlight-strong: #81672f; /* thin marks on light grey */
  --color-canvas: #f8f8f6;
  --color-band: #ffffff;
  --color-glow: color-mix(in srgb, var(--color-highlight) 20%, var(--color-surface));

  /* Neutrals */
  --color-surface: #ffffff;
  --color-ink: #1d1e1c;
  --color-ironwood: #4a4a47;
  --color-stone: #615f5c;
  --color-ash: #777571;
  --color-driftwood: #8e8b87;
  --color-smoke: #a5a19c;
  --color-bone: #c0bbb6;
  --color-mist: #d9d9d9;

  /* Fonts */
  --font-sans: 'Figtree', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
  --tracking-sans: 0.015em;
  --tracking-display: -0.01em;

  /* Type scale */
  --text-hero: 76px;
  --text-headline: 56px;
  --text-title: 40px;
  --text-heading-lg: 28px;
  --text-heading: 24px;
  --text-heading-sm: 20px;
  --text-lead: 19px;
  --text-body: 16px;
  --text-label: 14px;
  --text-caption: 13px;
  --text-micro: 11px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 100px;
  --card-padding: 36px;
  --element-gap: 20px;

  /* Radius */
  --radius-button: 999px;
  --radius-input: 16px;
  --radius-image: 16px;
  --radius-card: 20px;
  --radius-frame: 24px;
  --radius-pill: 999px;

  /* Shadows */
  --shadow-sm: 0 1px 4px color-mix(in srgb, var(--color-ink) 20%, transparent);
  --shadow-glow: 6px 4px 24px color-mix(in srgb, var(--color-highlight) 25%, transparent);
  --shadow-float: 0 10px 30px color-mix(in srgb, var(--color-primary) 12%, transparent);
  --shadow-ui: 0 18px 40px color-mix(in srgb, color-mix(in srgb, var(--color-primary) 55%, var(--color-ink)) 32%, transparent);
}

/* Brand frame */
.brand-frame {
  border-radius: var(--radius-frame);
  background-color: var(--color-primary);
  background-image: repeating-linear-gradient(
    90deg,
    var(--color-primary) 0px,
    var(--color-primary-stripe) 56px,
    var(--color-primary) 112px
  );
}
```

### Tailwind v4

The site's tokens live in `app/globals.css`:
- **Brand colours and neutrals:** an `@theme` block, with Tailwind's default colour palette cleared (`--color-*: initial`) so only brand colours can be used.
- **Derived tokens (glow, shadows):** `@theme inline`, so each utility carries its `color-mix()` directly.
- **Brand frame:** a custom utility, `bg-brand-stripes`, used by the `BrandFrame` component.

---

## 9. Print (business cards and documents)

- Navy and gold can shift in print, gold especially (it can turn muddy or flat). Ask the printer for a physical proof and a CMYK match before a full run, or use a metallic or Pantone gold for small details.
- Use white or the `#f8f8f6` background for cards and Ink or Navy for text, with gold only for one small element (a rule under the name, an icon or a back-side accent).
- Use Fraunces for your name and any headings, and Figtree for everything else.
- Keep the same soft rounded feel: rounded-corner cards if the printer offers it.
- Use logo D (or the lockup with logo D's colours) on printed documents; see the Logo section below.

---

## 10. Logo

The mark is the initials "IS" in Fraunces (weight 400) with a short gold bar beneath, on a rounded square (512 × 512, corner radius about 22%). Source files are in `brand/`, with all text converted to paths. `brand/README.md` lists every file.

| Version | Look | Use it for |
|---------|------|------------|
| **Logo A (main)** | Navy `#1b2a4a` square, off-white `#f8f8f6` letters, gold `#c9a14a` bar | The default: the website (favicon, app icons, link previews), social profile pictures, anything on a light background |
| **Logo D (light)** | Off-white square with an 8px navy border, navy letters, gold bar | Documents and print, and dark or busy backgrounds where the navy square would get lost |
| **Lockup** | Logo A beside "Imtiyaz Sayyid" in Fraunces (navy, or off-white for dark backgrounds) | Proposals, invoices, letterheads, email signatures |

Rules:
- Use the files in `brand/` as they are: don't retype the letters in a font, recolour the mark or stretch it.
- Keep clear space around the mark of at least 10% of its width on every side.
- **Small sizes:** at 16px the gold bar is dropped because it blurs. The favicon and the 16px PNGs already do this. From 32px up, the bar stays.
- **App icons:** iOS and Android masks get full-bleed navy versions (`app/apple-icon.png`, `public/icon-maskable-512.png`), because they apply their own corner shapes.
- **The website wordmark:** the nav uses "Imtiyaz Sayyid" set live in Fraunces (see Wordmark under Components). The square mark is for icons, previews and documents.

---

## 11. Background patterns

Patterns fill large empty areas with a quiet "business and automation" feel. They are built in CSS or SVG, so they scale cleanly with no images.

**Rules**
- One pattern per section at most.
- Patterns never sit behind body text at a strength that hurts reading.
- Navy at about 7–9% opacity. Gold only for small accents (a margin rule, a travelling dot) or as faint lines inside navy.
- They simplify or hide on phones where space is tight.

| Pattern | Where | How it's built | On phones |
|---------|-------|----------------|-----------|
| **Dot grid** | Hero | 1.3px Navy dots at 8% on a 24px grid, masked so it fades out towards the edges (`bg-dot-grid`) | Same, with the fade doing the work |
| **Workflow lines, divider** | Top edge of "What we build" | A 96px-tall SVG strip: straight lines with right-angle turns linking small round and square nodes (Navy at 9%). It crops from the centre rather than squashing. | Shorter (64px), showing the middle of the diagram |
| **Workflow lines, side margins** | Left and right margins of "How we work" | A vertical version of the same diagram, mirrored on the right | Hidden below 1440px, where the margins are too narrow |
| **Ledger lines** | Behind the About photo | Horizontal 1px Navy lines at 7% every 32px, faded at the edges, with one faint gold vertical margin rule (`bg-ledger`) | Same, tighter to the photo |
| **Crop marks** | Outside every brand-frame corner | Two 12px ticks per corner, Navy at 25% | Same (they fit in the page padding) |
| **Gold workflow lines** | Inside the navy contact band, above and below the card | The divider strip in gold at 20% | Hidden (the card fills the band) |

**Data dots:** now and then a small gold dot travels along part of a workflow line, like data moving through a system. Each dot's trip takes about 4 seconds, then it rests for about 7, and dots on the same strip are offset. They pause when off-screen and are hidden with reduced motion.

---

## 12. Motion

Motion is quiet and purposeful: one moment on load, single reveals on scroll, small hover responses.

**Rules**
- Animate transform and opacity only, never layout. Colour changes on hover are instant, not animated.
- Reveals run once per page load, not every time something scrolls past.
- **Scroll reveal** is one shared component (`Reveal` with `revealItem()` in code) used everywhere, so every reveal looks the same. It triggers as soon as an element is about 6% into the viewport, so nothing looks empty while scrolling. Items that come into view together are staggered in reading order; an item that enters alone doesn't wait.
- **Content is never lost:** with JavaScript off, nothing is hidden. If JavaScript fails to load, a CSS failsafe reveals everything after about 2 seconds. Search engines get the full content in the HTML either way.
- Off-screen animations pause (IntersectionObserver).
- With reduced motion on, everything shows its final state with no motion: no reveals, no count-ups, no dots, no lifts, static demo frames.
- CSS first. The only JavaScript is the small observers that trigger reveals and the count-up, plus smooth scrolling (below). No animation library.
- **Easing:** one curve for every entrance, easeOutCubic (`cubic-bezier(0.33, 1, 0.68, 1)`): a smooth start and a gentle settle. Opacity reaches full at about 65% of the way, so items glide rather than pop.
- **Smoothness:** items get a GPU layer only while they animate, released when they finish. Never on waiting items, because idle layers make scrolling stutter. Items entering in the same frame start together, and a stagger never runs more than 4 steps.
- **Smooth scrolling** (Lenis, `lerp` 0.15, settling in about 0.45s) eases mouse-wheel and trackpad scrolling. The page still scrolls natively, so the sticky nav, observers and keyboard scrolling are unaffected, and touch scrolling stays native. In-page links glide to their section, stop below the nav and move keyboard focus there. It is off with reduced motion.

| Moment | What happens | Timing |
|--------|--------------|--------|
| **Hero load** (the one big moment) | Headline words rise 20px in one after another, then the subline, then the buttons; the demo frame slides up 32px and then its cursor starts | About 1.5s in total; words 70ms apart, each 800ms |
| **Scroll reveal** | Fades in while rising 20px, once, with the easeOutCubic curve. Used for section headings and subtitles, "Sound familiar?" and service cards, "How we work" steps, the Work tabs, case-study text and demo frame, the About photo, text and fact tiles, and the Contact panel | 800ms |
| **Groups** (a row of cards, a heading and its subtitle) | Items that enter together follow one another | 90ms apart, at most 4 steps |
| **"How we work" line** | The line connecting the steps draws itself: downwards on phones, across on larger screens | 1.1s, starting 150ms after it enters |
| **About facts** | Numbers count up from 0 (3 years, 6, 10+) | 1s, easing out |
| **Card hover** | Lifts 4px; a softer, larger shadow fades in | 300ms |
| **Button hover** | Darkens as an Ink overlay fades in | 300ms |
| **Text link hover** | The trailing arrow nudges 4px right | 300ms |
| **Service illustration hover** | The gold accent pulses once | 650ms |
| **Workflow data dots** | A gold dot travels part of a line, then rests | 11s cycle |
| **Demos** | Loop while on screen, cursor-driven (see Mock UI window). The cursor appears at its first target and fades in (no fly-in), and each new loop fades in rather than cutting back to the start | 10–12s loops; 400ms loop fade |

No large slides, no bouncing, nothing that loops in the reader's face apart from the demos (which can be paused) and the slow data dots.

