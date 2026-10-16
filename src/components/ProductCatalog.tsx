'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCatalogProps {
  products: Product[];
}

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesQuery =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="product-catalog-section">
      {/* CATEGORY TABS & SEARCH BAR */}
      <div className="catalog-toolbar">
        <div className="category-tabs">
          <button
            type="button"
            className={`cat-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <span className="tab-icon">🔥</span>
            <span>All Products ({products.length})</span>
          </button>
          <button
            type="button"
            className={`cat-tab-btn ${selectedCategory === 'disposable' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('disposable')}
          >
            <span className="tab-icon">💨</span>
            <span>Smart Disposables (2)</span>
          </button>
          <button
            type="button"
            className={`cat-tab-btn ${selectedCategory === 'pod-system' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('pod-system')}
          >
            <span className="tab-icon">⚡</span>
            <span>Refillable Pod Kits (1)</span>
          </button>
        </div>

        {/* SEARCH INPUT */}
        <div className="catalog-search-box">
          <svg className="search-svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search Elfbar Raya, SMOK Nord..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search products"
            className="search-input-field"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <article key={product.id} className="product-card">
            {/* FLOATING TOP BADGES */}
            <div className="product-card-top-badges">
              <span className="badge-discount-chip">{product.discountBadge}</span>
              <span className="badge-sold-chip">🔥 {product.soldCount}</span>
            </div>

            {/* FULL 1:1 SQUARE IMAGE CONTAINER - NO CROPPING */}
            <Link href={`/products/${product.slug}`} className="product-img-wrap" aria-label={product.name}>
              <img
                src={product.image}
                alt={`${product.name} - Vape Store Gurgaon & Delhi NCR`}
                loading="lazy"
                width={600}
                height={600}
                className="product-actual-img"
              />
            </Link>

            {/* PRODUCT CARD BODY */}
            <div className="product-info">
              {/* CATEGORY & RATING ROW */}
              <div className="product-meta-row">
                <span className="cat-chip">{product.categoryLabel}</span>
                <span className="rating-chip">★ {product.rating} ({product.reviewCount}+ reviews)</span>
              </div>

              {/* TITLE */}
              <Link href={`/products/${product.slug}`} className="product-title-link">
                <h3 className="product-name">{product.name}</h3>
              </Link>

              {/* SHORT DESCRIPTION */}
              <p className="product-desc-text">{product.shortDesc}</p>

              {/* FAST DELIVERY INDICATOR */}
              <div className="product-dispatch-tag">
                <span className="dispatch-bolt">⚡</span>
                <span>Fast Delivery • Delhi NCR & Gurgaon</span>
              </div>

              {/* PRICE ROW */}
              <div className="product-price-section">
                <div className="price-stack">
                  <span className="curr-price">₹{product.price.toLocaleString('en-IN')}</span>
                  <span className="old-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="save-badge">Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* ACTION BUTTONS (VIEW DETAILS + WHATSAPP ORDER) */}
              <div className="product-card-actions">
                <Link href={`/products/${product.slug}`} className="btn-card-details">
                  Details
                </Link>
                <a
                  href={`https://wa.me/918816964412?text=${encodeURIComponent(
                    `Hi Vape Store Delhi, I want to order *${product.name}* (Price: ₹${product.price}) with fast express delivery in Delhi NCR.`
                  )}`}
                  className="btn-card-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
