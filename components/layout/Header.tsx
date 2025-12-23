"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface MenuItem {
  name: string;
  href: string;
  children?: MenuItem[];
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesItems: MenuItem[] = [
    {
      name: "Geophysics",
      href: "/services/geophysical-services",
      children: [
        { name: "Utility Locating", href: "/services/utility-locating" },
        { name: "UST & Septic Detection", href: "/services/ust-septic-detection" },
        { name: "Borehole Geophysics", href: "/services/borehole-geophysics" },
        { name: "Electrical Resistivity", href: "/services/electrical-resistivity" },
        { name: "Seismic Refraction", href: "/services/seismic-refraction" },
      ]
    },
    {
      name: "Drilling",
      href: "/services/drilling-techniques",
      children: [
        { name: "Sonic Drilling", href: "/services/sonic-drilling" },
        { name: "Direct Push", href: "/services/direct-push" },
        { name: "Auger Drilling", href: "/services/auger-drilling" },
        { name: "Air Rotary", href: "/services/air-rotary-drilling" },
        { name: "Drilling & Injection", href: "/services/injection-remediation-services" },
      ]
    },
    {
      name: "Remediation",
      href: "/services/remediation-services",
      children: [
        { name: "Remediation Systems", href: "/services/remediation-systems" },
        { name: "In-Situ Remediation", href: "/services/in-situ-remediation" },
        { name: "Injection Remediation", href: "/services/injection-remediation" },
        { name: "Barrier Walls", href: "/services/barrier-walls" },
        { name: "Earthwork", href: "/services/earthwork-remediation" },
        { name: "Drilling Support", href: "/services/drilling-support" },
      ]
    },
  ];

  const industriesItems: MenuItem[] = [
    { name: "Environmental", href: "/industries/environmental" },
    { name: "Geotechnical", href: "/industries/geotechnical" },
    { name: "Cathodic", href: "/industries/cathodic" },
    { name: "Aggregate", href: "/industries/aggregate" },
  ];

  const navigation = [
    { name: "Services", href: "/services", hasDropdown: true, items: servicesItems },
    { name: "Careers", href: "/careers" },
    { name: "About Us", href: "/about-us" },
    { name: "Health & Safety", href: "/health-safety" },
    { name: "Industries", href: "/industries", hasDropdown: true, items: industriesItems },
    { name: "News", href: "/about-us/news" },
    { name: "Project Gallery", href: "/project-gallery" },
  ];

  return (
    <header className={`${isScrolled ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
      ? 'bg-[#252a54]/80 backdrop-blur-xl'
      : 'bg-transparent'
      }`}>
      <div className="flex flex-col w-full">
        {/* Top Row: Logo & Actions (shown when not scrolled) */}
        {!isScrolled && (
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between relative h-24 pt-4">
            {/* Logo - Centered */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative w-[353px] h-28">
                  <Image
                    src="/images/summit-logo-update.webp"
                    alt="Summit Drilling"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Right: Actions & Socials (Desktop) */}
            <div className="hidden lg:flex items-center justify-end gap-6 w-full">
              <Link href="/resources/start-a-project" className="text-base font-bold italic tracking-wide text-white hover:text-sky-300 drop-shadow-md transition-colors">
                Start-A-Project
              </Link>
              <Link
                href="/contact"
                className="text-base font-bold italic tracking-wide text-white hover:text-sky-300 drop-shadow-md transition-colors"
              >
                Contact
              </Link>

              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/summit-drilling/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300 drop-shadow-md transition-colors" aria-label="Visit Summit Drilling on LinkedIn">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/p/Summit-Drilling-LLC-100083102508611/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300 drop-shadow-md transition-colors" aria-label="Visit Summit Drilling on Facebook">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/summitdrillingllc/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300 drop-shadow-md transition-colors" aria-label="Visit Summit Drilling on Instagram">
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 absolute right-0 text-white hover:text-sky-300 drop-shadow-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiX className="w-8 h-8" />
              ) : (
                <HiMenu className="w-8 h-8" />
              )}
            </button>
          </div>
        )}

        {/* BOTTOM ROW: Navigation (Desktop, not scrolled) */}
        {!isScrolled && (
          <div className="hidden lg:block w-full mt-6">
            <div className="container mx-auto px-4 lg:px-8">
              <nav className="flex items-center justify-center gap-8 h-14">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => {
                      if (item.hasDropdown) {
                        if (item.name === "Services") {
                          setServicesOpen(true);
                          setIndustriesOpen(false);
                        } else if (item.name === "Industries") {
                          setIndustriesOpen(true);
                          setServicesOpen(false);
                        }
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) {
                        setServicesOpen(false);
                        setIndustriesOpen(false);
                      }
                    }}
                  >
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="text-base font-bold italic transition-colors flex items-center gap-1 tracking-wide h-full border-b-2 border-transparent text-white hover:text-sky-300 hover:border-sky-300 drop-shadow-md"
                          onClick={() => {
                            if (item.name === "Services") {
                              setServicesOpen(!servicesOpen);
                              setIndustriesOpen(false);
                            } else if (item.name === "Industries") {
                              setIndustriesOpen(!industriesOpen);
                              setServicesOpen(false);
                            }
                          }}
                        >
                          {item.name}
                          <HiChevronDown className="w-3 h-3" />
                        </button>
                        <AnimatePresence>
                          {(item.name === "Services" && servicesOpen) || (item.name === "Industries" && industriesOpen) ? (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-0 w-64 bg-white/80 backdrop-blur-xl rounded-sm border-t-4 border-[#4d7c55] py-2 z-50"
                            >
                              {item.items?.map((subItem) => (
                                <div key={subItem.name} className="relative group/sub">
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center justify-between px-6 py-3 text-base font-semibold italic text-[#1A365D] hover:bg-[#73a5a5] hover:text-white transition-colors border-b border-gray-200 last:border-0"
                                  >
                                    {subItem.name}
                                    {subItem.children && subItem.children.length > 0 && (
                                      <HiChevronDown className="w-3 h-3 -rotate-90" />
                                    )}
                                  </Link>
                                  {subItem.children && subItem.children.length > 0 && (
                                    <div className="absolute left-full top-0 ml-0 w-56 bg-white/80 backdrop-blur-xl rounded-sm border-l-4 border-[#4d7c55] py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                                      {subItem.children.map((child: { name: string; href: string }) => (
                                        <Link
                                          key={child.name}
                                          href={child.href}
                                          className="block px-6 py-2 text-sm font-semibold italic text-[#1A365D] hover:bg-[#73a5a5] hover:text-white transition-colors border-b border-gray-200 last:border-0"
                                        >
                                          {child.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-base font-bold italic transition-colors tracking-wide h-full flex items-center border-b-2 border-transparent text-white hover:text-sky-300 hover:border-sky-300 drop-shadow-md"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* SCROLLED: Single row with logo left, nav right */}
        {isScrolled && (
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-40 h-10 lg:w-44 lg:h-12">
                <Image
                  src="/images/summit-logo-scrolled.webp"
                  alt="Summit Drilling"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Navigation - Right (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      if (item.name === "Services") {
                        setServicesOpen(true);
                        setIndustriesOpen(false);
                      } else if (item.name === "Industries") {
                        setIndustriesOpen(true);
                        setServicesOpen(false);
                      }
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) {
                      setServicesOpen(false);
                      setIndustriesOpen(false);
                    }
                  }}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="text-base font-bold italic transition-colors flex items-center gap-1 tracking-wide text-white hover:text-sky-300"
                        onClick={() => {
                          if (item.name === "Services") {
                            setServicesOpen(!servicesOpen);
                            setIndustriesOpen(false);
                          } else if (item.name === "Industries") {
                            setIndustriesOpen(!industriesOpen);
                            setServicesOpen(false);
                          }
                        }}
                      >
                        {item.name}
                        <HiChevronDown className="w-3 h-3" />
                      </button>
                      <AnimatePresence>
                        {(item.name === "Services" && servicesOpen) || (item.name === "Industries" && industriesOpen) ? (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-0 w-64 bg-white/90 backdrop-blur-xl rounded-sm border-t-4 border-[#4d7c55] py-2 z-50"
                          >
                            {item.items?.map((subItem) => (
                              <div key={subItem.name} className="relative group/sub">
                                <Link
                                  href={subItem.href}
                                  className="flex items-center justify-between px-6 py-3 text-base font-semibold italic text-[#1A365D] hover:bg-[#73a5a5] hover:text-white transition-colors border-b border-gray-200 last:border-0"
                                >
                                  {subItem.name}
                                  {subItem.children && subItem.children.length > 0 && (
                                    <HiChevronDown className="w-3 h-3 -rotate-90" />
                                  )}
                                </Link>
                                {subItem.children && subItem.children.length > 0 && (
                                  <div className="absolute left-full top-0 ml-0 w-56 bg-white/90 backdrop-blur-xl rounded-sm border-l-4 border-[#4d7c55] py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                                    {subItem.children.map((child: { name: string; href: string }) => (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        className="block px-6 py-2 text-sm font-semibold italic text-[#1A365D] hover:bg-[#73a5a5] hover:text-white transition-colors border-b border-gray-200 last:border-0"
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-base font-bold italic transition-colors tracking-wide text-white hover:text-sky-300"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:text-sky-300 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiX className="w-8 h-8" />
              ) : (
                <HiMenu className="w-8 h-8" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#252a54]/95 backdrop-blur-xl overflow-y-auto overflow-x-hidden"
          >
            {/* Mobile Header with Close Button */}
            <div className="bg-[#252a54] w-full">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="relative w-48 h-12">
                  <Image
                    src="/images/summit-logo-update.webp"
                    alt="Summit Drilling"
                    fill
                    className="object-contain"
                  />
                </Link>
                <button
                  className="p-2 text-white hover:text-sky-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX className="w-8 h-8" />
                </button>
              </div>
            </div>

            <div className="container mx-auto px-4 py-6">

              <div className="flex flex-col gap-4 mb-6">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white uppercase font-bold">
                  <Link href="/resources/start-a-project" onClick={() => setMobileMenuOpen(false)}>Start a Project</Link>
                </Button>
                <Link
                  href="/contact"
                  className="text-center text-sm font-bold text-white uppercase tracking-wide py-2 border border-white/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>

              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between text-sm font-bold text-white hover:text-sky-300 transition-colors py-3 border-b border-white/10 uppercase"
                          onClick={() => {
                            if (item.name === "Services") {
                              setMobileServicesOpen(!mobileServicesOpen);
                              setMobileIndustriesOpen(false);
                            } else if (item.name === "Industries") {
                              setMobileIndustriesOpen(!mobileIndustriesOpen);
                              setMobileServicesOpen(false);
                            }
                          }}
                        >
                          {item.name}
                          <HiChevronDown
                            className={`w-4 h-4 transition-transform ${(item.name === "Services" && mobileServicesOpen) ||
                              (item.name === "Industries" && mobileIndustriesOpen)
                              ? "rotate-180"
                              : ""
                              }`}
                          />
                        </button>
                        <AnimatePresence>
                          {((item.name === "Services" && mobileServicesOpen) ||
                            (item.name === "Industries" && mobileIndustriesOpen)) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 overflow-hidden bg-white/10"
                              >
                                {item.items?.map((subItem) => (
                                  <div key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-sm font-bold text-white hover:text-sky-300 transition-colors py-3 border-b border-white/10"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileServicesOpen(false);
                                        setMobileIndustriesOpen(false);
                                      }}
                                    >
                                      {subItem.name}
                                    </Link>
                                    {subItem.children && subItem.children.length > 0 && (
                                      <div className="pl-4 bg-white/5">
                                        {subItem.children.map((child) => (
                                          <Link
                                            key={child.name}
                                            href={child.href}
                                            className="block text-sm font-medium text-white/70 hover:text-sky-300 transition-colors py-2 border-b border-white/5 last:border-0"
                                            onClick={() => {
                                              setMobileMenuOpen(false);
                                              setMobileServicesOpen(false);
                                              setMobileIndustriesOpen(false);
                                            }}
                                          >
                                            — {child.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-bold text-white hover:text-sky-300 transition-colors py-3 block border-b border-white/10 uppercase"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Social Icons */}
                <div className="flex items-center gap-8 mt-6 pt-6 border-t border-white/20 justify-center">
                  <a href="https://www.linkedin.com/company/summit-drilling/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-sky-300 transition-colors" aria-label="Visit Summit Drilling on LinkedIn">
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/p/Summit-Drilling-LLC-100083102508611/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-sky-300 transition-colors" aria-label="Visit Summit Drilling on Facebook">
                    <FaFacebookF className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/summitdrillingllc/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-sky-300 transition-colors" aria-label="Visit Summit Drilling on Instagram">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header >
  );
};

export default Header;
