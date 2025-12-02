import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Company News - Summit Drilling, LLC",
  description: "Stay updated with the latest news, announcements, and updates from Summit Drilling.",
};

export default function NewsPage() {
  return (
    <PageTemplate
      title="Company News"
      description="News Archive – Latest updates and announcements"
    />
  );
}

