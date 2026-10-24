import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: '/delhi/gurgaon',
        destination: '/delhi/south-delhi',
        permanent: true,
      },
      {
        source: '/delhi/noida',
        destination: '/delhi/mayur-vihar',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
