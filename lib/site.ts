/** Contact details and links used across the page. */

const whatsappMessage =
  "Hi Imtiyaz, I came across your website and would like to talk about software for my business.";

export const site = {
  name: "Imtiyaz Sayyid",
  tagline: "Software built around how you work",

  // Search: page title and description (description under 160 characters)
  title: "Imtiyaz Sayyid — Custom Business Software & Automation, Mumbai",
  description:
    "We turn messy Excel sheets, WhatsApp chats and paperwork into simple custom software: CRMs, ERPs, websites and automation for growing businesses.",

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
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
] as const;
