'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <header className="top-announcement">
        <div className="container announcement-flex">
          <span>
            ⚡ <strong>Delhi Express Dispatch:</strong> 2-Hour Delivery in South Delhi, West Delhi, CP & NCR | WhatsApp: <strong>+91 98765 43210</strong>
          </span>
          <div className="announcement-tags">
            <span className="badge-pill">🔥 100% Genuine Certified</span>
            <span className="badge-pill">🛡️ Sealed Box Guarantee</span>
          </div>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="navbar" id="navbar">
        <div className="container nav-container">
          <Link href="/" className="brand-logo" aria-label="Vape Shop Delhi Home">
            <img
              src="/logo.png"
              alt="Vape Shop Delhi Logo"
              className="logo-img"
              width={42}
              height={42}
            />
            <span className="logo-text">
              VAPE SHOP <span className="text-accent">DELHI</span>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/#products">Products</Link>
            <Link href="/#categories">Categories</Link>
            <Link href="/#delhi-locations">Delhi NCR Hubs</Link>
            <Link href="/#why-us">Why #1</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#seo-guide">Delhi Guide</Link>
          </div>

          <div className="nav-cta">
            <a
              href="https://wa.me/919876543210?text=Hi%20Vape%20Shop%20Delhi%2C%20I%20want%20to%20order%20vapes%20in%20Delhi"
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>Order On WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
