# Imtiyaz Sayyid — Design System

Brand design system for imtiyazsayyid.in and related materials (proposals, documents, social). This is the **editorial Navy & Gold** system the site has used since November 2026. It replaced the earlier card-based Fraunces design.

The tokens live in `app/globals.css`; this file explains them and the rules behind them.

---

## 1. Brand feel

- **Who it's for:** owners and managers of small and mid-sized businesses (manufacturing, lending, education, events, retail), mostly non-technical. Secondary: employers and recruiters.
- **Feel:** premium, calm and direct. A trusted advisor who also builds the thing, not a flashy tech startup and not an AI template.
- **Core idea:** a warm paper page, navy for text and weight, and gold only where it carries meaning. Typography and real-looking work do the persuading, not effects.
- **Proof over decoration:** every visual shows something a client would recognise: their spreadsheet, their order, their seat map, their loan. Recreations use sample data and no client branding, and say so.
- **Storyline:** "messy operations → one system built around how you work". The hero makes this literal with a before-and-after slider.

### What we avoid (it reads as generic or "AI-made")

- Monospace labels, numbered section eyebrows ("01 —"), pill eyebrows with glowing dots.
- One gold italic word in every heading.
- Glows, gradient washes, glass panels, rotating light borders, cursor spotlights.
- Rows of big stat tiles; bento grids of icon cards.
- Dark mode. The audience reads this in daylight, at work.
- Emoji, stock photos, 3D renders. The one photo on the site is the real portrait in About.

---

## 2. Colour

Tailwind's default palette is cleared (`--color-*: initial`), so only these tokens exist.

### Grounds

| Token | Hex | Use |
|-------|-----|-----|
| `paper` | `#faf8f4` | Page background. Warm, not grey. |
| `sand` | `#f2eee6` | The one alternate band (Selected work). |
| `surface` | `#ffffff` | Cards and recreated app screens. |
| `wash` | `#fbfaf7` | Header rows and toolbars inside app screens. |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#15203a` | Headings and primary text. A navy-black, never pure black. |
| `body` | `#4b5263` | Paragraphs. |
| `muted` | `#6b7080` | Captions and metadata, on `paper` or `surface` only (see Contrast). |
| `faint` | `#8a8474` | Large display text only, e.g. the second half of "…Orders in someone's head." |

### Lines

| Token | Hex | Use |
|-------|-----|-----|
| `line` | `#e6e1d8` | Section borders and list dividers. |
| `line-strong` | `#dcd6ca` | Outlines that need to hold an edge (the hero slider frame, inputs). |
| `hairline` | `#eeeae2` | Dividers inside app screens. |

A full-strength `ink` rule (1–2px) marks the top of an important list (services, the three "how we work" points).

### Brand

| Token | Hex | Use |
|-------|-----|-----|
| `navy` | `#1b2a4a` | Primary buttons, done states, filled seats, chart bars. |
| `navy-deep` | `#0f1a31` | Navy button hover. |
| `night` | `#15203a` | The contact band: the only dark section on the page. |
| `gold` | `#c9a14a` | Fills only: the primary button on navy, the current step, selected seats, the slider's "With your system" tag. **Never text on light grounds.** |
| `gold-bright` | `#d6b262` | Gold button hover. |
| `gold-text` | `#7a5e28` | Gold as readable text on light grounds: industry labels, "Where most clients start", focus rings. |
| `gold-soft` | `#e2c37a` | Gold text on `night`. |
| `gold-tint` | `#f3e6c4` | Background of "money due" chips and the current-step dot. |
| `gold-wash` | `#fbf5e6` | Highlighted rows (orders with money due). |
| `steel` | `#8a95ab` | Secondary chart bars. |
| `mist` | `#eef1f6` | Background of neutral "done" chips (Paid in full). |
| `on-navy` / `on-navy-strong` | `#c3cada` / `#e4e8f1` | Body and list text on `night`. |

**What gold means:** money due, the step happening now, the thing you picked, the one action to take. If gold doesn't mean one of those, use navy or ink instead.

### Spreadsheet greys

`sheet-line`, `sheet-head`, `sheet-text`, `sheet-muted`, `sheet-yellow` are used only in the "before" side of the hero, so the spreadsheet looks like a real spreadsheet. Don't use them anywhere else.

### Contrast (WCAG)

| Pairing | Ratio | Result |
|---------|-------|--------|
| Ink on paper | 15.2 | AA |
| Body on paper / sand | 7.4 / 6.8 | AA |
| Muted on paper / white | 4.7 / 4.9 | AA |
| Muted on sand | 4.3 | **Fails**: don't put `muted` text on `sand` |
| Faint on paper | 3.5 | Large text only (24px+) |
| Gold text on paper / sand | 5.7 / 5.2 | AA |
| White on navy (button) | 14.2 | AA |
| Ink on gold (button) | 6.7 | AA |
| White on night | 16.2 | AA |
| On-navy on night | 9.8 | AA |
| Gold soft on night | 9.5 | AA |
| Due chip text (`#6a5022`) on gold tint | 6.1 | AA |
| Gold on paper | 2.3 | Never as text |

---

## 3. Typography

| Role | Font | Notes |
|------|------|-------|
| Headings, wordmark, large statements | **Newsreader** (Google Fonts, variable, optical size on) | Weight 400, upright. Used by the `font-display` utility. |
| Everything else | **Figtree** (Google Fonts, variable) | 400 for text, 600 for labels and buttons, 700 for emphasis in UI. |

No monospace and no italic accent words.

### Scale

| Role | Font | Size | Line height | Tracking |
|------|------|------|-------------|----------|
| Hero headline | Newsreader | `clamp(46px, 6.6vw, 92px)` | 0.98 | -0.035em |
| Section heading | Newsreader | `clamp(40px, 5vw, 68px)` | 1.02 | -0.03em |
| Statement ("Leads in Excel…") | Newsreader | `clamp(34px, 4.6vw, 64px)` | 1.08 | -0.03em |
| Contact heading | Newsreader | `clamp(40px, 5.4vw, 76px)` | 1.02 | -0.03em |
| Case-study title | Newsreader | 32 → 38px | 1.1 | -0.02em |
| Result line / About lead | Newsreader | 22 → 24px | 1.3–1.4 | -0.015em |
| Service name | Newsreader | 24px (core service 28px) | 1.2 | -0.015em |
| Wordmark | Newsreader | 23 → 25px | 1 | -0.02em |
| Lead paragraph | Figtree | 18 → 19px | 1.55 | 0.01em |
| Body | Figtree | 17px (16px in lists and case studies) | 1.6 | 0.01em |
| Small heading (how we work) | Figtree 600 | 20px | 1.3 | |
| Label (industry, "What happens next") | Figtree 600 | 14–15px | | |
| Caption | Figtree | 13–14px | | |
| Inside app screens | Figtree | 12–15px | | |

Rules:
- Sentence case everywhere. No all-caps.
- Keep body text under about 70 characters a line (`max-w-prose` is 640px).
- `text-balance` on headings so lines break evenly.

---

## 4. Layout and shape

| Token | Value |
|-------|-------|
| Page max width (`max-w-page`) | 1280px |
| Side padding | 20px phones, 48px from `md` |
| Section padding | 80px phones, 120px desktop (contact 96 / 128px) |
| Grid | Asymmetric two-column splits: 7/5 (heading left, text right) or 5/7 (text left, visual right), 72–88px gap |

- **Radius:** 999px for buttons and chips; 18px (`rounded-card`) for app screens and case visuals; 12px for small panels inside them; 6px for the About photo.
- **Shadows:** only on floating app screens: `shadow-hero` for the slider, `shadow-card` for case visuals. Both are soft navy, never grey.
- **Rules over boxes:** sections are separated by 1px `line` borders and lists by dividers, not by wrapping everything in cards.

---

## 5. Components

### Nav (`components/Nav.tsx`)
Sticky bar on `paper` at 90% with a light blur and a bottom `line`. Newsreader wordmark left; Work · Services · About; navy "Book a call". Below `md` the links move into a menu under the bar.

### Buttons (`components/ui/Button.tsx`)
`btn` utility: pill, 50px tall (44px compact in the nav), Figtree 600 15px.

| Variant | Look | Where |
|---------|------|-------|
| `navy` | Navy fill, white text; darkens on hover | Primary on light grounds |
| `quiet` | Hairline outline; outline turns ink on hover | Secondary on light grounds |
| `gold` | Gold fill, ink text | Primary on the contact band |
| `ghost-light` | White hairline outline | Secondary on the contact band |

Every "Book a call" opens the booking page in a new tab and says so to screen readers.

### Before-and-after slider (`components/CompareSlider.tsx`)
The hero's proof. The same five orders shown twice:
- **Before:** a spreadsheet (`Orders_FINAL_v3 (2).xlsx`) with typos, `#N/A`, `#REF!`, a duplicate row, yellow highlights and sheet tabs like "Copy of Orders".
- **After:** the system built from that data. It shows payment chips, production progress and the question "Which orders still have money pending?" answered with "2 orders · ₹1,07,000 to collect". Those rows are highlighted in `gold-wash`.
- The figures match on both sides (e.g. ₹84,000 with a ₹25,000 advance → ₹59,000 due).
- The control is a real range input over the whole frame, so dragging, tapping and arrow keys all work. It sweeps once the first time it's 60% in view and stops the moment it's touched. With reduced motion it stays at 50%.
- On phones both sides show fewer columns.

### Case visuals (`components/work/CaseVisuals.tsx`)
One recreated screen per case study, on a white card that lifts 4px when its case study is hovered:
- **Order tracking:** one order's timeline from enquiry to delivery, the current step in gold.
- **Ticketing:** a live seat map, three seats picked in gold, checkout bar.
- **Student CRM:** a plain-English question answered with a short sentence and bars.
- **Loan processing:** five steps from KYC to disbursed, a signature and verified documents.

All are decorative (`aria-hidden`); the case study text carries the meaning.

### Chips
Pill, Figtree 600 12px. `gold-tint` for money due, `mist` for done, a light grey for neutral (Quote sent).

---

## 6. Motion

Quiet, and always tied to something real.

| Moment | What happens |
|--------|--------------|
| Hero slider | One sweep (about 3.2s) when it first comes into view; follows the visitor after that |
| Scroll reveal | Headings, paragraphs, list rows and case studies fade in while rising 20px, once (`Reveal` + `revealItem()`), 800ms easeOutCubic |
| Case study hover | The visual lifts 4px |
| CRM bars | Grow from the left once |
| Smooth scrolling | Lenis eases wheel and trackpad scrolling; touch stays native |

- Animate transform and opacity only.
- With reduced motion everything shows its final state.
- Content is never lost: with JavaScript off nothing is hidden, and a CSS failsafe reveals items after 2s if scripts fail.

---

## 7. Do's and don'ts

**Do**
- Let typography and whitespace carry the page.
- Show the client's world: their spreadsheet, their order, their numbers (sample data, labelled).
- Use gold for money due, the current step, the selection or the one action.
- State results in one plain sentence ("No seat sold twice, even under heavy load.").
- Keep client work anonymous.

**Don't**
- Use gold as text on light grounds (use `gold-text`).
- Put `muted` text on `sand`.
- Add a third brand colour (no red errors or green success; use gold and navy with a label).
- Add effects from the "What we avoid" list in section 1.

---

## 8. Print and documents

- White or `paper` background, `ink` or `navy` text, gold for one small element at most.
- Newsreader for your name and headings, Figtree for everything else.
- Gold shifts in print: ask for a physical proof, or use a metallic or Pantone gold for small details.

---

## 9. Logo

The square mark in `brand/` is unchanged: "IS" in Fraunces with a short gold bar, on navy (logo A) or off-white with a navy border (logo D). `brand/README.md` lists every file and size. It's used for the favicon, app icons and documents.

The website nav uses the name set live in Newsreader instead of the mark. The mark's letters stay in Fraunces: it's a fixed piece of artwork, converted to paths, and doesn't need to match the site's heading font.

Rules: use the files as they are (don't retype, recolour or stretch them), keep clear space of at least 10% of the mark's width, and use the 16px versions without the gold bar.
