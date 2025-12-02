"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Geophysics",
      description: "GPR: Utility, UST & Septic Location/Detection, Downhole Geophysics, Electrical Resistivity, Seismic Refraction",
      href: "/services/geophysics",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    },
    {
      title: "Drilling",
      description: "Sonic, Direct Push, Auger, Air Rotary drilling services for environmental and geotechnical applications",
      href: "/services/drilling",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    },
    {
      title: "Remediation",
      description: "Systems Installation, Earth Work, Soil Mixing, Civil/Industrial remediation solutions",
      href: "/services/remediation",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three service banners showcasing our expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.href}>
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group">
                  <div
                    className="h-64 bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title} &gt;
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

