import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://vapeeshopdelhi.com'),
  title: {
    default: 'Vape Shop Delhi | VapeeShopDelhi.com – #1 Store & Same Day NCR Express Delivery',
    template: '%s | VapeeShopDelhi'
  },
  description:
    'VapeeShopDelhi.com is Delhi & Gurgaon\'s #1 authentic vape store. Order Elfbar Raya D2 20000, SMOK Nord, and Raya D1 Black Gold with 100% genuine scratch codes. 45-90 min delivery across Delhi NCR.',
  keywords: [
    'vapeeshopdelhi',
    'vapeeshopdelhi.com',
    'vapee shop delhi',
    'vape shop delhi',
    'vape store in delhi',
    'buy vape delhi',
    'disposable vape delhi',
    'vape store gurgaon',
    'best vape shop near me delhi',
    'vape delivery delhi same day',
    'elfbar raya d2 20000 delhi',
    'smok nord pod kit gurgaon',
    'elfbar raya d1 black gold delhi',
    'vape shop south delhi',
    'vape shop connaught place',
    'vape shop dwarka',
    'vape shop noida',
    'cash on delivery vape delhi',
    'vape delivery gurgaon dlf'
  ],
  authors: [{ name: 'VapeeShopDelhi' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://vapeeshopdelhi.com'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vapeeshopdelhi.com',
    siteName: 'VapeeShopDelhi - #1 Vape Store Delhi NCR',
    title: 'Vape Shop Delhi | VapeeShopDelhi.com – Fast Delivery Across Delhi NCR',
    description:
      'Order genuine Elfbar Raya D2, SMOK Nord, and Raya D1 Gold from VapeeShopDelhi.com. 100% authentic scratch verification & 45-90 min express courier drops.',
    images: [
      {
        url: 'https://vapeeshopdelhi.com/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'VapeeShopDelhi.com - Official Vape Store Delhi NCR'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vape Shop Delhi | VapeeShopDelhi.com – 45-90 Mins Delivery',
    description: 'Top rated vape store in Delhi NCR & Gurgaon. Original brands, sealed boxes, express delivery.',
    images: ['https://vapeeshopdelhi.com/og-banner.jpg']
  },
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'New Delhi, Delhi, India',
    'geo.position': '28.613939;77.209021',
    'ICBM': '28.613939, 77.209021'
  }
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://vapeeshopdelhi.com/#website',
  url: 'https://vapeeshopdelhi.com',
  name: 'VapeeShopDelhi',
  alternateName: ['Vape Shop Delhi', 'Vapee Shop Delhi', 'VapeeShopDelhi.com', 'Vape Store Gurgaon'],
  description: 'Delhi NCR #1 Store for Authentic Vapes, Disposable Pods & E-Liquids with Same Day Delivery',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://vapeeshopdelhi.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'VapeStore',
  name: 'VapeeShopDelhi – Vape Shop Delhi & Gurgaon',
  alternateName: ['Vape Shop Delhi', 'Vape Store Gurgaon', 'Vapee Shop Delhi'],
  image: 'https://vapeeshopdelhi.com/og-banner.jpg',
  logo: 'https://vapeeshopdelhi.com/favicon.png',
  '@id': 'https://vapeeshopdelhi.com/#store',
  url: 'https://vapeeshopdelhi.com',
  telephone: '+919876543210',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'M Block, Greater Kailash 1',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110048',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.5482,
    longitude: 77.2343
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '23:00'
    }
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Delhi' },
    { '@type': 'AdministrativeArea', name: 'South Delhi' },
    { '@type': 'AdministrativeArea', name: 'Central Delhi' },
    { '@type': 'AdministrativeArea', name: 'West Delhi' },
    { '@type': 'AdministrativeArea', name: 'North Delhi' },
    { '@type': 'AdministrativeArea', name: 'Noida' },
    { '@type': 'AdministrativeArea', name: 'Gurugram' },
    { '@type': 'AdministrativeArea', name: 'Dwarka' },
    { '@type': 'AdministrativeArea', name: 'Connaught Place' }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '1840',
    reviewCount: '1420'
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best vape shop in Delhi for authentic products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VapeeShopDelhi.com is rated #1 for 100% authentic, sealed devices including top brands like Elfbar Raya D2 20000, SMOK Nord, and Raya D1 Black Gold with manufacturer verification scratch codes and 45-90 min same-day express delivery.'
      }
    },
    {
      '@type': 'Question',
      name: 'How fast is vape delivery across Delhi NCR & Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide 45 to 90-minute express courier drops across South Delhi, Connaught Place, and Gurgaon DLF Cyber City, and under 2 hours for West Delhi, Dwarka, and Noida.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I verify if my vape device is 100% genuine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every product dispatched from VapeeShopDelhi.com features an authentic holographic manufacturer security seal with a silver scratch code that can be authenticated on the brand official verification portal.'
      }
    },
    {
      '@type': 'Question',
      name: 'What products are available on VapeeShopDelhi.com?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We stock top-selling high-puff disposables like Elfbar Raya D2 20000 (Dual Mode), SMOK Nord 1100mAh Refillable Pod Kit, and Elfbar Raya D1 Black Gold Edition (13,000 puffs) plus 100+ items in our Delhi warehouse.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you deliver to South Delhi, Dwarka, and Connaught Place?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we cover all major neighborhoods including Greater Kailash 1 & 2, Hauz Khas, Saket, Connaught Place, Rajouri Garden, Dwarka, Rohini, Vasant Kunj, DLF Cyber City Gurugram, and Noida.'
      }
    },
    {
      '@type': 'Question',
      name: 'What payment methods are accepted for vape orders on VapeeShopDelhi.com?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support instant UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and Cash on Delivery (COD) across select pin codes in Delhi NCR.'
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* WEBSITE SCHEMA WITH SEARCHACTION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* LOCAL BUSINESS SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* FAQ SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
