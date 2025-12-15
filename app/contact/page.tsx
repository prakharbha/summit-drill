"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

// Employee data organized by department
const OPERATIONS = [
  { name: "Joel Bernstein", title: "Senior Vice President", email: "JBernstein@summitdrilling.com", image: "/images/contact/joel-bernstein-sr-vp.webp" },
  { name: "Joan Baer", title: "Regional Vice President of Operations – Greater Philadelphia", email: "JBaer@summitdrilling.com", image: "/images/contact/joan-baer.webp" },
  { name: "Jack Byer", title: "Regional Vice President of Operations – Southeast", email: "JByer@summitdrilling.com", image: "/images/contact/jack-byer-vice-president-operations.webp" },
  { name: "Joseph C. Negro", title: "Vice President of Remediation", email: "JNegro@summitdrilling.com", image: "/images/contact/joey-negro-vp-remediation.webp" },
  { name: "Jerry Aquino", title: "Director of Fleet Services", email: "JAquino@summitdrilling.com", image: "/images/contact/jerry-aquino-director-of-fleet-services.webp" },
  { name: "Trevor Quinn", title: "Director of IT", email: "TQuinn@summitdrilling.com", image: "/images/contact/trevor-quinn-director-it.webp" },
  { name: "Ed Ruger", title: "Project Manager", email: "ERuger@summitdrilling.com", image: "/images/contact/ed-ruger-project-manager.webp" },
  { name: "Yecenia DeTorrice", title: "Project Manager", email: "YDetorrice@summitdrilling.com", image: "/images/contact/yecenia-detorrice-pm.webp" },
  { name: "Jess Parell", title: "Project Manager", email: "JParell@summitdrilling.com", image: "/images/contact/jessica-parell-pm.webp" },
  { name: "Katie West", title: "Project Manager", email: "KWest@summitdrilling.com", image: "/images/contact/katie-west.webp" },
  { name: "Michael Wilson", title: "Drilling Field Supervisor", email: "MWilson@summitdrilling.com", image: "/images/contact/mike-wilson-drilling-field-supervisor.webp" },
  { name: "Richey Lemire", title: "Drilling Field Supervisor", email: "RLemire@summitdrilling.com", image: "/images/contact/richey-lamire-drilling-field-supervisor.webp" },
  { name: "Mary Holmes", title: "Project Administrator", email: "MHolmes@summitdrilling.com", image: "/images/contact/mary-holmes-project-administrator.webp" },
];

const HEALTH_SAFETY = [
  { name: "Ben Shaffer", title: "Director of Health and Safety", email: "BShaffer@summitdrilling.com", image: "/images/contact/ben-shaffer-director-of-health-safety.webp" },
];

const BUSINESS_DEVELOPMENT = [
  { name: "Lauren DiVello", title: "VP of Sales & Business Development", email: "ldivello@summitdrilling.com", image: "/images/contact/lauren-divello-vp-of-sales.webp" },
  { name: "Dermot P. Dillon", title: "Vice President of Major Accounts", email: "DDillon@summitdrilling.com", image: "/images/contact/dermot-dillon-vice-president-major-accounts.webp" },
];

const FINANCE = [
  { name: "Abigail George", title: "Accounts Receivable Manager", email: "AGeorge@summitdrilling.com", image: "/images/contact/abigail-george-accounts-receiveable-manager.webp" },
];

const CORPORATE = [
  { name: "Ron Bucca", title: "Chief Executive Officer", email: "RBucca@summitdrilling.com", image: "/images/contact/ron-bucca-ceo.webp" },
  { name: "Matthew Vetter", title: "Chief Operating Officer", email: "MVetter@summitdrilling.com", image: "/images/contact/matthew-vetter-coo.webp" },
  { name: "Pete Byer", title: "Head of Corporate Development", email: "PByer@summitdrilling.com", image: "/images/contact/pete-byer-head-of-corp-dev.webp" },
];

// Reusable employee card component
function EmployeeCard({ employee }: { employee: { name: string; title: string; email: string; image: string } }) {
  return (
    <div className="flex items-center gap-6">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0 border-4 border-[#5e745d]">
        <Image src={employee.image} alt={employee.name} width={96} height={96} className="object-cover w-full h-full" />
      </div>
      <div>
        <h4 className="text-xl font-bold">{employee.name}</h4>
        <p className="font-medium">{employee.title}</p>
        <a href={`mailto:${employee.email}`} className="block text-[#1A365D] hover:underline">{employee.email}</a>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section using PageHeroBanner */}
        <PageHeroBanner
          backgroundImage="/images/contact/hero-banner.webp"
          backgroundAlt="Summit Drilling Team"
          ribbonText="Contact"
          title="We're here to help. Let's connect."
        />

        {/* Keep In Touch Section */}
        <section
          className="py-20 text-[#1A365D] relative overflow-hidden"
          style={{ backgroundColor: '#B5D48C' }}
        >
          {/* Background texture - positioned right center */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage: 'url(/images/contact/keep-in-touch-texture.webp)',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto 300%',
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep In Touch</h2>
            <p className="text-xl font-medium max-w-3xl mb-8">
              A lot is happening at Summit, follow us on social media, contact one of our experts below, or complete the form so we can learn more about your needs.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" className="bg-[#5e745d] p-3 rounded-sm hover:bg-[#4a5c49] transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="bg-[#5e745d] p-3 rounded-sm hover:bg-[#4a5c49] transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="bg-[#5e745d] p-3 rounded-sm hover:bg-[#4a5c49] transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Team List Section */}
        <section className="py-20 bg-[#B5D48C] text-[#1A365D]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Operations */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Operations</h3>
                <div className="space-y-8">
                  {OPERATIONS.map((employee, i) => (
                    <EmployeeCard key={i} employee={employee} />
                  ))}
                </div>
              </div>

              {/* Right Column (Health & Safety, Finance, Corporate) */}
              <div className="space-y-16">
                <div>
                  <h3 className="text-3xl font-bold mb-8">Health & Safety</h3>
                  <div className="space-y-8">
                    {HEALTH_SAFETY.map((employee, i) => (
                      <EmployeeCard key={i} employee={employee} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-8">Finance & Administration</h3>
                  <div className="space-y-8">
                    {FINANCE.map((employee, i) => (
                      <EmployeeCard key={i} employee={employee} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-8">Corporate</h3>
                  <div className="space-y-8">
                    {CORPORATE.map((employee, i) => (
                      <EmployeeCard key={i} employee={employee} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Business Development (Full Width) */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8">Business Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {BUSINESS_DEVELOPMENT.map((employee, i) => (
                  <EmployeeCard key={i} employee={employee} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Headquarters Section */}
        <section
          className="py-20 bg-[#1A365D] text-white relative z-20 pb-32"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 100px), 35% 100%, 0 calc(100% - 100px))"
          }}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Summit (Headquarters)</h2>
                <p className="text-xl md:text-2xl mb-6">
                  81 Chimney Rock Road, Bridgewater, NJ 08807
                </p>
                <div className="space-y-2 text-xl font-bold">
                  <p>Phone: 800-242-6648</p>
                  <p>Fax: 732-356-1009</p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-xl border-4 border-white/20 lg:col-span-2">
                <iframe
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=81+Chimney+Rock+Road,+Bridgewater,+NJ+08807&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer hasDividerAbove />
    </>
  );
}
