import Link from 'next/link';

export default function SeoGuide() {
  return (
    <section id="seo-guide" className="py-10 sm:py-16 bg-obsidian-900/30 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-obsidian-900/70 border border-white/10 p-5 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          {/* HEADER */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold tracking-wider text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/25 px-3 py-1 rounded-full">
              <span>📖</span> Delhi Vaper&apos;s Complete Buying Guide
            </span>
            <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              100% Genuine Box • 45-Min Express Delivery
            </span>
          </div>

          <h2 className="font-heading font-black text-xl sm:text-3xl lg:text-4xl text-white mb-3">
            Best Vape Shop in Delhi: Your Complete Guide to Buying Authentic Vapes
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed mb-6">
            Searching for a trusted, reliable <strong className="text-white font-semibold">vape shop in Delhi</strong>? With thousands of counterfeit devices, expired salt nics, and fake puff counts circulating in local offline markets, finding 100% genuine vaping hardware can be tricky. At <strong className="text-white font-semibold">Vape Shop Delhi (VapeeShopDelhi.com)</strong>, every single device arrives factory-sealed with an official manufacturer holographic scratch verification code, backed by rapid 45-minute doorstep delivery and complete <strong className="text-white font-semibold">Cash on Delivery (COD)</strong> across all Delhi NCR pin codes.
          </p>

          {/* 3 HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-cyan/40 transition-colors">
              <div className="text-2xl sm:text-3xl mb-2">🛡️</div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-1">Manufacturer Scratch Seal</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every Elfbar, SMOK, and pod device includes a holographic scratch code you can verify on the brand&apos;s official site before opening.
              </p>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-cyan/40 transition-colors">
              <div className="text-2xl sm:text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-1">45-Min Express Dispatch</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Riders stationed across South, Central, West, North, and East Delhi ensure hot deliveries in 45–60 minutes, direct to your door.
              </p>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-cyan/40 transition-colors">
              <div className="text-2xl sm:text-3xl mb-2">📦</div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-1">Discreet Plain Packaging</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                100% opaque, unmarked, tamper-evident parcel packaging for complete privacy at your home, office, or hotel in Delhi.
              </p>
            </div>
          </div>

          {/* PRICE COMPARISON TABLE FOR DELHI BUYERS */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-obsidian-950/70 border border-white/10">
            <h3 className="font-heading font-bold text-sm sm:text-lg text-white mb-2 flex items-center gap-2">
              <span>💰</span> Vape Price in Delhi (2026 Live Price List)
            </h3>
            <p className="text-xs text-slate-400 mb-3.5">
              Compare trending disposable vapes and refillable pod kits available for same-day delivery in Delhi:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 text-[11px] sm:text-xs uppercase tracking-wider">
                    <th className="py-2.5 px-3">Device Model</th>
                    <th className="py-2.5 px-3">Puffs / Type</th>
                    <th className="py-2.5 px-3">Delhi Price</th>
                    <th className="py-2.5 px-3">Delivery Time</th>
                    <th className="py-2.5 px-3">Payment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="py-2.5 px-3 font-semibold text-white">Elfbar Raya D2 20000</td>
                    <td className="py-2.5 px-3">20,000 Puffs (Dual Mode)</td>
                    <td className="py-2.5 px-3 text-brand-cyan font-bold">₹1,800</td>
                    <td className="py-2.5 px-3 text-emerald-400 font-medium">⚡ 45 Mins</td>
                    <td className="py-2.5 px-3">Cash on Delivery / UPI</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="py-2.5 px-3 font-semibold text-white">SMOK Nord Pod Kit 1100mAh</td>
                    <td className="py-2.5 px-3">Refillable 3ml Pod System</td>
                    <td className="py-2.5 px-3 text-brand-cyan font-bold">₹3,500</td>
                    <td className="py-2.5 px-3 text-emerald-400 font-medium">⚡ 45-60 Mins</td>
                    <td className="py-2.5 px-3">Cash on Delivery / UPI</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="py-2.5 px-3 font-semibold text-white">Elfbar Raya D1 (Black Gold)</td>
                    <td className="py-2.5 px-3">13,000 Puffs (Smart Display)</td>
                    <td className="py-2.5 px-3 text-brand-cyan font-bold">₹1,650</td>
                    <td className="py-2.5 px-3 text-emerald-400 font-medium">⚡ 45 Mins</td>
                    <td className="py-2.5 px-3">Cash on Delivery / UPI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* DETAILED CONTENT SECTIONS */}
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div>
              <h3 className="font-heading font-bold text-sm sm:text-lg text-white mb-2">
                1. Disposable Vapes vs Refillable Pod Kits — Which Is Best for Delhi Vapers?
              </h3>
              <p className="mb-2">
                When shopping at an online <strong className="text-white">vape shop in Delhi</strong>, you will primarily choose between two popular categories:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-1">
                <li>
                  <strong className="text-white">Disposable Vapes (e.g. Elfbar Raya D2 20000 Puffs):</strong> Ready to vape right out of the box with zero maintenance, pre-filled premium nic salt juice, dual airflow modes, and digital battery percentage indicators. Ideal for newcomers, tourists staying in Aerocity or CP, and busy Delhi professionals who want hassle-free vaping.
                </li>
                <li>
                  <strong className="text-white">Refillable Pod Kits (e.g. SMOK Nord 1100mAh, Uwell Caliburn):</strong> Long-term economical solution for regular vapers across South Delhi and NCR. You simply replace the mesh coil or cartridge and refill with your choice of imported 20mg–50mg salt nicotine e-liquids.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-sm sm:text-lg text-white mb-2">
                2. 45-Minute Doorstep Delivery Across All Delhi NCR Zones
              </h3>
              <p className="mb-2">
                Forget waiting 3 to 5 business days for postal packages. <strong className="text-white">Vape Shop Delhi</strong> operates hyper-local fulfillment riders across the capital:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-brand-cyan">South Delhi (45 Mins):</strong> <Link href="/delhi/greater-kailash" className="hover:text-white underline decoration-brand-cyan/40">Greater Kailash (GK 1 &amp; 2)</Link>, <Link href="/delhi/hauz-khas" className="hover:text-white underline decoration-brand-cyan/40">Hauz Khas</Link>, <Link href="/delhi/saket" className="hover:text-white underline decoration-brand-cyan/40">Saket</Link>, Defence Colony, <Link href="/delhi/vasant-kunj" className="hover:text-white underline decoration-brand-cyan/40">Vasant Kunj</Link>.
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-brand-cyan">Central Delhi (60 Mins):</strong> <Link href="/delhi/connaught-place" className="hover:text-white underline decoration-brand-cyan/40">Connaught Place (CP)</Link>, <Link href="/delhi/karol-bagh" className="hover:text-white underline decoration-brand-cyan/40">Karol Bagh</Link>, Patel Nagar, Mandi House, Civil Lines.
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-brand-cyan">West Delhi (60 Mins):</strong> <Link href="/delhi/dwarka" className="hover:text-white underline decoration-brand-cyan/40">Dwarka (All Sectors 1-23)</Link>, <Link href="/delhi/rajouri-garden" className="hover:text-white underline decoration-brand-cyan/40">Rajouri Garden</Link>, <Link href="/delhi/punjabi-bagh" className="hover:text-white underline decoration-brand-cyan/40">Punjabi Bagh</Link>, <Link href="/delhi/janakpuri" className="hover:text-white underline decoration-brand-cyan/40">Janakpuri</Link>.
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-brand-cyan">North &amp; East Delhi (60-90 Mins):</strong> <Link href="/delhi/rohini" className="hover:text-white underline decoration-brand-cyan/40">Rohini</Link>, <Link href="/delhi/pitampura" className="hover:text-white underline decoration-brand-cyan/40">Pitampura NSP</Link>, <Link href="/delhi/mayur-vihar" className="hover:text-white underline decoration-brand-cyan/40">Mayur Vihar</Link>, <Link href="/delhi/laxmi-nagar" className="hover:text-white underline decoration-brand-cyan/40">Laxmi Nagar</Link>.
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 col-span-1 sm:col-span-2">
                  <strong className="text-emerald-400">⚡ Aerocity &amp; NCR Hubs (30-60 Mins):</strong> <Link href="/delhi/aerocity" className="hover:text-white underline decoration-emerald-400/40">Worldmark Aerocity hotels</Link>, IGI Airport terminals, Cyber City Gurgaon, DLF Phase 1-5, Noida Sector 18 &amp; 62.
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-sm sm:text-lg text-white mb-2">
                3. Cash on Delivery (COD) &amp; How to Verify 100% Authenticity
              </h3>
              <p className="mb-2">
                Trust is earned through transparency. We offer <strong className="text-white">Cash on Delivery (COD)</strong> across all major Delhi localities. When your delivery partner arrives:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-slate-400 pl-1">
                <li>Receive the discreet, tamper-proof package.</li>
                <li>Inspect the exterior holographic security seal on your Elfbar or SMOK box.</li>
                <li>Scratch off the silver coating to reveal the unique manufacturer security code.</li>
                <li>Verify directly on the brand&apos;s official website using your smartphone.</li>
                <li>Pay with cash or scan the rider&apos;s instant UPI QR code (Google Pay, PhonePe, Paytm).</li>
              </ol>
            </div>

            <div>
              <h3 className="font-heading font-bold text-sm sm:text-lg text-white mb-2">
                4. Late Night &amp; 24/7 Urgent Vape Delivery in Delhi
              </h3>
              <p>
                Looking for a <strong className="text-white">vape shop open now near me</strong> in Delhi? We operate 7 days a week with rapid late-night delivery options across major hotspots including <Link href="/delhi/aerocity" className="text-brand-cyan hover:underline font-medium">Aerocity Worldmark hotels</Link>, Connaught Place, Greater Kailash, Cyber Hub Gurgaon, and Noida Sector 18. Tamper-proof, discreet plain-box packaging guaranteed. Reach out via WhatsApp at <a href="https://wa.me/917742243176" className="text-emerald-400 font-bold hover:underline">+91 7742243176</a> to check live rider availability in your sector.
              </p>
            </div>
          </div>

          {/* BOTTOM ACTION BAR */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              Need personalized flavor advice or bulk Delhi discounts?
            </div>
            <a
              href="https://wa.me/917742243176?text=Hello%20Vape%20Shop%20Delhi%2C%20please%20send%20today's%20menu%20and%20prices"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs shadow-glow-whatsapp active:scale-95 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span> Chat with Delhi Vape Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
