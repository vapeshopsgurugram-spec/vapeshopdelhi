'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCatalogProps {
  products: Product[];
}

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesQuery =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full">
      {/* TOOLBAR: CATEGORY TABS & SEARCH */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 sm:gap-3 mb-3.5 sm:mb-5 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-obsidian-900/70 border border-white/10 backdrop-blur-xl max-w-[860px] mx-auto">
        {/* TABS */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            type="button"
            className={`whitespace-nowrap px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-brand-cyan to-brand-electric text-obsidian-950 shadow-glow'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            <span>🔥</span> All ({products.length})
          </button>
          <button
            type="button"
            className={`whitespace-nowrap px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shrink-0 ${
              selectedCategory === 'disposable'
                ? 'bg-gradient-to-r from-brand-cyan to-brand-electric text-obsidian-950 shadow-glow'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
            onClick={() => setSelectedCategory('disposable')}
          >
            <span>💨</span> Disposables (2)
          </button>
          <button
            type="button"
            className={`whitespace-nowrap px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shrink-0 ${
              selectedCategory === 'pod-system'
                ? 'bg-gradient-to-r from-brand-cyan to-brand-electric text-obsidian-950 shadow-glow'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
            onClick={() => setSelectedCategory('pod-system')}
          >
            <span>⚡</span> Pod Kits (1)
          </button>
        </div>

        {/* SEARCH INPUT */}
        <div className="relative flex items-center min-w-full md:min-w-[280px]">
          <svg className="absolute left-3 w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search 20000 puffs, Elfbar, SMOK, flavors in Delhi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search authentic vapes in Delhi"
            className="w-full bg-obsidian-950/80 border border-white/10 focus:border-brand-cyan focus:shadow-glow rounded-full pl-8 sm:pl-9 pr-7 sm:pr-8 py-1 sm:py-1.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              className="absolute right-2.5 text-slate-400 hover:text-white text-xs cursor-pointer"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* HOT KEYWORD QUICK SEARCH PILLS (FOR SEO & INSTANT MOBILE FILTERING) */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3.5 max-w-[860px] mx-auto text-[10px] sm:text-xs">
        <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px] sm:text-[10px] mr-1 hidden sm:inline">
          🔥 Hot Delhi Searches:
        </span>
        <button
          type="button"
          onClick={() => setSearchQuery(searchQuery === '20000' ? '' : '20000')}
          className={`px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
            searchQuery.includes('20000')
              ? 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan'
              : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/5'
          }`}
        >
          20000 Puffs
        </button>
        <button
          type="button"
          onClick={() => setSearchQuery(searchQuery === 'Elfbar' ? '' : 'Elfbar')}
          className={`px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
            searchQuery.includes('Elfbar')
              ? 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan'
              : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/5'
          }`}
        >
          Elfbar Delhi
        </button>
        <button
          type="button"
          onClick={() => setSearchQuery(searchQuery === 'SMOK' ? '' : 'SMOK')}
          className={`px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
            searchQuery.includes('SMOK')
              ? 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan'
              : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/5'
          }`}
        >
          SMOK Pod Kits
        </button>
        <button
          type="button"
          onClick={() => setSearchQuery(searchQuery === 'Raya D2' ? '' : 'Raya D2')}
          className={`px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
            searchQuery.includes('Raya D2')
              ? 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan'
              : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/5'
          }`}
        >
          Raya D2 (₹1,800)
        </button>
      </div>

      {/* COMPACT PRODUCTS GRID (MAX-W-[860PX] FOR BALANCED CARD SIZES ON DESKTOP & 2x2 ON MOBILE) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 max-w-[860px] mx-auto">
        {filteredProducts.map(product => (
          <article
            key={product.id}
            className="group relative rounded-xl sm:rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-brand-cyan/50 p-2 sm:p-2.5 transition-all duration-300 hover:shadow-glow sm:hover:-translate-y-1 flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              {/* TOP BADGES */}
              <div className="absolute top-2.5 left-2.5 z-10 flex flex-wrap gap-1 pointer-events-none">
                <span className="px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-sm">
                  {product.discountBadge}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                  🔥 {product.soldCount}
                </span>
              </div>

              {/* COMPACT IMAGE CONTAINER */}
              <Link
                href={`/products/${product.slug}`}
                className="block w-full h-32 sm:h-40 rounded-lg sm:rounded-xl overflow-hidden bg-obsidian-950/60 mb-2 relative"
                aria-label={product.name}
              >
                <img
                  src={product.image}
                  alt={`${product.name} - Vape Shop Delhi`}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover sm:group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              {/* META ROW */}
              <div className="flex items-center justify-between gap-1 mb-1 text-[9px] sm:text-[10px]">
                <span className="px-1.5 py-0.5 rounded bg-white/5 text-brand-cyan font-semibold truncate max-w-[80px] sm:max-w-none">
                  {product.categoryLabel}
                </span>
                <span className="text-amber-400 font-bold shrink-0">
                  ★ {product.rating} <span className="text-slate-400 font-normal">({product.reviewCount}+)</span>
                </span>
              </div>

              {/* TITLE */}
              <Link href={`/products/${product.slug}`} className="block group-hover:text-brand-cyan transition-colors">
                <h3 className="font-heading font-black text-xs sm:text-[13px] text-white tracking-tight mb-1 line-clamp-1">
                  {product.name}
                </h3>
              </Link>

              {/* PRODUCT CONTENT / SHORT DESCRIPTION */}
              <p className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-2 mb-1.5 leading-snug">
                {product.shortDesc}
              </p>

              {/* DISPATCH TAG */}
              <div className="flex items-center gap-1 text-[9px] text-emerald-400 mb-1.5 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 truncate">
                <span>⚡</span>
                <span className="font-medium truncate">45-Min Express in Delhi</span>
              </div>
            </div>

            {/* PRICE & BUTTONS FOOTER */}
            <div className="pt-1.5 sm:pt-2 border-t border-white/10">
              <div className="flex items-baseline gap-1.5 mb-1.5">
                <span className="font-heading font-black text-sm sm:text-base text-brand-cyan">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="hidden sm:inline-block text-[9px] font-bold text-emerald-400 px-1.5 py-0.2 rounded bg-emerald-500/10">
                  Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                <Link
                  href={`/products/${product.slug}`}
                  className="hidden sm:flex items-center justify-center py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white font-bold text-xs transition-all hover:border-brand-cyan/30 active:scale-95"
                >
                  Details
                </Link>
                <a
                  href={`https://wa.me/918816964412?text=${encodeURIComponent(
                    `Hi Vape Shop Delhi, I want to order *${product.name}* (Price: ₹${product.price}) with 45-min express delivery in Delhi.`
                  )}`}
                  className="py-1.5 px-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-[11px] sm:text-xs shadow-glow-whatsapp flex items-center justify-center gap-1 transition-all active:scale-95 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current shrink-0">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>Order</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
