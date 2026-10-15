import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllProducts, getProductBySlug, getAllProductSlugs } from '@/data/products';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const instant = false;

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Vape Shop Delhi',
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `https://vapeeshopdelhi.com/products/${product.slug}`
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://vapeeshopdelhi.com/products/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name
        }
      ]
    }
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = getAllProducts();
  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 3);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.shortDesc,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    offers: {
      '@type': 'Offer',
      url: `https://vapeeshopdelhi.com/products/${product.slug}`,
      priceCurrency: 'INR',
      price: product.price,
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Vapee Shop Delhi'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString()
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vapeeshopdelhi.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://vapeeshopdelhi.com/#products'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://vapeeshopdelhi.com/products/${product.slug}`
      }
    ]
  };

  const waMessage = encodeURIComponent(
    `Hello Vape Shop Delhi! I want to order *${product.name}* (Price: ₹${product.price}). Please share available flavors and express delivery time for my location in Delhi NCR.`
  );

  return (
    <main>
      {/* SCHEMA INJECTION FOR GOOGLE PRODUCT SNIPPET */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="product-detail-section">
        <div className="container">
          {/* BREADCRUMB */}
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link> &gt;{' '}
            <Link href="/#products">Products</Link> &gt;{' '}
            <span style={{ color: 'var(--text-primary)' }}>{product.name}</span>
          </nav>

          <div className="detail-grid">
            {/* PRODUCT VISUAL / IMAGE */}
            <div className="detail-gallery">
              <img
                src={product.image}
                alt={`${product.name} - Available at Vape Shop Delhi`}
                className="detail-main-img"
                width={600}
                height={450}
              />
              <div className="detail-badges">
                <span className="detail-badge-item">🔒 100% Factory Sealed</span>
                <span className="detail-badge-item">🛡️ Holographic Scratch Code</span>
                <span className="detail-badge-item">⚡ 2-Hr Express Courier</span>
              </div>
            </div>

            {/* PRODUCT INFORMATION */}
            <div className="detail-info">
              <div className="hero-chip">
                <span className="live-dot"></span> In Stock at Delhi Warehouse
              </div>

              <div className="detail-header">
                <h1>{product.name}</h1>
              </div>

              <div className="detail-rating-row">
                <span className="detail-stars">★★★★★ {product.rating}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  ({product.reviewCount}+ reviews)
                </span>
                <span style={{ color: 'var(--accent-green)', fontSize: '0.88rem', fontWeight: 700 }}>
                  | {product.soldCount}
                </span>
                <span className="tag-pill">{product.categoryLabel}</span>
              </div>

              {/* PRICING */}
              <div className="detail-price-box">
                <div>
                  <span className="detail-price-main">₹{product.price.toLocaleString('en-IN')}</span>{' '}
                  <span className="old-price" style={{ fontSize: '1.1rem', marginLeft: '8px' }}>
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span style={{ color: '#f87171', fontSize: '1rem', fontWeight: 800, marginLeft: '10px' }}>
                    {product.discountBadge}
                  </span>
                </div>
                <span className="detail-save-pill">
                  SAVE ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} (Special Offer)
                </span>
              </div>

              {/* EXPRESS DISPATCH HIGHLIGHT */}
              <div className="delhi-express-banner">
                <span className="express-icon">🚀</span>
                <div>
                  <h4>Same Day Express Dispatch in Delhi NCR</h4>
                  <p>Order now for delivery within {product.delhiDeliveryTime}. Cash on Delivery (COD) & UPI available.</p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="detail-actions">
                <a
                  href={`https://wa.me/919876543210?text=${waMessage}`}
                  className="btn btn-whatsapp btn-large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>Order Now on WhatsApp (Instant Reply)</span>
                </a>
                <a href="tel:+919876543210" className="btn btn-outline">
                  📞 Call Store Helpline: +91 98765 43210
                </a>
              </div>

              {/* FLAVORS LIST */}
              {product.flavors && product.flavors.length > 0 && (
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '8px' }}>Available Flavors & Options:</h3>
                  <div className="flavor-chips">
                    {product.flavors.map((flavor, idx) => (
                      <span key={idx} className="flavor-chip">
                        🍃 {flavor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* SPECIFICATIONS TABLE */}
              <h3 style={{ fontSize: '1.15rem', marginTop: '24px' }}>Product Specifications</h3>
              <table className="specs-table">
                <tbody>
                  <tr>
                    <th>Brand</th>
                    <td>{product.brand}</td>
                  </tr>
                  {product.puffs && (
                    <tr>
                      <th>Puff Count</th>
                      <td>{product.puffs}</td>
                    </tr>
                  )}
                  <tr>
                    <th>Nicotine Strength</th>
                    <td>{product.nicotine}</td>
                  </tr>
                  <tr>
                    <th>Battery</th>
                    <td>{product.battery}</td>
                  </tr>
                  <tr>
                    <th>E-Liquid Capacity</th>
                    <td>{product.liquidCapacity}</td>
                  </tr>
                  <tr>
                    <th>Delivery Area</th>
                    <td>South Delhi, CP, West Delhi, East Delhi & all Delhi zones</td>
                  </tr>
                </tbody>
              </table>

              {/* KEY PRODUCT HIGHLIGHTS */}
              <h3 style={{ fontSize: '1.15rem', marginTop: '24px', marginBottom: '12px' }}>
                Key Highlights & Authenticity
              </h3>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                {product.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* TOP DELIVERY AREAS */}
              <div style={{ marginTop: '28px', padding: '18px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '8px', color: 'var(--accent-cyan)' }}>
                  📍 Fast Local Courier Zones for {product.name}:
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  High-speed dispatches ready for: {product.popularLocalities.join(', ')} and all surrounding Delhi NCR sectors.
                </p>
              </div>
            </div>
          </div>

          {/* RELATED PRODUCTS */}
          <div style={{ marginTop: '80px' }}>
            <div className="section-head text-center">
              <span className="sub-head">RECOMMENDED ALTERNATIVES</span>
              <h2 className="section-title">Other Top Sellers in Delhi</h2>
            </div>

            <div className="products-grid" style={{ marginTop: '30px' }}>
              {relatedProducts.map(rel => (
                <article key={rel.id} className="product-card">
                  <div className="badge-discount">{rel.badge}</div>
                  <Link href={`/products/${rel.slug}`} className="product-img-wrap">
                    <img src={rel.image} alt={rel.name} loading="lazy" width={400} height={230} />
                  </Link>
                  <div className="product-info">
                    <h3 className="product-name">{rel.name}</h3>
                    <p className="product-flavor">{rel.shortDesc}</p>
                    <div className="product-price-bar">
                      <div className="price-box">
                        <span className="curr-price">₹{rel.price}</span>
                        <span className="old-price">₹{rel.originalPrice}</span>
                      </div>
                      <Link href={`/products/${rel.slug}`} className="btn btn-order">
                        View Product ⚡
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
