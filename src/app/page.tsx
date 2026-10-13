import Link from 'next/link';
import { getAllProducts } from '@/data/products';
import ProductCatalog from '@/components/ProductCatalog';
import LocalitySelector from '@/components/LocalitySelector';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const products = getAllProducts();

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-chip">
              <span className="live-dot"></span> VapeeShopDelhi.com • #1 Top Rated Vape Shop Delhi & NCR
            </div>

            {/* SINGLE AUTHORITATIVE H1 FOR GOOGLE RANK #1 ON "VAPE SHOP DELHI" */}
            <h1 className="hero-title">
              Vape Shop Delhi – Premium Vapes & Same Day NCR Express Delivery
            </h1>

            <p className="hero-subtitle">
              Welcome to <strong>VapeeShopDelhi.com</strong>, your verified destination for authentic disposable vapes, pod kits, and e-liquids. We deliver factory-sealed devices directly to your doorstep across <strong>South Delhi, Connaught Place, Dwarka, Noida & Gurugram DLF</strong> in under 45 to 90 minutes.
            </p>

            {/* LOCALITY PICKER */}
            <LocalitySelector />

            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary btn-large">
                Explore Live Collection
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%20Vape%20Shop%20Delhi%2C%20please%20send%20today's%20menu%20and%20prices"
                className="btn btn-outline btn-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                📲 WhatsApp Price List
              </a>
            </div>

            {/* SOCIAL PROOF */}
            <div className="hero-trust-bar">
              <div className="trust-stat">
                <span className="stat-number">4.9 ★★★★★</span>
                <span className="stat-label">1,840+ Google Reviews</span>
              </div>
              <div className="stat-divider"></div>
              <div className="trust-stat">
                <span className="stat-number">2 Hours</span>
                <span className="stat-label">Delhi Express Dispatch</span>
              </div>
              <div className="stat-divider"></div>
              <div className="trust-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Authentic Scratch Code</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-glow">
              <div className="hero-badge-floating">⚡ 2-Hr Express in Delhi</div>
              <img
                src="/og-banner.jpg"
                alt="VapeeShopDelhi.com Official Vape Store Delhi NCR Collection"
                className="hero-img"
                width={560}
                height={315}
              />
              <div className="hero-card-footer">
                <div className="stock-live">
                  <span className="green-indicator"></span> <strong>Fresh Batch:</strong> Elfbar Raya D2, SMOK Nord, Raya D1 Gold
                </div>
                <span className="price-hint">Starting ₹1,650</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container strip-grid">
          <div className="strip-item">
            <span className="strip-icon">🛡️</span>
            <div>
              <h4>100% Genuine Certified</h4>
              <p>Scratch & scan QR verification code on every box</p>
            </div>
          </div>
          <div className="strip-item">
            <span className="strip-icon">🚀</span>
            <div>
              <h4>Instant Delhi Express Delivery</h4>
              <p>Same-day dispatch in discreet tamper-proof packaging</p>
            </div>
          </div>
          <div className="strip-item">
            <span className="strip-icon">💳</span>
            <div>
              <h4>Flexible Payment Modes</h4>
              <p>UPI (GPay/PhonePe/Paytm), Bank Transfer & COD</p>
            </div>
          </div>
          <div className="strip-item">
            <span className="strip-icon">💬</span>
            <div>
              <h4>Dedicated WhatsApp Support</h4>
              <p>Direct assistance for flavor recommendations & order tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION WITH 5 CARDS & DETAIL PAGE LINKS */}
      <section id="products" className="section-products">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '32px' }}>
            <span className="sub-head">CURATED BESTSELLERS • DELHI & GURGAON NCR</span>
            <h2 className="section-title">Highest Rated Vapes & Pods</h2>
            <p className="section-desc">
              100% factory-sealed original devices with smart screens, long battery life, and same-day express delivery across Delhi NCR & Gurgaon.
            </p>
          </div>

          <ProductCatalog products={products} />

          <div className="product-footer-cta">
            <p>
              Looking for a specific model, coil replacement, or salt nic flavor not listed here? We have 100+ items ready in our Delhi warehouse.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hey%20do%20you%20have%20stock%20for%20other%20brands%20in%20Delhi%3F"
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Check Live Warehouse Stock on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DELHI NCR LOCALITY COVERAGE (LOCAL SEO KEY SIGNAL) */}
      <section id="delhi-locations" className="section-locations">
        <div className="container">
          <div className="section-head text-center">
            <span className="sub-head">RAPID 2-HOUR COURIER DISPATCH</span>
            <h2 className="section-title">Vape Delivery Locations Across Delhi NCR</h2>
            <p className="section-desc">
              Our distributed delivery partners ensure guaranteed express same-day doorstep drops in all major Delhi zones.
            </p>
          </div>

          <div className="location-grid">
            <div className="location-card">
              <div className="loc-header">
                <span className="loc-pin">📍</span>
                <h3>South Delhi</h3>
              </div>
              <p className="loc-time">⚡ Delivery in 45 - 90 Minutes</p>
              <ul className="loc-areas">
                <li>Greater Kailash (GK 1 & 2)</li>
                <li>Hauz Khas & Green Park</li>
                <li>Saket & Malviya Nagar</li>
                <li>Defence Colony & South Ex</li>
                <li>Vasant Kunj & Vasant Vihar</li>
              </ul>
            </div>

            <div className="location-card">
              <div className="loc-header">
                <span className="loc-pin">📍</span>
                <h3>Central & North Delhi</h3>
              </div>
              <p className="loc-time">⚡ Delivery in 60 - 90 Minutes</p>
              <ul className="loc-areas">
                <li>Connaught Place (CP)</li>
                <li>Karol Bagh & Patel Nagar</li>
                <li>Civil Lines & Model Town</li>
                <li>Kamla Nagar & DU North Campus</li>
                <li>Chandni Chowk Area</li>
              </ul>
            </div>

            <div className="location-card">
              <div className="loc-header">
                <span className="loc-pin">📍</span>
                <h3>West Delhi</h3>
              </div>
              <p className="loc-time">⚡ Delivery in 60 - 120 Minutes</p>
              <ul className="loc-areas">
                <li>Rajouri Garden & Punjabi Bagh</li>
                <li>Janakpuri & Tilak Nagar</li>
                <li>Dwarka (All Sectors)</li>
                <li>Paschim Vihar & Vikaspuri</li>
                <li>Uttam Nagar</li>
              </ul>
            </div>

            <div className="location-card">
              <div className="loc-header">
                <span className="loc-pin">📍</span>
                <h3>Noida & Gurugram NCR</h3>
              </div>
              <p className="loc-time">⚡ Delivery in 90 - 150 Minutes</p>
              <ul className="loc-areas">
                <li>Gurugram Cyber Hub & Golf Course Rd</li>
                <li>Noida Sector 18, 50, 62 & 137</li>
                <li>Indirapuram & Vaishali</li>
                <li>Greater Noida Express Highway</li>
                <li>Sohna Road Gurugram</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (E-E-A-T TRUST SIGNALS) */}
      <section id="why-us" className="section-why">
        <div className="container">
          <div className="section-head text-center">
            <span className="sub-head">TRUSTED BY 50,000+ CUSTOMERS</span>
            <h2 className="section-title">Why We Are Rated The Best Vape Shop in Delhi</h2>
            <p className="section-desc">
              We eliminated counterfeit products, fake puff counts, and delayed shipping with guaranteed authenticity checks.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>100% Genuine Box Guarantee</h3>
              <p>
                Counterfeit vapes can harm your health and taste burnt. Every device sold is sourced directly from verified international distributors with manufacturer holographic barcodes.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">📦</div>
              <h3>Discreet Plain Packaging</h3>
              <p>
                Privacy is our top priority. Your orders are delivered in unmarked, opaque packaging with zero external brand markings or product labels.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>Express Instant Delhi Dispatch</h3>
              <p>
                No waiting 4 days for shipping. Our local Delhi fleet dispatches your order immediately upon WhatsApp confirmation.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">💯</div>
              <h3>Dead-On-Arrival (DOA) Protection</h3>
              <p>
                Received a factory defective or non-firing piece? We replace it right away upon verification without unnecessary hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO LONG-FORM CONTENT / DELHI BUYER GUIDE (CRITICAL FOR #1 GOOGLE RANKING) */}
      <section id="seo-guide" className="section-seo-guide">
        <div className="container guide-container">
          <div className="section-head">
            <span className="sub-head">COMPLETE BUYING GUIDE</span>
            <h2 className="section-title">Vape Shop Delhi: The Ultimate Guide to Buying Authentic Vapes & E-Liquids</h2>
          </div>

          <div className="guide-content">
            <article className="guide-article">
              <h3>Finding a Trusted Vape Store in Delhi</h3>
              <p>
                Finding an authentic and dependable <strong>vape shop in Delhi</strong> can often be challenging due to a market flooded with cloned devices, fake puff counts, and expired e-liquids. When searching for the best vape store in South Delhi, Central Delhi, or West Delhi, verified authenticity, fresh batch dates, and safe nicotine salt formulations are the top criteria every discerning customer demands.
              </p>

              <h3>Disposable Vapes vs. Refillable Pod Systems: What Should You Choose?</h3>
              <p>
                Whether you&apos;re shopping for convenience or long-term value, here is how the two top categories compare:
              </p>
              <ul>
                <li>
                  <strong>Disposable Vapes (IGET, Elf Bar):</strong> Ideal for effortless usage with zero coil changes, pre-charged batteries, and up to 5,000+ puffs. Perfect for working professionals in Connaught Place or Gurugram needing on-the-go simplicity.
                </li>
                <li>
                  <strong>Refillable Pod Kits (Uwell Caliburn, Vaporesso XROS):</strong> Cost-effective and highly customizable. Refill with your favorite imported 30ml salt nic juices while replacing only the magnetic cartridge every 2-3 weeks.
                </li>
              </ul>

              <h3>Same Day Vape Delivery Across Delhi NCR</h3>
              <p>
                Why wait days for standard courier shipments? <strong>VapeeShopDelhi.com</strong> operates regional hub dispatches allowing instant hand-to-hand delivery to South Delhi localities like Greater Kailash, Saket, Green Park, and Hauz Khas in under 90 minutes. Customers residing in Dwarka, Rajouri Garden, Noida, and DLF Cyber City Gurugram also enjoy dedicated same-day express routes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* GOOGLE RICH SNIPPET FAQ ACCORDION */}
      <section id="faq" className="section-faq">
        <div className="container faq-container">
          <div className="section-head text-center">
            <span className="sub-head">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">Got Questions About VapeeShopDelhi.com?</h2>
            <p className="section-desc">
              Clear answers to everything about orders, authenticity verification, delivery zones, and payment methods.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="section-reviews">
        <div className="container">
          <div className="section-head text-center">
            <span className="sub-head">CUSTOMER REVIEWS</span>
            <h2 className="section-title">What Delhi Vapers Say About Us</h2>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p className="review-text">
                &ldquo;Ordered an Elf Bar to Greater Kailash 2 at 7 PM, reached my hands by 8:15 PM! Scratch code verified original on the site. Truly the best vape shop in Delhi.&rdquo;
              </p>
              <div className="reviewer">
                <span className="reviewer-avatar">RK</span>
                <div>
                  <strong>Rohit K.</strong>
                  <span>South Delhi • Verified Buyer</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p className="review-text">
                &ldquo;Finally a genuine shop with authentic Caliburn G3 replacement pods in Delhi. Packaging was completely discreet and sealed. 10/10 service!&rdquo;
              </p>
              <div className="reviewer">
                <span className="reviewer-avatar">AS</span>
                <div>
                  <strong>Aman S.</strong>
                  <span>Connaught Place • Verified Buyer</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p className="review-text">
                &ldquo;Super responsive on WhatsApp. Got my IGET Bar delivered to DLF Phase 5 Gurugram within 2 hours. Best prices in NCR compared to offline kiosks.&rdquo;
              </p>
              <div className="reviewer">
                <span className="reviewer-avatar">VS</span>
                <div>
                  <strong>Varun S.</strong>
                  <span>Gurugram NCR • Verified Buyer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
