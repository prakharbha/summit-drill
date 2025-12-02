import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Certifications - Summit Drilling, LLC",
  description: "View Summit Drilling's industry certifications and qualifications.",
};

export default function CertificationsPage() {
  return (
    <PageTemplate
      title="Certifications"
      description="Our industry certifications and qualifications"
    />
  );
}

