'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'What is the vape price in Delhi for 20000 puffs disposable vapes?',
    answer: 'Vape price in Delhi starts from ₹1,650 for Elfbar Raya D1 (13,000 puffs) and ₹1,800 for Elfbar Raya D2 (20,000 puffs dual mode with smart screen). Pod kits like SMOK Nord 1100mAh are priced at ₹3,500. We offer direct wholesale-to-consumer pricing with 100% manufacturer scratch verification and Cash on Delivery (COD) across all Delhi areas.'
  },
  {
    question: 'Can I get 1-hour instant vape delivery anywhere in Delhi NCR?',
    answer: 'Yes! We offer 45 to 60-minute express doorstep delivery across Delhi NCR. South Delhi (GK, Saket, Hauz Khas) receives orders in 45 minutes. Central Delhi (Connaught Place), West Delhi (Dwarka, Rajouri Garden), and East/North Delhi (Rohini, Pitampura) are fulfilled within 60 minutes. Late-night delivery is also available across Aerocity and Cyber City hubs.'
  },
  {
    question: 'Which is the best vape shop in Delhi for authentic products?',
    answer: 'VapeeShopDelhi.com is Delhi\'s #1 rated vape shop for 100% authentic, factory-sealed devices. We stock top brands like Elfbar Raya D2 20000, SMOK Nord 1100mAh, and Elfbar Raya D1 Black Gold with manufacturer holographic scratch verification codes. All products are sourced directly from verified international distributors.'
  },
  {
    question: 'How fast is vape delivery in Delhi?',
    answer: 'We deliver vapes across all Delhi zones in 45-90 minutes. South Delhi (Greater Kailash, Hauz Khas, Saket, Defence Colony) gets delivery in 45 minutes. Central Delhi (Connaught Place, Karol Bagh) in 60 minutes. West Delhi (Dwarka, Rajouri Garden) and East Delhi (Mayur Vihar, Laxmi Nagar) in 60-90 minutes. North Delhi (Rohini, Pitampura) in 90 minutes. Same-day delivery, 7 days a week.'
  },
  {
    question: 'Do you offer Cash on Delivery (COD) for vapes in Delhi?',
    answer: 'Yes! VapeeShopDelhi.com offers Cash on Delivery (COD) across most Delhi pin codes. You can also pay via UPI (Google Pay, PhonePe, Paytm, BHIM) or Net Banking. No advance payment is required for most Delhi delivery areas.'
  },
  {
    question: 'How do I verify if my vape device is 100% genuine?',
    answer: 'Every product from VapeeShopDelhi.com comes with an authentic holographic manufacturer security seal and a silver scratch code. Simply scratch the code on your device box and verify it on the brand\'s official verification portal (Elfbar or SMOK website) to confirm 100% authenticity before use.'
  },
  {
    question: 'What vape products are available for delivery in Delhi?',
    answer: 'We stock 100+ products at our Delhi warehouse including: Elfbar Raya D2 20000 (20,000 puffs, dual mode), SMOK Nord 1100mAh Refillable Pod Kit, Elfbar Raya D1 Black Gold (13,000 puffs), Uwell Caliburn pods, Vaporesso XROS series, imported nic salt e-liquids, replacement coils, and pod cartridges. All available for same-day delivery in Delhi.'
  },
  {
    question: 'Do you deliver vapes to South Delhi areas like Greater Kailash and Hauz Khas?',
    answer: 'Yes! We deliver to all South Delhi localities including Greater Kailash 1 & 2, Hauz Khas, Green Park, Saket, Malviya Nagar, Defence Colony, South Extension, Vasant Kunj, Vasant Vihar, and Lajpat Nagar. Delivery time in South Delhi is typically 45 minutes.'
  },
  {
    question: 'Can I order vapes for delivery in West Delhi areas like Dwarka and Rajouri Garden?',
    answer: 'Absolutely! We cover all West Delhi areas including Dwarka (all sectors), Rajouri Garden, Janakpuri, Punjabi Bagh, Paschim Vihar, Tilak Nagar, Vikaspuri, and Uttam Nagar. Delivery in West Delhi takes 60-90 minutes after WhatsApp order confirmation.'
  },
  {
    question: 'Do you deliver to Connaught Place, Karol Bagh, and Central Delhi?',
    answer: 'Yes, we deliver to all Central Delhi areas: Connaught Place (CP), Karol Bagh, Patel Nagar, Civil Lines, Model Town, Kamla Nagar, Chandni Chowk, and DU North Campus area. Delivery in Central Delhi is typically 60 minutes.'
  },
  {
    question: 'What is the minimum order for vape delivery in Delhi?',
    answer: 'There is no strict minimum order at VapeeShopDelhi.com. You can order a single device starting from ₹1,650 (Elfbar Raya D1 Black Gold) and get same-day delivery anywhere in Delhi. WhatsApp us for the current price list and available flavors.'
  },
  {
    question: 'Are disposable vapes or refillable pod kits better for Delhi buyers?',
    answer: 'Both are popular in Delhi. Disposable vapes (like Elfbar Raya D2 20000 at ₹1,800) are best for beginners and professionals who want zero maintenance. Refillable pod kits (like SMOK Nord at ₹3,500) are better value long-term as you only replace coils and refill e-liquid. Our Delhi team on WhatsApp can help you choose based on your usage.'
  },
  {
    question: 'How do I place an order for vape delivery in Delhi?',
    answer: 'Ordering is simple: (1) Browse our Delhi collection above and choose your product & flavor. (2) Click "Order on WhatsApp" and share your Delhi delivery address. (3) Our Delhi delivery partner dispatches within 30 minutes. Pay via UPI or Cash on Delivery when it arrives. We\'re available 10 AM to 11 PM, 7 days a week.'
  },
  {
    question: 'Is late night vape delivery available in Delhi NCR & Aerocity?',
    answer: 'Yes! We provide late night express vape delivery across Delhi NCR, Aerocity Worldmark, Gurgaon, and Noida. Orders confirmed via WhatsApp are dispatched rapidly via our dedicated night delivery riders.'
  },
  {
    question: 'Do you deliver vapes to Gurgaon (Gurugram) and Noida?',
    answer: 'Yes! We provide 60-minute express vape delivery across Gurgaon (DLF Phase 1-5, Cyber City, Golf Course Road, Sohna Road) and Noida (Sector 18, 62, 137). Cash on Delivery (COD) is available across Delhi NCR.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 max-w-4xl mx-auto">
      {FAQ_DATA.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl transition-all border ${
              isOpen
                ? 'bg-obsidian-900/90 border-brand-cyan/40 shadow-glow'
                : 'bg-obsidian-900/50 border-white/5 hover:border-white/15'
            }`}
          >
            <button
              className="w-full py-4 px-4 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-sm sm:text-base text-white">
                {item.question}
              </span>
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-transform ${
                  isOpen
                    ? 'bg-brand-cyan text-obsidian-950 rotate-180'
                    : 'bg-white/10 text-slate-300'
                }`}
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="px-4 sm:px-6 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
