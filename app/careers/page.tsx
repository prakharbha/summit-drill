import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Careers - Summit Drilling, LLC",
  description: "Join our team. Explore career opportunities, benefits, and our culture of excellence at Summit Drilling.",
};

export default function CareersPage() {
  return (
    <PageTemplate
      title="Careers"
      description="You Matter Here – Culture, Career Paths, Training & Mentorship"
    />
  );
}

