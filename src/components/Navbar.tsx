'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <header className="top-announcement">
        <div className="container announcement-flex">
          <span>
            ⚡ <strong>Delhi Express:</strong> 45-Min Delivery in South Delhi, Dwarka, CP, Rohini & All Delhi | WhatsApp: <strong>+91 98765 43210</strong>
          </span>
          <div className="announcement-tags">
            <span className="badge-pill">🔥 100% Genuine Certified</span>
            <span className="badge-pill">🛡️ COD Available in Delhi</span>
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
            {/* DELHI AREAS DROPDOWN */}
            <div
              className="nav-dropdown-wrap"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
              style={{ position: 'relative' }}
            >
              <button
                className="nav-dropdown-btn"
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: '0' }}
                aria-expanded={areasOpen}
              >
                Delhi Areas ▾
              </button>
              {areasOpen && (
                <div className="nav-dropdown-menu" style={{
                  position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)', padding: '12px', minWidth: '220px',
                  zIndex: 999, boxShadow: '0 8px 32px rgba(0,0,0,0.4)', marginTop: '8px'
                }}>
                  <Link href="/delhi/south-delhi" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 South Delhi</Link>
                  <Link href="/delhi/connaught-place" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Connaught Place</Link>
                  <Link href="/delhi/hauz-khas" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Hauz Khas</Link>
                  <Link href="/delhi/greater-kailash" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Greater Kailash</Link>
                  <Link href="/delhi/saket" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Saket</Link>
                  <Link href="/delhi/dwarka" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Dwarka</Link>
                  <Link href="/delhi/rohini" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Rohini</Link>
                  <Link href="/delhi/karol-bagh" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Karol Bagh</Link>
                  <Link href="/delhi/rajouri-garden" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Rajouri Garden</Link>
                  <Link href="/delhi/mayur-vihar" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Mayur Vihar</Link>
                  <Link href="/delhi/vasant-kunj" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Vasant Kunj</Link>
                  <Link href="/delhi/laxmi-nagar" style={{ display: 'block', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '6px' }}>📍 Laxmi Nagar</Link>
                </div>
              )}
            </div>
            <Link href="/#why-us">Why #1</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#seo-guide">Delhi Guide</Link>
          </div>

          <div className="nav-cta">
            <a
              href="https://wa.me/918816964412?text=Hi%20Vape%20Shop%20Delhi%2C%20I%20want%20to%20order%20vapes%20in%20Delhi"
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

