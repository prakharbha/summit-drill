import type { Metadata, Viewport } from "next";
import { Lato, Work_Sans } from "next/font/google";
import "./globals.css";
import GDPRBanner from "@/components/ui/GDPRBanner";

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

export const metadata: Metadata = {
  title: "Summit Drilling, LLC - Professional Drilling & Geophysics Services",
  description: "Summit Drilling provides expert drilling, remediation, and geophysics services. We are responsible for your experience.",
  keywords: ["drilling", "geophysics", "remediation", "environmental services", "sonic drilling", "direct push", "auger drilling"],
  authors: [{ name: "Summit Drilling, LLC" }],
  openGraph: {
    title: "Summit Drilling, LLC - Professional Drilling & Geophysics Services",
    description: "Summit Drilling provides expert drilling, remediation, and geophysics services. We are responsible for your experience.",
    type: "website",
    locale: "en_US",
    siteName: "Summit Drilling, LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Drilling, LLC - Professional Drilling & Geophysics Services",
    description: "Summit Drilling provides expert drilling, remediation, and geophysics services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${workSans.variable}`}>
      <body className="antialiased font-work-sans">
        {children}
        <GDPRBanner />
      </body>
    </html>
  );
}

