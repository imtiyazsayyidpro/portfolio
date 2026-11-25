/** Contact details and links used across the page. */

const whatsappMessage =
  "Hi Imtiyaz, I came across your website and would like to talk about automating parts of my business.";

export const site = {
  name: "Imtiyaz Sayyid",
  tagline: "Business automation for growing businesses",

  // Search: page title and description (description under 160 characters)
  title: "Imtiyaz Sayyid — Business Automation & Custom Systems, Mumbai",
  description:
    "We automate the manual work in growing businesses: orders, follow-ups, payments and paperwork, in one system built around how your team works.",

  telephone: "+91 79776 01610",

  bookingUrl: "https://calendar.app.google/ChmHswgJ4p6WLB5s6",

  email: "imtiyazsayyid.pro@gmail.com",

  // Opens a WhatsApp chat with a short pre-filled message.
  whatsappUrl: `https://wa.me/917977601610?text=${encodeURIComponent(whatsappMessage)}`,
  whatsappLabel: "+91 79776 01610",

  linkedinUrl: "https://www.linkedin.com/in/imtiyazsayyid",

  city: "Mumbai",

  url: "https://imtiyazsayyid.in",

  // Browser chrome and app colours (navy primary, off-white background).
  // Keep in step with --color-primary and --color-canvas in app/globals.css.
  themeColor: "#15203a",
  backgroundColor: "#faf8f4",
} as const;

export const navLinks = [
  { href: "#work", label: "Results" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
] as const;
