'use client';

import Link from 'next/link';

const QUICK_ZONES = [
  { href: '/delhi/south-delhi', label: 'South Delhi (45m)' },
  { href: '/delhi/connaught-place', label: 'CP & Central (60m)' },
  { href: '/delhi/dwarka', label: 'Dwarka (60m)' },
  { href: '/delhi/gurgaon', label: 'Gurgaon DLF (60m)' },
  { href: '/delhi/noida', label: 'Noida (60m)' },
  { href: '/delhi/aerocity', label: '⚡ Aerocity 24/7 (30m)' },
  { href: '/delhi/rohini', label: 'Rohini & NSP (60m)' },
  { href: '/delhi/punjabi-bagh', label: 'Punjabi Bagh (45m)' },
];

export default function LocalitySelector() {
  return (
    <div className="mb-3.5 sm:mb-5">
      <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 mb-1.5 flex items-center gap-1.5 uppercase tracking-wide">
        <span className="text-brand-cyan">📍</span> Express Delivery Zones (Select for Local Menu):
      </div>
      <div className="flex flex-nowrap sm:flex-wrap gap-1.5 sm:gap-2 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 scrollbar-none no-scrollbar">
        {QUICK_ZONES.map(zone => (
          <Link
            key={zone.href}
            href={zone.href}
            className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] sm:text-xs transition-all border shrink-0 bg-white/5 border-white/10 hover:border-brand-cyan hover:bg-brand-cyan/15 hover:text-white text-slate-300 font-medium active:scale-95"
          >
            {zone.label}
          </Link>
        ))}
        <Link
          href="/#delhi-locations"
          className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] sm:text-xs transition-all border shrink-0 bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/20 font-bold"
        >
          View All 18 Zones →
        </Link>
      </div>
    </div>
  );
}
