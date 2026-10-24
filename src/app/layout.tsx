import type { Metadata } from "next";
import {
  Libre_Caslon_Display,
  Libre_Caslon_Text,
  Hanken_Grotesk,
} from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { BUSINESS, PHONE_DISPLAY, CONTACT_EMAIL, SITE_URL } from "@/lib/site";
import { FAQS } from "@/lib/faq";

const caslon = Libre_Caslon_Display({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Libre Caslon Text carries a true 700 weight (Display is 400-only). Used for
// small serif labels that read too thin in Display (e.g. discipline headings).
const caslonText = Libre_Caslon_Text({
  variable: "--font-caslon-text",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "British American Tennis and Golf Academy · Atlanta tennis & golf coaching",
    template: "%s · BATGA",
  },
  description:
    "Private tennis and golf coaching in Atlanta with Ryan Hughes: British-trained, USPTR certified, a +2.4 golf handicap. Learn properly. Call or text to book.",
  keywords: [
    "Atlanta golf coach",
    "Atlanta tennis coach",
    "golf lessons Atlanta",
    "golf simulator Atlanta",
    "private tennis lessons Atlanta",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "British American Tennis and Golf Academy",
    description:
      "Private tennis and golf coaching in Atlanta. British-trained, USPTR certified, a +2.4 golf handicap. Learn properly.",
    url: SITE_URL,
    siteName: BUSINESS.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "British American Tennis and Golf Academy",
    description:
      "Private tennis and golf coaching in Atlanta. British-trained, USPTR certified, a +2.4 golf handicap.",
  },
};

// LocalBusiness / SportsActivityLocation structured data for local SEO + AEO.
//
// TWO one-line adds once Ryan confirms the details (both are the biggest local
// levers, so do them as soon as you have them):
//   1. sameAs: ["<Google Business Profile URL>"] — Ryan has no GBP yet; creating
//      one is the top local-SEO action. Add its URL here once live.
//   2. openingHoursSpecification — add real weekly hours when confirmed, e.g.
//        openingHoursSpecification: [{
//          "@type": "OpeningHoursSpecification",
//          dayOfWeek: ["Monday", "Tuesday", ...],
//          opens: "08:00", closes: "20:00",
//        }],
//      Keep it matched to the visible "Visit" section (currently by appointment).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: BUSINESS.name,
  alternateName: BUSINESS.short,
  description:
    "Private tennis and golf coaching in Atlanta, Georgia with Ryan Hughes.",
  image: `${SITE_URL}/opengraph-image`,
  areaServed: {
    "@type": "City",
    name: "Atlanta",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Georgia",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
  telephone: PHONE_DISPLAY,
  email: CONTACT_EMAIL,
  url: SITE_URL,
  priceRange: "$125–$300",
  founder: { "@type": "Person", name: "Ryan Hughes" },
  sport: ["Golf", "Tennis"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Private golf coaching",
        serviceType: "Golf lessons",
      },
      priceCurrency: "USD",
      price: "125",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Private tennis coaching",
        serviceType: "Tennis lessons",
      },
      priceCurrency: "USD",
    },
  ],
};

// FAQPage structured data — mirrors the visible FAQ (lib/faq.ts) so answer
// engines (Google AI, ChatGPT) can quote it. Content must match what renders.
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the inline script adds a `js` class to <html>
    // before paint (reveal progressive-enhancement flag). Intentional
    // server/client attribute difference on this one element only.
    <html
      lang="en"
      className={`${caslon.variable} ${caslonText.variable} ${hanken.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#coach"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
          <MobileCallBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
