import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vape Shop Delhi | 45-Min Express Delivery Hotline',
  description:
    'Contact Vape Shop Delhi. WhatsApp/Call +91 8816964412 for instant vape orders, local Delhi delivery tracking, and flavor consultations. Available 10 AM to 11 PM daily.',
  alternates: {
    canonical: 'https://vapeeshopdelhi.com/contact'
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-10 sm:py-16 bg-obsidian-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* BREADCRUMB */}
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-cyan">Home</Link>
          <span>/</span>
          <span className="text-white">Contact Us</span>
        </div>

        <h1 className="font-heading font-black text-2xl sm:text-4xl text-white mb-4">
          Contact Vape Shop Delhi
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          Have questions about our genuine vape collection, delivery times to your Delhi locality, or want to place a quick order via WhatsApp? Our local Delhi support team is active 7 days a week.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
          <div className="p-5 rounded-2xl bg-obsidian-900/70 border border-white/10 backdrop-blur-xl">
            <div className="text-3xl mb-3">💬</div>
            <h2 className="font-heading font-bold text-lg text-white mb-2">WhatsApp Order Hotline</h2>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Fastest way to order. Send us your location and product of choice — rider dispatches in 30 minutes.
            </p>
            <a
              href="https://wa.me/918816964412?text=Hello%20Vape%20Shop%20Delhi%2C%20I%20have%20an%20enquiry"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xs shadow-glow-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>📲</span> WhatsApp +91 8816964412
            </a>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-900/70 border border-white/10 backdrop-blur-xl">
            <div className="text-3xl mb-3">📞</div>
            <h2 className="font-heading font-bold text-lg text-white mb-2">Customer Phone Support</h2>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Available 10:00 AM – 11:00 PM every day for urgent delivery inquiries and order status checks.
            </p>
            <a
              href="tel:+918816964412"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-800 border border-white/10 text-white font-bold text-xs hover:border-brand-cyan/40"
            >
              <span>📞</span> Call +91 88169 64412
            </a>
          </div>
        </div>

        {/* STORE INFO & DELIVERY HUBS */}
        <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/10 space-y-4 text-xs sm:text-sm text-slate-300">
          <h2 className="font-heading font-bold text-base sm:text-lg text-white">
            Delhi Fulfillment Hub &amp; Operating Hours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <strong className="text-white block mb-1">📍 Central Delivery Hub:</strong>
              <p className="text-slate-400">
                M Block, Greater Kailash 1, New Delhi, Delhi 110048, India
              </p>
            </div>
            <div>
              <strong className="text-white block mb-1">🕒 Operating Hours:</strong>
              <p className="text-slate-400">
                Monday to Sunday: 10:00 AM – 11:00 PM<br />
                Late Night Hotspot Delivery: Until 2:00 AM (Aerocity &amp; CP)
              </p>
            </div>
            <div>
              <strong className="text-white block mb-1">⚡ Express Delivery Coverage:</strong>
              <p className="text-slate-400">
                South Delhi, Central Delhi, West Delhi, North Delhi, East Delhi, Gurgaon &amp; Noida.
              </p>
            </div>
            <div>
              <strong className="text-white block mb-1">💳 Accepted Payment Methods:</strong>
              <p className="text-slate-400">
                Cash on Delivery (COD), UPI (Google Pay, PhonePe, Paytm), Net Banking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

