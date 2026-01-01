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

      // ============================================
      // Saedacco.com → Summitdrilling.com Redirects
      // ============================================
      // Homepage redirects
      {
        source: '/',
        has: [{ type: 'host', value: 'saedacco.com' }],
        destination: 'https://summitdrilling.com/',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'host', value: 'www.saedacco.com' }],
        destination: 'https://summitdrilling.com/',
        permanent: true,
      },
      {
        source: '/home',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/',
        permanent: true,
      },
      {
        source: '/homepage',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/',
        permanent: true,
      },
      // Drilling services
      {
        source: '/drilling',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/services/drilling-techniques',
        permanent: true,
      },
      {
        source: '/roto-sonic',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/services/sonic-drilling',
        permanent: true,
      },
      {
        source: '/direct-push',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/services/direct-push',
        permanent: true,
      },
      // Remediation
      {
        source: '/remediation',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/services/remediation-services',
        permanent: true,
      },
      // Safety
      {
        source: '/safety',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/health-safety',
        permanent: true,
      },
      // Contact
      {
        source: '/contact-us',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/contact',
        permanent: true,
      },
      // Careers/Employment
      {
        source: '/employment',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/careers',
        permanent: true,
      },
      {
        source: '/careers',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/careers',
        permanent: true,
      },
      {
        source: '/saedacco-job-application',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/careers',
        permanent: true,
      },
      // Proposals
      {
        source: '/proposal',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/resources/start-a-project',
        permanent: true,
      },
      {
        source: '/proposalold',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/resources/start-a-project',
        permanent: true,
      },
      // Clients/Testimonials
      {
        source: '/clients',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/about-us',
        permanent: true,
      },
      {
        source: '/client-testimonials',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/about-us',
        permanent: true,
      },
      {
        source: '/client-test-page',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/about-us',
        permanent: true,
      },
      {
        source: '/clients-slider-page',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/about-us',
        permanent: true,
      },
      // News
      {
        source: '/news-events',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/about-us/news',
        permanent: true,
      },
      {
        source: '/blog-1',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/about-us/news',
        permanent: true,
      },
      // Survey/Contact fallback
      {
        source: '/survey',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/contact',
        permanent: true,
      },
      // Thank you / Summit
      {
        source: '/thank-you',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/',
        permanent: true,
      },
      {
        source: '/summit',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/',
        permanent: true,
      },
      // Catch-all for any other saedacco.com pages
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(www\\.)?saedacco\\.com' }],
        destination: 'https://summitdrilling.com/',
        permanent: true,
      },
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

