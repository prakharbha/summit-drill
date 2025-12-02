"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FeaturedProject = () => {
  return (
    <section className="relative w-full h-[600px] lg:h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
          alt="Featured Project Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2a47] via-[#0e2a47]/60 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20 h-full flex flex-col justify-start pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Featured Project
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              Sure, we’ll tell you what we do, but we would rather show you.
            </h3>

            <p className="text-lg text-white/90 max-w-xl">
              We hope this featured project is of interest. We’d love to repeat it
              on one of your sites. You can also click on our project gallery link
              to see what else we’ve done.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 justify-center lg:items-end"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#5c8a45] hover:bg-[#4a7038] text-white font-bold px-8 py-6 text-lg w-full sm:w-auto rounded shadow-lg"
            >
              <Link href="/projects-gallery">Read more about this project &gt;&gt;</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#c25e2e] hover:bg-[#a65027] text-white font-bold px-8 py-6 text-lg w-full sm:w-auto rounded shadow-lg"
            >
              <Link href="/projects-gallery">Visit our project gallery &gt;&gt;</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
