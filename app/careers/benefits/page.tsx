import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import Link from "next/link";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/careers/benefits");

export default function BenefitsPage() {
    return (
        <>
            <Header />
            <main className="font-sans">
                {/* HERO SECTION */}
                <PageHeroBanner
                    backgroundImage="/images/careers/benefits.webp"
                    backgroundAlt="Summit Team Awards"
                    ribbonText="Benefits"
                    title="Join an Industry Leader"
                    description="Become part of a culture dedicated to providing you with an opportunity to an exceptional career"
                    dividerColor="#a4c5c5"
                />

                {/* Main Content Section */}
                <section className="bg-[#a4c5c5] py-16 -mt-1">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl">
                            <div className="space-y-6 text-lg text-[#1A365D] leading-relaxed font-medium">
                                <p>
                                    At Summit, people are more than their job titles, they're valued members of a close-knit team that looks out for one another. New team members quickly discover a culture built on respect, collaboration, and genuine support. That's why so many of us reach anniversary milestones.
                                </p>
                                <p>
                                    Summit is a growing industry leader offering competitive compensation, a 401(K)-retirement plan, including a generous employer match, healthcare benefits, including dental and vision, a values-based and team-oriented work culture, skills and training development.
                                </p>
                                <p className="font-bold text-xl">
                                    Have questions? Reach out to our Vice President of Human Resources, Philip Valensi at <span className="text-[#913c20]">800-424-6648</span> or email your resume to <a href="mailto:Employment@SummitDrilling.com" className="text-[#913c20] underline hover:text-[#1A365D]">Employment@SummitDrilling.com</a>
                                </p>
                                <div className="pt-4">
                                    <Link
                                        href="/careers/positions"
                                        className="inline-block bg-[#1a365d] hover:bg-[#132845] text-white font-bold italic text-lg px-8 py-4 rounded shadow-lg transition-transform hover:scale-105"
                                    >
                                        Learn more about our current open positions &gt;&gt;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EOE SECTION */}
                <section className="bg-[#1A365D] py-12 text-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold italic mb-6">Equal Opportunity Employer</h2>
                        <p className="text-lg leading-relaxed font-medium text-white/90">
                            As an equal opportunity employer, Summit Drilling is committed to fostering a diverse work environment where our team members respect one another and share a commitment to our company's values, mission, and strategies. Summit Drilling provides equal employment to all team members without regard to race, color, religion, gender, national origin, age, disability, sexual orientation, veteran, or marital status.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
