import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import Link from "next/link";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/careers/positions");

export default function PositionsPage() {
    const positionsList = [
        "Early Career Apprentice Field Positions",
        "Drilling Positions",
        "Geophysical Services",
        "Remediation Services",
        "Fleet Maintenance & Management",
        "Corporate/Office Administration",
        "Business Development/Sales"
    ];

    return (
        <>
            <Header />
            <main className="font-sans">
                {/* HERO SECTION */}
                <PageHeroBanner
                    backgroundImage="/images/careers/positions.webp"
                    backgroundAlt="Summit Drilling Team"
                    ribbonText="Positions"
                    title="Summit Takes Pride"
                    description="In creating an environment where every individual can learn, grow, and feel part of something larger, a company united by purpose, safety, and shared success"
                    dividerColor="#a4c5c5"
                />

                {/* Main Content Section */}
                <section className="bg-[#a4c5c5] py-16 -mt-1">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl">
                            <div className="space-y-6 text-lg text-[#1A365D] leading-relaxed font-medium">
                                <p>
                                    Whether you're in the field or in the office, you'll find approachable leaders, open communication, and colleagues who are eager to share knowledge and lend a hand.
                                </p>
                                <p>
                                    Summit is a growing industry leader offering competitive compensation, a 401(K)-retirement plan that includes a generous employer match, healthcare benefits, including dental and vision, a values-based and team-oriented work culture, skills and training development.
                                </p>
                                <div>
                                    <p className="font-bold text-xl mb-4">We provide employment opportunities company-wide including:</p>
                                    <ul className="space-y-2 ml-6">
                                        {positionsList.map((position, index) => (
                                            <li key={index} className="flex items-center">
                                                <span className="w-2 h-2 bg-[#913c20] rounded-full mr-3 flex-shrink-0"></span>
                                                {position}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p>
                                    So, whether you're already an experienced licensed professional, a military veteran, or a young person in search of a unique career, Summit offers a proven-effective path to achieve your goals.
                                </p>
                                <p className="font-bold text-xl">
                                    We have immediate opportunities for Licensed Drillers and Driller Assistants.
                                </p>
                                <div className="pt-4">
                                    <Link
                                        href="https://app.hoopshr.com/companies/1323178/jobs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-[#1a365d] hover:bg-[#132845] text-white font-bold italic text-lg px-8 py-4 rounded shadow-lg transition-transform hover:scale-105"
                                    >
                                        SEARCH ALL JOB OPENINGS on HOOPS &gt;&gt;
                                    </Link>
                                </div>
                                <p className="font-bold text-xl pt-4">
                                    Have questions? Reach out to our Vice President of Human Resources, Philip Valensi at <span className="text-[#913c20]">800-242-6648</span> or email your resume to <a href="mailto:Employment@SummitDrilling.com" className="text-[#913c20] underline hover:text-[#1A365D]">Employment@SummitDrilling.com</a>
                                </p>
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
