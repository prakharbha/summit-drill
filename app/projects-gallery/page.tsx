import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Projects Gallery - Summit Drilling, LLC",
  description: "Explore our portfolio of successful drilling, geophysics, and remediation projects.",
};

export default function ProjectsGalleryPage() {
  return (
    <PageTemplate
      title="Projects Gallery"
      description="Story & Projects Gallery – Our work in action"
    />
  );
}

