"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SummitAbility = () => {
  return (
    <section className="py-16 md:py-24 bg-green-600 text-white relative overflow-hidden">
      {/* Mountain Silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0,120 L200,80 L400,100 L600,60 L800,90 L1000,50 L1200,70 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Summit's ability to manage diverse projects safely and efficiently, while maintaining our customer promise: <span className="font-semibold">An Exceptional Experience.</span>
            </p>
            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-green-600 px-8 py-6 text-lg font-semibold"
              >
                <Link href="/about-us">About Us &gt;&gt;</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SummitAbility;

