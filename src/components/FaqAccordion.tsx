'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'Which is the best vape shop in Delhi for authentic products?',
    answer: 'VapeeShopDelhi.com is rated #1 for 100% authentic, sealed devices including top brands like Elfbar Raya D2 20000, SMOK Nord, and Raya D1 Black Gold with manufacturer verification scratch codes and 45-90 min same-day express delivery.'
  },
  {
    question: 'How fast is vape delivery across Delhi NCR & Gurgaon?',
    answer: 'We provide 45 to 90-minute express courier drops across South Delhi, Connaught Place, and Gurgaon DLF Cyber City, and under 2 hours for West Delhi, Dwarka, and Noida.'
  },
  {
    question: 'How do I verify if my vape device is 100% genuine?',
    answer: 'Every product dispatched from VapeeShopDelhi.com features an authentic holographic manufacturer security seal with a silver scratch code that can be authenticated on the brand official verification portal.'
  },
  {
    question: 'What products are available on VapeeShopDelhi.com?',
    answer: 'We stock top-selling high-puff disposables like Elfbar Raya D2 20000 (Dual Mode), SMOK Nord 1100mAh Refillable Pod Kit, and Elfbar Raya D1 Black Gold Edition (13,000 puffs) plus 100+ items in our Delhi warehouse.'
  },
  {
    question: 'Do you deliver to South Delhi, Dwarka, and Connaught Place?',
    answer: 'Yes, we cover all major neighborhoods including Greater Kailash 1 & 2, Hauz Khas, Saket, Connaught Place, Rajouri Garden, Dwarka, Rohini, Vasant Kunj, DLF Cyber City Gurugram, and Noida.'
  },
  {
    question: 'What payment methods are accepted for vape orders on VapeeShopDelhi.com?',
    answer: 'We support instant UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and Cash on Delivery (COD) across select pin codes in Delhi NCR.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-list">
      {FAQ_DATA.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button
              className="faq-question"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
