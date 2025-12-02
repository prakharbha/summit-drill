import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Remediation Services - Summit Drilling, LLC",
  description: "Systems Installation, Earth Work, Soil Mixing, and Civil/Industrial remediation solutions.",
};

export default function RemediationPage() {
  return (
    <PageTemplate
      title="Remediation"
      description="Systems Installation, Earth Work, Soil Mixing, Civil/Industrial"
    />
  );
}

