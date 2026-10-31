import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vape Shop Delhi',
  description:
    'Privacy Policy of Vape Shop Delhi. Complete customer privacy, confidential data handling, and 100% discreet packaging guarantee.',
  alternates: {
    canonical: 'https://vapeeshopdelhi.com/privacy-policy'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-10 sm:py-16 bg-obsidian-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-cyan">Home</Link>
          <span>/</span>
          <span className="text-white">Privacy Policy</span>
        </div>

        <h1 className="font-heading font-black text-2xl sm:text-4xl text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mb-8">
          Your Privacy &amp; Discretion Is Our Highest Priority • Vape Shop Delhi
        </p>

        <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/10 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section>
            <h2 className="font-heading font-bold text-base text-white mb-2">
              1. Information We Collect
            </h2>
            <p>
              We only collect essential details needed to fulfill your doorstep delivery in Delhi NCR (such as delivery locality, landmark, and contact phone number shared via WhatsApp). We never sell or share customer data with third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-base text-white mb-2">
              2. 100% Discreet Packaging Guarantee
            </h2>
            <p>
              Privacy is fundamental to our service. All orders are packed in opaque, plain-box packaging with zero external brand names, logos, or vape references. No one handling the parcel can identify its contents.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-base text-white mb-2">
              3. Secure WhatsApp Ordering
            </h2>
            <p>
              Orders coordinated via WhatsApp utilize end-to-end encryption. Once delivery is completed and confirmed, order records are archived securely.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

