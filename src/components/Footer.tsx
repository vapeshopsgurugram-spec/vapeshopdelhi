import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link href="/" className="brand-logo" style={{ textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt="Vape Shop Delhi Logo"
              className="logo-img"
              width={38}
              height={38}
            />
            <span className="logo-text">
              VAPE SHOP <span className="text-accent">DELHI</span>
            </span>
          </Link>
          <p className="footer-desc">
            <strong>VapeeShopDelhi.com</strong> is Delhi&apos;s #1 verified retailer for 100% authentic disposable vapes, Elfbar pods, SMOK pod kits, and imported nic salts. Same-day 45-min express delivery across all Delhi zones — South, Central, West, North & East Delhi.
          </p>
          <div className="footer-contact">
            <p>📞 <strong>Helpline & WhatsApp:</strong> +91 98765 43210</p>
            <p>🕒 <strong>Dispatch Hours:</strong> 10:00 AM – 11:00 PM (All 7 Days)</p>
            <p>⚡ <strong>Delhi Delivery:</strong> 45 - 90 Mins Express Same Day</p>
            <p>🌐 <strong>Official Website:</strong> vapeeshopdelhi.com</p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Vape Delivery Areas in Delhi</h4>
          <ul className="footer-links">
            <li><Link href="/delhi/south-delhi">Vape Shop South Delhi (GK, Saket, Def Col)</Link></li>
            <li><Link href="/delhi/connaught-place">Vape Shop Connaught Place (CP)</Link></li>
            <li><Link href="/delhi/hauz-khas">Vape Shop Hauz Khas & Green Park</Link></li>
            <li><Link href="/delhi/dwarka">Vape Shop Dwarka (All Sectors)</Link></li>
            <li><Link href="/delhi/rohini">Vape Shop Rohini & Pitampura</Link></li>
            <li><Link href="/delhi/rajouri-garden">Vape Shop Rajouri Garden & West Delhi</Link></li>
            <li><Link href="/delhi/mayur-vihar">Vape Shop Mayur Vihar & East Delhi</Link></li>
            <li><Link href="/delhi/karol-bagh">Vape Shop Karol Bagh & Central Delhi</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Top Selling Devices</h4>
          <ul className="footer-links">
            <li><Link href="/products/elfbar-raya-d2-20000-disposable-pod-device">Elfbar Raya D2 20000 Puffs (Dual Mode)</Link></li>
            <li><Link href="/products/smok-nord-pod-kit-1100mah">SMOK Nord Pod Kit 1100mAh (Refillable)</Link></li>
            <li><Link href="/products/elfbar-raya-d1-disposable-pod-device-black-gold">Elfbar Raya D1 (Black Gold Edition 13K)</Link></li>
            <li><Link href="/#products">Disposable Pod Devices Delhi</Link></li>
            <li><Link href="/#products">Refillable Pod Kits Delhi NCR</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Safety & Compliance</h4>
          <p className="disclaimer-text">
            <strong>Age Restriction:</strong> Products displayed on this website contain nicotine, an addictive chemical. Intended for use by adult smokers of legal smoking age (18+) only. Keep out of reach of children and pets.
          </p>
          <div className="compliance-badge">
            <span>🔞 18+ Strictly Enforced • Genuine Only</span>
          </div>
        </div>
      </div>

      {/* SEO KEYWORD CLUSTER & DIRECTORY (HIGH IMPACT FOR GOOGLE TOP 3 RANKING) */}
      <div className="container footer-seo-section">
        <div className="seo-cloud-box">
          <div className="seo-cloud-group">
            <span className="seo-cloud-title">🔥 Popular Google Searches:</span>
            <div className="seo-tag-links">
              <Link href="/">vapeeshopdelhi</Link>
              <span className="sep">•</span>
              <Link href="/">vapeeshopdelhi.com</Link>
              <span className="sep">•</span>
              <Link href="/">vapee shop delhi</Link>
              <span className="sep">•</span>
              <Link href="/#products">vape shop delhi</Link>
              <span className="sep">•</span>
              <Link href="/#products">buy vape in delhi</Link>
              <span className="sep">•</span>
              <Link href="/#products">disposable vape delhi</Link>
              <span className="sep">•</span>
              <Link href="/#products">best vape shop delhi</Link>
              <span className="sep">•</span>
              <Link href="/#products">vape delivery delhi same day</Link>
              <span className="sep">•</span>
              <Link href="/products/elfbar-raya-d2-20000-disposable-pod-device">elfbar raya d2 20000 delhi</Link>
              <span className="sep">•</span>
              <Link href="/products/smok-nord-pod-kit-1100mah">smok nord pod kit delhi</Link>
              <span className="sep">•</span>
              <Link href="/products/elfbar-raya-d1-disposable-pod-device-black-gold">elfbar raya d1 black gold delhi</Link>
              <span className="sep">•</span>
              <Link href="/delhi/south-delhi">vape shop south delhi</Link>
              <span className="sep">•</span>
              <Link href="/delhi/connaught-place">vape shop connaught place</Link>
              <span className="sep">•</span>
              <Link href="/delhi/dwarka">vape shop dwarka delhi</Link>
              <span className="sep">•</span>
              <Link href="/delhi/rohini">vape shop rohini delhi</Link>
              <span className="sep">•</span>
              <Link href="/delhi/hauz-khas">vape shop hauz khas</Link>
              <span className="sep">•</span>
              <Link href="/delhi/greater-kailash">vape shop greater kailash</Link>
              <span className="sep">•</span>
              <Link href="/delhi/karol-bagh">vape shop karol bagh</Link>
              <span className="sep">•</span>
              <Link href="/delhi/rajouri-garden">vape shop rajouri garden</Link>
              <span className="sep">•</span>
              <Link href="/delhi/saket">vape shop saket delhi</Link>
              <span className="sep">•</span>
              <Link href="/delhi/vasant-kunj">vape shop vasant kunj</Link>
              <span className="sep">•</span>
              <Link href="/delhi/mayur-vihar">vape shop mayur vihar</Link>
              <span className="sep">•</span>
              <Link href="/#products">cash on delivery vape delhi</Link>
            </div>
          </div>

          <div className="seo-cloud-group" style={{ marginTop: '14px' }}>
            <span className="seo-cloud-title">📍 Express Doorstep Delivery Areas in Delhi:</span>
            <p className="seo-area-text">
              <Link href="/delhi/south-delhi">South Delhi</Link> (Greater Kailash GK1 GK2, Hauz Khas, Saket, Green Park, Defence Colony, South Extension, Lajpat Nagar) •{' '}
              <Link href="/delhi/connaught-place">Connaught Place</Link> (CP, Janpath, Barakhamba, Mandi House, ITO) •{' '}
              <Link href="/delhi/dwarka">Dwarka</Link> (Sector 1-23, Dwarka Mor, Uttam Nagar) •{' '}
              <Link href="/delhi/rohini">Rohini</Link> (Sector 1-28, Pitampura, Shalimar Bagh, Ashok Vihar, NSP) •{' '}
              <Link href="/delhi/hauz-khas">Hauz Khas</Link> (Green Park, Safdarjung, Gulmohar Park, Panchsheel) •{' '}
              <Link href="/delhi/greater-kailash">Greater Kailash</Link> (GK1, GK2, CR Park, Kailash Colony, Alaknanda) •{' '}
              <Link href="/delhi/karol-bagh">Karol Bagh</Link> (Patel Nagar, Rajendra Place, Gole Market) •{' '}
              <Link href="/delhi/rajouri-garden">Rajouri Garden</Link> (Punjabi Bagh, Kirti Nagar, Tagore Garden) •{' '}
              <Link href="/delhi/mayur-vihar">Mayur Vihar</Link> (Phase 1, 2, 3, IP Extension, Patparganj) •{' '}
              <Link href="/delhi/laxmi-nagar">Laxmi Nagar</Link> (Vikas Marg, Vivek Vihar, Shahdara, Dilshad Garden) •{' '}
              <Link href="/delhi/vasant-kunj">Vasant Kunj</Link> (Vasant Vihar, Munirka, RK Puram, Mahipalpur) •{' '}
              <Link href="/delhi/saket">Saket</Link> (Malviya Nagar, Sheikh Sarai, Pushp Vihar)
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; 2026 VapeeShopDelhi.com (Vape Shop Delhi). All Rights Reserved. Engineered for #1 Google Search Visibility.</p>
          <p className="legal-links">
            <Link href="/#seo-guide">Delhi Vape Guide</Link> •{' '}
            <Link href="/#faq">FAQ</Link> •{' '}
            <Link href="#navbar">Back to Top ↑</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
