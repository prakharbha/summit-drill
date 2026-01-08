import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Discovery from "@/components/home/Discovery";
import Careers from "@/components/home/Careers";
import TeamCarousel from "@/components/home/TeamCarousel";
import FeaturedProject from "@/components/home/FeaturedProject";
import StartProject from "@/components/home/StartProject";
import HealthSafety from "@/components/home/HealthSafety";
import NewsSection from "@/components/home/NewsSection";
import { getHomePage } from "@/lib/sanity-queries";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomePage();
  if (!page) return {};

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription,
  };
}

export default async function Home() {
  const page = await getHomePage();

  return (
    <>
      <Header />
      <main>
        <Discovery hero={page?.hero} />
        <Careers data={page?.careers} />
        <TeamCarousel />
        <FeaturedProject />
        <StartProject data={page?.startProject} />
        <HealthSafety data={page?.healthSafety} />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}

