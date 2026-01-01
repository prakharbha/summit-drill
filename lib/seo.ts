import { Metadata } from "next";
import siteMetadata from "./site-metadata.json";

const SITE_URL = "https://summitdrilling.com";
const DEFAULT_OG_IMAGE = "/images/og-default.webp";
const LOGO_IMAGE = "/images/summit-logo-update.webp";

// Business information for structured data
export const businessInfo = {
    name: "Summit Drilling, LLC",
    legalName: "Summit Drilling, LLC",
    url: SITE_URL,
    logo: `${SITE_URL}/images/summit-logo-update.webp`,
    description: "Summit Drilling is the Northeast's leading environmental drilling contractor, providing sonic drilling, direct push, geotechnical drilling, and remediation services.",
    foundingDate: "1996",
    telephone: "+1-908-725-0050",
    email: "Sales@SummitDrilling.com",
    address: {
        streetAddress: "1050 U.S. Highway 206, Suite 3",
        addressLocality: "Bridgewater",
        addressRegion: "NJ",
        postalCode: "08807",
        addressCountry: "US"
    },
    geo: {
        latitude: "40.5684",
        longitude: "-74.6246"
    },
    sameAs: [
        "https://www.facebook.com/SummitDrilling",
        "https://www.linkedin.com/company/summit-drilling-llc"
    ],
    serviceArea: ["New Jersey", "New York", "Pennsylvania", "Connecticut", "Massachusetts", "Delaware", "Maryland", "Virginia"]
};

// Get OG image path for a page
function getOgImage(path: string, data: any): string {
    // Use custom image if specified in metadata
    if (data?.ogImage) {
        return data.ogImage;
    }

    // Homepage uses logo
    if (path === "/") {
        return LOGO_IMAGE;
    }

    // News posts use their featured image
    if (path.startsWith("/summit-") || path.startsWith("/100-") || path.startsWith("/1-of-") ||
        path.startsWith("/two-") || path.startsWith("/ron-") || path.startsWith("/leading-") ||
        path.startsWith("/the-") || path.startsWith("/environmental-") || path.startsWith("/turning-")) {
        // These are likely blog posts, try to get image from news data
        return data?.image || DEFAULT_OG_IMAGE;
    }

    // Service pages use drilling images
    if (path.startsWith("/services/")) {
        return "/images/drilling/hero-banner.webp";
    }

    // Industries pages
    if (path.startsWith("/industries/")) {
        return "/images/drilling/hero-banner.webp";
    }

    // Careers pages
    if (path.startsWith("/careers")) {
        return "/images/careers/careers-hero.webp";
    }

    // Default
    return DEFAULT_OG_IMAGE;
}

export function getPageMetadata(path: string): Metadata {
    // Normalize path to match JSON keys (no trailing slash, verify format)
    let normalizedPath = path.replace(/\/$/, "") || "/";

    const data = (siteMetadata as any)[normalizedPath];

    if (!data) {
        console.warn(`No metadata found for path: ${path}`);
        return {
            title: "Summit Drilling",
            description: "Summit Drilling Services"
        };
    }

    const ogImage = getOgImage(normalizedPath, data);
    const fullOgImageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

    return {
        title: data.title,
        description: data.description,
        alternates: {
            canonical: data.canonical
        },
        openGraph: {
            title: data.title,
            description: data.description,
            url: data.canonical,
            siteName: "Summit Drilling",
            images: [
                {
                    url: fullOgImageUrl,
                    width: 1200,
                    height: 630,
                    alt: data.title
                }
            ],
            locale: "en_US",
            type: normalizedPath === "/" ? "website" : "article"
        },
        twitter: {
            card: "summary_large_image",
            title: data.title,
            description: data.description,
            images: [fullOgImageUrl]
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1
            }
        }
    };
}

// Generate JSON-LD structured data for organization
export function getOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: businessInfo.name,
        legalName: businessInfo.legalName,
        url: businessInfo.url,
        logo: businessInfo.logo,
        description: businessInfo.description,
        foundingDate: businessInfo.foundingDate,
        telephone: businessInfo.telephone,
        email: businessInfo.email,
        address: {
            "@type": "PostalAddress",
            ...businessInfo.address
        },
        geo: {
            "@type": "GeoCoordinates",
            ...businessInfo.geo
        },
        sameAs: businessInfo.sameAs,
        areaServed: businessInfo.serviceArea.map(area => ({
            "@type": "State",
            name: area
        }))
    };
}

// Generate JSON-LD structured data for local business
export function getLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: businessInfo.name,
        image: businessInfo.logo,
        telephone: businessInfo.telephone,
        email: businessInfo.email,
        url: businessInfo.url,
        address: {
            "@type": "PostalAddress",
            ...businessInfo.address
        },
        geo: {
            "@type": "GeoCoordinates",
            ...businessInfo.geo
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "17:00"
        },
        priceRange: "$$$$",
        paymentAccepted: ["Cash", "Check", "Credit Card"],
        currenciesAccepted: "USD"
    };
}

// Generate breadcrumb structured data
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };
}
