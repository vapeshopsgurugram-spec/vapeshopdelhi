'use client';

import { useState } from 'react';

const LOCALITIES = [
  { id: 'all', label: 'All Delhi NCR' },
  { id: 'south', label: 'South Delhi (GK, Saket, Hauz Khas)' },
  { id: 'central', label: 'Central (CP, Karol Bagh)' },
  { id: 'west', label: 'West Delhi (Dwarka, Rajouri)' },
  { id: 'ncr', label: 'Noida & Gurugram' }
];

export default function LocalitySelector() {
  const [activeLoc, setActiveLoc] = useState('all');

  return (
    <div className="location-quick-bar">
      <span className="location-label">📍 Quick Select Your Delhi Zone:</span>
      <div className="location-tags">
        {LOCALITIES.map(loc => (
          <button
            key={loc.id}
            className={`loc-tag ${activeLoc === loc.id ? 'active' : ''}`}
            onClick={() => setActiveLoc(loc.id)}
            type="button"
          >
            {loc.label}
          </button>
        ))}
      </div>
    </div>
  );
}
