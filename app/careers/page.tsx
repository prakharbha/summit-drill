import { Metadata } from "next";
import { notFound } from "next/navigation";

import CareersPageContent from "@/components/careers/CareersPageContent";
import { getPageBySlug } from "@/lib/sanity-queries";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("careers");
  if (!page) return {};

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.heroDescription,
  };
}

export default async function CareersPage() {
  const page = await getPageBySlug("careers");

  if (!page) {
    notFound();
  }

  return <CareersPageContent page={page} />;
}
