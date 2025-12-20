"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { newsPosts, NewsPost } from "@/data/news";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/ui/NewsCard";

const NewsSection = () => {
    const [posts, setPosts] = useState<NewsPost[]>([]);

    useEffect(() => {
        setPosts(newsPosts.slice(0, 3));
    }, []);

    return (
        <section className="relative py-12 bg-[#162f58] pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 space-y-4 text-center"
                >
                    <SectionHeading variant="white">
                        Company News
                    </SectionHeading>
                    <h3 className="text-xl md:text-2xl font-bold text-white/90">
                        Our growth equals more capability to serve.
                    </h3>
                    <p className="text-xl text-white/80 leading-relaxed font-medium !mt-0 max-w-3xl mx-auto">
                        Summit has a lot going on. From new regional offices to people on the move. A growing and sustainable Summit means more capability and expertise to serve you. We're excited about the future and hope you'll keep up with our news.
                    </p>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-sky-500 hover:bg-sky-600 text-white text-base font-bold italic tracking-wide rounded-sm px-6 py-3 mt-2 transition-colors"
                    >
                        Follow Us on LinkedIn &gt;&gt;
                    </a>
                </motion.div>

                {/* News Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="/about-us/news"
                        className="inline-block bg-[#377d7e] hover:bg-sky-500 text-white text-base font-bold italic tracking-wide rounded-sm px-6 py-3 transition-colors"
                    >
                        View All News &gt;&gt;
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsSection;
