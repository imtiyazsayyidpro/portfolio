# Imtiyaz Sayyid — Website Content Brief

Content for the one-page consultancy site at **imtiyazsayyid.in**, matching the editorial Navy & Gold design in `imtiyaz-design-system.md` (live since November 2026).

---

## Build notes

- Single page, sections in the order below, with smooth scroll from nav links.
- Follow the design system: warm paper background, Newsreader for headings, Figtree for everything else, gold only where it means something.
- Voice: "we" across the site, except the About section, which is first person.
- Plain, simple language. The audience is non-technical business owners who want manual work taken off their plate. Sell outcomes (less chasing, fewer mistakes, knowing where things stand, time back), not technology. Avoid developer words like "code", "build", "ship", "platform", "stack" where an everyday word works. Sentence case everywhere.
- No client names anywhere. Each case study is described by business type only.
- Visuals are recreated screens built in code (HTML/CSS/SVG) with sample data and no client branding, and the page says so.
- Every "Book a call" button links to https://calendar.app.google/ChmHswgJ4p6WLB5s6 and opens in a new tab.
- Responsive from 375px phones to 1440px desktops, with no horizontal scrolling. Tap targets at least 44px. Visible keyboard focus. Respect reduced motion.

### Page story

| Section | Job | Ground |
|---------|-----|--------|
| Hero | The promise, then the proof (before-and-after slider) | Paper |
| Approach | The problem in the owner's words, and how we work | Paper |
| Results | Four case studies, each with a result and a recreated screen | Sand |
| How we help | The services, core one first | Paper |
| About | The person behind the work | Paper |
| Contact | The next step | Night (the one dark section) |

---

## Page meta

- **Site URL:** https://imtiyazsayyid.in (no www). Canonical URL for the home page: https://imtiyazsayyid.in
- **Language:** en-IN (Open Graph locale en_IN)
- **Title:** Imtiyaz Sayyid — Business Automation & Custom Systems, Mumbai
- **Description (142 characters):** We automate the manual work in growing businesses: orders, follow-ups, payments and paperwork, in one system built around how your team works.
- **Tagline** (web app manifest): Business automation for growing businesses
- **Keywords:** business automation, workflow automation, custom software, custom business software, CRM, ERP, software consultant, small and mid-sized businesses, Mumbai, India
- **Link previews:** Open Graph and Twitter cards use the title, description and `app/opengraph-image.png`, with site name "Imtiyaz Sayyid" and type website.
- **Structured data:** ProfessionalService (business, Mumbai, Maharashtra, India; the six services from `lib/services.ts`), Person (Software Consultant, with the About photo as `image`) and WebSite, as JSON-LD. No reviews, ratings, prices or FAQs.

---

## 1. Navigation

- **Left:** Imtiyaz Sayyid (Newsreader wordmark)
- **Links:** Results · Services · About
- **Button:** Book a call

---

## 2. Hero

**Headline:** Run your business, not your spreadsheets.

**Text:** We automate the manual work that slows growing businesses down: chasing orders, following up on payments, copying data between sheets. All of it moves into one system, set up around how your team already works.

**Buttons:** Book a call · See the results (scrolls to Results)

**Visual: before-and-after slider.** The same five furniture orders twice. Drag to compare; it sweeps once when it first comes into view.

- **Before:** a spreadsheet called `Orders_FINAL_v3 (2).xlsx`, "Last edited by Ramesh, 3 days ago", with a messy formula in the formula bar. Rows include "teak dining tbl 6 seat · 84000 · 25k adv?? · polishing? · ask factory", a `#N/A`, a duplicate "Ananya R. · dining table (same?)", a `#REF!` and "pls dont delete". Sheet tabs: Orders_FINAL · Copy of Orders · Sheet3 · Factory (old).
- **After:** "Orders · 5 active · updated live from the factory", with the question "Which orders still have money pending?" answered "2 orders · ₹1,07,000 to collect". A table of customer, item, value, payment (₹59,000 due / Paid in full / ₹48,000 due / Quote sent / Paid in full) and production stage with progress. Footer: "1 duplicate merged · 1 broken formula removed".
- The numbers agree across both sides.

**Caption:** Drag to compare: the same five orders, as a spreadsheet and as a system. · Recreation with sample data.

---

## 3. Approach

**Statement:** Leads in Excel. Customers in WhatsApp. Orders in someone's head.
(The last sentence is set in a lighter colour.)

**Text:** It works, until you grow. Then orders slip, payments get missed and your best people spend their day copying data from one place to another. We bring it all into one system that does the repetitive work for you, so you always know where things stand.

**Three points:**
1. **We start with your business.** We spend time with you and your team to see how work really gets done, workarounds and all, so the system fits the way you already run things.
2. **Results in weeks, not months.** You see it working on your own data within weeks, with progress every week until your team is using it day to day.
3. **We stay with you.** We train your team, fix issues quickly and keep improving things as your business grows.

---

## 4. Results

**Heading:** Results
**Text:** Four of the 10+ systems we've delivered for growing businesses. Client names stay private; the screens are recreations with sample data.

Four case studies, alternating text and visual sides on desktop (text first on phones). Each has: business type, system name, a one-sentence result, a short story, and a recreated screen.

### Furniture manufacturer and retailer — Order tracking system
- **Result:** Every order, from first enquiry to delivery, in one place.
- **Story:** Leads, quotes and payments lived in Excel, and checking on an order meant calling the factory. Now sales, invoicing and production share one system, connected to the factory's own software, so anyone can see where an order stands without asking around.
- **Screen:** one order (Ananya Rao, teak dining table, ₹84,000, ₹59,000 due on delivery) with its timeline: enquiry → quotation → advance received → cutting → polishing (now, synced from factory) → quality check → delivery.

### Event ticketing company — Branded ticketing platform
- **Result:** No seat sold twice, even under heavy load.
- **Story:** Event organisers wanted ticketing under their own brand, from booking to the door. We set up an organiser dashboard, a mobile site where customers pick their own seats live, and a door-scanner app. A theatre in the Middle East now runs its box office and door entry on it.
- **Screen:** "An Evening of Jazz" at the fake venue "Sample Theatre": a 6 × 12 seat map with sold seats, three picked seats in row C, "3 seats · Row C · ₹4,500" and "Continue to checkout".
- Never mention the real ticketing platform's or the client's name, including in sample data.

### Study-abroad company — Student CRM
- **Result:** Replaced in three months, without losing a single record.
- **Story:** After five years, their old system had become slow and frustrating. We replaced it and moved every record across safely. The team now manages leads, students, franchises and applications in one place, and partners get answers about their own numbers just by asking in plain English.
- **Screen:** the question "How many applications did each country get this month?", the answer "128 applications this month. The UK and Canada lead.", bars for UK, Canada, Australia and Germany, and "Partners only see their own students."

### Lending company — Loan processing system
- **Result:** From months of paperwork to a few days. ₹5 Cr disbursed to 180 clients.
- **Story:** KYC and loan approvals were done on paper, and a single loan could take months. In under 15 days we moved the whole process online: KYC, digital signatures and disbursement in one flow.
- **Screen:** a loan (Priya Sharma, ₹3,50,000, 24 months, "Disbursed today") moving KYC → Documents → E-sign → Approved → Disbursed, with a signature and verified documents.

---

## 5. How we help

**Heading:** How we help
**Text:** Most clients start with one system that runs their day-to-day operations. Everything else helps it do more.

The list (copy lives in `lib/services.ts`, shared with the structured data):

1. **Custom business systems** (marked "Where most clients start"): One place for your leads, orders, payments and production, set up around how your team already works. Your own CRM or ERP, without the parts you don't need.
2. **Websites:** A clear, fast website that explains what you do and brings in enquiries.
3. **E-commerce stores:** An online store that takes orders and payments, and is easy for your team to run day to day.
4. **Automation and AI:** Hand the repetitive work to the system: documents that create themselves, updates that reach the right people, and AI that answers questions about your business in plain English.
5. **Connecting your tools:** Your payment gateway, WhatsApp, accounting and existing software, working together instead of being copied between by hand.
6. **Ongoing support:** We keep everything running, fix issues quickly and keep improving it as your business grows.

---

## 6. About

**Heading:** Hi, I'm Imtiyaz.

**Visual:** a portrait of Imtiyaz (`public/imtiyaz.jpg`, cropped to 4:5 from the original photo). He faces left, so the photo sits to the right of the text on desktop and he looks into the page; on phones it comes first, above the text. Alt text: "Imtiyaz Sayyid". The same image is the Person `image` in the structured data.

**Lead (serif):** For the past three years I've helped small and mid-sized businesses in lending, manufacturing, education, e-commerce, events and media replace manual work with systems their teams rely on every day.

**Text:**
I start by understanding how your business really runs: who does what, where things get stuck, and what your team keeps doing by hand. Then I turn that into something simple your people will actually use.

Based in Mumbai, I lead every project personally and bring in trusted specialists when the work needs it. You deal directly with me from the first call onwards, with no handoffs or middlemen.

---

## 7. Contact

On the navy (`night`) band.

**Heading:** Tell us what's slowing your business down.
**Text:** A short call is enough to see if we can help. No pressure, no jargon.

**Buttons:** Book a call (gold) · Message on WhatsApp → https://wa.me/917977601610, opening a new tab with the pre-filled message "Hi Imtiyaz, I came across your website and would like to talk about automating parts of my business."

**What happens next:**
1. You book a short call.
2. We understand what's slowing you down.
3. You get a clear plan and quote.

**Email line:** Prefer email? imtiyazsayyid.pro@gmail.com

---

## 8. Footer

- Imtiyaz Sayyid · Business automation and custom systems · Mumbai, India
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
| `see_work_click` | "See the results" in the hero | |
