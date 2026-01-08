"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GreenButton } from "@/components/ui/GreenButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SanityHomePage } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";

interface HealthSafetyProps {
  data?: SanityHomePage['healthSafety'];
}

const HealthSafety = ({ data }: HealthSafetyProps) => {
  const imageUrl = data?.image?.asset?._ref ? urlFor(data.image).url() : null;

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
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={data?.title || "Health & Safety"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={imageUrl.includes('cdn.sanity.io')}
                />
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {data?.title && (
              <SectionHeading variant="light">
                {data.title}
              </SectionHeading>
            )}

            {data?.description && (
              <p className="text-xl text-[#0e2a47]/80 leading-relaxed font-medium !mt-0 whitespace-pre-wrap">
                {data.description}
              </p>
            )}

            {data?.ctaLink && data?.ctaText && (
              <GreenButton href={data.ctaLink} className="mt-[15px] w-full md:w-auto text-center">
                <span>{data.ctaText}</span>
              </GreenButton>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthSafety;
