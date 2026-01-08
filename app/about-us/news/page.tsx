import { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { NewsCard } from "@/components/ui/NewsCard";
import { getAllNewsPosts, getNewsImageUrl, getPageBySlug, getPageImageUrl, SanityNewsPost } from "@/lib/sanity-queries";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("news");
  if (!page) return {};

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.heroDescription,
  };
}

export default async function NewsPage() {
  const [page, posts] = await Promise.all([
    getPageBySlug("news"),
    getAllNewsPosts()
  ]);

  if (!page) {
    notFound();
  }

  const heroImage = getPageImageUrl(page);

  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          backgroundImage={heroImage}
          backgroundAlt={page.title}
          ribbonText={page.ribbonText}
          title={page.title}
          description={page.heroDescription}
          dividerColor={page.dividerColor}
        />

        {/* News Grid Section */}
        <section className="py-16 bg-[#162f58]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="sr-only">All News Articles</h2>
            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: SanityNewsPost, index: number) => (
                <NewsCard
                  key={post._id}
                  id={post._id}
                  slug={post.slug.current}
                  title={post.title}
                  excerpt={post.excerpt || ""}
                  image={getNewsImageUrl(post)}
                  index={index}
                  variant="dark"
                />
              ))}
            </div>

            {/* Pagination placeholder - can be added later */}
            <div className="mt-16 text-center">
              <p className="text-white/70">
                Showing all {posts.length} news articles
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
