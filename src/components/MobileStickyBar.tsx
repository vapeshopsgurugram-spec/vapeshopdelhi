'use client';

export default function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar">
      <a href="tel:+918816964412" className="btn-mobile-call">
        📞 Call Delhi Store
      </a>
      <a
        href="https://wa.me/918816964412?text=Hi%20Vape%20Shop%20Delhi%2C%20I%20want%20to%20order%20vapes%20now%20in%20Delhi"
        className="btn-mobile-wa"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 WhatsApp Order
      </a>
    </div>
  );
}
