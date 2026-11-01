/**
 * The six services, shared by the "What we build" section and the
 * structured data (JSON-LD), so the two never drift apart.
 * The first entry is the featured, core service.
 */
export const services = [
  {
    title: "Custom business systems",
    description:
      "CRMs, ERPs and internal tools shaped around how your team already works. Leads, orders, payments and production, all in one place.",
  },
  {
    title: "Websites",
    description:
      "Fast, clean websites that explain what you do and bring in enquiries.",
  },
  {
    title: "E-commerce stores",
    description:
      "Online stores with catalogues, payments and order management that are easy to run.",
  },
  {
    title: "Automation and AI tools",
    description:
      "Take repetitive work off your team's plate with business automation, from auto-generated documents to AI that answers questions about your data.",
  },
  {
    title: "Integrations",
    description:
      "Connect the tools you already use, like payment gateways, WhatsApp, accounting and existing software.",
  },
  {
    title: "Ongoing support",
    description:
      "We keep your systems running, fix issues quickly and keep improving them as you grow.",
  },
] as const;
