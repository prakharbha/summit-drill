"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SanityHomePage } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";

interface StartProjectProps {
  data?: SanityHomePage['startProject'];
}

const StartProject = ({ data }: StartProjectProps) => {
  const bgImage = data?.image?.asset?._ref ? urlFor(data.image).url() : null;

  return (
    <section
      className="relative bg-[#913c20] text-white overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-24 bg-no-repeat"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundPosition: 'right center',
        backgroundSize: 'auto 100%',
        backgroundBlendMode: 'multiply'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {data?.title && (
              <SectionHeading variant="white">
                {data.title}
              </SectionHeading>
            )}

            {data?.description && (
              <p className="text-xl text-white/80 leading-relaxed font-medium !mt-0 whitespace-pre-wrap">
                {data.description}
              </p>
            )}

            <div className="pt-4">
              {data?.ctaLink && data?.ctaText && (
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1a365d] hover:bg-[#132845] text-white px-8 py-6 text-lg font-bold italic"
                >
                  <Link href={data.ctaLink}>
                    {data.ctaText}
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            {/* Right side area for background image visibility */}
            <div className="relative h-[280px] w-full invisible">
              {/* Content hidden to reveal background */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20 translate-y-[1px]">
        <SectionDivider className="w-full h-auto block" fill="#a4c5c5" />
      </div>
    </section>
  );
};

export default StartProject;
