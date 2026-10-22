import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-obsidian-950 border-t border-white/10 pt-12 pb-24 sm:pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
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
              <strong className="text-white">VapeeShopDelhi.com</strong> is Delhi&apos;s #1 verified retailer for 100% authentic disposable vapes, Elfbar pods, SMOK pod kits, and imported nic salts. Same-day 45-min express delivery across all Delhi zones with Cash on Delivery (COD).
            </p>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>📞 <strong>WhatsApp:</strong> +91 88169 64412</p>
              <p>🕒 <strong>Hours:</strong> 10:00 AM – 11:00 PM (All 7 Days)</p>
              <p>⚡ <strong>Delivery:</strong> 45 - 90 Mins Express Doorstep Delivery</p>
              <p>🛡️ <strong>Payment:</strong> Cash on Delivery (COD) &amp; Instant UPI</p>
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
              Top Selling Devices in Delhi
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/products/elfbar-raya-d2-20000-disposable-pod-device" className="hover:text-brand-cyan transition-colors">Elfbar Raya D2 20000 (Dual Mode)</Link></li>
              <li><Link href="/products/smok-nord-pod-kit-1100mah" className="hover:text-brand-cyan transition-colors">SMOK Nord Pod Kit 1100mAh</Link></li>
              <li><Link href="/products/elfbar-raya-d1-disposable-pod-device-black-gold" className="hover:text-brand-cyan transition-colors">Elfbar Raya D1 (Black Gold 13K)</Link></li>
              <li><Link href="/#products" className="hover:text-brand-cyan transition-colors">Disposable Pod Devices Delhi</Link></li>
              <li><Link href="/#products" className="hover:text-brand-cyan transition-colors">Refillable Pod Kits Delhi NCR</Link></li>
              <li><Link href="/#products" className="hover:text-brand-cyan transition-colors">Imported Nic Salt Juices Delhi</Link></li>
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

        {/* COMPREHENSIVE DELHI SEO SEARCH DIRECTORY */}
        <div className="pt-8 border-t border-white/10 space-y-5">
          {/* SECTION 1: PRIMARY HIGH-VOLUME DELHI SEARCHES */}
          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <span className="text-brand-cyan">🔍</span>
              <span>Popular Google Searches for Vape Shop Delhi:</span>
            </h5>
            <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-[11px] text-slate-400 leading-relaxed">
              <Link href="/" className="hover:text-brand-cyan font-medium text-slate-300">vape shop delhi</Link> •
              <Link href="/" className="hover:text-brand-cyan font-medium text-slate-300">vape shop in delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">buy vape in delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">best vape shop delhi</Link> •
              <Link href="/" className="hover:text-brand-cyan">vape store delhi</Link> •
              <Link href="/" className="hover:text-brand-cyan">vape store in delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">vape delivery delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">same day vape delivery delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">45 min vape delivery delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan font-medium text-emerald-400">cash on delivery vape delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">vape cod delhi</Link> •
              <Link href="/" className="hover:text-brand-cyan">vape shop near me delhi</Link> •
              <Link href="/" className="hover:text-brand-cyan">vape shop open now delhi</Link> •
              <Link href="/delhi/aerocity" className="hover:text-brand-cyan">late night vape delivery delhi</Link> •
              <Link href="/delhi/aerocity" className="hover:text-brand-cyan">24 hour vape delivery delhi</Link> •
              <Link href="/" className="hover:text-brand-cyan">online vape shop delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">authentic vape store delhi</Link> •
              <Link href="/" className="hover:text-brand-cyan">vapeeshopdelhi</Link> •
              <Link href="/" className="hover:text-brand-cyan">vapeeshopdelhi.com</Link>
            </div>
          </div>

          {/* SECTION 2: DELHI LOCALITY HUBS & PIN CODES */}
          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <span className="text-amber-400">📍</span>
              <span>Delhi Locality &amp; Neighborhood Search Hub:</span>
            </h5>
            <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-[11px] text-slate-400 leading-relaxed">
              <Link href="/delhi/south-delhi" className="hover:text-brand-cyan">vape shop south delhi (110048)</Link> •
              <Link href="/delhi/greater-kailash" className="hover:text-brand-cyan">vape shop greater kailash 1 &amp; 2</Link> •
              <Link href="/delhi/saket" className="hover:text-brand-cyan">vape shop saket (110017)</Link> •
              <Link href="/delhi/hauz-khas" className="hover:text-brand-cyan">vape shop hauz khas (110016)</Link> •
              <Link href="/delhi/vasant-kunj" className="hover:text-brand-cyan">vape shop vasant kunj (110070)</Link> •
              <Link href="/delhi/south-delhi" className="hover:text-brand-cyan">vape shop defence colony</Link> •
              <Link href="/delhi/south-delhi" className="hover:text-brand-cyan">vape shop green park</Link> •
              <Link href="/delhi/south-delhi" className="hover:text-brand-cyan">vape shop malviya nagar</Link> •
              <Link href="/delhi/connaught-place" className="hover:text-brand-cyan">vape shop connaught place (110001)</Link> •
              <Link href="/delhi/connaught-place" className="hover:text-brand-cyan">vape shop cp delhi</Link> •
              <Link href="/delhi/karol-bagh" className="hover:text-brand-cyan">vape shop karol bagh (110005)</Link> •
              <Link href="/delhi/dwarka" className="hover:text-brand-cyan">vape shop dwarka (110075)</Link> •
              <Link href="/delhi/dwarka" className="hover:text-brand-cyan">vape delivery dwarka expressway</Link> •
              <Link href="/delhi/rohini" className="hover:text-brand-cyan">vape shop rohini (110085)</Link> •
              <Link href="/delhi/pitampura" className="hover:text-brand-cyan">vape shop pitampura nsp (110034)</Link> •
              <Link href="/delhi/rajouri-garden" className="hover:text-brand-cyan">vape shop rajouri garden (110027)</Link> •
              <Link href="/delhi/punjabi-bagh" className="hover:text-brand-cyan">vape shop punjabi bagh (110026)</Link> •
              <Link href="/delhi/janakpuri" className="hover:text-brand-cyan">vape shop janakpuri (110058)</Link> •
              <Link href="/delhi/mayur-vihar" className="hover:text-brand-cyan">vape shop mayur vihar (110091)</Link> •
              <Link href="/delhi/laxmi-nagar" className="hover:text-brand-cyan">vape shop laxmi nagar (110092)</Link> •
              <Link href="/delhi/aerocity" className="hover:text-brand-cyan">vape delivery aerocity worldmark (110037)</Link> •
              <Link href="/delhi/gurgaon" className="hover:text-brand-cyan">vape shop gurgaon cyber city</Link> •
              <Link href="/delhi/noida" className="hover:text-brand-cyan">vape shop noida sector 18</Link>
            </div>
          </div>

          {/* SECTION 3: TOP VAPE BRANDS & PRODUCT SEARCHES IN DELHI */}
          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <span className="text-emerald-400">⚡</span>
              <span>Authentic Vape Brands &amp; Devices in Delhi:</span>
            </h5>
            <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-[11px] text-slate-400 leading-relaxed">
              <Link href="/products/elfbar-raya-d2-20000-disposable-pod-device" className="hover:text-brand-cyan">elfbar delhi</Link> •
              <Link href="/products/elfbar-raya-d2-20000-disposable-pod-device" className="hover:text-brand-cyan font-medium text-brand-cyan">elfbar raya d2 20000 delhi</Link> •
              <Link href="/products/elfbar-raya-d1-disposable-pod-device-black-gold" className="hover:text-brand-cyan">elfbar raya d1 black gold delhi</Link> •
              <Link href="/products/smok-nord-pod-kit-1100mah" className="hover:text-brand-cyan">smok nord pod kit delhi</Link> •
              <Link href="/products/smok-nord-pod-kit-1100mah" className="hover:text-brand-cyan">smok vape delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">disposable vapes delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">20000 puffs vape delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">refillable pod kit delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">imported nic salt juices delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">uwell caliburn pods delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">vaporesso xros delhi</Link> •
              <Link href="/#products" className="hover:text-brand-cyan">nicotine vape delhi</Link>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & QUICK NAV */}
        <div className="pt-6 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>&copy; 2026 VapeeShopDelhi.com — Delhi&apos;s #1 Authentic Vape Shop. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/#seo-guide" className="hover:text-brand-cyan">Delhi Vape Guide</Link>
            <Link href="/#faq" className="hover:text-brand-cyan">Delhi FAQ</Link>
            <a href="#navbar" className="hover:text-brand-cyan font-semibold">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
