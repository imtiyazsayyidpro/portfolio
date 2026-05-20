import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const siteUrl = siteConfig.website;
const aboutUrl = "https://about.imtiyazsayyid.in";
const logoPath = "/assets/logo/logo.png";
const logoUrl = `${siteUrl}${logoPath}`;
const seoTitle = siteConfig.title;
const seoDescription = siteConfig.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: seoTitle,
    template: `%s — ${siteConfig.name}`,
  },
  description: seoDescription,
  keywords: [
    "Imtiyaz Sayyid",
    "Full-Stack Developer Mumbai",
    "Next.js Developer",
    "Node.js Developer",
    "CRM Developer",
    "Admin Dashboard Developer",
    "AI Workflow Developer",
    "TypeScript Developer",
    "MySQL Developer",
    "Production Web Applications",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: logoPath, type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: logoPath, type: "image/png", sizes: "512x512" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: logoUrl,
        width: 512,
        height: 512,
        alt: `${siteConfig.name} logo`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: logoUrl,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteConfig.name,
      url: siteUrl,
      image: logoUrl,
      jobTitle: "Full-Stack Developer",
      email: `mailto:${siteConfig.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressCountry: "IN",
      },
      sameAs: [siteConfig.social.linkedin, siteConfig.social.github, aboutUrl],
      knowsAbout: [
        "Full-stack development",
        "CRM systems",
        "Admin dashboards",
        "AI workflows",
        "Next.js",
        "Node.js",
        "MySQL",
        "Production deployment",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteConfig.name,
      url: siteUrl,
      alternateName: siteConfig.websiteLabel,
      description: seoDescription,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geist.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        {/* Runs synchronously before first paint — prevents theme flash */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
