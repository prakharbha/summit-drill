import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Expertise & Insights - Summit Drilling, LLC",
  description: "Expert articles, insights, and industry knowledge from Summit Drilling's team of professionals.",
};

export default function ExpertiseInsightsPage() {
  return (
    <PageTemplate
      title="Expertise & Insights"
      description="Blog/Article Archive – Industry insights and expertise"
    />
  );
}

