import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: '/products/elfbar-raya-d2-20000',
        destination: '/products/elfbar-raya-d2-20000-disposable-pod-device',
        permanent: true,
      },
      {
        source: '/products/smok-nord-pod-kit',
        destination: '/products/smok-nord-pod-kit-1100mah',
        permanent: true,
      },
      {
        source: '/products/elfbar-raya-d1-black-gold',
        destination: '/products/elfbar-raya-d1-disposable-pod-device-black-gold',
        permanent: true,
      },
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
