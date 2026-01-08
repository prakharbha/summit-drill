"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { SanityPage, SanityTeamMember, SanityLocation, getPageImageUrl, getTeamMemberImageUrl } from "@/lib/sanity-queries";
import { PortableText, PortableTextComponents } from "@portabletext/react";

interface ContactPageContentProps {
    page: SanityPage;
    employees: SanityTeamMember[];
    locations: SanityLocation[];
}

// Reusable employee card component
function EmployeeCard({ employee }: { employee: SanityTeamMember }) {
    const imageUrl = getTeamMemberImageUrl(employee);
    return (
        <div className="flex items-center gap-6">
            <div className="w-[125px] h-[125px] rounded-full overflow-hidden bg-gray-300 flex-shrink-0 border-4 border-[#377d7e]">
                <Image src={imageUrl} alt={employee.name} width={125} height={125} className="object-cover w-full h-full" unoptimized />
            </div>
            <div className="min-w-0 flex-1">
                <h4 className="text-xl font-bold">{employee.name}</h4>
                <p className="font-medium">{employee.title}</p>
                {employee.email && (
                    <a href={`mailto:${employee.email}`} className="block text-[#1A365D] hover:underline text-sm">{employee.email}</a>
                )}
            </div>
        </div>
    );
}

// Locations Section Component with Tabs
function LocationsSection({ locations }: { locations: SanityLocation[] }) {
    // Default to first location if available, otherwise empty string (though locations should exist)
    const [activeLocation, setActiveLocation] = useState(locations[0]?._id || "");
    const location = locations.find(loc => loc._id === activeLocation) || locations[0];

    if (!location) return null;

    return (
        <section id="locations" className="py-20 bg-[#1A365D] text-white relative z-20">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Locations</h2>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {locations.map((loc) => (
                        <button
                            key={loc._id}
                            onClick={() => setActiveLocation(loc._id)}
                            className={`px-4 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 ${activeLocation === loc._id
                                ? "bg-white text-[#1A365D] shadow-lg scale-105"
                                : "bg-white/10 hover:bg-white/20 text-white"
                                }`}
                        >
                            <span className="block">{loc.name}</span>
                            <span className={`text-xs font-normal ${activeLocation === loc._id ? "text-[#377d7e]" : "text-white/70"}`}>
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
                            {location.phone && (
                                <p className="flex items-center gap-3">
                                    <span className="font-bold">Phone:</span>
                                    <a href={`tel:+1${location.phone.replace(/-/g, '')}`} className="hover:text-sky-300 transition-colors">
                                        {location.phone}
                                    </a>
                                </p>
                            )}
                            {location.fax && (
                                <p className="flex items-center gap-3">
                                    <span className="font-bold">Fax:</span>
                                    <span>{location.fax}</span>
                                </p>
                            )}
                        </div>
                        {location.mapQuery && (
                            <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${location.mapQuery}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-6 bg-[#377d7e] hover:bg-sky-500 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                            >
                                Get Directions →
                            </a>
                        )}
                    </div>

                    {/* Map Embed */}
                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-xl border-4 border-white/20 lg:col-span-2">
                        {location.mapQuery && (
                            <iframe
                                key={location._id}
                                width="100%"
                                height="100%"
                                src={`https://maps.google.com/maps?q=${location.mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                frameBorder="0"
                                scrolling="no"
                                className="absolute inset-0"
                                title={`Map of ${location.name}`}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

const components: PortableTextComponents = {
    block: {
        h2: ({ children }) => (
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{children}</h2>
        ),
        normal: ({ children }) => (
            <p className="text-xl font-medium max-w-3xl mb-8">{children}</p>
        ),
    },
};

export default function ContactPageContent({ page, employees, locations }: ContactPageContentProps) {
    const heroImage = getPageImageUrl(page);

    // Filter employees by department
    const corporate = employees.filter(e => e.department === 'corporate');
    const operations = employees.filter(e => e.department === 'operations');
    const itOps = employees.filter(e => e.department === 'it_ops');
    const businessDev = employees.filter(e => e.department === 'business_dev');
    const healthSafety = employees.filter(e => e.department === 'health_safety');
    const finance = employees.filter(e => e.department === 'finance');

    return (
        <>
            <Header />
            <main>
                {/* Hero Section using PageHeroBanner */}
                <PageHeroBanner
                    backgroundImage={heroImage}
                    backgroundAlt={page.title}
                    ribbonText={page.ribbonText}
                    title={page.title}
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
                        {page.content && <PortableText value={page.content} components={components} />}

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
                        {corporate.length > 0 && (
                            <div>
                                <h3 className="text-3xl font-bold mb-10 text-center">Corporate Leadership</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                                    {corporate.map((employee) => (
                                        <div key={employee._id} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                            <EmployeeCard employee={employee} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Operations */}
                        {operations.length > 0 && (
                            <div>
                                <h3 className="text-3xl font-bold mb-10 text-center">Operations Team</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {operations.map((employee) => (
                                        <div key={employee._id} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                            <EmployeeCard employee={employee} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* IT Ops */}
                        {itOps.length > 0 && (
                            <div>
                                <h3 className="text-3xl font-bold mb-10 text-center">IT Operations</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {itOps.map((employee) => (
                                        <div key={employee._id} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                            <EmployeeCard employee={employee} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Business Development */}
                        {businessDev.length > 0 && (
                            <div>
                                <h3 className="text-3xl font-bold mb-10 text-center">Business Development</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {businessDev.map((employee) => (
                                        <div key={employee._id} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                            <EmployeeCard employee={employee} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Support Departments */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Health & Safety */}
                            {healthSafety.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Health & Safety</h3>
                                    <div className="space-y-4">
                                        {healthSafety.map((employee) => (
                                            <div key={employee._id} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                                <EmployeeCard employee={employee} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Finance */}
                            {finance.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Finance & Administration</h3>
                                    <div className="space-y-4">
                                        {finance.map((employee) => (
                                            <div key={employee._id} className="py-4 px-6 rounded-xl transition-colors hover:bg-white/20">
                                                <EmployeeCard employee={employee} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </section>

                {/* Locations Section - Tabbed Layout */}
                <LocationsSection locations={locations} />
            </main>
            <Footer />
        </>
    );
}
