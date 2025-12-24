"use client";

import { useState } from "react";
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
            <div className="w-[125px] h-[125px] rounded-full overflow-hidden bg-gray-300 flex-shrink-0 border-4 border-[#377d7e]">
                <Image src={employee.image} alt={employee.name} width={125} height={125} className="object-cover w-full h-full" />
            </div>
            <div className="min-w-0 flex-1">
                <h4 className="text-xl font-bold">{employee.name}</h4>
                <p className="font-medium">{employee.title}</p>
                <a href={`mailto:${employee.email}`} className="block text-[#1A365D] hover:underline text-sm">{employee.email}</a>
            </div>
        </div>
    );
}

// Location data
const LOCATIONS = [
    {
        id: "headquarters",
        name: "Bridgewater, NJ",
        label: "Headquarters",
        address: "81 Chimney Rock Road, Bridgewater, NJ 08807",
        phone: "800-242-6648",
        fax: "732-356-1009",
        mapQuery: "81+Chimney+Rock+Road,+Bridgewater,+NJ+08807"
    },
    {
        id: "runnemede",
        name: "Runnemede, NJ",
        label: "Regional Office",
        address: "190 Ninth Avenue, Runnemede, NJ 08078",
        phone: "800-242-6648",
        fax: "732-356-1009",
        mapQuery: "190+Ninth+Avenue,+Runnemede,+NJ+08078"
    },
    {
        id: "jackson",
        name: "Jackson Township, NJ",
        label: "Regional Office",
        address: "629 Wright Debow Road, Jackson Township, NJ 08527",
        phone: "800-242-6648",
        fax: "732-356-1009",
        mapQuery: "629+Wright+Debow+Road,+Jackson+Township,+NJ+08527"
    },
    {
        id: "easton",
        name: "Easton, PA",
        label: "Regional Office",
        address: "724 S 27th St, Easton, PA 18045",
        phone: "888-204-3266",
        fax: "888-204-3266",
        mapQuery: "724+S+27th+St,+Easton,+PA+18045"
    },
    {
        id: "fortmill",
        name: "Fort Mill, SC",
        label: "Regional Office",
        address: "9088 Northfield Drive, Fort Mill, SC 29707",
        phone: "800-849-0353",
        fax: "888-204-3266",
        mapQuery: "9088+Northfield+Drive,+Fort+Mill,+SC+29707"
    }
];

// Locations Section Component with Tabs
function LocationsSection() {
    const [activeLocation, setActiveLocation] = useState("headquarters");
    const location = LOCATIONS.find(loc => loc.id === activeLocation) || LOCATIONS[0];

    return (
        <section id="locations" className="py-20 bg-[#1A365D] text-white relative z-20">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Locations</h2>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {LOCATIONS.map((loc) => (
                        <button
                            key={loc.id}
                            onClick={() => setActiveLocation(loc.id)}
                            className={`px-4 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 ${activeLocation === loc.id
                                ? "bg-white text-[#1A365D] shadow-lg scale-105"
                                : "bg-white/10 hover:bg-white/20 text-white"
                                }`}
                        >
                            <span className="block">{loc.name}</span>
                            <span className={`text-xs font-normal ${activeLocation === loc.id ? "text-[#377d7e]" : "text-white/70"}`}>
                                {loc.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Active Location Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Location Details */}
                    <div className="lg:col-span-1 bg-white/10 p-6 rounded-xl">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                            Summit ({location.label})
                        </h3>
                        <p className="text-lg md:text-xl mb-6 text-white/90">
                            {location.address}
                        </p>
                        <div className="space-y-3 text-lg">
                            <p className="flex items-center gap-3">
                                <span className="font-bold">Phone:</span>
                                <a href={`tel:+1${location.phone.replace(/-/g, '')}`} className="hover:text-sky-300 transition-colors">
                                    {location.phone}
                                </a>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="font-bold">Fax:</span>
                                <span>{location.fax}</span>
                            </p>
                        </div>
                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${location.mapQuery}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 bg-[#377d7e] hover:bg-sky-500 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                        >
                            Get Directions →
                        </a>
                    </div>

                    {/* Map Embed */}
                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-xl border-4 border-white/20 lg:col-span-2">
                        <iframe
                            key={location.id}
                            width="100%"
                            height="100%"
                            src={`https://maps.google.com/maps?q=${location.mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                            frameBorder="0"
                            scrolling="no"
                            className="absolute inset-0"
                            title={`Map of ${location.name}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ContactPageContent() {
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
                    className="py-16 text-[#1A365D] relative overflow-visible bg-[#a4c5c5]"
                >
                    {/* Background texture - positioned right center with top fade */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-50"
                        style={{
                            backgroundImage: 'url(/images/contact/keep-in-touch-texture.webp)',
                            backgroundPosition: 'right center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'auto 300%',
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',
                        }}
                    />
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep In Touch</h2>
                        <p className="text-xl font-medium max-w-3xl mb-8">
                            A lot is happening at Summit, follow us on social media, contact one of our experts below, or complete the form so we can learn more about your needs.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <a href="https://www.linkedin.com/company/summit-drilling/" target="_blank" rel="noopener noreferrer" aria-label="Connect with us on LinkedIn" className="bg-[#377d7e] p-3 rounded-sm hover:bg-[#2a5e5f] transition-colors text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            <a href="https://www.facebook.com/p/Summit-Drilling-LLC-100083102508611/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="bg-[#377d7e] p-3 rounded-sm hover:bg-[#2a5e5f] transition-colors text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/summitdrillingllc/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="bg-[#377d7e] p-3 rounded-sm hover:bg-[#2a5e5f] transition-colors text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <ContactForm />

                {/* Team List Section */}
                <section className="py-20 bg-[#a4c5c5] text-[#1A365D]">
                    <div className="container mx-auto px-4 lg:px-8 space-y-20">

                        {/* Corporate Leadership */}
                        <div>
                            <h3 className="text-3xl font-bold mb-10 text-center">Corporate Leadership</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                                {CORPORATE.map((employee, i) => (
                                    <div key={i} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                        <EmployeeCard employee={employee} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Operations */}
                        <div>
                            <h3 className="text-3xl font-bold mb-10 text-center">Operations Team</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {OPERATIONS.map((employee, i) => (
                                    <div key={i} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                        <EmployeeCard employee={employee} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Business Development */}
                        <div>
                            <h3 className="text-3xl font-bold mb-10 text-center">Business Development</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {BUSINESS_DEVELOPMENT.map((employee, i) => (
                                    <div key={i} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                        <EmployeeCard employee={employee} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Support Departments */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Health & Safety */}
                            <div>
                                <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Health & Safety</h3>
                                <div className="space-y-4">
                                    {HEALTH_SAFETY.map((employee, i) => (
                                        <div key={i} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                            <EmployeeCard employee={employee} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Finance */}
                            <div>
                                <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Finance & Administration</h3>
                                <div className="space-y-4">
                                    {FINANCE.map((employee, i) => (
                                        <div key={i} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                            <EmployeeCard employee={employee} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Locations Section - Tabbed Layout */}
                <LocationsSection />
            </main>
            <Footer />
        </>
    );
}
