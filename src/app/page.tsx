import Link from 'next/link';
import { getAllProducts } from '@/data/products';
import ProductCatalog from '@/components/ProductCatalog';
import LocalitySelector from '@/components/LocalitySelector';
import FaqAccordion from '@/components/FaqAccordion';
import SeoGuide from '@/components/SeoGuide';

export default function HomePage() {
  const products = getAllProducts();

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-4 pb-4 sm:pt-12 sm:pb-16 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-electric/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* HERO CONTENT */}
            <div className="lg:col-span-7">
              {/* CHIP BADGE */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/25 shadow-sm backdrop-blur-md mb-1.5 sm:mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                Delhi&apos;s #1 Rated Authentic Vape Shop
              </div>

              {/* CLEAN BALANCED H1 FOR GOOGLE RANK #1 (PRESERVED FULL SEO WEIGHT) */}
              <h1 className="font-heading font-black text-lg sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-white leading-snug sm:leading-[1.12] mb-1.5 sm:mb-4">
                Vape Shop Delhi – Buy Authentic Vapes with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-electric to-emerald-400">
                  45-Min Express Delivery
                </span>
              </h1>

              {/* SUBTITLE (ALL DELHI KEYWORDS PRESERVED) */}
              <p className="text-[11px] sm:text-base lg:text-lg text-slate-300 leading-snug sm:leading-relaxed max-w-2xl mb-2 sm:mb-6">
                Welcome to <strong className="text-white font-semibold">VapeeShopDelhi.com</strong> — 100% authentic disposable vapes, pod kits &amp; nic salts. Factory-sealed doorstep delivery in 45 minutes with COD across South Delhi, CP, Dwarka, Rohini &amp; all Delhi.
              </p>

              {/* LOCALITY PICKER */}
              <LocalitySelector />

              {/* HERO CTA BUTTONS & MICRO TRUST ON DESKTOP */}
              <div className="hidden sm:flex flex-wrap items-center gap-3.5 mb-6">
                <a
                  href="#products"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-electric hover:from-brand-cyan/90 hover:to-brand-electric/90 text-obsidian-950 font-extrabold text-sm shadow-glow hover:shadow-glow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Explore Live Collection
                </a>
                <a
                  href="https://wa.me/918816964412?text=Hello%20Vape%20Shop%20Delhi%2C%20please%20send%20today's%20menu%20and%20prices"
                  className="px-6 py-3 rounded-xl bg-obsidian-850/90 hover:bg-obsidian-800 border border-white/10 hover:border-emerald-500/40 text-white font-bold text-sm backdrop-blur-md transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2 shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-emerald-400 shrink-0">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>WhatsApp Price List</span>
                </a>
              </div>

              {/* MICRO TRUST METRICS (COMPACT 1-LINE STRIP ON MOBILE, GRID ON DESKTOP) */}
              <div className="flex items-center justify-between sm:grid sm:grid-cols-3 gap-1 sm:gap-4 pt-1.5 sm:pt-5 border-t border-white/10 text-[10px] sm:text-sm text-slate-300">
                <div className="sm:p-2 sm:rounded-xl sm:bg-white/[0.02]">
                  <span className="font-heading font-black text-amber-400 sm:text-base">4.9 ★★★★★</span> <span className="block sm:inline text-slate-400">(1,840+ Reviews)</span>
                </div>
                <div className="border-x border-white/10 px-1 text-center sm:p-2 sm:rounded-xl sm:bg-white/[0.02]">
                  <span className="font-heading font-black text-brand-cyan sm:text-base">45 Mins</span> <span className="block sm:inline text-slate-400">Delhi Express</span>
                </div>
                <div className="text-right sm:text-left sm:p-2 sm:rounded-xl sm:bg-white/[0.02]">
                  <span className="font-heading font-black text-emerald-400 sm:text-base">100% Genuine</span> <span className="block sm:inline text-slate-400">Scratch Verification</span>
                </div>
              </div>
            </div>

            {/* HERO VISUAL CARD (SHOWN ON DESKTOP, HIDDEN ON MOBILE TO BRING PRODUCTS RIGHT UP) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl bg-obsidian-900/60 border border-brand-cyan/30 hover:border-brand-cyan/60 p-3 shadow-2xl shadow-brand-cyan/15 backdrop-blur-xl overflow-hidden group transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-1">
                <div className="absolute top-5 right-5 z-10 px-3 py-1 rounded-full bg-emerald-500/90 text-white font-bold text-xs shadow-md backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>⚡ 45-Min Express in Delhi</span>
                </div>
                <img
                  src="/og-banner.jpg"
                  alt="VapeeShopDelhi.com - Best Vape Shop in Delhi, Official Collection"
                  className="w-full rounded-xl object-cover aspect-[16/9] shadow-inner group-hover:scale-105 transition-transform duration-500"
                  width={560}
                  height={315}
                />
                <div className="flex items-center justify-between pt-3 px-1.5 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span><strong>Fresh Batch:</strong> Elfbar, SMOK, Raya D2</span>
                  </div>
                  <span className="font-bold text-brand-cyan text-sm">Starting ₹1,650</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION (IMMEDIATELY AFTER HERO SO MOBILE USERS SEE PRODUCTS ON FIRST SCROLL) */}
      <section id="products" className="pt-2 pb-10 sm:pt-6 sm:pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-6">
            <div>
              <span className="text-[9px] sm:text-xs font-extrabold tracking-wider text-brand-cyan uppercase">
                Curated Bestsellers • Live Delhi Stock
              </span>
              <h2 className="font-heading font-black text-sm sm:text-2xl text-white mt-0.5">
                Best Vapes to Buy in Delhi — 100% Authentic
              </h2>
            </div>
            <div className="text-[10px] sm:text-xs text-emerald-400 font-semibold flex items-center gap-1 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>45-Min Express • COD</span>
            </div>
          </div>

          <ProductCatalog products={products} />

          <div className="mt-6 p-4 sm:p-6 rounded-2xl bg-obsidian-900/60 border border-white/10 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-300 mb-3">
              Looking for a specific model, coil, or salt nic flavor not listed? We stock 100+ items at our Delhi warehouse — Elfbar, SMOK, Uwell, Vaporesso &amp; more!
            </p>
            <a
              href="https://wa.me/918816964412?text=Hello%20Vape%20Shop%20Delhi%21%20I%20want%20to%20see%20the%20full%20menu%20of%20available%20products%20for%20delivery%20in%20Delhi."
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-glow-whatsapp active:scale-95 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp for Full Delhi Stock Menu
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP (PLACED STRATEGICALLY BELOW PRODUCTS FOR HIGH CONVERSION) */}
      <section className="bg-obsidian-900/40 border-y border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl shrink-0">🛡️</span>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white">100% Genuine</h4>
                <p className="text-[11px] sm:text-xs text-slate-400">Scratch &amp; QR verification</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl shrink-0">🚀</span>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white">Instant Express</h4>
                <p className="text-[11px] sm:text-xs text-slate-400">Discreet Delhi delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl shrink-0">💳</span>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white">Flexible Payment</h4>
                <p className="text-[11px] sm:text-xs text-slate-400">UPI &amp; COD Available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl shrink-0">💬</span>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white">Live WhatsApp</h4>
                <p className="text-[11px] sm:text-xs text-slate-400">Instant Delhi support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELHI LOCALITY COVERAGE (COMPACT 3X2 GRID ON DESKTOP, 2X2 ON MOBILE) */}
      <section id="delhi-locations" className="py-8 sm:py-14 bg-obsidian-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <span className="inline-block text-[10px] sm:text-xs font-extrabold tracking-wider text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-0.5 rounded-full mb-2">
              ⚡ 45-Min Express Delivery in Delhi NCR
            </span>
            <h2 className="font-heading font-black text-xl sm:text-3xl text-white">
              Vape Shop Delhi — Delivery to Every Zone
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
              From South Delhi to North Delhi, West to East, Gurgaon &amp; Noida — express delivery in 45–90 minutes with Cash on Delivery (COD).
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
            {/* SOUTH DELHI */}
            <Link href="/delhi/south-delhi" className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-obsidian-900/70 border border-white/10 hover:border-brand-cyan/60 transition-all flex flex-col justify-between group hover:shadow-glow-sm sm:hover:-translate-y-0.5 backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base sm:text-lg">📍</span>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-brand-cyan transition-colors">South Delhi</h3>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 shrink-0">⚡ 45m</span>
                </div>
                <div className="flex flex-wrap gap-1 my-2">
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">GK 1 &amp; 2</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Saket</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Hauz Khas</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Defence Colony</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Vasant Kunj</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-brand-cyan group-hover:text-white transition-colors">
                <span>View South Delhi Menu</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* CENTRAL & NORTH */}
            <Link href="/delhi/connaught-place" className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-obsidian-900/70 border border-white/10 hover:border-brand-cyan/60 transition-all flex flex-col justify-between group hover:shadow-glow-sm sm:hover:-translate-y-0.5 backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base sm:text-lg">📍</span>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-brand-cyan transition-colors">Central &amp; North</h3>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 shrink-0">⚡ 60m</span>
                </div>
                <div className="flex flex-wrap gap-1 my-2">
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Connaught Place</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Karol Bagh</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Rohini</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Pitampura NSP</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Civil Lines</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-brand-cyan group-hover:text-white transition-colors">
                <span>View Central Delhi Menu</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* WEST DELHI */}
            <Link href="/delhi/dwarka" className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-obsidian-900/70 border border-white/10 hover:border-brand-cyan/60 transition-all flex flex-col justify-between group hover:shadow-glow-sm sm:hover:-translate-y-0.5 backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base sm:text-lg">📍</span>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-brand-cyan transition-colors">West Delhi</h3>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 shrink-0">⚡ 60m</span>
                </div>
                <div className="flex flex-wrap gap-1 my-2">
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Dwarka (All Sec)</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Rajouri Garden</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Punjabi Bagh</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Janakpuri</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Paschim Vihar</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-brand-cyan group-hover:text-white transition-colors">
                <span>View West Delhi Menu</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* EAST DELHI */}
            <Link href="/delhi/mayur-vihar" className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-obsidian-900/70 border border-white/10 hover:border-brand-cyan/60 transition-all flex flex-col justify-between group hover:shadow-glow-sm sm:hover:-translate-y-0.5 backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base sm:text-lg">📍</span>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-brand-cyan transition-colors">East Delhi</h3>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 shrink-0">⚡ 60-90m</span>
                </div>
                <div className="flex flex-wrap gap-1 my-2">
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Laxmi Nagar</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Mayur Vihar 1-3</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Patparganj</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Preet Vihar</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Anand Vihar</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-brand-cyan group-hover:text-white transition-colors">
                <span>View East Delhi Menu</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* GURGAON & NOIDA */}
            <Link href="/delhi/gurgaon" className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-obsidian-900/70 border border-white/10 hover:border-brand-cyan/60 transition-all flex flex-col justify-between group hover:shadow-glow-sm sm:hover:-translate-y-0.5 backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base sm:text-lg">📍</span>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-brand-cyan transition-colors">Gurgaon &amp; Noida</h3>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 shrink-0">⚡ 60m</span>
                </div>
                <div className="flex flex-wrap gap-1 my-2">
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">DLF Phase 1-5</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Cyber City</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Golf Course Rd</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Noida Sec 18 &amp; 62</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Expressway</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-brand-cyan group-hover:text-white transition-colors">
                <span>View NCR Hub Menu</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* AEROCITY 24/7 */}
            <Link href="/delhi/aerocity" className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-obsidian-900/70 border border-emerald-500/30 hover:border-emerald-400 transition-all flex flex-col justify-between group hover:shadow-glow-whatsapp sm:hover:-translate-y-0.5 backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base sm:text-lg">⚡</span>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-emerald-400 transition-colors">Aerocity 24/7 Express</h3>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0">⚡ 30m Day &amp; Night</span>
                </div>
                <div className="flex flex-wrap gap-1 my-2">
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-200 border border-emerald-500/20">Worldmark Hotels</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Airport T1, T2, T3</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Mahipalpur</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Late Night Delivery</span>
                </div>
              </div>
              <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[11px] font-bold text-emerald-400 group-hover:text-white transition-colors">
                <span>View Aerocity Menu</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (2X2 GRID ON MOBILE, 4 COLS ON DESKTOP) */}
      <section id="why-us" className="py-8 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-extrabold tracking-wider text-brand-cyan uppercase">
              Trusted by 50,000+ Customers
            </span>
            <h2 className="font-heading font-black text-lg sm:text-3xl text-white mt-1 mb-1 sm:mb-2">
              Why We Are Rated #1 in Delhi
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We eliminated counterfeit devices and delayed shipping with guaranteed authenticity checks.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between">
              <div>
                <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2.5">🛡️</div>
                <h3 className="font-heading font-bold text-xs sm:text-sm text-white mb-1 line-clamp-2">
                  100% Genuine Box Guarantee
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                  Direct from verified international distributors with manufacturer holographic scratch verification codes.
                </p>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between">
              <div>
                <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2.5">📦</div>
                <h3 className="font-heading font-bold text-xs sm:text-sm text-white mb-1 line-clamp-2">
                  Discreet Plain Packaging
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                  Privacy is priority. Delivered in unmarked, opaque packaging with zero external markings.
                </p>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between">
              <div>
                <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2.5">🚀</div>
                <h3 className="font-heading font-bold text-xs sm:text-sm text-white mb-1 line-clamp-2">
                  Express Instant Dispatch
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                  No 4-day wait. Local Delhi fleet dispatches your order immediately upon WhatsApp confirmation.
                </p>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between">
              <div>
                <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2.5">💯</div>
                <h3 className="font-heading font-bold text-xs sm:text-sm text-white mb-1 line-clamp-2">
                  DOA Replacement Guarantee
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                  Received defective piece? We replace it right away upon verification without hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT SEO GUIDE COMPONENT */}
      <SeoGuide />

      {/* FAQ SECTION */}
      <section id="faq" className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <span className="text-xs font-extrabold tracking-wider text-brand-cyan uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mt-1.5 mb-2">
              Got Questions About VapeeShopDelhi?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Clear answers to everything about orders, authenticity verification, delivery zones, and payment methods.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-12 bg-obsidian-900/30 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-extrabold tracking-wider text-brand-cyan uppercase">
              Customer Reviews
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white mt-1.5 mb-2.5">
              What Delhi Vapers Say About Us
            </h2>
          </div>

          <div className="flex overflow-x-auto pb-2 scrollbar-none md:grid md:grid-cols-3 gap-3 sm:gap-6">
            <div className="min-w-[270px] md:min-w-0 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-obsidian-900/70 border border-white/10 shrink-0 md:shrink flex flex-col justify-between">
              <div>
                <div className="text-amber-400 text-xs sm:text-sm mb-1.5">★★★★★</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  &ldquo;Ordered an Elf Bar to Greater Kailash 2 at 7 PM, reached my hands by 8:15 PM! Scratch code verified original on the site. Truly the best vape shop in Delhi.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-brand-cyan/20 text-brand-cyan font-bold text-xs flex items-center justify-center">
                  RK
                </span>
                <div>
                  <div className="font-bold text-xs text-white">Rohit K.</div>
                  <div className="text-[10px] text-slate-400">South Delhi • Verified Buyer</div>
                </div>
              </div>
            </div>

            <div className="min-w-[270px] md:min-w-0 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-obsidian-900/70 border border-white/10 shrink-0 md:shrink flex flex-col justify-between">
              <div>
                <div className="text-amber-400 text-xs sm:text-sm mb-1.5">★★★★★</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  &ldquo;Finally a genuine shop with authentic Caliburn G3 replacement pods in Delhi. Packaging was completely discreet and sealed. 10/10 service!&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center">
                  AS
                </span>
                <div>
                  <div className="font-bold text-xs text-white">Aman S.</div>
                  <div className="text-[10px] text-slate-400">Connaught Place • Verified Buyer</div>
                </div>
              </div>
            </div>

            <div className="min-w-[270px] md:min-w-0 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-obsidian-900/70 border border-white/10 shrink-0 md:shrink flex flex-col justify-between">
              <div>
                <div className="text-amber-400 text-xs sm:text-sm mb-1.5">★★★★★</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  &ldquo;Ordered Elfbar Raya D2 to Mayur Vihar Phase 1 at 9 PM, arrived by 10:10 PM! Packaging was 100% discreet. Best vape shop in Delhi, no doubt!&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-brand-electric/20 text-brand-electric font-bold text-xs flex items-center justify-center">
                  NK
                </span>
                <div>
                  <div className="font-bold text-xs text-white">Nikhil K.</div>
                  <div className="text-[10px] text-slate-400">East Delhi • Verified Buyer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
