"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GreenButton } from "@/components/ui/GreenButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SanityHomePage } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";

interface CareersProps {
  data?: SanityHomePage['careers'];
}

export default function Careers({ data }: CareersProps) {
  const imageUrl = data?.image?.asset?._ref ? urlFor(data.image).url() : null;

  return (
    <section className="relative bg-[#a4c5c5] pt-32 pb-24 lg:pt-40 lg:pb-40 z-10 -mt-[6.3rem]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-lg overflow-hidden"
          >
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={data?.title || "Careers"}
                width={1967}
                height={1313}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={imageUrl.includes('cdn.sanity.io')}
              />
            )}
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {data?.title && (
              <SectionHeading variant="dark">
                {data.title}
              </SectionHeading>
            )}

            {data?.description && (
              <p className="text-[1.5rem] leading-[1.325] text-[#1e3a8a]/90 max-w-xl whitespace-pre-wrap">
                {data.description}
              </p>
            )}

            {data?.ctaLink && data?.ctaText && (
              <GreenButton href={data.ctaLink} className="mt-[15px]">
                {data.ctaText}
              </GreenButton>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-30 translate-y-[1px]">
        <SectionDivider className="w-full h-auto block" fill="#377d7e" />
      </div>
    </section>
  );
}
