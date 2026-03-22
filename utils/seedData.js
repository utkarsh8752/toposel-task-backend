const products = [
  {
    name: 'Sand Beige Floral Shirt',
    price: 199.0,
    discountPercent: 10,
    imageUrl:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    ctaLabel: 'Add to Cart',
    ctaHref: '#',
    isNewArrival: true,
  },
  {
    name: 'Classic Denim Shirt',
    price: 89.0,
    discountPercent: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    ctaLabel: 'Add to Cart',
    ctaHref: '#',
    isNewArrival: true,
  },
  {
    name: 'Black Sneakers',
    price: 129.0,
    discountPercent: 15,
    imageUrl:
      'https://images.unsplash.com/photo-1528701800489-20be9c1b7a43?auto=format&fit=crop&w=600&q=80',
    ctaLabel: 'Add to Cart',
    ctaHref: '#',
    isNewArrival: true,
  },
  {
    name: 'Essential White Tee',
    price: 39.0,
    discountPercent: 0,
    imageUrl:
      'https://images.unsplash.com/photo-1521572282257-7c04e5a1f7cf?auto=format&fit=crop&w=600&q=80',
    ctaLabel: 'Add to Cart',
    ctaHref: '#',
    isNewArrival: true,
  },
  {
    name: 'Minimal Hoodie',
    price: 79.0,
    discountPercent: 12,
    imageUrl:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80',
    ctaLabel: 'Add to Cart',
    ctaHref: '#',
    isNewArrival: true,
  },
  {
    name: 'Tailored Chinos',
    price: 99.0,
    discountPercent: 8,
    imageUrl:
      'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=600&q=80',
    ctaLabel: 'Add to Cart',
    ctaHref: '#',
    isNewArrival: true,
  },
];

const hero = {
  title: 'Fine-Crafting Your Style',
  subtitle: 'Discover curated looks for every occasion',
  ctaLabel: 'Shop Now',
  ctaHref: '#',
  backgroundImage:
    'https://images.unsplash.com/photo-1496747611180-206a5c8c9d80?auto=format&fit=crop&w=1200&q=80',
};

const announcement = {
  text: 'Get 20% off on your first order — use code NEW20',
  link: '#',
  isActive: true,
};

const icons = [
  {
    label: 'Express Delivery',
    iconUrl:
      'https://cdn-icons-png.flaticon.com/512/891/891462.png',
  },
  {
    label: 'Premium Quality',
    iconUrl:
      'https://cdn-icons-png.flaticon.com/512/992/992700.png',
  },
  {
    label: '24/7 Support',
    iconUrl:
      'https://cdn-icons-png.flaticon.com/512/726/726476.png',
  },
];

module.exports = { products, hero, announcement, icons };
