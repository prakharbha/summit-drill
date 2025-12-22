import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/health-safety");

export default function HealthSafetyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          backgroundImage="/images/health-safety-banner.jpg"
          backgroundAlt="Summit Health & Safety"
          ribbonText="SUMMIT"
          title="Health & Safety"
          description="A Safety Culture Built to Protect People, Strengthen Teams and Elevate Careers"
        />

        {/* Main Content Section */}
        <section className="py-16 pb-24 bg-[#a4c5c5] font-work-sans font-normal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main Content - 2/3 width */}
              <div className="lg:col-span-2 space-y-10">

                {/* A Culture Section */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    A Culture Where Safety and Operational Excellence Go Hand in Hand
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At Summit, safety isn&apos;t a checklist, it&apos;s a core value that shapes every action in the field, every project plan, and every customer interaction. Our teams operate in complex environmental and geotechnical conditions, where attention to detail and the discipline of safe practices are essential. We foster a culture where every employee understands their role in protecting themselves, their coworkers, and the communities where we work. This shared responsibility ensures that customers receive exceptional service backed by consistent, reliable, safety-driven performance.
                  </p>
                </div>

                {/* Meet Ben Shaffer */}
                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Meet Ben Shaffer – Leading Summit&apos;s Next Generation of Health & Safety
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    After five years of progressive experience at Summit, Ben Shaffer has been promoted to Director of Health & Safety, an advancement earned through hard work, hands-on field knowledge, and a deep commitment to the well-being of our teams. Ben began his career as a Driller Assistant and advanced to Lead Driller, gaining firsthand insight into the daily challenges of drilling, injection, and geophysical operations. His passion for Health & Safety grew under the mentorship of long-time Safety Director Denis Crayon and expanded through ongoing certifications, including his Certified Occupational Safety Specialist (COSS) credential. With his blend of technical training and frontline experience, Ben brings a practical, grounded approach to safety leadership.
                  </p>
                </div>

                {/* Training Section */}
                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Training, Certification, and Career Advancement Built Into Every Role
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Summit&apos;s Health & Safety programs do more than keep our people safe, they strengthen careers. Every employee, from new hires to senior drillers, receives comprehensive safety training and access to certification pathways that support long-term professional growth.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our structured Driller Apprentice Training Program integrates essential safety protocols with equipment operation, CDL licensing opportunities, OSHA coursework, machinery training, and more. These investments help our teams build confidence, earn valuable credentials, and advance into higher-level operational and leadership roles. When our people grow, our customers benefit from safer, more efficient project outcomes.
                  </p>
                </div>
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <div className="bg-[#78a8a8] p-8 sticky top-8 font-work-sans">
                  {/* Mountain Logo and Header */}
                  <div className="mb-6 pb-6 border-b-2 border-[#923d21]">
                    <Image
                      src="/images/rust-mountain.webp"
                      alt="Summit Mountain"
                      width={200}
                      height={100}
                      className="w-1/2 h-auto object-contain mb-2"
                    />
                    <span className="block text-[#923d21] font-bold text-[1.5rem] tracking-[0.25rem] uppercase">
                      Core H&S Training
                    </span>
                  </div>

                  {/* Training List */}
                  <ul className="space-y-2 text-[#1A365D] text-base mb-8">
                    {[
                      "OSHA 40-Hour & 8-Hour Refresher",
                      "Loss Prevention System (LPS)",
                      "API Passport Safety Training",
                      "Amtrak & NJ Transit Safety Programs",
                      "Fall Protection",
                      "Lockout/Tagout (Energy Control)",
                      "PPE Training",
                      "HAZCOM",
                      "Emergency Action Plans",
                      "Fire Safety & Prevention",
                      "Forklift Safety",
                      "Respirator Fit Testing",
                      "Hot Work Activity Program"
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="mr-2 text-[#923d21] font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Practices Section */}
                  <div className="pt-6 border-t-2 border-[#923d21]">
                    <span className="block text-[#923d21] font-bold text-[1.25rem] tracking-[0.15rem] uppercase mb-4">
                      Safety Practices & Field Protocols
                    </span>
                    <ul className="space-y-2 text-[#1A365D] text-base">
                      {[
                        "Onsite Safety Reviews & Audits",
                        "Daily Rig Checklists",
                        "Weekly & Quarterly Safety Meetings",
                        "Customer Safety Plan Review",
                        "Summit Safety Plan Review",
                        "Task-Specific Documentation Review",
                        "Tailgate Meetings",
                        "Utility Mark-Out Investigations",
                        "Medical Surveillance & Drug/Alcohol Screening",
                        "Vehicle & Rig Safety Inspections",
                        "DOT Emissions & Roadway Compliance",
                        "Emergency Stops, Back-Up Alarms & On-Rig Equipment"
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="mr-2 text-[#923d21] font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <DrillingRequestForm />
      </main>
      <Footer />
    </>
  );
}
