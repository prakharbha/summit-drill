import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

export const metadata: Metadata = {
  title: "Start a Project - Summit Drilling, LLC",
  description: "Get in touch with Summit Drilling to discuss your drilling, geophysics, or remediation project needs.",
};

export default function StartProjectPage() {
  return (
    <PageTemplate title="Start a Project" description="Let's discuss your project needs" dividerColor="#8B4513" footerHasDivider={true}>
      <DrillingRequestForm />
    </PageTemplate>
  );
}

