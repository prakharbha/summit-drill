"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GreenButton } from "@/components/ui/GreenButton";
import { HeroBannerOverlay } from "@/components/ui/HeroBannerOverlay";

const Discovery = () => {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative min-h-[800px] h-auto lg:h-[900px] w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          {/* Mobile: Show poster image only */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/images/drilling-hero.webp"
              alt="Summit Drilling operations"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
          {/* Desktop: Show video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
            aria-label="Background video showing Summit Drilling operations"
            poster="/images/drilling-hero.webp"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            <track
              kind="captions"
              srcLang="en"
              src="/videos/hero-background.vtt"
              label="English captions"
              default
            />
          </video>
          {/* Base Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Gradient Overlay for Menu and Text Contrast */}
          <HeroBannerOverlay />
        </div>

        {/* 3-Column Service Overlay */}
        <div className="relative md:absolute inset-0 container mx-auto px-4 lg:px-8 flex items-end pb-8 pt-48 md:pt-0 md:pb-28 lg:pb-32 z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

            {/* Column 1: Geophysics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Custom Mountain Icon */}
              <div className="w-36 h-16 relative -ml-4">
                <Image
                  src="/images/mountain.webp"
                  alt="Mountain Icon"
                  fill
                  sizes="144px"
                  className="object-contain drop-shadow-md"
                />
              </div>
              <h2 className="text-4xl font-bold text-[#22A7F0] drop-shadow-md">Geophysics</h2>
              <p className="hidden md:block text-white text-lg font-medium leading-6 drop-shadow-sm mt-2">
                <span className="text-[#73a5a5] font-bold">We've added x-ray vision to help you see underground.</span> Our geophysicists leverage multiple technologies to bring infrastructure and contaminants into full view.
              </p>
              <GreenButton href="/services/geophysical-services" className="mt-4 mb-8">
                Take a closer look &gt;&gt;
              </GreenButton>
            </motion.div>

            {/* Column 2: Drilling */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Custom Mountain Icon */}
              <div className="hidden md:block w-36 h-16 relative -ml-4">
                <Image
                  src="/images/mountain.webp"
                  alt="Mountain Icon"
                  fill
                  sizes="144px"
                  className="object-contain drop-shadow-md"
                />
              </div>
              <h2 className="text-4xl font-bold text-[#22A7F0] drop-shadow-md">Drilling</h2>
              <p className="hidden md:block text-white text-lg font-medium leading-6 drop-shadow-sm mt-2">
                <span className="text-[#73a5a5] font-bold">Summit has been the go-to source for drilling services across multiple industries for decades.</span> Our drillers are highly trained and deeply experienced. Need a professional partner on your site?
              </p>
              <GreenButton href="/services/drilling-techniques" className="mt-4 mb-8">
                Go a little deeper &gt;&gt;
              </GreenButton>
            </motion.div>

            {/* Column 3: Remediation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Custom Mountain Icon */}
              <div className="hidden md:block w-36 h-16 relative -ml-4">
                <Image
                  src="/images/mountain.webp"
                  alt="Mountain Icon"
                  fill
                  sizes="144px"
                  className="object-contain drop-shadow-md"
                />
              </div>
              <h2 className="text-4xl font-bold text-[#22A7F0] drop-shadow-md">Remediation</h2>
              <p className="hidden md:block text-white text-lg font-medium leading-6 drop-shadow-sm mt-2">
                <span className="text-[#73a5a5] font-bold">We're doing big projects.</span> Our field teams approach your work with enthusiasm and a connectedness to the mission. Need a "can do" culture on your team? Positive. Capable. Equipped.
              </p>
              <GreenButton href="/services/remediation-services" className="mt-4 mb-8">
                Dig in &gt;&gt;
              </GreenButton>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BLUE CONTENT SECTION */}
      <section
        className="relative py-16 lg:py-24 z-20 -mt-[6.3rem]"
        style={{
          clipPath:
            "polygon(0 50px, 65% 0, 100% 50px, 100% calc(100% - 50px), 35% 100%, 0 calc(100% - 50px))",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/about-bg.webp"
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
            quality={75}
            priority={false}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto space-y-4"
          >
            <h2 className="text-[1.75rem] leading-[2.5rem] font-bold not-italic text-white">
              Summit's ability to consistently manage a diverse range of complex projects safely, efficiently and with excellent results is sustained through our unique customer promise—
              <span>An Exceptional Experience</span>
            </h2>

            <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-5xl mx-auto">
              We care about this work, the environment, and your experience with us. We take pride in listening, responding, and delivering because your satisfaction drives our success.
            </p>

            <p className="text-2xl text-white font-bold">
              Approachable. Appreciative. Eager to Serve.
            </p>

            <div className="pt-4">
              <GreenButton href="/about-us" className="px-10 py-6 text-xl">
                About Us &gt;&gt;
              </GreenButton>
            </div>
          </motion.div>
        </div>
      </section >
    </div >
  );
};

export default Discovery;
