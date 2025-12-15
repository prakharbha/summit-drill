import { getPageMetadata } from "@/lib/seo";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata = getPageMetadata("/contact");

export default function ContactPage() {
  return <ContactPageContent />;
}
