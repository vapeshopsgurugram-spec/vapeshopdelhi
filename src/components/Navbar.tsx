'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <>
      {/* COMPACT TOP ANNOUNCEMENT BAR */}
      <header className="bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 border-b border-white/5 py-1.5 px-3 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-slate-300 font-medium truncate text-[11px] sm:text-xs">
            <span className="text-amber-400 shrink-0">⚡</span>
            <span className="font-bold text-white">Delhi Express:</span>
            <span className="truncate">45-Min Delivery in Delhi NCR • COD Available</span>
          </div>
          <div className="hidden md:flex items-center gap-2.5">
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
              🔥 100% Genuine
            </span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              🛡️ COD Available
            </span>
            <a
              href="https://wa.me/918816964412"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-slate-300 hover:text-white font-medium"
            >
              WhatsApp: <strong className="text-emerald-400">+91 8816964412</strong>
            </a>
          </div>
        </div>
      </header>

      {/* SLEEK GLASS NAVBAR */}
      <nav className="sticky top-0 z-40 bg-obsidian-950/85 backdrop-blur-xl border-b border-white/10 px-3 sm:px-6 py-2 sm:py-3 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group" aria-label="Vape Shop Delhi Home">
            <img
              src="/logo.png"
              alt="Vape Shop Delhi Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-cover shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform shrink-0"
              width={40}
              height={40}
            />
            <span className="font-heading font-black text-sm sm:text-lg tracking-tight text-white whitespace-nowrap">
              VAPE SHOP <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-electric">DELHI</span>
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/#products" className="hover:text-brand-cyan transition-colors">
              Products
            </Link>
            {/* DELHI AREAS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button
                className="hover:text-brand-cyan transition-colors flex items-center gap-1 cursor-pointer py-1"
                aria-expanded={areasOpen}
              >
                Delhi Areas ▾
              </button>
              {areasOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-obsidian-900 border border-white/10 rounded-2xl p-3 min-w-[240px] z-50 shadow-2xl backdrop-blur-2xl mt-2 grid grid-cols-2 gap-1 animate-fadeIn">
                  <Link href="/delhi/south-delhi" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 South Delhi</Link>
                  <Link href="/delhi/connaught-place" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 CP</Link>
                  <Link href="/delhi/hauz-khas" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 Hauz Khas</Link>
                  <Link href="/delhi/greater-kailash" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 GK</Link>
                  <Link href="/delhi/saket" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 Saket</Link>
                  <Link href="/delhi/dwarka" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 Dwarka</Link>
                  <Link href="/delhi/rohini" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 Rohini</Link>
                  <Link href="/delhi/karol-bagh" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 Karol Bagh</Link>
                  <Link href="/delhi/rajouri-garden" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 Rajouri</Link>
                  <Link href="/delhi/mayur-vihar" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 Mayur Vihar</Link>
                  <Link href="/delhi/vasant-kunj" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 Vasant Kunj</Link>
                  <Link href="/delhi/laxmi-nagar" className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">📍 Laxmi Nagar</Link>
                </div>
              )}
            </div>
            <Link href="/#why-us" className="hover:text-brand-cyan transition-colors">
              Why #1
            </Link>
            <Link href="/#faq" className="hover:text-brand-cyan transition-colors">
              FAQ
            </Link>
            <Link href="/#seo-guide" className="hover:text-brand-cyan transition-colors">
              Delhi Guide
            </Link>
          </div>

          {/* SLEEK NAVBAR CTA */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/918816964412?text=Hi%20Vape%20Shop%20Delhi%2C%20I%20want%20to%20order%20vapes%20in%20Delhi"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-glow-whatsapp active:scale-95 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
