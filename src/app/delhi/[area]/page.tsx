import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

interface AreaInfo {
  name: string;
  title: string;
  description: string;
  deliveryTime: string;
  localities: string[];
  pinCodes: string[];
  landmark: string;
}

const DELHI_AREAS: Record<string, AreaInfo> = {
  'south-delhi': {
    name: 'South Delhi',
    title: 'Vape Shop South Delhi | Buy Vapes South Delhi | 45-Min Delivery',
    description: 'Buy 100% authentic vapes in South Delhi. Elfbar, SMOK pod kits with 45-min delivery to Greater Kailash, Hauz Khas, Saket, Defence Colony, Vasant Kunj. COD available.',
    deliveryTime: '45 Minutes',
    localities: ['Greater Kailash 1 & 2', 'Hauz Khas', 'Green Park', 'Saket', 'Malviya Nagar', 'Defence Colony', 'South Extension', 'Lajpat Nagar', 'Vasant Kunj', 'Vasant Vihar', 'Munirka'],
    pinCodes: ['110048', '110016', '110017', '110024', '110029', '110030'],
    landmark: 'Select City Walk, Saket'
  },
  'connaught-place': {
    name: 'Connaught Place',
    title: 'Vape Shop Connaught Place Delhi | Buy Vapes CP Delhi | 60-Min Delivery',
    description: 'Buy authentic vapes near Connaught Place Delhi. Elfbar, SMOK pod kits with 60-min delivery to CP, Janpath, Barakhamba, Mandi House. COD available.',
    deliveryTime: '60 Minutes',
    localities: ['Connaught Place (CP)', 'Janpath', 'Barakhamba Road', 'Mandi House', 'ITO', 'Pragati Maidan', 'Daryaganj'],
    pinCodes: ['110001', '110002'],
    landmark: 'Connaught Place Inner Circle'
  },
  'dwarka': {
    name: 'Dwarka',
    title: 'Vape Shop Dwarka Delhi | Buy Vapes in Dwarka | 60-Min Delivery',
    description: 'Buy 100% authentic vapes in Dwarka, Delhi. Elfbar, SMOK pod kits with 60-min delivery to all Dwarka sectors. COD available.',
    deliveryTime: '60 Minutes',
    localities: ['Dwarka Sector 1-23', 'Dwarka Mor', 'Dwarka Expressway', 'Uttam Nagar', 'Bindapur', 'Nawada', 'Vikas Puri'],
    pinCodes: ['110075', '110077', '110059'],
    landmark: 'Dwarka Sector 10 Metro Station'
  },
  'rohini': {
    name: 'Rohini',
    title: 'Vape Shop Rohini Delhi | Buy Vapes in Rohini | 75-Min Delivery',
    description: 'Buy authentic vapes in Rohini, North Delhi. Elfbar, SMOK pod kits with 75-min delivery to all Rohini sectors, Pitampura, Shalimar Bagh. COD available.',
    deliveryTime: '75 Minutes',
    localities: ['Rohini Sector 1-28', 'Pitampura', 'Shalimar Bagh', 'Ashok Vihar', 'Netaji Subhash Place (NSP)', 'Shakurpur'],
    pinCodes: ['110085', '110034', '110088'],
    landmark: 'Rohini West Metro Station'
  },
  'hauz-khas': {
    name: 'Hauz Khas',
    title: 'Vape Shop Hauz Khas Delhi | Buy Vapes Hauz Khas | 45-Min Delivery',
    description: 'Buy 100% authentic vapes in Hauz Khas, South Delhi. Elfbar, SMOK pod kits with 45-min delivery to Hauz Khas, Green Park, Safdarjung. COD available.',
    deliveryTime: '45 Minutes',
    localities: ['Hauz Khas Village', 'Green Park', 'Safdarjung Enclave', 'Gulmohar Park', 'Panchsheel Park', 'Yusuf Sarai', 'IIT Delhi Area'],
    pinCodes: ['110016', '110029'],
    landmark: 'Hauz Khas Metro Station'
  },
  'greater-kailash': {
    name: 'Greater Kailash',
    title: 'Vape Shop Greater Kailash Delhi | Buy Vapes GK1 GK2 | 45-Min Delivery',
    description: 'Buy authentic vapes in Greater Kailash (GK1 & GK2) Delhi. Elfbar, SMOK pod kits with 45-min express delivery. COD available in Greater Kailash.',
    deliveryTime: '45 Minutes',
    localities: ['Greater Kailash 1 (GK1)', 'Greater Kailash 2 (GK2)', 'Chittaranjan Park', 'Kailash Colony', 'Alaknanda', 'Govindpuri'],
    pinCodes: ['110048'],
    landmark: 'GK1 M Block Market'
  },
  'karol-bagh': {
    name: 'Karol Bagh',
    title: 'Vape Shop Karol Bagh Delhi | Buy Vapes Karol Bagh | 60-Min Delivery',
    description: 'Buy authentic vapes in Karol Bagh, Central Delhi. Elfbar, SMOK pod kits with 60-min delivery to Karol Bagh, Patel Nagar, Rajendra Place. COD available.',
    deliveryTime: '60 Minutes',
    localities: ['Karol Bagh', 'Patel Nagar', 'Rajendra Place', 'Gole Market', 'Anand Parbat', 'Shankar Road'],
    pinCodes: ['110005', '110008'],
    landmark: 'Karol Bagh Metro Station'
  },
  'rajouri-garden': {
    name: 'Rajouri Garden',
    title: 'Vape Shop Rajouri Garden Delhi | Buy Vapes West Delhi | 60-Min Delivery',
    description: 'Buy authentic vapes in Rajouri Garden, West Delhi. Elfbar, SMOK pod kits with 60-min delivery to Rajouri Garden, Punjabi Bagh, Janakpuri. COD available.',
    deliveryTime: '60 Minutes',
    localities: ['Rajouri Garden', 'Punjabi Bagh', 'Ramesh Nagar', 'Kirti Nagar', 'Subhash Nagar', 'Tagore Garden'],
    pinCodes: ['110027', '110026'],
    landmark: 'Rajouri Garden Metro Station'
  },
  'mayur-vihar': {
    name: 'Mayur Vihar',
    title: 'Vape Shop Mayur Vihar Delhi | Buy Vapes East Delhi | 60-Min Delivery',
    description: 'Buy authentic vapes in Mayur Vihar, East Delhi. Elfbar, SMOK pod kits with 60-min delivery to Mayur Vihar Phase 1, 2, 3, IP Extension. COD available.',
    deliveryTime: '60 Minutes',
    localities: ['Mayur Vihar Phase 1', 'Mayur Vihar Phase 2', 'Mayur Vihar Phase 3', 'IP Extension', 'Patparganj', 'Preet Vihar', 'Pandav Nagar'],
    pinCodes: ['110091', '110096'],
    landmark: 'Mayur Vihar Phase 1 Metro'
  },
  'laxmi-nagar': {
    name: 'Laxmi Nagar',
    title: 'Vape Shop Laxmi Nagar Delhi | Buy Vapes East Delhi | 60-Min Delivery',
    description: 'Buy authentic vapes in Laxmi Nagar, East Delhi. Elfbar, SMOK pod kits with 60-min delivery to Laxmi Nagar, Vikas Marg, Nirman Vihar. COD available.',
    deliveryTime: '60 Minutes',
    localities: ['Laxmi Nagar', 'Vikas Marg', 'Nirman Vihar', 'Vivek Vihar', 'Shahdara', 'Dilshad Garden', 'Karkardooma'],
    pinCodes: ['110092', '110093'],
    landmark: 'Laxmi Nagar Metro Station'
  },
  'vasant-kunj': {
    name: 'Vasant Kunj',
    title: 'Vape Shop Vasant Kunj Delhi | Buy Vapes Vasant Kunj | 50-Min Delivery',
    description: 'Buy authentic vapes in Vasant Kunj, South Delhi. Elfbar, SMOK pod kits with 50-min delivery to Vasant Kunj, Vasant Vihar, Munirka. COD available.',
    deliveryTime: '50 Minutes',
    localities: ['Vasant Kunj', 'Vasant Vihar', 'Munirka', 'RK Puram', 'Mahipalpur', 'Nelson Mandela Marg'],
    pinCodes: ['110070', '110057'],
    landmark: 'Ambience Mall, Vasant Kunj'
  },
  'saket': {
    name: 'Saket',
    title: 'Vape Shop Saket Delhi | Buy Vapes in Saket | 45-Min Delivery',
    description: 'Buy 100% authentic vapes in Saket, South Delhi. Elfbar, SMOK pod kits with 45-min delivery to Saket, Malviya Nagar, Sheikh Sarai. COD available.',
    deliveryTime: '45 Minutes',
    localities: ['Saket', 'Malviya Nagar', 'Sheikh Sarai', 'Pushp Vihar', 'Neb Sarai', 'Press Enclave Marg'],
    pinCodes: ['110017', '110068'],
    landmark: 'Select City Walk Mall, Saket'
  },
  'gurgaon': {
    name: 'Gurgaon',
    title: 'Vape Shop Gurgaon | Buy Vapes Gurugram | 60-Min Express Delivery',
    description: 'Buy 100% authentic disposable vapes in Gurgaon (Gurugram). Elfbar, SMOK pod kits with 60-min express delivery to Cyber City, Golf Course Road, Sector 29, Sohna Road. COD available.',
    deliveryTime: '60 Minutes',
    localities: ['DLF Phase 1-5', 'Cyber City', 'Golf Course Road', 'Golf Course Extension', 'Sector 29', 'Sector 56', 'Sohna Road', 'MG Road Gurgaon'],
    pinCodes: ['122001', '122002', '122009', '122018'],
    landmark: 'Cyber Hub, DLF Cyber City'
  },
  'noida': {
    name: 'Noida',
    title: 'Vape Shop Noida | Buy Vapes in Noida | 60-Min Express Delivery',
    description: 'Buy authentic vapes in Noida & Greater Noida. Elfbar Raya D2, SMOK kits with 60-min delivery to Sector 18, Sector 62, Sector 137, Noida Expressway. COD available.',
    deliveryTime: '60 Minutes',
    localities: ['Noida Sector 18', 'Sector 62', 'Sector 50', 'Sector 76', 'Sector 137', 'Noida Expressway', 'Greater Noida West'],
    pinCodes: ['201301', '201309', '201307'],
    landmark: 'Mall of India, Sector 18'
  },
  'punjabi-bagh': {
    name: 'Punjabi Bagh',
    title: 'Vape Shop Punjabi Bagh Delhi | Buy Vapes West Delhi | 45-Min Delivery',
    description: 'Buy 100% genuine vapes in Punjabi Bagh, West Delhi. Elfbar, SMOK pod kits with 45-min express delivery to Punjabi Bagh Club Road, Paschim Vihar, Madipur. COD available.',
    deliveryTime: '45 Minutes',
    localities: ['Punjabi Bagh East', 'Punjabi Bagh West', 'Club Road', 'Paschim Vihar', 'Madipur', 'Shivaji Park'],
    pinCodes: ['110026', '110063'],
    landmark: 'Punjabi Bagh Club Road'
  },
  'pitampura': {
    name: 'Pitampura',
    title: 'Vape Shop Pitampura Delhi | Buy Vapes NSP | 50-Min Delivery',
    description: 'Buy authentic vapes in Pitampura, North-West Delhi. Elfbar, SMOK pod kits with 50-min express delivery to Netaji Subhash Place (NSP), Kohat Enclave, Rani Bagh. COD available.',
    deliveryTime: '50 Minutes',
    localities: ['Netaji Subhash Place (NSP)', 'Kohat Enclave', 'Rani Bagh', 'Saraswati Vihar', 'Lok Vihar', 'Kapil Vihar'],
    pinCodes: ['110034'],
    landmark: 'Netaji Subhash Place Metro'
  },
  'janakpuri': {
    name: 'Janakpuri',
    title: 'Vape Shop Janakpuri Delhi | Buy Vapes in Janakpuri | 50-Min Delivery',
    description: 'Buy authentic vapes in Janakpuri, West Delhi. Elfbar, SMOK pod kits with 50-min express delivery to District Centre, Tilak Nagar, Vikaspuri. Cash on Delivery available.',
    deliveryTime: '50 Minutes',
    localities: ['Janakpuri District Centre', 'Janakpuri Block A-D', 'Tilak Nagar', 'Vikaspuri', 'Uttam Nagar East', 'Hari Nagar'],
    pinCodes: ['110058', '110018'],
    landmark: 'Janakpuri District Centre'
  },
  'aerocity': {
    name: 'Aerocity',
    title: 'Vape Shop Aerocity Delhi | 24/7 Vape Delivery Near Airport | 30-Min Delivery',
    description: 'Buy 100% authentic vapes near IGI Delhi Airport and Aerocity. 30-min rapid doorstep delivery to Worldmark Aerocity hotels, Mahipalpur & Airport Terminals. COD available.',
    deliveryTime: '30 Minutes',
    localities: ['Aerocity Worldmark', 'Aerocity Hospitality District', 'Mahipalpur', 'IGI Airport Terminal 3', 'Terminal 1', 'Rangpuri'],
    pinCodes: ['110037'],
    landmark: 'Worldmark Aerocity'
  }
};

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return Object.keys(DELHI_AREAS).map((area) => ({ area }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area } = await params;
  const areaInfo = DELHI_AREAS[area];
  if (!areaInfo) return { title: 'Vape Shop Delhi' };
  return {
    title: areaInfo.title,
    description: areaInfo.description,
    alternates: { canonical: `https://vapeeshopdelhi.com/delhi/${area}` },
    openGraph: {
      title: areaInfo.title,
      description: areaInfo.description,
      url: `https://vapeeshopdelhi.com/delhi/${area}`,
      images: [
        { url: 'https://vapeeshopdelhi.com/images/products/elfbar-raya-d2-20000.jpg', width: 800, height: 800, alt: areaInfo.title },
        { url: 'https://vapeeshopdelhi.com/og-banner.jpg', width: 1200, height: 630 }
      ]
    }
  };
}

export default async function DelhiAreaPage({ params }: PageProps) {
  const { area } = await params;
  const areaInfo = DELHI_AREAS[area];
  if (!areaInfo) notFound();

  const waMessage = encodeURIComponent(
    `Hello Vape Shop Delhi! I want to order a vape for delivery in ${areaInfo.name}. Please share today's menu and delivery time.`
  );

  const areaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: `VapeeShopDelhi - Vape Shop ${areaInfo.name}`,
    description: areaInfo.description,
    url: `https://vapeeshopdelhi.com/delhi/${area}`,
    telephone: '+918816964412',
    areaServed: areaInfo.localities.map(loc => ({ '@type': 'Place', name: loc })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: areaInfo.name,
      addressRegion: 'Delhi',
      postalCode: areaInfo.pinCodes[0],
      addressCountry: 'IN'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vapeeshopdelhi.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Delhi Vape Delivery Zones',
        item: 'https://vapeeshopdelhi.com/#delhi-locations'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Vape Shop ${areaInfo.name}`,
        item: `https://vapeeshopdelhi.com/delhi/${area}`
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* AREA HERO */}
      <section className="hero-section" style={{ minHeight: '60vh' }}>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-chip">
              <span className="live-dot"></span> Delivering to {areaInfo.name} in {areaInfo.deliveryTime}
            </div>
            <h1 className="hero-title">
              Vape Shop {areaInfo.name} — Buy Authentic Vapes with {areaInfo.deliveryTime} Express Delivery in Delhi
            </h1>
            <p className="hero-subtitle">
              Get 100% authentic disposable vapes, Elfbar, SMOK pod kits &amp; nic salts delivered to your door in{' '}
              <strong>{areaInfo.name}, Delhi</strong> in just {areaInfo.deliveryTime}. Cash on Delivery available.
            </p>
            <div className="hero-buttons">
              <a
                href={`https://wa.me/918816964412?text=${waMessage}`}
                className="btn btn-whatsapp btn-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                📲 Order Now — {areaInfo.deliveryTime} Delivery in {areaInfo.name}
              </a>
              <Link href="/" className="btn btn-outline btn-large">
                Browse Full Collection
              </Link>
            </div>
            <div className="hero-trust-bar">
              <div className="trust-stat">
                <span className="stat-number">4.9 ★★★★★</span>
                <span className="stat-label">1,840+ Google Reviews</span>
              </div>
              <div className="stat-divider"></div>
              <div className="trust-stat">
                <span className="stat-number">{areaInfo.deliveryTime}</span>
                <span className="stat-label">{areaInfo.name} Express</span>
              </div>
              <div className="stat-divider"></div>
              <div className="trust-stat">
                <span className="stat-number">COD</span>
                <span className="stat-label">Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALITIES */}
      <section className="section-locations">
        <div className="container">
          <div className="section-head text-center">
            <span className="sub-head">LOCALITIES WE COVER</span>
            <h2 className="section-title">Vape Delivery Areas in {areaInfo.name}, Delhi</h2>
            <p className="section-desc">
              We deliver vapes to every street and society in {areaInfo.name}. All areas covered below:
            </p>
          </div>
          <div className="location-grid" style={{ marginTop: '32px' }}>
            <div className="location-card">
              <div className="loc-header">
                <span className="loc-pin">📍</span>
                <h3>{areaInfo.name} — All Localities</h3>
              </div>
              <p className="loc-time">⚡ Delivery in {areaInfo.deliveryTime}</p>
              <ul className="loc-areas">
                {areaInfo.localities.map((loc, idx) => (<li key={idx}>{loc}</li>))}
              </ul>
            </div>
            <div className="location-card">
              <div className="loc-header">
                <span className="loc-pin">📦</span>
                <h3>How to Order in {areaInfo.name}</h3>
              </div>
              <ul className="loc-areas" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li>✅ <strong>Step 1:</strong> Choose product &amp; flavor</li>
                <li>✅ <strong>Step 2:</strong> Click WhatsApp Order button</li>
                <li>✅ <strong>Step 3:</strong> Share your {areaInfo.name} address</li>
                <li>✅ <strong>Step 4:</strong> Receive in {areaInfo.deliveryTime}, pay COD or UPI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="section-seo-guide">
        <div className="container guide-container">
          <div className="guide-content">
            <article className="guide-article">
              <h2>Best Vape Shop for {areaInfo.name}, Delhi — VapeeShopDelhi.com</h2>
              <p>
                Looking for a reliable <strong>vape shop near {areaInfo.name}</strong>? VapeeShopDelhi.com delivers
                100% authentic disposable vapes, Elfbar pods, SMOK kits, and imported nic salts to{' '}
                <strong>{areaInfo.name}, Delhi</strong> in {areaInfo.deliveryTime}. No physical store visit needed.
              </p>
              <h3>Why {areaInfo.name} Customers Choose VapeeShopDelhi.com</h3>
              <ul>
                <li><strong>Fastest Delivery in {areaInfo.name}:</strong> {areaInfo.deliveryTime} express delivery, same day, 7 days a week.</li>
                <li><strong>100% Authentic Products:</strong> Every device has a holographic scratch verification code. Verify on brand portal before use.</li>
                <li><strong>Cash on Delivery (COD):</strong> Pay when your vape arrives in {areaInfo.name}. No advance payment required.</li>
                <li><strong>Discreet Packaging:</strong> Plain, unmarked packaging with no external brand labels.</li>
                <li><strong>WhatsApp Support:</strong> Real-time tracking and flavor recommendations from our Delhi team.</li>
              </ul>
              <h3>Pin Codes We Deliver to in {areaInfo.name}</h3>
              <p>
                We cover all pin codes in {areaInfo.name}, Delhi:{' '}
                <strong>{areaInfo.pinCodes.join(', ')}</strong>. Near <strong>{areaInfo.landmark}</strong>?
                We deliver there in {areaInfo.deliveryTime}.
              </p>
              <h3>Popular Vapes Available for Delivery in {areaInfo.name}</h3>
              <ul>
                <li><Link href="/products/elfbar-raya-d2-20000" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}><strong>Elfbar Raya D2 20000 (₹1,800)</strong></Link> — 20,000 puffs, dual mode, smart screen. #1 bestseller in {areaInfo.name}.</li>
                <li><Link href="/products/smok-nord-pod-kit" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}><strong>SMOK Nord 1100mAh (₹3,500)</strong></Link> — Refillable pod kit, best long-term value for {areaInfo.name} vapers.</li>
                <li><Link href="/products/elfbar-raya-d1-black-gold" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}><strong>Elfbar Raya D1 Black Gold (₹1,650)</strong></Link> — 13,000 puffs, luxury Black Gold edition, available in {areaInfo.name}.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '60px 0', textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Order Vapes for {areaInfo.name} Delivery Right Now</h2>
          <p className="section-desc" style={{ marginBottom: '32px' }}>
            WhatsApp us now. Share your {areaInfo.name} address — we dispatch within 30 minutes.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/918816964412?text=${waMessage}`}
              className="btn btn-whatsapp btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              📲 WhatsApp Order — {areaInfo.name}
            </a>
            <Link href="/#products" className="btn btn-primary btn-large">
              Browse Vape Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}