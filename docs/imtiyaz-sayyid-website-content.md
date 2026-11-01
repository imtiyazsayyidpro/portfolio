# Imtiyaz Sayyid — Website Content Brief

Content for the one-page consultancy site at **imtiyazsayyid.in**.
Build it using the design system file (`imtiyaz-design-system.md`).

Placeholders still to fill in are marked like this: **[PLACEHOLDER]**. The only one left is the About photo.

---

## Build notes (for Claude Code)

- Single page, sections in the order below, with smooth scroll from nav links.
- Follow the design system exactly: Navy & Gold colours, soft off-white background with white bands and cards, Fraunces for the wordmark and every section heading, Figtree for everything else, product UIs inside navy brand frames.
- Voice: "we" across the site, except the About section, which is first person.
- Every "Book a call" button (nav, hero, contact) links to https://calendar.app.google/ChmHswgJ4p6WLB5s6 and opens in a new tab.
- Plain, simple language. The audience is non-technical business owners.
- Sentence case everywhere. No all-caps labels.
- No client names anywhere on the site. Each case study is described by business type only, with a generic system name (e.g. "Loan processing system").
- All visuals are built in code (HTML/CSS/SVG). The demos are invented animated mock UIs with fake data and no client branding, each driven by an animated cursor and captioned "Demo with sample data." See "Animated demos" in section 5.
- The page tells one story, "messy operations → organised system" (see "Page story" below).
- Fully responsive, mobile first, from 375px phones to 1440px desktops. Nothing may cause horizontal scrolling at any width. Tap targets at least 44px tall; body text at least 16px on phones; section spacing smaller on phones but still generous.
- Demos never shrink to fit: on small screens they switch to simpler layouts (fewer columns and cards, full-size text). The hero board becomes a single-column list of stages on phones and tablets.
- Visible keyboard focus. Respect reduced motion.

### Page story

| Section | Chapter | Layout | Band |
|---------|---------|--------|------|
| Hero | The promise | Centred, wide brand-framed demo | Background |
| Sound familiar? | The chaos | Bento grid of tilted scene cards | Background |
| What we build (Services) | What we offer | Featured card, then an even grid of five | White band |
| How we work | Chaos turning into order | Horizontal three-step flow | Background |
| Work | The order, proven | Tabbed showcase | White band |
| About | The person behind it | Split layout | Background |
| Contact | The next step | Full-width panel | Striped navy brand frame |

---

## Page meta

- **Site URL:** https://imtiyazsayyid.in (no www). Canonical URL for the home page: https://imtiyazsayyid.in
- **Language:** en-IN (Open Graph locale en_IN)
- **Title:** Imtiyaz Sayyid — Custom Business Software & Automation, Mumbai
- **Description (145 characters):** We turn messy Excel sheets, WhatsApp chats and paperwork into simple custom software: CRMs, ERPs, websites and automation for growing businesses.
- **Keywords:** custom software, custom business software, CRM, ERP, business automation, software consultant, small and mid-sized businesses, Mumbai, India
- **Link previews:** Open Graph and Twitter cards use the title, description and `app/opengraph-image.png`, with site name "Imtiyaz Sayyid" and type website.
- **Structured data:** ProfessionalService (business, Mumbai, Maharashtra, India; the six services), Person (Software Consultant) and WebSite, as JSON-LD. No reviews, ratings, prices or FAQs.
- **Search phrases worked into the copy:** custom software (hero, About), CRM and ERP (featured service, Student CRM), business automation (Automation and AI tools), small and mid-sized businesses (About), Mumbai (About, footer), India (footer).

---

## 1. Navigation

- **Left:** Imtiyaz Sayyid, set in Fraunces as a simple wordmark (no icon or decoration)
- **Links:** Services · How we work · Work · About · Contact
- **Button:** Book a call

---

## 2. Hero

**Headline (Fraunces):**
Software built around how you work.

**Subline:**
We turn messy Excel sheets and WhatsApp chaos into simple custom software your team actually uses.

**Primary button:** Book a call
**Secondary link:** See our work

**Visual:** a wide navy brand frame containing an animated order-tracking board. The cursor clicks a new lead → it becomes a quote → an order → moves across production stages → a "Payment received" toast pops in. Loops.

---

## 3. Sound familiar?

**Section title:** Sound familiar?
**Subtitle:** Most growing businesses hit the same walls. If a few of these ring true, we can help.

A bento grid (mixed card sizes, two rows on desktop). Each card has a small coded scene showing the pain, then the title and text:

- **Everything lives in Excel.** Leads, orders and payments spread across sheets only one person understands.
  *Scene: a messy spreadsheet with flashing error cells and a "Final_v3_REAL.xlsx" tab.*
- **Customers are lost in WhatsApp.** Important conversations buried in chats, with no record of who said what.
  *Scene: overlapping chat bubbles with unread badges; a new one arrives.*
- **The same data, typed three times.** Your team copies information between sheets, apps and paper.
  *Scene: the same customer name written three different ways in a sheet, a paper slip and an app form.*
- **Nobody knows where things stand.** Which order is stuck? Which payment is pending? Finding out takes calls.
  *Scene: an order card with a "?" status and a ringing phone with missed calls.*
- **Paperwork takes days.** Forms, approvals and documents that should take minutes.
  *Scene: a pile of papers with a "Pending approval" stamp.*
- **An old system nobody likes.** Software that's slow, confusing, or built for someone else's business.
  *Scene: a dated, grey, cramped window with a spinning loader.*

---

## 4. Services

**Section title (Fraunces):** What we build
**Subtitle:** Custom business systems are our core. Everything else supports them.

Layout: one large featured card for the main service, then a grid of five smaller cards (one column on phones, two on tablets, five in a row on wide screens). Each card has a small custom line illustration (navy strokes, one gold accent), matching the "How we work" illustrations. Flat, evenly aligned cards on a white band, so it reads differently from the tilted "Sound familiar?" bento.

1. **Custom business systems** (featured) *(a dashboard with a sidebar, KPI tiles and rows)*
   CRMs, ERPs and internal tools shaped around how your team already works. Leads, orders, payments and production, all in one place.
2. **Websites** *(a browser window with a headline, a button and an image)*
   Fast, clean websites that explain what you do and bring in enquiries.
3. **E-commerce stores** *(a shopping bag with a price tag and a product card)*
   Online stores with catalogues, payments and order management that are easy to run.
4. **Automation and AI tools** *(one document turning into another, with a spark)*
   Take repetitive work off your team's plate with business automation, from auto-generated documents to AI that answers questions about your data.
5. **Integrations** *(four connected tools around a hub)*
   Connect the tools you already use, like payment gateways, WhatsApp, accounting and existing software.
6. **Ongoing support** *(a system window with growing bars and a refresh arrow)*
   We keep your systems running, fix issues quickly and keep improving them as you grow.

---

## 5. How we work

**Section title:** How we work
**Subtitle:** No jargon, no bloated software. Just a system that fits your business.

Three numbered steps in a horizontal flow joined by a thin line (vertical on mobile), each with a custom line illustration:

1. **Understand** *(a notebook with a process flow sketched on it)*
   We sit with you and your team to learn how work actually flows today, including the workarounds.

2. **Build** *(a window being assembled from blocks)*
   We design and build simple software shaped around that flow. You see progress every week, and launch in weeks, not months.

3. **Support** *(a system window with a heartbeat line and a check)*
   We stay after launch. We train your team, fix issues and keep improving the system as you grow.

---

## 6. Work

**Section title:** Selected work
**Subtitle:** A few highlights from the 10+ systems we've shipped. Client names are kept private, and visuals are demos with sample data.

A tabbed showcase, one tab per project, in this order:

| Tab | Case study |
|-----|------------|
| 01 Order tracking | Case study 1: a furniture manufacturer and retailer |
| 02 Ticketing platform | Case study 2: an event ticketing company |
| 03 Student CRM | Case study 3: a study-abroad company |
| 04 Loan processing | Case study 4: a lending company |

Never mention the real ticketing platform's name or the client's name anywhere, including in demo data.

Selecting a tab switches the content below. Tabs auto-advance about every 12 seconds until the visitor picks one, then stop.

Each tab shows, on the left: business type, title, then Before / What we built / After as short labelled blocks. On the right: that project's animated demo in a brand frame. On phones the text comes first, then the demo.

### Animated demos

Each case study (and the hero) has a mock UI built in code (HTML/CSS/SVG), styled with the design system and driven by an animated cursor. The UI is invented for the site, not a copy of the client's real screens.

- Loop length about 10–12 seconds, then restart.
- Plays only when scrolled into view, pauses when off-screen. Visitors can also pause it.
- With reduced motion turned on, show a single static frame instead.
- Every state is filled with realistic sample data: fields type themselves in, columns hold 2–3 cards, lists have several rows.
- Fake names and numbers only. No client logos or branding.
- Small caption under each: "Demo with sample data."

Demo storyboards:

1. **Order tracking system** (a single order's page, complementing the hero's board view): a lead's details type in → the cursor clicks "Create quotation" → quotation lines appear → "Convert to order" → invoice and advance are recorded → "Send to factory" → production moves through cutting, polishing and quality check (synced from the factory software) → "Delivered".
2. **White-label ticketing platform:** an event page for a fake show ("An Evening of Jazz" at the fake venue "Sample Theatre") → the cursor clicks "Choose seats" and picks 3 seats on a live seat map (they turn gold; another seat sells while you choose) → in "Add to your night" the cursor adds popcorn → checkout completes and an e-ticket card appears with one QR code for the booking → the view switches to the door scanner app: the QR is scanned, the screen shows "Admit 2 of 3 guests" and the cursor taps Admit. The seat map shows 6 rows of 12 seats when wide and 4 rows of 8 on small screens. The loop is about 11.5 seconds, so it finishes within the 12-second tab auto-advance.
3. **Student CRM:** a new student lead arrives → the cursor moves her through application stages → the cursor types a plain-English question ("How many applications this month?") and an answer appears with a breakdown by country.
4. **Loan processing system:** KYC fields type themselves in → documents upload with ticks → an e-signature is drawn → the application is submitted and its status moves from "Pending" to "Approved" to "Disbursed."

### Case study 1 — A furniture manufacturer and retailer (Order tracking system)

- **Before:** Leads, customers and orders were tracked across Excel sheets, disconnected from the factory.
- **What we built:** One system covering leads, quotations, invoicing, payments and production tracking, connected to their existing manufacturing software.
- **After:** Every order can be followed from first enquiry to delivery in one place. Sales and the factory now work from the same information, so tracking an order no longer means asking around.

### Case study 2 — An event ticketing company (White-label ticketing platform)

- **Before:** Event organisers wanted their own branded ticketing, from seat booking to door entry.
- **What we built:** One white-label platform with three parts: an organiser dashboard, a mobile site where customers pick seats live, and a door-scanner app.
- **After:** The first client, a theatre in the Middle East, runs its box office and door entry on it. No seat is ever sold twice, even under heavy load.

### Case study 3 — A study-abroad company (Student CRM)

- **Before:** A five-year-old system that had become slow, messy and hard to use.
- **What we built:** A complete rebuild in three months, with all data moved over safely. It covers leads, students, franchises and applications, plus AI tools that let partners ask questions about their own data in plain English.
- **After:** A faster, cleaner system the team enjoys using, with much clearer visibility into every lead and application.

### Case study 4 — A lending company (Loan processing system)

- **Before:** Customer KYC and loan processing were done manually, with paperwork that took months to complete.
- **What we built:** An online platform for KYC, digital signatures and loan disbursement, delivered in under 15 days.
- **After:** Processing time dropped from months to a few days. ₹5 Cr has been disbursed to 180 clients through the system.

---

## 7. About

**Small label above the headline:** About

**Headline (Fraunces):** Hi, I'm Imtiyaz.

**Visual:** a large photo of Imtiyaz **[PHOTO]** in a rounded, slightly rotated frame.

**Text (first person):**
For the past three years, I've been building custom software for small and mid-sized businesses across lending, manufacturing, education, e-commerce, events and media.

What I enjoy most is the part before the code: understanding how a business really runs, then turning that into something simple that people actually want to use.

Based in Mumbai, I lead every project personally and bring in trusted specialists when the work needs it. So you always work directly with me, without handoffs or middlemen.

**Facts row:** 3 years building software · 6 industries · 10+ systems shipped

---

## 8. Contact

A full-width striped navy brand-frame panel with a white inner card.

**Section title:** Tell us what's slowing your business down.
**Subtitle:** A short call is enough to see if we can help. No pressure, no jargon.

- **Button:** Book a call → https://calendar.app.google/ChmHswgJ4p6WLB5s6 (opens in a new tab)

**What happens next:**
1. You book a short call
2. We understand what's slowing you down
3. You get a clear plan and quote

Quieter links below:
- **Email:** imtiyazsayyid.pro@gmail.com
- **WhatsApp:** +91 79776 01610 → https://wa.me/917977601610, opens in a new tab with a pre-filled message: "Hi Imtiyaz, I came across your website and would like to talk about software for my business."

---

## 9. Footer

- Imtiyaz Sayyid · Software built around how you work
- Mumbai, India
- Links: LinkedIn (https://www.linkedin.com/in/imtiyazsayyid, opens in a new tab) · Email (imtiyazsayyid.pro@gmail.com)
- © 2026 Imtiyaz Sayyid

---

## 10. 404 page

Same nav (its links lead back to the home page sections), dot-grid background and footer as the home page. Not indexed by search engines.

- **Small label:** Error 404
- **Headline (Fraunces):** This page doesn't exist.
- **Text:** The link may be old or mistyped. Head back to the home page, or book a short call if you were looking for help with your business.
- **Buttons:** Book a call · Back to the home page

---

## Analytics (Google Analytics 4)

Loaded in production only, after the page is interactive. Measurement ID from `NEXT_PUBLIC_GA_ID`. Custom events:

| Event | When | Parameter |
|-------|------|-----------|
| `book_call_click` | Any "Book a call" button | `location`: nav, hero, contact, not_found |
| `whatsapp_click` | WhatsApp link in Contact | |
| `email_click` | Email link in Contact or the footer | |
| `linkedin_click` | LinkedIn link in the footer | |
| `see_work_click` | "See our work" in the hero | |
| `work_tab_view` | A visitor picks a Work tab (click or arrow keys; never auto-advance) | `project`: order_tracking, ticketing, student_crm, loan_processing |

