import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vape Shop Delhi | Best Vape Store in Delhi',
    short_name: 'Vape Shop Delhi',
    description: 'Delhi #1 Authentic Vape Store with 45-Min Express Delivery & COD across all Delhi localities.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090a0f',
    theme_color: '#06b6d4',
    icons: [
      {
        src: '/icon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/icon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
