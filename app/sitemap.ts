import { MetadataRoute } from 'next'
import siteMetadata from '@/lib/site-metadata.json'

// Define the type for our metadata since it's a JSON import
type SiteMetadata = Record<string, {
    title: string;
    description: string;
    canonical?: string;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://summitdrilling.com'

    // Get all routes from our centralized metadata
    const routes = Object.keys(siteMetadata as SiteMetadata).map((route) => {
        // Handle priority based on depth or specific pages
        let priority = 0.5
        if (route === '/') priority = 1.0
        else if (!route.substring(1).includes('/')) priority = 0.8 // Top level pages

        return {
            url: `${baseUrl}${route === '/' ? '' : route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority,
        }
    })

    // Add dynamic news posts if not present in metadata (Assuming they might be dynamic)
    // But for now, we only use what's in siteMetadata as requested.
    // If we wanted to fetch posts, we would import getAllPosts here.
    // The user asked to "make a sitemap.xml", using the site structure we just defined is best.

    return routes
}
