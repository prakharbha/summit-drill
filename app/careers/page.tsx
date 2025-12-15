import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/careers");

export default function CareersPage() {
  return (
    <PageTemplate
      title="Careers"
      description="You Matter Here – Culture, Career Paths, Training & Mentorship"
    />
  );
}

