# Imtiyaz Sayyid — Website Content Brief

Content for the one-page consultancy site at **imtiyazsayyid.in**, matching the editorial Navy & Gold design in `imtiyaz-design-system.md` (live since November 2026).

Placeholders still to fill in are marked **[PLACEHOLDER]**. The only one left is the About photo.

---

## Build notes

- Single page, sections in the order below, with smooth scroll from nav links.
- Follow the design system: warm paper background, Newsreader for headings, Figtree for everything else, gold only where it means something.
- Voice: "we" across the site, except the About section, which is first person.
- Plain, simple language. The audience is non-technical business owners. Sentence case everywhere.
- No client names anywhere. Each case study is described by business type only.
- Visuals are recreated screens built in code (HTML/CSS/SVG) with sample data and no client branding, and the page says so.
- Every "Book a call" button links to https://calendar.app.google/ChmHswgJ4p6WLB5s6 and opens in a new tab.
- Responsive from 375px phones to 1440px desktops, with no horizontal scrolling. Tap targets at least 44px. Visible keyboard focus. Respect reduced motion.

### Page story

| Section | Job | Ground |
|---------|-----|--------|
| Hero | The promise, then the proof (before-and-after slider) | Paper |
| Approach | The problem in the owner's words, and how we work | Paper |
| Selected work | Four case studies, each with a result and a recreated screen | Sand |
| What we build | The services, core one first | Paper |
| About | The person behind the work | Paper |
| Contact | The next step | Night (the one dark section) |

---

## Page meta

- **Site URL:** https://imtiyazsayyid.in (no www). Canonical URL for the home page: https://imtiyazsayyid.in
- **Language:** en-IN (Open Graph locale en_IN)
- **Title:** Imtiyaz Sayyid — Custom Business Software & Automation, Mumbai
- **Description (145 characters):** We turn messy Excel sheets, WhatsApp chats and paperwork into simple custom software: CRMs, ERPs, websites and automation for growing businesses.
- **Keywords:** custom software, custom business software, CRM, ERP, business automation, software consultant, small and mid-sized businesses, Mumbai, India
- **Link previews:** Open Graph and Twitter cards use the title, description and `app/opengraph-image.png`, with site name "Imtiyaz Sayyid" and type website.
- **Structured data:** ProfessionalService (business, Mumbai, Maharashtra, India; the six services from `lib/services.ts`), Person (Software Consultant) and WebSite, as JSON-LD. No reviews, ratings, prices or FAQs.

---

## 1. Navigation

- **Left:** Imtiyaz Sayyid (Newsreader wordmark)
- **Links:** Work · Services · About
- **Button:** Book a call

---

## 2. Hero

**Headline:** Software built around how you work.

**Text:** We turn messy Excel sheets and WhatsApp chaos into simple custom software your team actually uses. For growing businesses in manufacturing, lending, education and events.

**Buttons:** Book a call · See the work (scrolls to Selected work)

**Visual: before-and-after slider.** The same five furniture orders twice. Drag to compare; it sweeps once when it first comes into view.

- **Before:** a spreadsheet called `Orders_FINAL_v3 (2).xlsx`, "Last edited by Ramesh, 3 days ago", with a messy formula in the formula bar. Rows include "teak dining tbl 6 seat · 84000 · 25k adv?? · polishing? · ask factory", a `#N/A`, a duplicate "Ananya R. · dining table (same?)", a `#REF!` and "pls dont delete". Sheet tabs: Orders_FINAL · Copy of Orders · Sheet3 · Factory (old).
- **After:** "Orders · 5 active · updated live from the factory", with the question "Which orders still have money pending?" answered "2 orders · ₹1,07,000 to collect". A table of customer, item, value, payment (₹59,000 due / Paid in full / ₹48,000 due / Quote sent / Paid in full) and production stage with progress. Footer: "1 duplicate merged · 1 broken formula removed".
- The numbers agree across both sides.

**Caption:** Drag to compare: the same five orders, as a spreadsheet and as a system. · Recreation with sample data.

---

## 3. Approach

**Statement:** Leads in Excel. Customers in WhatsApp. Orders in someone's head.
(The last sentence is set in a lighter colour.)

**Text:** That's how most growing businesses run, until it stops working. We replace the patchwork with one system, shaped around the way your team already works.

**Three points:**
1. **We learn before we build.** We sit with you and your team to see how work actually flows today, workarounds included.
2. **You see it working in weeks.** Progress every week, on your real data. Launch in weeks, not months.
3. **We stay after launch.** We train your team, fix issues quickly and keep improving the system as you grow.

---

## 4. Selected work

**Heading:** Selected work
**Text:** Four of the 10+ systems we've shipped. Client names stay private; the screens are recreations with sample data.

Four case studies, alternating text and visual sides on desktop (text first on phones). Each has: business type, system name, a one-sentence result, a short story, and a recreated screen.

### Furniture manufacturer and retailer — Order tracking system
- **Result:** Every order, from first enquiry to delivery, in one place.
- **Story:** Leads, quotes and payments lived in Excel, cut off from the factory. We built one system for sales, invoicing and production, connected to their manufacturing software, so nobody has to ask around to find an order.
- **Screen:** one order (Ananya Rao, teak dining table, ₹84,000, ₹59,000 due on delivery) with its timeline: enquiry → quotation → advance received → cutting → polishing (now, synced from factory) → quality check → delivery.

### Event ticketing company — White-label ticketing platform
- **Result:** No seat sold twice, even under heavy load.
- **Story:** Organisers wanted their own branded ticketing. We built an organiser dashboard, a mobile site where customers pick seats live, and a door-scanner app. A theatre in the Middle East now runs its box office and door entry on it.
- **Screen:** "An Evening of Jazz" at the fake venue "Sample Theatre": a 6 × 12 seat map with sold seats, three picked seats in row C, "3 seats · Row C · ₹4,500" and "Continue to checkout".
- Never mention the real ticketing platform's or the client's name, including in sample data.

### Study-abroad company — Student CRM, rebuilt
- **Result:** Rebuilt in three months, with every record moved safely.
- **Story:** A five-year-old system had become slow and hard to use. The new one covers leads, students, franchises and applications, and lets partners ask questions about their own data in plain English.
- **Screen:** the question "How many applications did each country get this month?", the answer "128 applications this month. The UK and Canada lead.", bars for UK, Canada, Australia and Germany, and "Partners only see their own students."

### Lending company — Loan processing system
- **Result:** From months of paperwork to a few days. ₹5 Cr disbursed to 180 clients.
- **Story:** KYC and loan processing were done by hand. We delivered an online platform for KYC, digital signatures and disbursement in under 15 days.
- **Screen:** a loan (Priya Sharma, ₹3,50,000, 24 months, "Disbursed today") moving KYC → Documents → E-sign → Approved → Disbursed, with a signature and verified documents.

---

## 5. What we build

**Heading:** What we build
**Text:** Most clients start with a custom system. Everything else is there to make it work harder.

The list (copy lives in `lib/services.ts`, shared with the structured data):

1. **Custom business systems** (marked "Where most clients start"): CRMs, ERPs and internal tools shaped around how your team already works. Leads, orders, payments and production, all in one place.
2. **Websites:** Fast, clean websites that explain what you do and bring in enquiries.
3. **E-commerce stores:** Online stores with catalogues, payments and order management that are easy to run.
4. **Automation and AI tools:** Take repetitive work off your team's plate with business automation, from auto-generated documents to AI that answers questions about your data.
5. **Integrations:** Connect the tools you already use, like payment gateways, WhatsApp, accounting and existing software.
6. **Ongoing support:** We keep your systems running, fix issues quickly and keep improving them as you grow.

---

## 6. About

**Heading:** Hi, I'm Imtiyaz.

**Visual:** a photo of Imtiyaz **[PHOTO]** (currently a placeholder labelled "Photo of Imtiyaz"; see the TODO in `components/About.tsx`).

**Lead (serif):** For the past three years I've been building custom software for small and mid-sized businesses across lending, manufacturing, education, e-commerce, events and media.

**Text:**
What I enjoy most is the part before the code: understanding how a business really runs, then turning that into something simple people actually want to use.

Based in Mumbai, I lead every project personally and bring in trusted specialists when the work needs it. You always work directly with me, without handoffs or middlemen.

---

## 7. Contact

On the navy (`night`) band.

**Heading:** Tell us what's slowing your business down.
**Text:** A short call is enough to see if we can help. No pressure, no jargon.

**Buttons:** Book a call (gold) · Message on WhatsApp → https://wa.me/917977601610, opening a new tab with the pre-filled message "Hi Imtiyaz, I came across your website and would like to talk about software for my business."

**What happens next:**
1. You book a short call.
2. We understand what's slowing you down.
3. You get a clear plan and quote.

**Email line:** Prefer email? imtiyazsayyid.pro@gmail.com

---

## 8. Footer

- Imtiyaz Sayyid · Custom software and automation · Mumbai, India
- Links: LinkedIn (https://www.linkedin.com/in/imtiyazsayyid, opens in a new tab) · Email · © 2026

---

## 9. 404 page

Same nav (its links lead back to the home page sections) and footer.

- **Label:** Error 404
- **Headline:** This page doesn't exist.
- **Text:** The link may be old or mistyped. Head back to the home page, or book a short call if you were looking for help with your business.
- **Buttons:** Book a call · Back to the home page

---

## Analytics (Google Analytics 4)

Loaded in production only, after the page is interactive. Measurement ID from `NEXT_PUBLIC_GA_ID`. Custom events:

| Event | When | Parameter |
|-------|------|-----------|
| `book_call_click` | Any "Book a call" button | `location`: nav, hero, contact, not_found |
| `whatsapp_click` | WhatsApp button in Contact | |
| `email_click` | Email link in Contact or the footer | |
| `linkedin_click` | LinkedIn link in the footer | |
| `see_work_click` | "See the work" in the hero | |
