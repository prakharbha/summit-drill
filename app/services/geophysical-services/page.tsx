import { getPageMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

export const metadata = getPageMetadata("/services/geophysical-services");

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          title="Geophysical Services"
          description=""
          backgroundImage="/images/drilling/hero-banner.webp"
        />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <p className="text-lg">Content coming soon...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
