import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/data/news";

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
          backgroundImage="/images/drilling/sonic.webp"
          backgroundAlt="Summit Drilling News"
          ribbonText="SUMMIT NEWS"
          title="Company News"
          description="Stay updated with the latest news, achievements, and milestones from Summit Drilling."
        />

        {/* News Grid Section */}
        <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                >
                  <Link href={`/about-us/news/${post.slug}`} className="block">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Date Badge */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                        <time className="text-xs font-bold text-[#1a365d] block">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                        <span className="text-xs text-gray-500">
                          {new Date(post.date).getFullYear()}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#1a365d] mb-3 line-clamp-2 group-hover:text-[#4d7c55] transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#4d7c55] font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination placeholder - can be added later */}
            <div className="mt-16 text-center">
              <p className="text-gray-500">
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
