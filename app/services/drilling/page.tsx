"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

export default function DrillingPage() {
  const services = [
    {
      title: "Sonic Drilling",
      description: "Advanced sonic technology for superior sample quality and speed in difficult formations. Ideal for environmental and geotechnical projects requiring continuous core samples.",
      features: ["Continuous core sampling", "Reduced waste generation", "Superior penetration rates", "Minimal deviation"]
    },
    {
      title: "Direct Push",
      description: "Efficient and minimally invasive probing for soil and groundwater sampling. Perfect for site investigations and initial characterization.",
      features: ["High-resolution sampling", "Minimal site disturbance", "Cost-effective", "Rapid data collection"]
    },
    {
      title: "Auger Drilling",
      description: "Traditional hollow-stem and solid-stem auger drilling for reliable soil sampling and well installation in unconsolidated formations.",
      features: ["Standard penetration testing", "Monitoring well installation", "Soil sampling", "Geotechnical investigation"]
    },
    {
      title: "Air Rotary",
      description: "Powerful pneumatic drilling for hard rock formations and deep borehole requirements. efficient cuttings removal and rapid penetration.",
      features: ["Hard rock penetration", "Deep borehole capability", "Water well drilling", "Geothermal installation"]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/drilling-hero.jpg"
              alt="Summit Drilling Rig Operation"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 z-10 relative mt-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-white/30 bg-black/30 backdrop-blur-sm px-4 py-1.5 mb-6 rounded-sm">
                {/* Mountain Icon (Simple SVG representation) */}
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 0L24 12H0L12 0Z" fill="currentColor" />
                </svg>
                <span className="text-sm font-bold tracking-widest uppercase">Summit Services</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                Drilling
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl drop-shadow-md">
                In an industry where geology, risk and timelines intersect, seasoned insight becomes the most valuable piece of equipment on site
              </p>
            </motion.div>
          </div>
        </section>

        {/* Specialty Applications Section */}
        <section className="py-20 bg-[#B5D48C]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Text Content */}
              <div className="space-y-6 text-gray-900">
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-[#1A365D]">
                  You may think that drilling experience going back to the late 1950s has little relevance now. To a degree, there is some truth to that. Technology, applications, processes, have all advanced.
                </p>

                <p className="text-lg font-bold text-[#1A365D]">
                  One thing however that nearly 6 decades of drilling does provide is crystalized knowledge. Knowing what geology is below the surface and drilling in it, from Maine to Florida, can be of great value.
                </p>

                <p className="text-lg leading-relaxed">
                  The knowledge transfer that has passed through the generations, across thousands of job sites, has manifested into an AI-like source for countless environmental consultants and geotechnical engineers.
                </p>

                <p className="text-lg leading-relaxed">
                  Summit is counted on for insights in approach development, rig technology requirements, sampling timeframes and safety parameters associated with specific locations and regions up and down the eastern U.S.
                </p>

                <p className="text-lg leading-relaxed">
                  Today, Summit's drilling technology is one of the most comprehensive. From multiple drilling technologies to expertise in dealing with emerging contaminants, they are a "Go To" source for large and complex projects.
                </p>

                <p className="text-lg font-bold text-[#1A365D]">
                  The more critical the scope of work, the more valuable Summit is to its customers.
                </p>

                <div className="pt-4">
                  <Button asChild className="bg-[#A04020] hover:bg-[#8a361b] text-white font-bold text-lg px-8 py-6 rounded shadow-lg transition-transform hover:scale-105">
                    <Link href="/contact">
                      Submit a Proposal Online &gt;&gt;
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Specialty Applications Card */}
              <div className="bg-[#94B568] p-8 md:p-12 rounded-lg shadow-xl">
                <div className="text-center mb-8">
                  {/* Icon Placeholder - using Lucide icon as substitute for the custom graphic */}
                  <div className="flex justify-center mb-4">
                    <div className="text-[#C05030]">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M2 12h20M12 2l4 4M12 2l-4 4M12 22l4-4M12 22l-4-4M2 12l4-4M2 12l4 4M22 12l-4-4M22 12l-4 4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#C05030] tracking-widest uppercase">
                    Specialty<br />Applications
                  </h3>
                  <div className="w-full h-1 bg-[#C05030] mt-4 mx-auto max-w-[200px]"></div>
                </div>

                <ul className="space-y-4 text-[#1A365D] text-lg font-medium">
                  {[
                    "Over water barge drilling",
                    "Horizontal drilling",
                    "Drilling & In-Situ injection",
                    "Low clearance",
                    "Remote access",
                    "Well decommissioning",
                    "Geotechnical Investigations",
                    "Cathodic systems services",
                    "Dewatering services"
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-3 text-[#1A365D]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Drilling Technologies Section */}
        <section className="py-20 bg-[#5e745d] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
              Summit&apos;s complete range of drilling technologies:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {[
                {
                  title: "Sonic Drilling",
                  image: "/images/drilling.jpg", // Placeholder
                  subtitle: "Sonic Drilling—The difference is our operators!",
                  description: "Having a Sonic Rig and using it effectively in the field are 2 very different things. At Summit, our Sonic drillers have logged thousands of hours handling these sophisticated rigs and operate them like a fine instrument."
                },
                {
                  title: "Direct Push",
                  image: "/images/drilling-hero.jpg", // Placeholder
                  subtitle: "Direct Push—Fast, Efficient & Exceptionally Precise!",
                  description: "There are no drilling technologies better suited to collect high-quality soil, groundwater, and soil-gas data quickly. Summit offers a large number of Probes with specialty tooling that will help you accelerate site characterization and remediation planning."
                },
                {
                  title: "Auger Drilling",
                  image: "/images/drilling.jpg", // Placeholder
                  subtitle: "Hollow Stem Auger Drilling (HSA)—Go deeper in unconsolidated soils!",
                  description: "Need stable, cased boreholes? How about track-mounted rigs for difficult to access locations? Summit's HSA rigs are diverse, dependable and a highly effective method for environmental and geotechnical investigations."
                },
                {
                  title: "Air Rotary",
                  image: "/images/drilling-hero.jpg", // Placeholder
                  subtitle: "Air Rotary Drilling—Speed, Depth and clarity of geological formations!",
                  description: "Summit's air rotary rigs and talented operators are unequaled for deep borings and bedrock investigations requiring high-productivity drilling. Need to penetrate hard rock?"
                }
              ].map((tech) => (
                <div key={tech.title} className="flex flex-col">
                  {/* Ribbon Title */}
                  <div className="relative mb-4 self-start">
                    <div className="bg-[#7A9A70] text-white font-bold text-xl px-6 py-2 relative z-10 border border-white/30 shadow-md transform -skew-x-12 ml-4">
                      <span className="block transform skew-x-12">{tech.title}</span>
                    </div>
                    {/* Ribbon Tail Effect (Simulated) */}
                    <div className="absolute top-2 left-0 h-full w-4 bg-[#5e745d] transform -skew-x-12 border-l border-white/30"></div>
                  </div>

                  {/* Image Card */}
                  <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg">
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight">
                      {tech.subtitle}
                    </h3>
                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                      {tech.description}
                    </p>
                    <Button asChild size="sm" className="bg-[#7A9A70] hover:bg-[#6b8a61] text-white font-bold px-6 shadow-md mt-2">
                      <Link href="/contact">
                        More &gt;&gt;
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Lauren DiVello Contact Footer */}
            <div className="mt-24 pt-12 border-t border-white/10 text-center md:text-left">
              <div className="max-w-4xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Summit&apos;s Lauren DiVello is a dedicated and experienced customer advocate.
                </h3>
                <p className="text-xl md:text-2xl font-bold">
                  Reach Lauren at <span className="text-[#A5D48C]">609-238-2815</span> to discuss your project needs. Or email{' '}
                  <a href="mailto:LDivello@SummitDrilling.com" className="text-[#A5D48C] underline hover:text-white transition-colors">
                    LDivello@SummitDrilling.com
                  </a>{' '}
                  and she will reply promptly.
                </p>
              </div>
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
