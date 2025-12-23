"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiChevronLeft, HiChevronRight, HiArrowRight } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";

const CompanyNews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const newsItems = [
    {
      title: "Summit Welcomes SAEDACCO to the Team",
      excerpt: "Summit Drilling is proud to announce the acquisition of SAEDACCO, a leading provider of drilling and remediation services.",
      image: "/images/news-thumb-1.jpg",
      date: "October 24, 2024",
      category: "Acquisition",
      link: "/news",
    },
    {
      title: "Joseph C. Negro joins Summit to Lead the Expansion of Remediation Services Division",
      excerpt: "Industry veteran Joseph C. Negro has joined Summit Drilling to spearhead the growth of our remediation services across the East Coast.",
      image: "/images/news-thumb-2.jpg",
      date: "September 15, 2024",
      category: "Leadership",
      link: "/news",
    },
    {
      title: "Summit Doubles Down on Its Commitment to H&S with HIGHWIRE GOLD SAFETY Awards",
      excerpt: "We are honored to receive the Highwire Gold Safety Award, recognizing our unwavering commitment to safety excellence.",
      image: "/images/news-thumb-3.jpg",
      date: "August 10, 2024",
      category: "Awards",
      link: "/news",
    },
    {
      title: "Expanding Our Fleet with New Sonic Rigs",
      excerpt: "To better serve our clients, we've added two new state-of-the-art sonic rigs to our fleet, enhancing our drilling capabilities.",
      image: "/images/news-thumb-1.jpg",
      date: "July 05, 2024",
      category: "Equipment",
      link: "/news",
    },
  ];

  return (
    <section
      className="relative py-24 md:py-32 bg-[#0f2b4c] text-white z-20"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 100px), 35% 100%, 0 calc(100% - 100px))",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Company News</h2>
          <p className="text-lg md:text-xl text-sky-100/80 mb-8 leading-relaxed">
            Stay updated with the latest news, projects, and achievements from Summit Drilling.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white transition-colors uppercase font-bold tracking-wide"
          >
            <a
              href="https://www.linkedin.com/company/summit-drilling/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaLinkedinIn className="w-4 h-4" />
              Follow Us on LinkedIn
            </a>
          </Button>
        </div>

        {/* News Carousel */}
        <div className="relative px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {newsItems.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0">
                  <div className="bg-[#163a63] rounded-sm overflow-hidden h-full group hover:shadow-xl transition-shadow duration-300 border border-white/5">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sky-300 text-sm font-semibold mb-3">{item.date}</div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sky-100/70 text-sm line-clamp-3 mb-6">
                        {item.excerpt}
                      </p>
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-sky-400 font-bold uppercase text-sm hover:text-white transition-colors gap-2"
                      >
                        Read article: {item.title} <HiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 text-white transition-colors backdrop-blur-sm"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 text-white transition-colors backdrop-blur-sm"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyNews;
