import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import Link from "next/link";
import CareersSidebar from "@/components/careers/CareersSidebar";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/careers/your-career");

export default function YourCareerPage() {
    return (
        <>
            <Header />
            <main className="font-sans">
                {/* HERO SECTION */}
                <PageHeroBanner
                    backgroundImage="/images/careers/your-career.webp"
                    backgroundAlt="Career Path at Summit"
                    ribbonText="Your Career"
                    title="What Separates Summit Drilling"
                    description="From our competitors and makes us a highly desired place to build a career, is our company culture and the many talented people who sustain it"
                    dividerColor="#a4c5c5"
                />

                {/* Main Content Section */}
                <section className="bg-[#a4c5c5] py-16 -mt-1">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-6 text-lg text-[#1A365D] leading-relaxed font-medium">
                                <p>
                                    Summit always welcomes the best and brightest and we are committed in training and developing the next wave of Summit team members. We welcome talented individuals who are just starting out to people with some work experience from related fields, such as engineering, construction, manufacturing, auto mechanics, farming, as well as military veterans re-entering the workforce.
                                </p>
                                <p>
                                    Our programs are comprehensive and designed to support our people in their advancement. For example, we offer unique internal trainings such as our Driller Apprentice Training Program that includes a comprehensive list of health and safety programs and equipment operating licensure opportunities. Team members can earn CDLs, OSHA Safety Certifications, heavy machinery and drilling licenses – and more. This ensures that our teams are well trained and prepared for successful outcomes and a rewarding career path.
                                </p>
                                <p className="font-bold text-xl">
                                    Have questions? Reach out to our Vice President of Human Resources, Philip Valensi at <span className="text-[#913c20]">800-242-6648</span> or email your resume to <a href="mailto:Employment@SummitDrilling.com" className="text-[#913c20] underline hover:text-[#1A365D]">Employment@SummitDrilling.com</a>
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

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <CareersSidebar currentPage="your-career" />
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
