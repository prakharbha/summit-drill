import { redirect } from "next/navigation";
import { newsPosts } from "@/data/news";

export async function generateStaticParams() {
    return newsPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function NewsPostRedirect({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    // Redirect from /about-us/news/[slug] to /[slug]
    redirect(`/${resolvedParams.slug}`);
}
