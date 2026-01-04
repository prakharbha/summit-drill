import type { Metadata, Viewport } from "next";
import { Lato, Work_Sans } from "next/font/google";
import "./globals.css";
import GDPRBanner from "@/components/ui/GDPRBanner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
});

const workSans = Work_Sans({
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const SITE_URL = "https://summitdrilling.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Summit Drilling, LLC - Professional Drilling & Geophysics Services",
    template: "%s | Summit Drilling"
  },
  description: "Summit Drilling is the Northeast's leading environmental drilling contractor, providing sonic drilling, direct push, geotechnical drilling, and remediation services.",
  keywords: [
    "drilling",
    "environmental drilling",
    "sonic drilling",
    "direct push drilling",
    "geotechnical drilling",
    "remediation services",
    "geophysics",
    "well drilling",
    "monitoring wells",
    "New Jersey drilling",
    "environmental contractor"
  ],
  authors: [{ name: "Summit Drilling, LLC" }],
  creator: "Summit Drilling, LLC",
  publisher: "Summit Drilling, LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "developer": "Nandann Creative Agency – https://www.nandann.com/",
    "design-agency": "Nandann Creative Agency"
  },
  openGraph: {
    title: "Summit Drilling, LLC - Professional Drilling & Geophysics Services",
    description: "Summit Drilling is the Northeast's leading environmental drilling contractor, providing sonic drilling, direct push, geotechnical drilling, and remediation services.",
    url: SITE_URL,
    siteName: "Summit Drilling, LLC",
    images: [
      {
        url: "/images/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Summit Drilling - Environmental Drilling Contractor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Drilling, LLC - Professional Drilling & Geophysics Services",
    description: "Summit Drilling is the Northeast's leading environmental drilling contractor.",
    images: ["/images/og-default.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Environmental Services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#162f58" },
    { media: "(prefers-color-scheme: dark)", color: "#162f58" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className={`${lato.variable} ${workSans.variable}`}>
      <body className="antialiased font-work-sans">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <GoogleAnalytics />
        {children}
        <GDPRBanner />
        <SpeedInsights />
      </body>
    </html>
  );
}
