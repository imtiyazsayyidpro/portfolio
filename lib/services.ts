/**
 * The six services, shared by the "What we build" section and the
 * structured data (JSON-LD), so the two never drift apart.
 * The first entry is the featured, core service.
 */
export const services = [
  {
    title: "Custom business systems",
    description:
      "One place for your leads, orders, payments and production, set up around how your team already works. Your own CRM or ERP, without the parts you don't need.",
  },
  {
    title: "Websites",
    description:
      "A clear, fast website that explains what you do and brings in enquiries.",
  },
  {
    title: "E-commerce stores",
    description:
      "An online store that takes orders and payments, and is easy for your team to run day to day.",
  },
  {
    title: "Automation and AI",
    description:
      "Hand the repetitive work to the system: documents that create themselves, updates that reach the right people, and AI that answers questions about your business in plain English.",
  },
  {
    title: "Connecting your tools",
    description:
      "Your payment gateway, WhatsApp, accounting and existing software, working together instead of being copied between by hand.",
  },
  {
    title: "Ongoing support",
    description:
      "We keep everything running, fix issues quickly and keep improving it as your business grows.",
  },
] as const;
