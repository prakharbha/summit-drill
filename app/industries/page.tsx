import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Industries - Summit Drilling, LLC",
  description: "Serving diverse industries with specialized drilling, geophysics, and remediation solutions.",
};

export default function IndustriesPage() {
  return (
    <PageTemplate
      title="Industries"
      description="Serving diverse sectors with specialized solutions"
    />
  );
}

