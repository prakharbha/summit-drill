import { getPageMetadata } from "@/lib/seo";
import CareersPageContent from "@/components/careers/CareersPageContent";

export const metadata = getPageMetadata("/careers");

export default function CareersPage() {
  return <CareersPageContent />;
}
