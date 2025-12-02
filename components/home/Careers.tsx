"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Careers() {
  return (
    <section className="relative bg-[#bad296] pt-32 pb-24 lg:pt-40 lg:pb-40 z-10 -mt-[6.3rem]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/careers-image.webp"
              alt="Summit Drilling Careers"
              width={1967}
              height={1313}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-5xl lg:text-6xl font-extrabold text-[#1e3a8a]">
              Careers
            </h2>

            <h3 className="text-2xl lg:text-3xl font-bold text-[#1e3a8a] leading-tight">
              In our human resources department, you are the customer.
            </h3>

            <p className="text-[1.5rem] leading-[1.325] text-[#1e3a8a]/90 max-w-xl">
              Creating opportunities for our people to grow is not lip service,
              it’s a commitment. We have a successful career development program
              that provides trainings, certifications and a clear path forward.
            </p>

            <button className="bg-[#5a8c43] hover:bg-[#4a7536] text-white font-bold py-3 px-8 rounded shadow-lg transition-colors text-lg">
              Start your career track at Summit &gt;&gt;
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-30 translate-y-[1px]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V40L400 40L550 15L650 35L720 5L790 35L890 15L1040 40H1440V100H0Z"
            fill="#4d7c55"
          />
        </svg>
      </div>
    </section>
  );
}
