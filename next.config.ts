import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async redirects() {
    return [
      // Start project redirects (existing)
      { source: '/start-project', destination: '/resources/start-a-project', permanent: true },
      { source: '/start-project/:path*', destination: '/resources/start-a-project/:path*', permanent: true },
      { source: '/start-a-project', destination: '/resources/start-a-project', permanent: true },
      { source: '/start-a-project/:path*', destination: '/resources/start-a-project/:path*', permanent: true },

      // Test/Dev pages -> Homepage
      { source: '/ghost-test', destination: '/', permanent: true },
      { source: '/test-proposal-form', destination: '/', permanent: true },
      { source: '/developer-post-update-test-form', destination: '/', permanent: true },
      { source: '/salesforce', destination: '/', permanent: true },

      // Safety pages -> Health & Safety
      { source: '/safety', destination: '/health-safety', permanent: true },
      { source: '/safety/experience-safety', destination: '/health-safety', permanent: true },
      { source: '/safety/health-safety-programs', destination: '/health-safety', permanent: true },
      { source: '/safety/safety-meetings', destination: '/health-safety', permanent: true },

      // Employment/Career pages -> Careers
      { source: '/employment', destination: '/careers', permanent: true },
      { source: '/employee-benefits', destination: '/careers/benefits', permanent: true },
      { source: '/driller-assistants', destination: '/careers', permanent: true },
      { source: '/military-veterans', destination: '/careers', permanent: true },
      { source: '/licensed-drillers', destination: '/careers', permanent: true },

      // Gallery redirect
      { source: '/projects-gallery', destination: '/project-gallery', permanent: true },

      // Location redirect
      { source: '/locations', destination: '/contact#locations', permanent: false },

      // About Us section redirects
      { source: '/about-us/company-history', destination: '/about-us', permanent: true },
      { source: '/about-us/customer-list', destination: '/about-us', permanent: true },
      { source: '/certifications', destination: '/about-us', permanent: true },
      { source: '/expertise-insights', destination: '/about-us', permanent: true },
      { source: '/resources', destination: '/about-us', permanent: true },
      { source: '/resources/permits', destination: '/about-us', permanent: true },
      { source: '/resources/project-mark-out', destination: '/about-us', permanent: true },

      // Service page redirects
      { source: '/services/additional-services', destination: '/services/drilling-techniques', permanent: true },
      { source: '/services/additional-drilling-services', destination: '/services/drilling-techniques', permanent: true },
      { source: '/services/barge-over-water-drilling', destination: '/services/drilling-techniques', permanent: true },
      { source: '/services/sonic-drilling-demo', destination: '/services/sonic-drilling', permanent: true },
      { source: '/services/geotechnical-drilling', destination: '/industries/geotechnical', permanent: true },
      { source: '/services/cathodic-protection-drilling', destination: '/industries/cathodic', permanent: true },
      { source: '/services/aggregate-drilling-services', destination: '/industries/aggregate', permanent: true },
      { source: '/services/environmental-drilling-services', destination: '/industries/environmental', permanent: true },
      { source: '/services/pfas-drilling', destination: '/industries/environmental', permanent: true },
      { source: '/services/remediation-systems-services', destination: '/services/remediation-systems', permanent: true },
      { source: '/services/demolition-services', destination: '/services/remediation-services', permanent: true },
      { source: '/services/landfill-services', destination: '/services/remediation-services', permanent: true },
      { source: '/services/shoreline-stabilization-services', destination: '/services/remediation-services', permanent: true },
      { source: '/services/ust-ast-removal', destination: '/services/remediation-services', permanent: true },
      { source: '/services/soil-excavation-services', destination: '/services/earthwork-remediation', permanent: true },
      { source: '/services/equipment-roster', destination: '/services/drilling-techniques', permanent: true },
    ];
  },
  async rewrites() {
    return [
      // WordPress legacy URL support for email signatures and blasts
      {
        source: '/wp-content/uploads/2025/12/summit-logo-update.webp',
        destination: '/images/summit-logo-update.webp',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
};

export default nextConfig;

