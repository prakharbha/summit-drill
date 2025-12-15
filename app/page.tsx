import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Discovery from "@/components/home/Discovery";
import Careers from "@/components/home/Careers";
import TeamCarousel from "@/components/home/TeamCarousel";
import FeaturedProject from "@/components/home/FeaturedProject";
import StartProject from "@/components/home/StartProject";
import HealthSafety from "@/components/home/HealthSafety";
import NewsSection from "@/components/home/NewsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Discovery />
        <Careers />
        <TeamCarousel />
        <FeaturedProject />
        <StartProject />
        <HealthSafety />
        <NewsSection />
      </main>
      <Footer hasDividerAbove />
    </>
  );
}

