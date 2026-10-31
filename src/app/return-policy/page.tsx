import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Return & Replacement Policy | Vape Shop Delhi',
  description:
    'Vape Shop Delhi 100% Genuine Box & DOA (Dead On Arrival) Replacement Policy. Hassle-free exchanges for verified manufacturer defects within 7 days.',
  alternates: {
    canonical: 'https://vapeeshopdelhi.com/return-policy'
  }
};

export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen py-10 sm:py-16 bg-obsidian-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-cyan">Home</Link>
          <span>/</span>
          <span className="text-white">Return &amp; Replacement Policy</span>
        </div>

        <h1 className="font-heading font-black text-2xl sm:text-4xl text-white mb-4">
          Return &amp; Replacement Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mb-8">
          Last Updated: 2026 • Vape Shop Delhi (VapeeShopDelhi.com)
        </p>

        <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/10 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section>
            <h2 className="font-heading font-bold text-base text-white mb-2">
              1. 100% Genuine Product Guarantee
            </h2>
            <p>
              At Vape Shop Delhi, all disposable vapes and pod systems are 100% authentic, imported directly from authorized distributors. Every device arrives with a manufacturer security seal and scratch verification code.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-base text-white mb-2">
              2. Dead On Arrival (DOA) Replacement Policy
            </h2>
            <p className="mb-2">
              If your device arrives defective (non-firing, continuous auto-firing, or not charging upon first use), we provide an instant replacement under our DOA policy:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 pl-1">
              <li>Report the issue within <strong>24 to 48 hours</strong> of doorstep delivery via WhatsApp.</li>
              <li>Provide a brief video showing the device condition and the malfunction.</li>
              <li>Retain the original packaging with the manufacturer scratch code intact.</li>
              <li>Our delivery rider will exchange the piece or issue an immediate replacement during the next delivery window.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-base text-white mb-2">
              3. Hygiene &amp; Consumables Disclaimer
            </h2>
            <p>
              Due to health and hygiene standards, opened e-liquids, opened flavor pods, or devices that have been depleted or damaged by drops/water exposure cannot be returned or refunded once used.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-base text-white mb-2">
              4. How to Request an Exchange
            </h2>
            <p>
              Contact our Delhi support hotline on WhatsApp at{' '}
              <a href="https://wa.me/918816964412" className="text-emerald-400 font-bold hover:underline">
                +91 8816964412
              </a>{' '}
              with your order address and short video. Our team will verify and resolve it right away.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

