"use client";

import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { ReactNode } from "react";

interface PageTemplateProps {
  /** Page title (h1) */
  title: string;
  /** Description text below title */
  description?: string;
  /** Background image path - defaults to generic banner */
  backgroundImage?: string;
  /** Alt text for background image */
  backgroundAlt?: string;
  /** Ribbon text (e.g., "Summit Services") */
  ribbonText?: string;
  /** Optional button/CTA element */
  button?: ReactNode;
  /** Page content */
  children?: ReactNode;
  /** Whether to show the mountain logo */
  showMountainLogo?: boolean;
}

/**
 * Page Template with Hero Banner
 * Use this for inner pages that need the standard hero banner layout
 */
const PageTemplate = ({
  title,
  description,
  backgroundImage = "/images/drilling/hero-banner.webp",
  backgroundAlt,
  ribbonText = "Summit Services",
  button,
  children,
  showMountainLogo = true,
}: PageTemplateProps) => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section using PageHeroBanner */}
        <PageHeroBanner
          backgroundImage={backgroundImage}
          backgroundAlt={backgroundAlt || `${title} - Summit Drilling`}
          ribbonText={ribbonText}
          title={title}
          description={description}
          button={button}
          showMountainLogo={showMountainLogo}
        />

        {/* Content Section */}
        {children ? (
          children
        ) : (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Content coming soon...
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default PageTemplate;
