import { services } from "@/lib/services";
import { site } from "@/lib/site";

/**
 * Structured data (schema.org JSON-LD) for search engines: the business, the
 * person behind it, and the website, linked to each other by @id.
 * No reviews, ratings, prices or FAQs.
 */
const businessId = `${site.url}/#business`;
const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon-512.png`,
      image: `${site.url}/opengraph-image.png`,
      description: site.description,
      email: site.email,
      telephone: site.telephone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      areaServed: { "@type": "Country", name: "India" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      jobTitle: "Software Consultant",
      url: site.url,
      worksFor: { "@id": businessId },
      sameAs: [site.linkedinUrl],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.name,
      url: site.url,
      inLanguage: "en-IN",
      publisher: { "@id": businessId },
    },
  ],
};

/** Serialised for a <script type="application/ld+json">, with "<" escaped. */
export function structuredDataJson() {
  return JSON.stringify(structuredData).replace(/</g, "\\u003c");
}
