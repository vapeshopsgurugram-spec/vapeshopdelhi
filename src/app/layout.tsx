import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://vapeeshopdelhi.com'),
  title: {
    default: 'Vape Shop Delhi | Buy Vapes Online | 45-Min Express Delivery',
    template: '%s'
  },
  description:
    '#1 Vape Shop in Delhi. Buy authentic disposable vapes, Elfbar 20K puffs & SMOK online. 45-min express delivery in Delhi NCR with COD. WhatsApp: +91 8816964412.',
  keywords: [
    'vape shop delhi',
    'vape shop in delhi',
    'vape store delhi',
    'vape store in delhi',
    'buy vape in delhi',
    'buy vape online delhi',
    'vape price in delhi',
    'vape price list delhi',
    'cheap vape shop delhi',
    'disposable vape delhi',
    '20000 puffs vape delhi',
    '15000 puffs vape delhi',
    'best vape shop delhi',
    'vape shop near me delhi',
    'vape shop open now delhi',
    'late night vape delivery delhi',
    '24 hour vape delivery delhi',
    'instant vape delivery delhi',
    '1 hour vape delivery delhi',
    'fastest vape delivery delhi',
    'vape delivery delhi',
    'same day vape delivery delhi',
    'cash on delivery vape delhi',
    'vape cod delhi',
    'elfbar delhi',
    'elfbar raya d2 20000 delhi',
    'smok delhi',
    'smok nord pod kit delhi',
    'blueberry ice vape delhi',
    'watermelon ice vape delhi',
    '50mg nic salt vape delhi',
    'vape delivery gurgaon',
    'vape shop gurgaon',
    'vape delivery noida',
    'vape shop noida',
    'vape delivery aerocity',
    'vape shop south delhi',
    'vape shop connaught place',
    'vape shop dwarka',
    'vape shop greater kailash',
    'vape shop hauz khas',
    'vape shop saket delhi',
    'vape shop rohini delhi',
    'vape shop punjabi bagh',
    'vape shop pitampura',
    'vape shop janakpuri',
    'vapeeshopdelhi',
    'vapeeshopdelhi.com'
  ],
  authors: [{ name: 'Vape Shop Delhi' }],
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
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vapeeshopdelhi.com',
    siteName: 'Vape Shop Delhi',
    title: 'Vape Shop Delhi | Buy Vapes Online | 45-Min Express Delivery',
    description:
      'Buy 100% authentic disposable vapes, Elfbar, SMOK pod kits & nic salts in Delhi. 45-min express delivery across South Delhi, Connaught Place, Dwarka & all of Delhi. COD available!',
    images: [
      {
        url: 'https://vapeeshopdelhi.com/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Vape Shop Delhi - Official Logo'
      },
      {
        url: 'https://vapeeshopdelhi.com/og-banner.jpg',
        width: 1376,
        height: 768,
        alt: 'Vape Shop Delhi - Buy Authentic Vapes Online'
      },
      {
        url: 'https://vapeeshopdelhi.com/images/products/elfbar-raya-d2-20000.jpg',
        width: 800,
        height: 800,
        alt: 'Vape Shop Delhi - Authentic Vapes'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vape Shop Delhi | Buy Vapes Online | 45-Min Express Delivery',
    description:
      'Buy 100% authentic disposable vapes, Elfbar, SMOK pod kits & nic salts in Delhi. 45-min express delivery. COD available. Order on WhatsApp!',
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
  name: 'Vape Shop Delhi',
  alternateName: ['Vape Shop in Delhi', 'Best Vape Shop in Delhi', 'Vape Store Delhi', 'VapeeShopDelhi', 'VapeeShopDelhi.com', 'Buy Vape Delhi'],
  description: 'Delhi #1 Store for Authentic Vapes, Disposable Pods & E-Liquids with Same Day Delivery',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://vapeeshopdelhi.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Store', 'LocalBusiness'],
  name: 'Vape Shop Delhi',
  alternateName: ['Vape Shop in Delhi', 'Best Vape Store Delhi', 'VapeeShopDelhi', 'Vapee Shop Delhi', 'Vape Shop Near Me Delhi'],
  description: 'Delhi #1 Vape Shop — 100% Authentic Disposable Vapes, Elfbar, SMOK Pod Kits & Nic Salts with 45-Min Express Delivery across all of Delhi. COD Available.',
  image: [
    'https://vapeeshopdelhi.com/logo.png',
    'https://vapeeshopdelhi.com/og-banner.jpg',
    'https://vapeeshopdelhi.com/images/products/elfbar-raya-d2-20000.jpg'
  ],
  logo: 'https://vapeeshopdelhi.com/logo.png',
  '@id': 'https://vapeeshopdelhi.com/#store',
  url: 'https://vapeeshopdelhi.com',
  telephone: '+918816964412',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash on Delivery, UPI, Google Pay, PhonePe, Paytm',
  hasMap: 'https://maps.google.com/?q=28.5482,77.2343',
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
      opens: '09:00',
      closes: '02:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1840',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rohit K.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Ordered Elfbar Raya D2 to Greater Kailash 2 at 7 PM, received by 8:15 PM! Scratch code verified original. Best vape shop in Delhi.',
      datePublished: '2026-09-10'
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Aman S.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Finally a genuine vape shop in Delhi with authentic Caliburn G3 pods. Packaging was completely discreet. 10/10!',
      datePublished: '2026-09-18'
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Nikhil K.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Ordered Elfbar Raya D2 to Mayur Vihar Phase 1 at 9 PM, arrived by 10:10 PM! Packaging was discreet. Best vape shop in Delhi!',
      datePublished: '2026-10-01'
    }
  ],
  knowsAbout: [
    'Vape Shop Delhi',
    'Vape Shop in Delhi',
    'Vape Store Delhi',
    'Vape Shop Near Me Delhi',
    'Buy Vape Online Delhi',
    'Disposable Vapes Delhi',
    'Elfbar Raya D2 20000',
    'SMOK Nord Pod Kit',
    'Nic Salt E-Liquids Delhi',
    '20000 Puffs Vapes',
    'Cash on Delivery Vape Delhi',
    '45 Min Express Vape Delivery'
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Delhi' },
    { '@type': 'AdministrativeArea', name: 'South Delhi' },
    { '@type': 'AdministrativeArea', name: 'Central Delhi' },
    { '@type': 'AdministrativeArea', name: 'West Delhi' },
    { '@type': 'AdministrativeArea', name: 'North Delhi' },
    { '@type': 'AdministrativeArea', name: 'East Delhi' },
    { '@type': 'AdministrativeArea', name: 'Dwarka' },
    { '@type': 'AdministrativeArea', name: 'Connaught Place' },
    { '@type': 'AdministrativeArea', name: 'Greater Kailash' },
    { '@type': 'AdministrativeArea', name: 'Hauz Khas' },
    { '@type': 'AdministrativeArea', name: 'Saket' },
    { '@type': 'AdministrativeArea', name: 'Rohini' },
    { '@type': 'AdministrativeArea', name: 'Vasant Kunj' },
    { '@type': 'AdministrativeArea', name: 'Gurgaon' },
    { '@type': 'AdministrativeArea', name: 'Noida' },
    { '@type': 'AdministrativeArea', name: 'Punjabi Bagh' },
    { '@type': 'AdministrativeArea', name: 'Pitampura' },
    { '@type': 'AdministrativeArea', name: 'Janakpuri' },
    { '@type': 'AdministrativeArea', name: 'Aerocity' }
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
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* WEBSITE SCHEMA WITH SEARCHACTION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* LOCAL BUSINESS SCHEMA WITH RATINGS & REVIEWS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
