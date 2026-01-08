import { Metadata } from "next";
import { notFound } from "next/navigation";

import ContactPageContent from "@/components/contact/ContactPageContent";
import { getPageBySlug, getAllTeamMembers, getAllLocations } from "@/lib/sanity-queries";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("contact");
  if (!page) return {};

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.heroDescription,
  };
}

export default async function ContactPage() {
  const [page, employees, locations] = await Promise.all([
    getPageBySlug("contact"),
    getAllTeamMembers(),
    getAllLocations()
  ]);

  if (!page) {
    notFound();
  }

  return <ContactPageContent page={page} employees={employees} locations={locations} />;
}
