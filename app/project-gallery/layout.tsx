import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/project-gallery");

export default function ProjectGalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
