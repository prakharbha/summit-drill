import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Health & Safety - Summit Drilling, LLC",
  description: "Our commitment to safety culture, programs, trainings, certifications, and mentoring.",
};

export default function HealthSafetyPage() {
  return (
    <PageTemplate
      title="Health & Safety"
      description="Culture, Program, Trainings & Certifications, Mentoring"
    />
  );
}

