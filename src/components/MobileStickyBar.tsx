'use client';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:hidden bg-obsidian-950/95 backdrop-blur-2xl border-t border-white/10 pb-[calc(10px+env(safe-area-inset-bottom,0px))] shadow-2xl">
      <div className="flex gap-2 max-w-md mx-auto">
        {/* CALL BUTTON WITH SHARP PHONE SVG ICON */}
        <a
          href="tel:+918816964412"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-obsidian-850/90 border border-white/10 text-white font-bold text-xs tracking-wide shadow-sm hover:border-brand-cyan/40 transition-all active:scale-95"
          aria-label="Call Delhi Store"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-brand-cyan shrink-0">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.67.25-1.02A11.36 11.36 0 018.57 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.62c0-.55-.45-1-.99-1z" />
          </svg>
          <span>Call Delhi Store</span>
        </a>

        {/* WHATSAPP BUTTON WITH OFFICIAL WHATSAPP VECTOR SVG ICON */}
        <a
          href="https://wa.me/918816964412?text=Hi%20Vape%20Shop%20Delhi%2C%20I%20want%20to%20order%20vapes%20now%20in%20Delhi"
          className="flex-[1.25] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xs tracking-wide shadow-glow-whatsapp transition-all active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white shrink-0">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
          <span>WhatsApp Order</span>
        </a>
      </div>
    </div>
  );
}
