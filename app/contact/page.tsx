"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/careers-image.webp"
              alt="Summit Drilling Team"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Blue Gradient Overlay (Top and Bottom) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#004990]/90 via-transparent to-[#004990]/90 mix-blend-multiply opacity-80" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 z-10 relative mt-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl text-white text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#7A9A70] px-6 py-2 mb-8 rounded-sm">
                <svg width="30" height="15" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 0L24 12H0L12 0Z" fill="currentColor" />
                </svg>
                <span className="text-base font-bold tracking-[0.2em] uppercase text-[#B5D48C]">Contact</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                We’re here to help.<br />Let’s connect.
              </h1>
            </motion.div>
          </div>

          {/* Bottom Green Shape Hint (Optional, matching other pages if needed, but not explicitly requested for this one. 
               Adding it for consistency with the "jagged" theme if appropriate, but keeping it subtle or omitting if not in design. 
               The user didn't explicitly ask for the bottom shape here, but the form has it. 
               I'll leave the hero bottom clean for now to let the form's top padding/shape take over if needed, 
               or just let the form overlap.) 
           */}
        </section>

        {/* Keep In Touch Section */}
        <section className="py-20 bg-[#B5D48C] text-[#1A365D]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep In Touch</h2>
            <p className="text-xl font-medium max-w-3xl mb-8">
              A lot is happening at Summit, follow us on social media, contact one of our experts below, or complete the form so we can learn more about your needs.
            </p>
            <div className="flex gap-4">
              {/* Social Icons (Placeholders/Lucide) */}
              <a href="#" className="bg-[#5e745d] p-3 rounded-sm hover:bg-[#4a5c49] transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="bg-[#5e745d] p-3 rounded-sm hover:bg-[#4a5c49] transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="bg-[#5e745d] p-3 rounded-sm hover:bg-[#4a5c49] transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Team List Section */}
        <section className="py-20 bg-[#B5D48C] text-[#1A365D]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Operations */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Operations</h3>
                <div className="space-y-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0 border-4 border-[#5e745d]">
                        <Image src="/images/drilling-hero.jpg" alt="Joel Bernstein" width={96} height={96} className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Joel Bernstein</h4>
                        <p className="font-medium">Senior Vice President</p>
                        <a href="mailto:JBernstein@summitdrilling.com" className="block text-[#1A365D] hover:underline">JBernstein@summitdrilling.com</a>
                        <p className="font-bold">(777) 333-4444</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (Health & Safety, Finance, Corporate) */}
              <div className="space-y-16">
                <div>
                  <h3 className="text-3xl font-bold mb-8">Health & Safety</h3>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0 border-4 border-[#5e745d]">
                      <Image src="/images/drilling-hero.jpg" alt="Joel Bernstein" width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Joel Bernstein</h4>
                      <p className="font-medium">Senior Vice President</p>
                      <a href="mailto:JBernstein@summitdrilling.com" className="block text-[#1A365D] hover:underline">JBernstein@summitdrilling.com</a>
                      <p className="font-bold">(777) 333-4444</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-8">Finance & Administration</h3>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0 border-4 border-[#5e745d]">
                      <Image src="/images/drilling-hero.jpg" alt="Joel Bernstein" width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Joel Bernstein</h4>
                      <p className="font-medium">Senior Vice President</p>
                      <a href="mailto:JBernstein@summitdrilling.com" className="block text-[#1A365D] hover:underline">JBernstein@summitdrilling.com</a>
                      <p className="font-bold">(777) 333-4444</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-8">Corporate</h3>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0 border-4 border-[#5e745d]">
                      <Image src="/images/drilling-hero.jpg" alt="Joel Bernstein" width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Joel Bernstein</h4>
                      <p className="font-medium">Senior Vice President</p>
                      <a href="mailto:JBernstein@summitdrilling.com" className="block text-[#1A365D] hover:underline">JBernstein@summitdrilling.com</a>
                      <p className="font-bold">(777) 333-4444</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Development (Full Width or separate) */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8">Business Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0 border-4 border-[#5e745d]">
                      <Image src="/images/drilling-hero.jpg" alt="Joel Bernstein" width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Joel Bernstein</h4>
                      <p className="font-medium">Senior Vice President</p>
                      <a href="mailto:JBernstein@summitdrilling.com" className="block text-[#1A365D] hover:underline">JBernstein@summitdrilling.com</a>
                      <p className="font-bold">(777) 333-4444</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Headquarters Section */}
        <section
          className="py-20 bg-[#1A365D] text-white relative z-20 pb-32"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 100px), 35% 100%, 0 calc(100% - 100px))"
          }}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Summit (Headquarters)</h2>
                <p className="text-xl md:text-2xl mb-6">
                  81 Chimney Rock Road, Bridgewater, NJ 08807
                </p>
                <div className="space-y-2 text-xl font-bold">
                  <p>Phone: 800-242-6648</p>
                  <p>Fax: 732-356-1009</p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-xl border-4 border-white/20 lg:col-span-2">
                <iframe
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=81+Chimney+Rock+Road,+Bridgewater,+NJ+08807&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

