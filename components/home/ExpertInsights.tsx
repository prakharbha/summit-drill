"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExpertInsights = () => {
  const insights = [
    {
      title: "Understanding Geophysical Survey Methods",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      date: "November 15, 2024",
      category: "Geophysics",
    },
    {
      title: "Best Practices in Environmental Drilling",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
      date: "November 10, 2024",
      category: "Drilling",
    },
    {
      title: "Soil Remediation: A Comprehensive Guide",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      date: "November 5, 2024",
      category: "Remediation",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Expert Insights
          </h2>
          <p className="text-lg text-gray-600">
            Blog/Article Archive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sky-600 text-white text-xs px-3 py-1 rounded-full">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <p className="text-sm text-gray-500 mb-2">{insight.date}</p>
                  <CardTitle className="text-xl">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {insight.excerpt}
                  </p>
                  <Link
                    href="/expertise-insights"
                    className="text-sky-600 hover:text-sky-700 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8"
          >
            <Link href="/expertise-insights">View All &gt;</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertInsights;

