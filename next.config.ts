import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
      {
        source: '/start-project',
        destination: '/resources/start-a-project',
        permanent: true,
      },
      {
        source: '/start-project/:path*',
        destination: '/resources/start-a-project/:path*',
        permanent: true,
      },
      {
        source: '/start-a-project',
        destination: '/resources/start-a-project',
        permanent: true,
      },
      {
        source: '/start-a-project/:path*',
        destination: '/resources/start-a-project/:path*',
        permanent: true,
      }
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

