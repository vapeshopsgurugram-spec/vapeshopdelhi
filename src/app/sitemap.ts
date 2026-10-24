import type { MetadataRoute } from 'next';
import { getAllProductSlugs } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vapeeshopdelhi.com';
  const slugs = getAllProductSlugs();

  const productUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  const delhiAreaUrls: MetadataRoute.Sitemap = [
    'south-delhi', 'connaught-place', 'dwarka', 'rohini',
    'hauz-khas', 'greater-kailash', 'karol-bagh', 'rajouri-garden',
    'mayur-vihar', 'laxmi-nagar', 'vasant-kunj', 'saket',
    'lajpat-nagar', 'paschim-vihar', 'punjabi-bagh', 'pitampura', 'janakpuri', 'aerocity'
  ].map((area) => ({
    url: `${baseUrl}/delhi/${area}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...productUrls,
    ...delhiAreaUrls,
  ];
}
