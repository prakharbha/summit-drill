import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Services - Summit Drilling, LLC",
  description: "Comprehensive drilling, geophysics, and remediation services for environmental and geotechnical applications.",
};

export default function ServicesPage() {
  return (
    <PageTemplate
      title="Services"
      description="Comprehensive solutions for all your drilling and environmental needs"
    />
  );
}

