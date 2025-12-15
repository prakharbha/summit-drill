import { Metadata } from "next";
// Import JSON directly (requires resolveJsonModule: true in tsconfig, usually default in Next.js)
import siteMetadata from "./site-metadata.json";

type PagePath = keyof typeof siteMetadata;

export function getPageMetadata(path: string): Metadata {
    // Normalize path to match JSON keys (no trailing slash, verify format)
    let normalizedPath = path.replace(/\/$/, "") || "/";

    const data = (siteMetadata as any)[normalizedPath];

    if (!data) {
        // Fallback or warning
        console.warn(`No metadata found for path: ${path}`);
        return {
            title: "Summit Drilling",
            description: "Summit Drilling Services"
        };
    }

    return {
        title: data.title,
        description: data.description,
        alternates: {
            canonical: data.canonical
        }
    };
}
