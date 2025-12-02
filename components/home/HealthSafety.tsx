"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HealthSafety = () => {
  return (
    <section className="py-16 md:py-24 bg-[#A8C686] text-[#0e2a47]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80"
                alt="Health & Safety Team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0e2a47]">
              Health & Safety
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-[#0e2a47]/90">
              Our Health & Safety programs are unique.
            </h3>

            <p className="text-lg text-[#0e2a47]/80 leading-relaxed font-medium">
              How? We blend best practice trainings, PPE use, equipment maintenance and Sr. team mentors with the industry’s most hands-on approach. Our H&S leaders are out in the field to guide where the work is being done.
            </p>

            <div className="pt-4">
              <Button
                asChild
                className="bg-[#5c8a45] hover:bg-[#4a7038] text-white px-8 py-6 text-lg font-bold shadow-lg"
              >
                <Link href="/health-safety">Learn more about our H&S culture and leadership &gt;&gt;</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthSafety;
