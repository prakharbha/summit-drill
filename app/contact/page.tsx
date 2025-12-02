import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";
import StartProject from "@/components/home/StartProject";

export const metadata: Metadata = {
  title: "Contact - Summit Drilling, LLC",
  description: "Contact Summit Drilling for inquiries, project consultations, or general information.",
};

export default function ContactPage() {
  return (
    <PageTemplate title="Contact" description="Get in touch with our team">
      <StartProject />
    </PageTemplate>
  );
}

