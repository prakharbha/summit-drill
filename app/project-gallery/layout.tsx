import { Metadata } from "next";
import { getPageBySlug } from "@/lib/sanity-queries";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug("project-gallery");

    if (!page) {
        return {
            title: "Project Gallery | Summit Drilling",
            description: "View our recent projects",
        };
    }

    return {
        title: page.metaTitle || page.title,
        description: page.metaDescription || page.heroDescription,
    };
}

export default function ProjectGalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
