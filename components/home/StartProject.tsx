"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const StartProject = () => {
  return (
    <section className="relative bg-[#8B3A28] text-white overflow-hidden pt-20 pb-32 lg:pt-24 lg:pb-40">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Start-a-Project 24/7
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-white/90">
              Get a fast, accurate and competitive proposal.
            </h3>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#1a365d] hover:bg-[#132845] text-white px-8 py-6 text-lg font-bold italic shadow-lg"
              >
                <Link href="/start-a-project">We're eager to serve you &gt;&gt;</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Placeholder for the laptop/forms image */}
            <div className="relative h-80 lg:h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                alt="Start a Project"
                fill
                className="object-contain object-right opacity-50 mix-blend-overlay"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20 translate-y-[1px]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V40L400 40L550 15L650 35L720 5L790 35L890 15L1040 40H1440V100H0Z"
            fill="#A8C686"
          />
        </svg>
      </div>
    </section>
  );
};

export default StartProject;
