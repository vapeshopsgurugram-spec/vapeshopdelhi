import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://vapeeshopdelhi.com'),
  title: {
    default: 'Vape Shop Delhi | Buy Vapes Online | 45-Min Express Delivery in Delhi',
    template: '%s | Vape Shop Delhi'
  },
  description:
    'Best Vape Shop in Delhi. Call/WhatsApp 8816964412 for 45-min doorstep delivery across Delhi NCR. Buy authentic disposable vapes, Elfbar, SMOK & nic salts online. Cash on delivery (COD) available!',
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
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vapeeshopdelhi.com',
    siteName: 'Vape Shop Delhi',
    title: 'Vape Shop Delhi | Buy Vapes Online | 45-Min Express Delivery in Delhi',
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
    title: 'Vape Shop Delhi | Buy Vapes Online | 45-Min Express Delivery in Delhi',
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
  '@type': 'Store',
  name: 'VapeeShopDelhi – Best Vape Shop in Delhi',
  alternateName: ['Vape Shop Delhi', 'Best Vape Store Delhi', 'Vapee Shop Delhi'],
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the vape price in Delhi for 20000 puffs disposable vapes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vape price in Delhi starts from ₹1,650 for Elfbar Raya D1 (13,000 puffs) and ₹1,800 for Elfbar Raya D2 (20,000 puffs dual mode with smart screen). All devices come with manufacturer scratch code verification and 45-minute doorstep delivery with Cash on Delivery (COD) in Delhi.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which is the best vape shop in Delhi for authentic products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VapeeShopDelhi.com is Delhi\'s #1 rated vape shop for 100% authentic, factory-sealed devices. We stock Elfbar Raya D2 20000, SMOK Nord 1100mAh, Elfbar Raya D1 Black Gold with manufacturer holographic scratch verification codes.'
      }
    },
    {
      '@type': 'Question',
      name: 'How fast is vape delivery in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We deliver vapes across all Delhi zones in 45-90 minutes. South Delhi (Greater Kailash, Hauz Khas, Saket) in 45 min. Central Delhi (Connaught Place, Karol Bagh) in 60 min. West Delhi (Dwarka, Rajouri Garden) and East Delhi (Mayur Vihar) in 60-90 min. North Delhi (Rohini, Pitampura) in 90 min.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer Cash on Delivery (COD) for vapes in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! VapeeShopDelhi.com offers Cash on Delivery (COD) across most Delhi pin codes. You can also pay via UPI (Google Pay, PhonePe, Paytm, BHIM). No advance payment required for most Delhi delivery areas.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I verify if my vape device is 100% genuine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every product from VapeeShopDelhi.com comes with an authentic holographic manufacturer security seal and silver scratch code. Verify on the brand\'s official portal (Elfbar or SMOK website) to confirm authenticity.'
      }
    },
    {
      '@type': 'Question',
      name: 'What vape products are available for delivery in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We stock 100+ products at our Delhi warehouse: Elfbar Raya D2 20000, SMOK Nord 1100mAh, Elfbar Raya D1 Black Gold, Uwell Caliburn, Vaporesso XROS, imported nic salt e-liquids, coils, and pod cartridges. All available for same-day delivery in Delhi.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you deliver vapes to South Delhi areas like Greater Kailash and Hauz Khas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We deliver to all South Delhi localities: Greater Kailash 1 & 2, Hauz Khas, Green Park, Saket, Malviya Nagar, Defence Colony, South Extension, Vasant Kunj, Vasant Vihar, and Lajpat Nagar. Delivery in South Delhi is typically 45 minutes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I order vapes for delivery in West Delhi areas like Dwarka and Rajouri Garden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We cover all West Delhi areas: Dwarka (all sectors), Rajouri Garden, Janakpuri, Punjabi Bagh, Paschim Vihar, Tilak Nagar, Vikaspuri, and Uttam Nagar. Delivery in West Delhi takes 60-90 minutes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you deliver to Connaught Place, Karol Bagh, and Central Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we deliver to all Central Delhi: Connaught Place (CP), Karol Bagh, Patel Nagar, Civil Lines, Model Town, Kamla Nagar, Chandni Chowk, and DU North Campus. Delivery in Central Delhi is typically 60 minutes.'
      }
    },
    {
      '@type': 'Question',
      name: 'What payment methods are accepted for vape orders in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and Cash on Delivery (COD) across most Delhi pin codes. No advance payment required for COD orders in Delhi.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I place an order for vape delivery in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Step 1: Choose your product and flavor above. Step 2: Click Order on WhatsApp and share your Delhi delivery address. Step 3: Our Delhi delivery partner dispatches within 30 minutes. Pay via UPI or COD on delivery. Available 10 AM to 11 PM, 7 days a week.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide same-day vape delivery in North Delhi areas like Rohini and Pitampura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we deliver to North Delhi: Rohini (all sectors), Pitampura, Shalimar Bagh, Ashok Vihar, Netaji Subhash Place (NSP), and Narela. Delivery to North Delhi takes approximately 75-90 minutes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are disposable vapes or refillable pod kits better for buyers in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Disposable vapes (Elfbar Raya D2 20000 at Rs 1800) are best for beginners wanting zero maintenance. Refillable pod kits (SMOK Nord at Rs 3500) offer better long-term value for regular Delhi vapers. WhatsApp our Delhi team for personalized recommendations.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is late night vape delivery available in Delhi NCR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! VapeeShopDelhi.com provides late night express vape delivery across Delhi NCR, Aerocity, Gurgaon, and Noida. Orders confirmed via WhatsApp are dispatched rapidly with express delivery partners.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where can I find an authentic vape shop open now near me in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VapeeShopDelhi.com operates 7 days a week with doorstep delivery across all Delhi localities. You do not need to search for physical shops that might sell counterfeit goods—order directly on WhatsApp for 100% genuine vapes with scratch code verification.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you deliver vapes to Gurgaon (Gurugram) and Noida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer 60-minute express vape delivery across Gurgaon (DLF Phase 1-5, Cyber City, Golf Course Road, Sohna Road) and Noida (Sector 18, 62, 137). Cash on Delivery (COD) is available across Delhi NCR.'
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
