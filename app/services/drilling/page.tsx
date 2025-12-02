import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Drilling Services - Summit Drilling, LLC",
  description: "Sonic, Direct Push, Auger, and Air Rotary drilling services for environmental and geotechnical applications.",
};

export default function DrillingPage() {
  return (
    <PageTemplate
      title="Drilling"
      description="Sonic, Direct Push, Auger, Air Rotary"
    />
  );
}

