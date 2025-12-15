import { getPageMetadata } from "@/lib/seo";
import DrillingTechniquesContent from "@/components/drilling/DrillingTechniquesContent";

export const metadata = getPageMetadata("/services/drilling-techniques");

export default function DrillingPage() {
  return <DrillingTechniquesContent />;
}
