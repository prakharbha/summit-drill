import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Locations - Summit Drilling, LLC",
  description: "Find Summit Drilling locations and service areas across the region.",
};

export default function LocationsPage() {
  return (
    <PageTemplate
      title="Locations"
      description="Our locations and service areas"
    />
  );
}

