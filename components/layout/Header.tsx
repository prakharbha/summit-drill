"use client";

import { useState } from "react";
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

  const servicesItems = [
    { name: "Geophysics", href: "/services/geophysics" },
    { name: "Drilling", href: "/services/drilling" },
    { name: "Remediation", href: "/services/remediation" },
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
    { name: "News", href: "/news" },
    { name: "Project Gallery", href: "/project-gallery" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="flex flex-col w-full">
        {/* Top Row: Logo & Actions */}
        <div className="container mx-auto px-4 lg:px-8 h-24 flex items-center justify-between relative">
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
            <Link href="/start-project" className="text-sm font-bold text-white hover:text-sky-300 uppercase tracking-wide transition-colors drop-shadow-md">
              Start-A-Project
            </Link>
            <Link
              href="/contact"
              className="text-sm font-bold text-white hover:text-sky-300 uppercase tracking-wide transition-colors drop-shadow-md"
            >
              Contact
            </Link>

            <div className="flex items-center gap-4 border-l border-white/30 pl-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300 transition-colors drop-shadow-md">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300 transition-colors drop-shadow-md">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300 transition-colors drop-shadow-md">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-sky-300 drop-shadow-lg absolute right-0"
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

        {/* BOTTOM ROW: Navigation (Desktop) */}
        <div className="hidden lg:block w-full border-t border-white/10 bg-gradient-to-b from-black/10 to-transparent">
          <div className="container mx-auto px-4 lg:px-8">
            <nav className="flex items-center justify-center h-14 gap-8">
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
                        className="text-sm font-bold text-white hover:text-sky-300 transition-colors flex items-center gap-1 drop-shadow-md uppercase tracking-wide h-full border-b-2 border-transparent hover:border-sky-300"
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
                            className="absolute top-full left-0 mt-0 w-64 bg-white/95 backdrop-blur-sm rounded-sm shadow-xl border-t-4 border-green-500 py-2 z-50"
                          >
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-sky-50 hover:text-sky-600 transition-colors border-b border-gray-100 last:border-0"
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
                      className="text-sm font-bold text-white hover:text-sky-300 transition-colors drop-shadow-md uppercase tracking-wide h-full flex items-center border-b-2 border-transparent hover:border-sky-300"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
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
                  <Link href="/start-project" onClick={() => setMobileMenuOpen(false)}>Start a Project</Link>
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
                  <a href="https://linkedin.com" className="text-gray-600 hover:text-sky-600 transition-colors">
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                  <a href="https://facebook.com" className="text-gray-600 hover:text-sky-600 transition-colors">
                    <FaFacebookF className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com" className="text-gray-600 hover:text-sky-600 transition-colors">
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
