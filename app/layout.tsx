import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Figtree, Fraunces } from "next/font/google";
import { AnalyticsEvents } from "@/components/analytics/AnalyticsEvents";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { site } from "@/lib/site";
import { structuredDataJson } from "@/lib/structuredData";
import "./globals.css";

// Both are variable fonts: one file each covers every weight we use
// (Figtree 400–700, Fraunces 400 with optical sizing), which is lighter than
// several static weight files. Fallback metrics are adjusted to avoid layout
// shift while they swap in.
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

// Display serif for the wordmark and headings; the optical size axis keeps
// large headings crisp.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

// Icons, the manifest and the link-preview image come from file conventions
// in app/: favicon.ico, icon.svg, apple-icon.png, manifest.ts and
// opengraph-image.png (+ .alt.txt), which Next.js links automatically.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    "custom software",
    "custom business software",
    "CRM",
    "ERP",
    "business automation",
    "software consultant",
    "small and mid-sized businesses",
    "Mumbai",
    "India",
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  ...(gscVerification ? { verification: { google: gscVerification } } : {}),
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${figtree.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-dvh bg-canvas font-sans text-body text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson() }}
        />
        <SmoothScroll />
        <AnalyticsEvents />
        {children}
      </body>
      {/* Google Analytics 4: production builds only, loaded after the page
          is interactive (the component uses next/script afterInteractive) */}
      {process.env.NODE_ENV === "production" && gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
