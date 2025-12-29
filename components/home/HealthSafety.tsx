"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GreenButton } from "@/components/ui/GreenButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

const HealthSafety = () => {
  return (
    <section className="py-8 md:py-12 bg-[#a4c5c5] text-[#0e2a47] overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 lg:h-[450px] rounded-3xl overflow-hidden">
              <Image
                src="/images/health-safety-home-bg.webp"
                alt="Health &amp; Safety Team"
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
            className="space-y-4"
          >
            <SectionHeading variant="light">
              Health & Safety
            </SectionHeading>

            <h3 className="text-xl md:text-2xl font-bold text-[#0e2a47]/90">
              Our Health &amp; Safety programs are unique.
            </h3>

            <p className="text-xl text-[#0e2a47]/80 leading-relaxed font-medium !mt-0">
              How? We blend best practice trainings, PPE use, equipment maintenance and Sr. team mentors with the industry's most hands-on approach. Our H&amp;S leaders are out in the field to guide where the work is being done.
            </p>

            <GreenButton href="/health-safety" className="mt-[15px] w-full md:w-auto text-center">
              <span className="md:hidden">Health &amp; Safety &gt;&gt;</span>
              <span className="hidden md:inline">Learn more about our H&amp;S culture and leadership &gt;&gt;</span>
            </GreenButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthSafety;
