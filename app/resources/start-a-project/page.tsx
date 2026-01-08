import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageTemplate from "@/components/layout/PageTemplate";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageBySlug, getPageImageUrl } from "@/lib/sanity-queries";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("start-a-project");
  if (!page) return {};

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.heroDescription,
  };
}

export default async function StartProjectPage() {
  const page = await getPageBySlug("start-a-project");

  if (!page) {
    notFound();
  }

  const heroImage = getPageImageUrl(page);

  return (
    <PageTemplate
      title={page.title}
      description={page.heroDescription}
      dividerColor={page.dividerColor}
      backgroundImage={heroImage}
      showDivider={false}
    >
      <DrillingRequestForm />
    </PageTemplate>
  );
}

