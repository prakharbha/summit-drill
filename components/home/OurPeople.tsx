"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const OurPeople = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: "Ben Shaffer",
      role: "Director of Health & Safety",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    {
      name: "Michael Chen",
      role: "Senior Geophysicist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Project Coordinator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
    {
      name: "David Thompson",
      role: "Drilling Supervisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + teamMembers.length) % teamMembers.length;
      visible.push({ ...teamMembers[index], position: i });
    }
    return visible;
  };

  return (
    <section className="py-8 bg-green-800 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            We Are Responsible for Your Experience
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="relative h-80 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="sync">
              {getVisibleMembers().map((member, idx) => (
                <motion.div
                  key={`${member.name}-${idx}`}
                  initial={{ opacity: 0, scale: 0.8, x: member.position * 300 }}
                  animate={{
                    opacity: member.position === 0 ? 1 : 0.4,
                    scale: member.position === 0 ? 1 : 0.7,
                    x: member.position * 250,
                    zIndex: member.position === 0 ? 10 : 5 - Math.abs(member.position),
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  <div className="bg-white rounded-lg shadow-xl p-6 w-64 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-20"
            aria-label="Previous"
          >
            <HiChevronLeft className="w-6 h-6 text-green-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-20"
            aria-label="Next"
          >
            <HiChevronRight className="w-6 h-6 text-green-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;

