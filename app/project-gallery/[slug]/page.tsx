import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs, getProjectImageUrl, SanityProject } from "@/lib/sanity-queries";
import { PortableText } from "@/components/sanity/PortableText";

// Generate static params for all projects
export async function generateStaticParams() {
    const slugs = await getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const project = await getProjectBySlug(resolvedParams.slug);

    if (!project) {
        return {
            title: "Project Not Found - Summit Drilling",
        };
    }

    return {
        title: project.metaTitle || `${project.title} - Summit Drilling Projects`,
        description: project.metaDescription || project.excerpt,
    };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const project = await getProjectBySlug(resolvedParams.slug);

    if (!project) {
        notFound();
    }

    const imageUrl = getProjectImageUrl(project);

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage={imageUrl}
                    backgroundAlt={project.title}
                    ribbonText={project.ribbonText || "FEATURED PROJECT"}
                    title={project.title}
                />

                <section className="py-16 bg-[#a4c5c5]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Sidebar - Project Details */}
                            <div className="lg:col-span-1">
                                <div className="bg-[#78a8a8] p-8 rounded-lg shadow-xl">
                                    <div className="text-center mb-6">
                                        <div className="flex justify-center mb-4">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src="/images/projects/project-sidebar-icon.webp"
                                                    alt="Project Details"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#2a1109] tracking-widest uppercase">
                                            Project Details
                                        </h2>
                                        <div className="w-full h-1 bg-[#2a1109] mt-4 mx-auto max-w-[200px]"></div>
                                    </div>

                                    {project.sidebarDetails && project.sidebarDetails.length > 0 && (
                                        <dl className="space-y-4 text-[#1A365D]">
                                            {project.sidebarDetails.map((detail) => (
                                                <div key={detail._key}>
                                                    <dt className="font-bold text-xl italic">{detail.label}:</dt>
                                                    <dd className="text-lg">{detail.value}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    )}
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                {project.overview && project.overview.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                            Project Overview:
                                        </h2>
                                        <div className="text-gray-700 leading-relaxed text-lg">
                                            <PortableText value={project.overview} />
                                        </div>
                                    </div>
                                )}

                                {project.challenge && project.challenge.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                            Challenge/Conditions:
                                        </h2>
                                        <div className="text-gray-700 leading-relaxed text-lg">
                                            <PortableText value={project.challenge} />
                                        </div>
                                    </div>
                                )}

                                {project.services && project.services.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                            Services Provided:
                                        </h2>
                                        <div className="text-gray-700 leading-relaxed text-lg">
                                            <PortableText value={project.services} />
                                        </div>
                                    </div>
                                )}

                                {project.solutions && project.solutions.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                            Solutions/Approach:
                                        </h2>
                                        <div className="text-gray-700 leading-relaxed text-lg">
                                            <PortableText value={project.solutions} />
                                        </div>
                                    </div>
                                )}

                                {project.outcome && project.outcome.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                            Outcome/Results:
                                        </h2>
                                        <div className="text-gray-700 leading-relaxed text-lg">
                                            <PortableText value={project.outcome} />
                                        </div>
                                    </div>
                                )}

                                <div className="pt-4">
                                    <Link
                                        href="/project-gallery"
                                        className="inline-block bg-[#377d7e] hover:bg-sky-500 text-white font-bold italic text-sm px-6 py-2 rounded-sm shadow-md transition-colors"
                                    >
                                        Back to Gallery &gt;&gt;
                                    </Link>
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
