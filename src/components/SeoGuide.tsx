'use client';

import { useState } from 'react';

export default function SeoGuide() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="seo-guide" className="py-8 sm:py-12 bg-obsidian-900/30 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-obsidian-900/60 border border-white/10 p-4 sm:p-6 backdrop-blur-xl relative overflow-hidden">
          {/* HEADER */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-block text-[10px] sm:text-xs font-extrabold tracking-wider text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full">
              📖 Delhi Vaper&apos;s Complete Guide
            </span>
            <span className="text-[10px] text-slate-400 font-semibold hidden sm:inline">
              100% Genuine • Verified Information
            </span>
          </div>

          <h2 className="font-heading font-black text-lg sm:text-2xl text-white mb-2">
            Best Vape Shop in Delhi: Guide to Buying Authentic Vapes
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            If you&apos;re searching for a reliable <strong className="text-white">vape shop in Delhi</strong>, VapeeShopDelhi.com is your #1 choice. Delhi&apos;s market is filled with counterfeit devices, fake puff counts, and expired e-liquids — but every product we sell comes with a holographic scratch verification code so you can confirm 100% authenticity before using.
          </p>

          {/* 3 COMPACT PILL SUMMARY CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 mb-4">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
              <span className="text-xl shrink-0">🛡️</span>
              <div>
                <h3 className="font-bold text-xs text-white">100% Genuine Code</h3>
                <p className="text-[10px] text-slate-400">Scratch &amp; verify before use</p>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
              <span className="text-xl shrink-0">💨</span>
              <div>
                <h3 className="font-bold text-xs text-white">Disposables &amp; Pods</h3>
                <p className="text-[10px] text-slate-400">Elfbar, SMOK, 20K puffs</p>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
              <span className="text-xl shrink-0">⚡</span>
              <div>
                <h3 className="font-bold text-xs text-white">45-Min Delhi COD</h3>
                <p className="text-[10px] text-slate-400">Late night &amp; NCR delivery</p>
              </div>
            </div>
          </div>

          {/* EXPANDABLE CONTENT CONTAINER */}
          <div
            className={`transition-all duration-500 ease-in-out relative ${
              isExpanded
                ? 'max-h-[1800px] opacity-100 overflow-visible'
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="pt-3 border-t border-white/10 text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
              <h3 className="text-sm sm:text-base font-bold text-white pt-1">
                Buy Vapes in Delhi — Disposable vs. Refillable Pod Systems
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-xs sm:text-sm pl-1">
                <li>
                  <strong className="text-white">Disposable Vapes (Elfbar Raya D2 20000, D1 Gold 13000):</strong> Perfect for beginners and busy professionals across Delhi. Zero maintenance, pre-charged, up to 20,000 puffs with dual-mode airflow.
                </li>
                <li>
                  <strong className="text-white">Refillable Pod Kits (SMOK Nord 1100mAh):</strong> Best value for regular Delhi vapers. Refill with premium imported nic salt juices.
                </li>
              </ul>

              <h3 className="text-sm sm:text-base font-bold text-white pt-1">
                45-Min Same Day Vape Delivery Across All Delhi Areas
              </h3>
              <p>
                Searching for <strong className="text-white">vape delivery in Delhi</strong>? No more waiting 3–5 days! <strong className="text-white">VapeeShopDelhi.com</strong> delivers vapes same-day, directly to your doorstep anywhere in Delhi NCR. South Delhi (Greater Kailash, Saket, Hauz Khas) in 45 min, Central Delhi (Connaught Place, Karol Bagh) in 60 min, West Delhi (Dwarka, Rajouri Garden, Punjabi Bagh) in 60–90 min, and East/North Delhi (Rohini, Pitampura, Mayur Vihar) within 60–90 minutes.
              </p>

              <h3 className="text-sm sm:text-base font-bold text-white pt-1">
                Cash on Delivery (COD) Vape Shop in Delhi
              </h3>
              <p>
                We understand that trust is everything when buying online. That&apos;s why <strong className="text-white">Vape Shop Delhi</strong> offers complete <strong className="text-white">Cash on Delivery (COD)</strong> across all major Delhi pin codes. Inspect your parcel, verify the manufacturer scratch code, and pay with cash or instant UPI (Google Pay, PhonePe, Paytm) upon arrival.
              </p>

              <h3 className="text-sm sm:text-base font-bold text-white pt-1">
                Late Night &amp; 24/7 Vape Delivery Near Me in Delhi
              </h3>
              <p>
                Looking for a <strong className="text-white">vape shop open now near me</strong> in Delhi? We operate 7 days a week with rapid late-night delivery options across major hotspots including Aerocity Worldmark hotels, Connaught Place, Greater Kailash, Cyber City Gurgaon, and Noida Sector 18. Tamper-proof, discreet plain-box packaging guaranteed.
              </p>
            </div>
          </div>

          {/* TOGGLE BUTTON */}
          <div className="pt-3 mt-1 flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-brand-cyan hover:text-white font-bold text-xs transition-all cursor-pointer active:scale-95"
            >
              <span>{isExpanded ? 'Collapse Guide' : 'Read Full Delhi Vape Guide'}</span>
              <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                ↓
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
