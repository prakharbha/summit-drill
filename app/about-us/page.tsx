import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "About Us - Summit Drilling, LLC",
  description: "Learn about Summit Drilling's vision, culture, and commitment to excellence in drilling and environmental services.",
};

export default function AboutUsPage() {
  return (
    <PageTemplate
      title="About Us"
      description="Vision/Culture – Summit Is & Strategic Reason Why"
    />
  );
}

