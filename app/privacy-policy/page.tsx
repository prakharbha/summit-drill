import { Metadata } from "next";
import { getPageBySlug } from "@/lib/sanity-queries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug("privacy-policy");

    if (!page) {
        return {
            title: "Privacy Policy | Summit Drilling",
            description: "Your privacy is important to us",
        };
    }

    return {
        title: page.metaTitle || page.title,
        description: page.metaDescription || page.heroDescription,
    };
}

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/drilling/hero-banner.webp"
                    ribbonText="Legal"
                    title="Privacy Policy"
                    description="Your privacy is important to us"
                    showMountainLogo={true}
                    dividerColor="#a4c5c5"
                />

                <section className="py-16 bg-[#a4c5c5]">
                    <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-[#1A365D]">
                            <p className="text-sm text-gray-500 mb-8">Last Updated: December 2024</p>

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Summit Drilling, LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of information:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and address when you submit forms on our website.</li>
                                        <li><strong>Project Information:</strong> Details about your drilling, geophysics, or remediation project needs.</li>
                                        <li><strong>Technical Data:</strong> IP address, browser type, device information, and browsing patterns through cookies and similar technologies.</li>
                                        <li><strong>Communication Data:</strong> Records of correspondence when you contact us.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">We use your information for the following purposes:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>To respond to your inquiries and provide requested services</li>
                                        <li>To send you project proposals and quotes</li>
                                        <li>To improve our website and services</li>
                                        <li>To send you our newsletter (with your consent)</li>
                                        <li>To comply with legal obligations</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">Cookies and Analytics</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from.
                                    </p>
                                    <h3 className="text-xl font-semibold mb-2">Google Analytics</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        We use Google Analytics 4 (GA4) to understand how visitors interact with our website. This service is only activated after you provide consent through our cookie banner. When enabled, GA4 may collect:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                                        <li>Pages visited and time spent on each page</li>
                                        <li>Referring website or source</li>
                                        <li>Browser and device information</li>
                                        <li>Approximate geographic location (anonymized IP)</li>
                                    </ul>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        You can opt out of analytics tracking by declining cookies when prompted, or by adjusting your browser settings.
                                    </p>
                                    <h3 className="text-xl font-semibold mb-2">Cloudflare Turnstile</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our forms are protected by Cloudflare Turnstile, a privacy-preserving CAPTCHA alternative. Turnstile does not use cookies and does not collect personal information for advertising purposes. It may process the following data to verify you are not a bot: IP address, browser information, and interaction patterns. For more information, see <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-[#377d7e] hover:underline">Cloudflare&apos;s Privacy Policy</a>.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        We do not sell your personal information. We may share your data with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Access to your personal data</li>
                                        <li>Correction of inaccurate data</li>
                                        <li>Deletion of your data</li>
                                        <li>Objection to processing</li>
                                        <li>Data portability</li>
                                        <li>Withdrawal of consent</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        If you have any questions about this Privacy Policy, please contact us at:
                                    </p>
                                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                        <p className="font-bold">Summit Drilling, LLC</p>
                                        <p>745 Bound Brook Road</p>
                                        <p>Bridgewater, NJ 08807</p>
                                        <p className="mt-2">Phone: <a href="tel:+18002426648" className="text-[#377d7e] hover:underline">800-242-6648</a></p>
                                        <p>Email: <a href="mailto:Sales@SummitDrilling.com" className="text-[#377d7e] hover:underline">Sales@SummitDrilling.com</a></p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
