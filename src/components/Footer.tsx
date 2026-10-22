import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-obsidian-950 border-t border-white/10 pt-12 pb-24 sm:pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* BRAND COLUMN */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 group" aria-label="Vape Shop Delhi Home">
              <img
                src="/logo.png"
                alt="Vape Shop Delhi Logo"
                className="w-9 h-9 rounded-xl object-cover shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform shrink-0"
                width={36}
                height={36}
              />
              <span className="font-heading font-black text-base tracking-tight text-white">
                VAPE SHOP <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-electric">DELHI</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              <strong className="text-white">VapeeShopDelhi.com</strong> is Delhi&apos;s #1 verified retailer for 100% authentic disposable vapes, Elfbar pods, SMOK pod kits, and imported nic salts. Same-day 45-min express delivery across all Delhi zones.
            </p>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>📞 <strong>WhatsApp:</strong> +91 88169 64412</p>
              <p>🕒 <strong>Hours:</strong> 10:00 AM – 11:00 PM (All 7 Days)</p>
              <p>⚡ <strong>Delivery:</strong> 45 - 90 Mins Express Same Day</p>
            </div>
          </div>

          {/* DELIVERY AREAS */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white mb-3.5 tracking-tight">
              All 18 Delhi NCR Delivery Areas (45-60 Min Express)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1.5 text-xs">
              <Link href="/delhi/south-delhi" className="hover:text-brand-cyan transition-colors">Vape Shop South Delhi</Link>
              <Link href="/delhi/greater-kailash" className="hover:text-brand-cyan transition-colors">Vape Shop Greater Kailash</Link>
              <Link href="/delhi/saket" className="hover:text-brand-cyan transition-colors">Vape Shop Saket</Link>
              <Link href="/delhi/hauz-khas" className="hover:text-brand-cyan transition-colors">Vape Shop Hauz Khas</Link>
              <Link href="/delhi/vasant-kunj" className="hover:text-brand-cyan transition-colors">Vape Shop Vasant Kunj</Link>
              <Link href="/delhi/connaught-place" className="hover:text-brand-cyan transition-colors">Vape Shop Connaught Place</Link>
              <Link href="/delhi/karol-bagh" className="hover:text-brand-cyan transition-colors">Vape Shop Karol Bagh</Link>
              <Link href="/delhi/dwarka" className="hover:text-brand-cyan transition-colors">Vape Shop Dwarka</Link>
              <Link href="/delhi/rajouri-garden" className="hover:text-brand-cyan transition-colors">Vape Shop Rajouri Garden</Link>
              <Link href="/delhi/punjabi-bagh" className="hover:text-brand-cyan transition-colors">Vape Shop Punjabi Bagh</Link>
              <Link href="/delhi/janakpuri" className="hover:text-brand-cyan transition-colors">Vape Shop Janakpuri</Link>
              <Link href="/delhi/rohini" className="hover:text-brand-cyan transition-colors">Vape Shop Rohini</Link>
              <Link href="/delhi/pitampura" className="hover:text-brand-cyan transition-colors">Vape Shop Pitampura</Link>
              <Link href="/delhi/mayur-vihar" className="hover:text-brand-cyan transition-colors">Vape Shop Mayur Vihar</Link>
              <Link href="/delhi/laxmi-nagar" className="hover:text-brand-cyan transition-colors">Vape Shop Laxmi Nagar</Link>
              <Link href="/delhi/aerocity" className="hover:text-brand-cyan transition-colors">⚡ Vape Shop Aerocity 24/7</Link>
              <Link href="/delhi/gurgaon" className="hover:text-brand-cyan transition-colors">Vape Shop Gurgaon</Link>
              <Link href="/delhi/noida" className="hover:text-brand-cyan transition-colors">Vape Shop Noida</Link>
            </div>
          </div>

          {/* TOP SELLERS */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-3.5 tracking-tight">
              Top Selling Devices
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/products/elfbar-raya-d2-20000-disposable-pod-device" className="hover:text-brand-cyan transition-colors">Elfbar Raya D2 20000 (Dual Mode)</Link></li>
              <li><Link href="/products/smok-nord-pod-kit-1100mah" className="hover:text-brand-cyan transition-colors">SMOK Nord Pod Kit 1100mAh</Link></li>
              <li><Link href="/products/elfbar-raya-d1-disposable-pod-device-black-gold" className="hover:text-brand-cyan transition-colors">Elfbar Raya D1 (Black Gold 13K)</Link></li>
              <li><Link href="/#products" className="hover:text-brand-cyan transition-colors">Disposable Pod Devices Delhi</Link></li>
              <li><Link href="/#products" className="hover:text-brand-cyan transition-colors">Refillable Pod Kits Delhi NCR</Link></li>
            </ul>
          </div>

          {/* COMPLIANCE */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-3.5 tracking-tight">
              Safety &amp; Compliance
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              <strong className="text-white">Age Restriction:</strong> Products displayed contain nicotine, an addictive chemical. Intended for use by adult smokers of legal age (18+) only. Keep out of reach of children and pets.
            </p>
            <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-[11px]">
              🔞 18+ Strictly Enforced • Genuine Only
            </div>
          </div>
        </div>

        {/* SEO DIRECTORY CLOUD */}
        <div className="pt-8 border-t border-white/5 space-y-4">
          <div>
            <span className="font-bold text-slate-300 block mb-2">🔥 Popular Google Searches:</span>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-slate-400">
              <Link href="/" className="hover:text-brand-cyan">vapeeshopdelhi</Link> •
              <Link href="/" className="hover:text-brand-cyan">vapeeshopdelhi.com</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">vape shop delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">buy vape in delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">disposable vape delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">best vape shop delhi</Link> •
              <Link href="/products/elfbar-raya-d2-20000-disposable-pod-device" className="hover:text-brand-cyan">elfbar raya d2 delhi</Link> •
              <Link href="/products/smok-nord-pod-kit-1100mah" className="hover:text-brand-cyan">smok nord pod kit delhi</Link> •
              <Link href="/delhi/south-delhi" className="hover:text-brand-cyan">vape shop south delhi</Link> •
              <Link href="/delhi/connaught-place" className="hover:text-brand-cyan">vape shop cp</Link> •
              <Link href="/delhi/dwarka" className="hover:text-brand-cyan">vape shop dwarka</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">cash on delivery vape delhi</Link>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>&copy; 2026 VapeeShopDelhi.com. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/#seo-guide" className="hover:text-brand-cyan">Delhi Guide</Link>
            <Link href="/#faq" className="hover:text-brand-cyan">FAQ</Link>
            <a href="#navbar" className="hover:text-brand-cyan">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
