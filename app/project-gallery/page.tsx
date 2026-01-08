import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { getAllProjects, getProjectImageUrl, getPageBySlug, getPageImageUrl, SanityProject } from "@/lib/sanity-queries";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug("project-gallery");
    if (!page) return {};

    return {
        title: page.metaTitle || page.title,
        description: page.metaDescription || page.heroDescription,
    };
}

export default async function ProjectGalleryPage() {
    const [page, projects] = await Promise.all([
        getPageBySlug("project-gallery"),
        getAllProjects()
    ]);

    if (!page) {
        notFound();
    }

    const heroImage = getPageImageUrl(page);

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
                    description={page.heroDescription}
                    dividerColor={page.dividerColor}
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
                            {projects.map((project: SanityProject) => (
                                <Link
                                    key={project._id}
                                    href={`/project-gallery/${project.slug.current}`}
                                    className="flex flex-col group cursor-pointer"
                                >
                                    {/* Image Card */}
                                    <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                                        <Image
                                            src={getProjectImageUrl(project)}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            unoptimized={getProjectImageUrl(project).includes('cdn.sanity.io')}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold leading-tight group-hover:text-sky-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        {project.location && (
                                            <p className="text-sm text-gray-200 italic">{project.location}</p>
                                        )}
                                        {project.excerpt && (
                                            <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                                {project.excerpt}
                                            </p>
                                        )}
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
