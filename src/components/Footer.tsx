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
            <strong>VapeeShopDelhi.com</strong> is Delhi & Gurgaon&apos;s premier verified retailer for high-grade disposable pod systems, refillable kits, authentic coil replacements, and imported e-liquids. Same-day express dispatch across Delhi NCR.
          </p>
          <div className="footer-contact">
            <p>📞 <strong>Helpline & WhatsApp:</strong> +91 98765 43210</p>
            <p>🕒 <strong>Dispatch Hours:</strong> 10:00 AM – 11:00 PM (All 7 Days)</p>
            <p>⚡ <strong>Delivery SLA:</strong> 45 - 90 Mins (Delhi & Gurgaon Express)</p>
            <p>🌐 <strong>Official Website:</strong> vapeeshopdelhi.com</p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Delhi NCR Delivery Hubs</h4>
          <ul className="footer-links">
            <li><Link href="/#delhi-locations">Vape Shop South Delhi (GK, Saket, Def Col)</Link></li>
            <li><Link href="/#delhi-locations">Vape Store Connaught Place (CP Central)</Link></li>
            <li><Link href="/#delhi-locations">Vape Delivery Hauz Khas & Green Park</Link></li>
            <li><Link href="/#delhi-locations">Vape Shop Saket & Malviya Nagar</Link></li>
            <li><Link href="/#delhi-locations">Vape Shop Dwarka & Rajouri Garden</Link></li>
            <li><Link href="/#delhi-locations">Same Day Vape Delivery Noida & Indirapuram</Link></li>
            <li><Link href="/#delhi-locations">Vape Store Gurgaon DLF Cyber City</Link></li>
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
              <Link href="/#products">vape store in delhi</Link>
              <span className="sep">•</span>
              <Link href="/#products">buy vape delhi</Link>
              <span className="sep">•</span>
              <Link href="/#products">disposable vape delhi</Link>
              <span className="sep">•</span>
              <Link href="/#products">vape store gurgaon</Link>
              <span className="sep">•</span>
              <Link href="/#products">best vape shop near me delhi</Link>
              <span className="sep">•</span>
              <Link href="/#products">vape delivery delhi same day</Link>
              <span className="sep">•</span>
              <Link href="/products/elfbar-raya-d2-20000-disposable-pod-device">elfbar raya d2 20000 delhi</Link>
              <span className="sep">•</span>
              <Link href="/products/smok-nord-pod-kit-1100mah">smok nord pod kit gurgaon</Link>
              <span className="sep">•</span>
              <Link href="/products/elfbar-raya-d1-disposable-pod-device-black-gold">elfbar raya d1 black gold</Link>
              <span className="sep">•</span>
              <Link href="/#delhi-locations">vape shop south delhi</Link>
              <span className="sep">•</span>
              <Link href="/#delhi-locations">vape shop connaught place</Link>
              <span className="sep">•</span>
              <Link href="/#delhi-locations">vape delivery gurgaon dlf</Link>
              <span className="sep">•</span>
              <Link href="/#delhi-locations">vape store noida express</Link>
              <span className="sep">•</span>
              <Link href="/#delhi-locations">vape shop dwarka</Link>
              <span className="sep">•</span>
              <Link href="/#products">cash on delivery vape delhi</Link>
              <span className="sep">•</span>
              <Link href="/#products">authentic vape store delhi ncr</Link>
            </div>
          </div>

          <div className="seo-cloud-group" style={{ marginTop: '14px' }}>
            <span className="seo-cloud-title">📍 Express Doorstep Areas in Delhi NCR:</span>
            <p className="seo-area-text">
              Greater Kailash (GK 1 & 2), Hauz Khas, Saket, Green Park, Defence Colony, South Extension, Vasant Kunj, Connaught Place, Patel Nagar, Karol Bagh, Civil Lines, Rajouri Garden, Punjabi Bagh, Janakpuri, Dwarka Sectors 1-23, Rohini, Pitampura, DLF Phase 1-5 Gurugram, Cyber City, Golf Course Road, Sohna Road, Noida Sectors 18, 50, 62, 137, Indirapuram, Vaishali.
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
