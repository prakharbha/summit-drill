import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { getNewsPostBySlug, getLatestPosts, getAllNewsSlugs, getNewsImageUrl, SanityNewsPost } from "@/lib/sanity-queries";
import { PortableText } from "@/components/sanity/PortableText";

// Generate static params for all blog posts
export async function generateStaticParams() {
    const slugs = await getAllNewsSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await getNewsPostBySlug(resolvedParams.slug);

    if (!post) {
        return {
            title: "Page Not Found - Summit Drilling",
        };
    }

    return {
        title: post.metaTitle || `${post.title} - Summit Drilling News`,
        description: post.metaDescription || post.excerpt,
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const post = await getNewsPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const latestPosts = await getLatestPosts(resolvedParams.slug, 5);
    const imageUrl = getNewsImageUrl(post);

    const shareUrl = `https://summitdrilling.com/${post.slug.current}`;
    const shareText = encodeURIComponent(post.title);

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Banner */}
                <PageHeroBanner
                    backgroundImage={imageUrl}
                    backgroundAlt={post.title}
                    ribbonText={post.ribbonText || "SUMMIT NEWS"}
                    title={post.title}
                    description={post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    }) : undefined}
                />

                {/* Content Section with Light Green Background */}
                <section className="py-16 bg-[#a4c5c5] font-work-sans">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content - 2/3 width */}
                            <div className="lg:col-span-2">
                                <article className="bg-[#78a8a8] rounded-xl shadow-lg p-8 md:p-12">
                                    {/* Article Content from Sanity */}
                                    {post.content && post.content.length > 0 ? (
                                        <PortableText value={post.content} className="news-article-content" />
                                    ) : (
                                        <div className="prose prose-lg max-w-none">
                                            <p>{post.excerpt}</p>
                                        </div>
                                    )}

                                    {/* Social Share Section */}
                                    <div className="mt-12 pt-8 border-t border-[#5a8888]">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <Link
                                                href="/about-us/news"
                                                className="inline-flex items-center gap-2 text-[#1a365d] hover:text-[#4d7c55] font-semibold transition-colors"
                                            >
                                                <span>&larr;</span>
                                                Back to All News
                                            </Link>

                                            <div className="flex items-center gap-4">
                                                <span className="text-[#0e2a47] font-semibold">Share:</span>
                                                <div className="flex items-center gap-3">
                                                    <a
                                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:bg-[#005885] transition-colors"
                                                        aria-label="Share on LinkedIn"
                                                    >
                                                        <FaLinkedinIn className="w-5 h-5" />
                                                    </a>
                                                    <a
                                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:bg-[#0d65d9] transition-colors"
                                                        aria-label="Share on Facebook"
                                                    >
                                                        <FaFacebookF className="w-5 h-5" />
                                                    </a>
                                                    <a
                                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:bg-[#0c85d0] transition-colors"
                                                        aria-label="Share on Twitter"
                                                    >
                                                        <FaTwitter className="w-5 h-5" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            {/* Sidebar - 1/3 width */}
                            <div className="lg:col-span-1">
                                <div className="bg-[#78a8a8] rounded-xl shadow-lg p-6 sticky top-8">
                                    <h2 className="text-xl font-bold text-[#0e2a47] mb-6 pb-4 border-b border-[#5a8888]">
                                        Latest News
                                    </h2>
                                    <div className="space-y-6">
                                        {latestPosts.map((latestPost: SanityNewsPost) => (
                                            <Link
                                                key={latestPost._id}
                                                href={`/${latestPost.slug.current}`}
                                                className="block group"
                                            >
                                                <div className="flex gap-4">
                                                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                        <Image
                                                            src={getNewsImageUrl(latestPost)}
                                                            alt={latestPost.title}
                                                            fill
                                                            sizes="80px"
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                            unoptimized={getNewsImageUrl(latestPost).includes('cdn.sanity.io')}
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-sm font-bold text-[#0e2a47] line-clamp-2 group-hover:text-[#1a365d] transition-colors leading-tight mb-1">
                                                            {latestPost.title}
                                                        </h3>
                                                        {latestPost.publishedAt && (
                                                            <time className="text-xs text-[#1a365d]">
                                                                {new Date(latestPost.publishedAt).toLocaleDateString("en-US", {
                                                                    month: "short",
                                                                    day: "numeric",
                                                                    year: "numeric",
                                                                })}
                                                            </time>
                                                        )}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* View All Link */}
                                    <div className="mt-6 pt-4 border-t border-[#5a8888]">
                                        <Link
                                            href="/about-us/news"
                                            className="text-[#0e2a47] font-semibold hover:text-[#1a365d] transition-colors inline-flex items-center gap-2"
                                        >
                                            View All News
                                            <span>&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
