import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  hasDividerAbove?: boolean;
}

const Footer = ({ hasDividerAbove = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[#0065a5] text-white relative overflow-hidden z-10 ${hasDividerAbove ? '-mt-[100px] pt-[100px]' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8 relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/images/summit-logo-update.webp"
              alt="Summit Drilling, LLC"
              width={400}
              height={125}
              className="h-32 w-auto"
              sizes="(max-width: 768px) 80vw, 400px"
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* Contact Info Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-semibold italic mb-8">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=81+Chimney+Rock+Road,+Bridgewater,+NJ+08807"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition-colors"
          >
            81 Chimney Rock Road, Bridgewater, NJ 08807
          </a>
          <a href="mailto:Sales@SummitDrilling.com" className="hover:text-sky-300 transition-colors">
            Sales@SummitDrilling.com
          </a>
          <Link href="/locations" className="hover:text-sky-300 transition-colors">
            Locations
          </Link>
          <a href="tel:+18002426648" className="hover:text-sky-300 transition-colors">
            800-242-6648
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-sky-200/80 italic">
          <p>©{currentYear} Summit Drilling, LLC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

