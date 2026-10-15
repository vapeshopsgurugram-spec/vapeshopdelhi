export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'disposable' | 'pod-system' | 'e-liquid' | 'coils';
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discountBadge: string;
  rating: number;
  reviewCount: number;
  soldCount: string;
  badge: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  puffs?: string;
  nicotine: string;
  battery: string;
  liquidCapacity: string;
  flavors: string[];
  features: string[];
  delhiDeliveryTime: string;
  inStock: boolean;
  popularLocalities: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'elfbar-raya-d2-20000',
    slug: 'elfbar-raya-d2-20000-disposable-pod-device',
    name: 'Elfbar Raya D2 20000 Disposable Pod Device',
    brand: 'Elf Bar',
    category: 'disposable',
    categoryLabel: 'Smart Disposable Vape',
    price: 1800,
    originalPrice: 2800,
    discountBadge: '36% OFF',
    rating: 4.9,
    reviewCount: 182,
    soldCount: '700+ sold',
    badge: '36% OFF • 20K PUFFS',
    shortDesc: 'Elfbar Raya D2 20000 Disposable Pod Device with 20K Smooth / 14K Turbo dual modes and smart screen. Best disposable vape in Delhi with 45-min express delivery.',
    metaTitle: 'Elfbar Raya D2 20000 Disposable Pod Device | Buy in Delhi | 45-Min Delivery',
    metaDescription: 'Buy authentic Elfbar Raya D2 20000 Disposable Pod Device in Delhi. 20K Smooth / 14K Turbo dual modes, smart screen, 4.9★ rated. Same-day 45-min express delivery across all Delhi areas. COD available.',
    image: '/images/products/elfbar-raya-d2-20000.jpg',
    puffs: '20,000 Smooth / 14,000 Turbo Puffs',
    nicotine: '50mg (5% Nic Salt)',
    battery: 'Type-C Fast Rechargeable Battery',
    liquidCapacity: 'High-Capacity Pre-filled Juice with Smart E-Liquid Screen',
    flavors: [
      'Blueberry Ice',
      'Peach Ice',
      'Grape Ice',
      'Blueberry Raspberry',
      'Peach Berry',
      'Watermelon Bubble Gum'
    ],
    features: [
      'Dual Mode Switching: 20K Smooth Puffs & 14K Turbo Flavor Boost',
      'Full Digital Smart Display showing Battery % and Liquid Level',
      'Advanced Dual Mesh Coil for Rich, Dense Vapor Output',
      '100% Genuine Box with Holographic Scratch Verification Code',
      'Instant Express Delivery in Delhi — South Delhi, Connaught Place, Dwarka & all Delhi areas'
    ],
    delhiDeliveryTime: '45 Minutes (Delhi Express)',
    inStock: true,
    popularLocalities: ['South Delhi', 'Connaught Place', 'Dwarka', 'Rohini', 'Greater Kailash', 'Hauz Khas', 'Karol Bagh']
  },
  {
    id: 'smok-nord-pod-kit-1100mah',
    slug: 'smok-nord-pod-kit-1100mah',
    name: 'SMOK Nord Pod Kit 1100mAh',
    brand: 'SMOK',
    category: 'pod-system',
    categoryLabel: 'Refillable Pod Kit',
    price: 3500,
    originalPrice: 4200,
    discountBadge: '17% OFF',
    rating: 4.9,
    reviewCount: 186,
    soldCount: '800+ sold',
    badge: '17% OFF • 800+ SOLD',
    shortDesc: 'SMOK Nord Pod Kit (1100mAh) with 3ML refillable pod and high-performance mesh coil. Best refillable pod kit in Delhi with same-day delivery.',
    metaTitle: 'SMOK Nord Pod Kit 1100mAh | Buy Online in Delhi | Same Day Delivery',
    metaDescription: 'Order original SMOK Nord Pod Kit 1100mAh with 3ml refillable pod and high-performance mesh coil. 4.9★ rated, 800+ sold. Same-day 45-min express delivery anywhere in Delhi. COD available.',
    image: '/images/products/smok-nord-pod-kit.jpg',
    battery: '1100mAh Long-Lasting Internal Battery',
    nicotine: 'Compatible with Salt Nicotine & Freebase E-Liquids',
    liquidCapacity: '3ML Refillable Replacement Pod',
    flavors: [
      'Blue Green Resin',
      'Blue Black Resin',
      'Red Yellow Resin',
      'Black White Resin',
      'Yellow Purple Resin',
      'Green Red Resin'
    ],
    features: [
      'High Capacity 1100mAh Battery for All-Day Vaping',
      '3ML Refillable Cartridge with Anti-Leak Design',
      'Includes 0.6Ω Mesh Coil (Direct Lung) & 1.4Ω Regular Coil (MTL)',
      'Single Button Fired with Smart LED Battery Indicator',
      '100% Original Sealed Box with Authentic QR Security Seal'
    ],
    delhiDeliveryTime: '45 - 90 Minutes across all Delhi zones',
    inStock: true,
    popularLocalities: ['Hauz Khas', 'Greater Kailash', 'Connaught Place', 'Rajouri Garden', 'Rohini', 'Dwarka', 'Saket']
  },
  {
    id: 'elfbar-raya-d1-black-gold',
    slug: 'elfbar-raya-d1-disposable-pod-device-black-gold',
    name: 'Elfbar Raya D1 Disposable Pod Device (Black Gold)',
    brand: 'Elf Bar',
    category: 'disposable',
    categoryLabel: 'Black Gold Edition Disposable',
    price: 1650,
    originalPrice: 2400,
    discountBadge: '31% OFF',
    rating: 4.9,
    reviewCount: 152,
    soldCount: '580+ sold',
    badge: '31% OFF • 13,000 PUFFS',
    shortDesc: 'Elfbar Raya D1 Black Gold Edition Disposable Pod Device (13,000 Puffs) with dual smart display. Delhi\'s top-selling luxury disposable vape with 45-min delivery.',
    metaTitle: 'Elfbar Raya D1 Black Gold 13000 Puffs | Buy in Delhi | 45-Min Express Delivery',
    metaDescription: 'Buy Elfbar Raya D1 Black Gold Edition Disposable Pod Device (13,000 Puffs) in Delhi. Dual smart display, genuine product, 4.9★ rated. Same-day 45-min delivery anywhere in Delhi. COD available.',
    image: '/images/products/elfbar-raya-d1-black-gold.jpg',
    puffs: '13,000 Puffs',
    nicotine: '50mg (5% Nic Salt)',
    battery: '650mAh Type-C Rechargeable Battery',
    liquidCapacity: 'Dual Smart Display: E-Liquid Level & Battery Power',
    flavors: [
      'Strawberry Cake',
      'Grape Slurpee',
      'Mango Guava',
      'Strawberry Melon',
      'Kopi O Kaw',
      'Mango King',
      'Funta Grape'
    ],
    features: [
      'Exclusive Black Gold Luxury Aesthetic Edition',
      '13,000 Massive Puffs with Dual Smart Screen Display',
      'Real-Time Battery Indicator & E-Liquid Fuel Gauge',
      'Optimized Mesh Coil Technology for Consistent Throat Hit',
      'Discreet Express Hand Delivery across all Delhi areas in 45 minutes'
    ],
    delhiDeliveryTime: '45 Minutes Express Delivery in Delhi',
    inStock: true,
    popularLocalities: ['South Delhi', 'Vasant Kunj', 'Saket', 'Connaught Place', 'Defence Colony', 'Hauz Khas', 'Greater Kailash']
  }
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map(p => p.slug);
}
