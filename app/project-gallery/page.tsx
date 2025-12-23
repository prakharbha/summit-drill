"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

const projects = [
    {
        slug: "charlotte-airport",
        title: "Bentonite Hydraulic Cut-Off Wall Installation",
        location: "Charlotte, NC",
        description: "Summit constructed a bentonite-based hydraulic cut-off wall within an active airport environment adjacent to a runway and taxiway.",
        image: "/images/projects/charlotte-airport-banner.webp"
    },
    {
        slug: "brick-nj",
        title: "Emergency Storm Sewer Repair",
        location: "Brick, NJ",
        description: "Summit delivered a complete investigation-to-restoration solution for an urgent subsurface infrastructure issue involving a monitoring well that punctured a storm sewer line.",
        image: "/images/projects/brick-nj-banner.webp"
    },
    {
        slug: "charlestown",
        title: "Sonic Drilling – Overburden & Bedrock Wells",
        location: "Charlestown, RI",
        description: "Large-scale sonic drilling and well installation program at a U.S. Army Corps of Engineers site with 30 overburden wells and rock coring to 150 feet.",
        image: "/images/projects/charlestown-banner.webp"
    },
    {
        slug: "charlotte-methane",
        title: "Methane Mitigation System with Cupolex & VIMS",
        location: "Charlotte, NC",
        description: "Installation of a complex methane mitigation system for a 7-story building including 15,920 sq. ft. of Cupolex domed forming system.",
        image: "/images/projects/charlotte-methane-banner.webp"
    },
    {
        slug: "gastonia",
        title: "Permeable Reactive Barrier (PRB) Installation",
        location: "Gastonia, NC",
        description: "Rapid installation of a permeable reactive barrier at a Southeastern superfund site in response to an urgent groundwater issue.",
        image: "/images/projects/gastonia-banner.webp"
    },
    {
        slug: "linden",
        title: "GPR & Drilling – Subsurface Investigation",
        location: "Linden, NJ",
        description: "Multi-technology subsurface investigation including GPR preclearance, drilling across 16 locations, and installation of injection wells.",
        image: "/images/projects/linden-banner.webp"
    },
    {
        slug: "princeton-jct",
        title: "Long-Term Injection & Monitoring Well Program",
        location: "Princeton Junction, NJ",
        description: "Nine years of continuous involvement supporting environmental investigation and remediation efforts with multiple drilling technologies.",
        image: "/images/projects/princeton-jct-banner.webp"
    },
    {
        slug: "princeton",
        title: "Sonic Drilling on Collegiate Athletic Field",
        location: "Princeton, NJ",
        description: "High-resolution subsurface investigation on Princeton University's baseball field using Terra Sonic technology with zero impact to artificial turf.",
        image: "/images/projects/princeton-banner.webp"
    },
    {
        slug: "raleigh",
        title: "Multi-Depth Monitoring Well Installation",
        location: "Raleigh, NC",
        description: "Installation of 10 monitoring wells to depths up to 170 feet, completed 7 days ahead of schedule with multi-crew coordination.",
        image: "/images/projects/raleigh-banner.webp"
    },
    {
        slug: "roselle",
        title: "Shallow Bedrock Well Installation",
        location: "Roselle, NJ",
        description: "Precision drilling in a space-restricted urban environment with installation of three shallow bedrock monitoring wells.",
        image: "/images/projects/roselle-banner.webp"
    },
    {
        slug: "spartanburg-cap",
        title: "Engineering Cap Repair & Streambank Stabilization",
        location: "Spartanburg, SC",
        description: "Restoration of 200 linear feet of storm-damaged streambank and multi-layer engineered cap system in dense woodland.",
        image: "/images/projects/spartanburg-cap-banner.webp"
    },
    {
        slug: "spartanburg-sonic",
        title: "Deep Vertical Aquifer Profile (VAP) Investigation",
        location: "Spartanburg, SC",
        description: "Deep roto-sonic drilling to 300 feet with high-resolution vertical profiling of VOCs in groundwater at 6 VAP locations.",
        image: "/images/projects/spartanburg-sonic-banner.webp"
    }
];

export default function ProjectGalleryPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section using PageHeroBanner */}
                <PageHeroBanner
                    backgroundImage="/images/projects/gallery-banner.webp"
                    backgroundAlt="Airport Earth Work Project"
                    ribbonText="FEATURED PROJECT"
                    title="Airport Earth Work"
                    description="This active North Carolina project required a team that could work safely around a critical transportation facility. But that's not all!"
                    dividerColor="#377d7e"
                />

                {/* Project Gallery Grid Section */}
                <section
                    className="py-20 bg-[#377d7e] text-white bg-no-repeat bg-cover bg-blend-multiply"
                    style={{
                        backgroundImage: "url('/images/drilling-types-bg.webp')",
                        backgroundPosition: "bottom center"
                    }}
                >
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Project Gallery</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {projects.map((project) => (
                                <Link
                                    key={project.slug}
                                    href={`/project-gallery/${project.slug}`}
                                    className="flex flex-col group cursor-pointer"
                                >
                                    {/* Image Card */}
                                    <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold leading-tight group-hover:text-sky-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-200 italic">{project.location}</p>
                                        <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                            {project.description}
                                        </p>
                                        <span className="inline-block bg-[#377d7e] group-hover:bg-sky-500 text-white font-bold px-6 py-2 text-sm shadow-md mt-2 w-fit rounded transition-colors">
                                            Read the Full Story &gt;&gt;
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Request Form Section */}
                <DrillingRequestForm />
            </main>
            <Footer />
        </>
    );
}
