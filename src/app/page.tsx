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
              <span className="live-dot"></span> Delhi's #1 Rated Authentic Vape Shop
            </div>

            {/* SINGLE AUTHORITATIVE H1 FOR GOOGLE RANK #1 ON "VAPE SHOP DELHI" */}
            <h1 className="hero-title">
              Vape Shop Delhi – Buy Authentic Vapes with 45-Min Express Delivery in Delhi
            </h1>

            <p className="hero-subtitle">
              Welcome to <strong>VapeeShopDelhi.com</strong> — Delhi's most trusted vape shop for 100% authentic disposable vapes, pod kits & nic salts. We deliver factory-sealed devices directly to your doorstep across <strong>South Delhi, Connaught Place, Dwarka, Rohini, Hauz Khas & all of Delhi</strong> in 45 minutes.
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
              <div className="hero-badge-floating">⚡ 45-Min Express in Delhi</div>
              <img
                src="/og-banner.jpg"
                alt="VapeeShopDelhi.com - Best Vape Shop in Delhi, Official Collection"
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
            <span className="sub-head">CURATED BESTSELLERS • DELHI'S TOP PICKS</span>
            <h2 className="section-title">Best Vapes to Buy in Delhi — 100% Authentic</h2>
            <p className="section-desc">
              100% factory-sealed original devices with smart screens, long battery life, and same-day 45-min express delivery across all Delhi zones — South, Central, West & North Delhi.
            </p>
          </div>

          <ProductCatalog products={products} />

          <div className="product-footer-cta">
            <p>
              Looking for a specific model, coil, or salt nic flavor not listed? We stock 100+ items at our Delhi warehouse — Elfbar, SMOK, Uwell, Vaporesso & more!
            </p>
            <a
              href="https://wa.me/919876543210?text=Hello%20Vape%20Shop%20Delhi%21%20I%20want%20to%20see%20the%20full%20menu%20of%20available%20products%20for%20delivery%20in%20Delhi."
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp for Full Delhi Stock Menu
            </a>
          </div>
        </div>
      </section>

      {/* DELHI NCR LOCALITY COVERAGE (LOCAL SEO KEY SIGNAL) */}
      <section id="delhi-locations" className="section-locations">
        <div className="container">
          <div className="section-head text-center">
            <span className="sub-head">45-MIN EXPRESS DELIVERY IN DELHI</span>
            <h2 className="section-title">Vape Shop Delhi — We Deliver to Every Zone in Delhi</h2>
            <p className="section-desc">
              From South Delhi to North Delhi, West to East — our express delivery partners cover every corner of Delhi in 45–90 minutes. Same-day, doorstep, discreet.
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
                <h3>East & North-East Delhi</h3>
              </div>
              <p className="loc-time">⚡ Delivery in 60 - 90 Minutes</p>
              <ul className="loc-areas">
                <li>Laxmi Nagar & Preet Vihar</li>
                <li>Mayur Vihar (Phase 1, 2 & 3)</li>
                <li>Patparganj & IP Extension</li>
                <li>Shahdara & Dilshad Garden</li>
                <li>Vivek Vihar & Anand Vihar</li>
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

      {/* SEO LONG-FORM CONTENT / DELHI BUYER GUIDE (CRITICAL FOR TOP 5 GOOGLE RANKING) */}
      <section id="seo-guide" className="section-seo-guide">
        <div className="container guide-container">
          <div className="section-head">
            <span className="sub-head">DELHI VAPER'S COMPLETE GUIDE</span>
            <h2 className="section-title">Best Vape Shop in Delhi: Complete Guide to Buying Authentic Vapes in Delhi</h2>
          </div>

          <div className="guide-content">
            <article className="guide-article">
              <h3>Why VapeeShopDelhi.com is Delhi's Most Trusted Vape Store</h3>
              <p>
                If you&apos;re searching for a reliable <strong>vape shop in Delhi</strong>, VapeeShopDelhi.com is your #1 choice. Delhi&apos;s market is filled with counterfeit devices, fake puff counts, and expired e-liquids — but every product we sell comes with a holographic scratch verification code so you can confirm 100% authenticity before using. We serve all of Delhi: <strong>South Delhi, Central Delhi, West Delhi, North Delhi & East Delhi</strong>.
              </p>

              <h3>Buy Vapes in Delhi — Disposable vs. Refillable Pod Systems</h3>
              <p>
                Not sure what to buy? Here is a quick comparison for Delhi vapers:
              </p>
              <ul>
                <li>
                  <strong>Disposable Vapes (Elfbar Raya D2, D1 Black Gold):</strong> Perfect for beginners and busy Delhi professionals. Zero maintenance, pre-charged, up to 20,000 puffs. Available for same-day delivery across all Delhi areas.
                </li>
                <li>
                  <strong>Refillable Pod Kits (SMOK Nord 1100mAh):</strong> Best value for regular Delhi vapers. Refill with imported nic salt juices. Coils last 2–3 weeks. Order with 45-min delivery in Delhi.
                </li>
              </ul>

              <h3>45-Min Same Day Vape Delivery Across All Delhi Areas</h3>
              <p>
                No more waiting 3–5 days for online orders! <strong>VapeeShopDelhi.com</strong> delivers vapes same-day, directly to your door anywhere in Delhi. South Delhi areas like <strong>Greater Kailash, Hauz Khas, Saket & Defence Colony</strong> get delivery in 45 minutes. Central Delhi like <strong>Connaught Place & Karol Bagh</strong> in 60 minutes. West Delhi areas like <strong>Dwarka, Rajouri Garden & Janakpuri</strong> in 90 minutes. East Delhi areas like <strong>Mayur Vihar & Laxmi Nagar</strong> in 60–90 minutes.
              </p>

              <h3>How to Order Vapes in Delhi — Simple 3-Step Process</h3>
              <p>
                Ordering your vape in Delhi is super easy with VapeeShopDelhi.com:
              </p>
              <ul>
                <li><strong>Step 1:</strong> Browse our Delhi vape collection and pick your product & flavor above.</li>
                <li><strong>Step 2:</strong> Click &ldquo;Order on WhatsApp&rdquo; — share your Delhi delivery address.</li>
                <li><strong>Step 3:</strong> Our Delhi delivery partner dispatches within 30 minutes. Pay via UPI or COD on delivery.</li>
              </ul>

              <h3>Cash on Delivery (COD) Vapes Available in Delhi</h3>
              <p>
                VapeeShopDelhi.com is one of the very few <strong>vape shops in Delhi</strong> that offers Cash on Delivery (COD) across most Delhi pin codes. You can also pay via Google Pay, PhonePe, Paytm, or BHIM UPI. No advance payment required for most Delhi areas.
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
                &ldquo;Ordered Elfbar Raya D2 to Mayur Vihar Phase 1 at 9 PM, arrived by 10:10 PM! Packaging was 100% discreet. Best vape shop in Delhi, no doubt!&rdquo;
              </p>
              <div className="reviewer">
                <span className="reviewer-avatar">NK</span>
                <div>
                  <strong>Nikhil K.</strong>
                  <span>East Delhi • Verified Buyer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
