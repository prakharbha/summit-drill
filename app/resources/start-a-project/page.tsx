import { getPageMetadata } from "@/lib/seo";
import PageTemplate from "@/components/layout/PageTemplate";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

export const metadata = getPageMetadata("/resources/start-a-project");

export default function StartProjectPage() {
  return (
    <PageTemplate
      title="Start a Project"
      description="Let's discuss your project needs"
      dividerColor="#8B4513"
      backgroundImage="/images/start-project-banner.webp"
      showDivider={false}
    >
      <DrillingRequestForm />
    </PageTemplate>
  );
}

