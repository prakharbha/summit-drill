import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { getAllPosts } from "@/data/news";
import { NewsCard } from "@/components/ui/NewsCard";

export const metadata: Metadata = {
  title: "News & Updates - Summit Drilling, LLC",
  description: "Stay updated with the latest news, achievements, and milestones from Summit Drilling. Read about our growth, acquisitions, and industry recognition.",
};

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          backgroundImage="/images/news/joseph-c-negro-crop-scaled.webp"
          backgroundAlt="Summit Drilling News"
          ribbonText="SUMMIT NEWS"
          title="Company News"
          description="Stay updated with the latest news, achievements, and milestones from Summit Drilling."
          dividerColor="#162f58"
        />

        {/* News Grid Section */}
        <section className="py-16 bg-[#162f58]">
          <div className="container mx-auto px-4 lg:px-8">
            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <NewsCard
                  key={post.id}
                  id={post.id}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
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
