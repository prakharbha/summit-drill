"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";

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

  const servicesItems = [
    { name: "Geophysics", href: "/services/geophysics-services" },
    { name: "Drilling", href: "/services/drilling-techniques" },
    { name: "— Sonic Drilling", href: "/services/sonic-drilling" },
    { name: "— Direct Push", href: "/services/direct-push" },
    { name: "— Auger Drilling", href: "/services/auger-drilling" },
    { name: "— Air Rotary", href: "/services/air-rotary-drilling" },
    { name: "— Drilling & Injection", href: "/services/injection-remediation-services" },
    { name: "Remediation", href: "/services/remediation-services" },
  ];

  const industriesItems = [
    { name: "Environmental", href: "/industries#environmental" },
    { name: "Geotechnical", href: "/industries#geotechnical" },
    { name: "Cathodic", href: "/industries#cathodic" },
    { name: "Mining/Aggregate", href: "/industries#mining" },
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
      ? 'bg-[#004990] shadow-md'
      : 'bg-transparent'
      }`}>
      <div className="flex flex-col w-full">
        {/* Top Row: Logo & Actions (shown when not scrolled) */}
        {!isScrolled && (
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between relative h-24">
            {/* Logo - Centered */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative w-64 h-20">
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
              <Link href="/resources/start-a-project" className="text-sm font-bold uppercase tracking-wide text-white hover:text-sky-300 drop-shadow-md transition-colors">
                Start-A-Project
              </Link>
              <Link
                href="/contact"
                className="text-sm font-bold uppercase tracking-wide text-white hover:text-sky-300 drop-shadow-md transition-colors"
              >
                Contact
              </Link>

              <div className="flex items-center gap-4 pl-6 border-l border-white/30">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300 drop-shadow-md transition-colors" aria-label="Visit Summit Drilling on LinkedIn">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300 drop-shadow-md transition-colors" aria-label="Visit Summit Drilling on Facebook">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300 drop-shadow-md transition-colors" aria-label="Visit Summit Drilling on Instagram">
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
          <div className="hidden lg:block w-full border-t border-white/10 bg-gradient-to-b from-black/10 to-transparent">
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
                          className="text-sm font-bold transition-colors flex items-center gap-1 uppercase tracking-wide h-full border-b-2 border-transparent text-white hover:text-sky-300 hover:border-sky-300 drop-shadow-md"
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
                              className="absolute top-full left-0 mt-0 w-64 bg-white rounded-sm shadow-xl border-t-4 border-[#4d7c55] py-2 z-50"
                            >
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-6 py-3 text-sm font-semibold text-[#1A365D] hover:bg-[#4d7c55] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-bold transition-colors uppercase tracking-wide h-full flex items-center border-b-2 border-transparent text-white hover:text-sky-300 hover:border-sky-300 drop-shadow-md"
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
                  src="/images/summit-logo-update.webp"
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
                        className="text-sm font-bold transition-colors flex items-center gap-1 uppercase tracking-wide text-white hover:text-sky-300"
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
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-sm shadow-xl border-t-4 border-[#4d7c55] py-2 z-50"
                          >
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-6 py-3 text-sm font-semibold text-[#1A365D] hover:bg-[#4d7c55] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-bold transition-colors uppercase tracking-wide text-white hover:text-sky-300"
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
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            {/* Mobile Header with Close Button */}
            <div className="bg-[#004990] w-full">
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
                  className="text-center text-sm font-bold text-gray-800 uppercase tracking-wide py-2 border border-gray-200"
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
                          className="w-full flex items-center justify-between text-sm font-bold text-gray-800 hover:text-sky-600 transition-colors py-3 border-b border-gray-100 uppercase"
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
                                className="pl-4 overflow-hidden bg-gray-50"
                              >
                                {item.items?.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors py-3 border-b border-gray-100 last:border-0"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileServicesOpen(false);
                                      setMobileIndustriesOpen(false);
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-bold text-gray-800 hover:text-sky-600 transition-colors py-3 block border-b border-gray-100 uppercase"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Social Icons */}
                <div className="flex items-center gap-8 mt-6 pt-6 border-t border-gray-200 justify-center">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-600 transition-colors" aria-label="Visit Summit Drilling on LinkedIn">
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-600 transition-colors" aria-label="Visit Summit Drilling on Facebook">
                    <FaFacebookF className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-600 transition-colors" aria-label="Visit Summit Drilling on Instagram">
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
