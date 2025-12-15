"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { newsPosts, NewsPost } from "@/data/news";

const NewsSection = () => {
    const [posts, setPosts] = useState<NewsPost[]>([]);

    useEffect(() => {
        // Get 3 random posts on client side
        const shuffled = [...newsPosts].sort(() => 0.5 - Math.random());
        setPosts(shuffled.slice(0, 3));
    }, []);

    return (
        <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-[#4d7c55] font-bold uppercase tracking-widest text-sm mb-2">
                        Stay Updated
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a365d] mb-4">
                        Company News
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        The latest updates, achievements, and milestones from Summit Drilling
                    </p>
                </motion.div>

                {/* News Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <Link href={`/news/${post.slug}`} className="block">
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <time className="text-sm text-[#4d7c55] font-semibold">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                    <h3 className="text-xl font-bold text-[#1a365d] mt-2 mb-3 line-clamp-2 group-hover:text-[#4d7c55] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </motion.article>
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
                        href="/news"
                        className="inline-flex items-center gap-2 bg-[#1a365d] hover:bg-[#132845] text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all hover:scale-105"
                    >
                        View All News
                        <span className="text-lg">&rarr;</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsSection;
