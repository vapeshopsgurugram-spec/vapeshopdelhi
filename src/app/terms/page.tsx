import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service & 18+ Age Policy | Vape Shop Delhi',
  description:
    'Terms of service and strictly enforced 18+ legal age restriction policy for Vape Shop Delhi. Responsible adult vaping and age compliance.',
  alternates: {
    canonical: 'https://vapeeshopdelhi.com/terms'
  }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-10 sm:py-16 bg-obsidian-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-cyan">Home</Link>
          <span>/</span>
          <span className="text-white">Terms of Service</span>
        </div>

        <h1 className="font-heading font-black text-2xl sm:text-4xl text-white mb-4">
          Terms of Service &amp; Age Restriction
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mb-8">
          Strictly 18+ Legal Age Verification • Vape Shop Delhi
        </p>

        <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/10 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300">
            <h2 className="font-heading font-bold text-sm sm:text-base text-red-200 mb-1 flex items-center gap-2">
              <span>🔞</span> Mandatory 18+ Legal Age Policy
            </h2>
            <p className="text-xs leading-relaxed">
              Vape products displayed on Vape Shop Delhi contain nicotine, an addictive chemical. Products are strictly intended for existing adult smokers and vapers of legal age (18 years or older). We reserve the right to verify government ID upon delivery.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-base text-white mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or purchasing from Vape Shop Delhi (VapeeShopDelhi.com), you confirm that you are at least 18 years old and agree to adhere to all terms, policies, and applicable local regulations.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-base text-white mb-2">
              2. Cash on Delivery (COD) Terms
            </h2>
            <p>
              Cash on Delivery is offered for customer convenience across Delhi NCR. Customers agree to provide accurate delivery addresses and be available to receive parcels within the scheduled express delivery timeframe.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-base text-white mb-2">
              3. Discreet Packaging Commitment
            </h2>
            <p>
              Every parcel dispatched across Delhi NCR is packaged in plain, unmarked, tamper-evident materials ensuring 100% discretion and personal privacy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

