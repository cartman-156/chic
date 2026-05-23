import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Featured({ products, settings }) {
  // Filter out featured products
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
  <section
    id="collections"
    className="py-16 md:py-24 bg-luxury-champagne/30 border-y border-luxury-champagne/20"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

        {/* Left Column: Brand Statement / Editorial Block */}
        <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-28">

          <div className="space-y-3">
            <span className="text-[10px] tracking-widest text-luxury-muted uppercase font-light block">
              The Curation
            </span>

            <h2 className="text-3xl md:text-5xl font-serif font-light text-luxury-black leading-tight">
              Featured Pieces
            </h2>
          </div>

          <p className="text-sm font-light text-luxury-muted leading-relaxed">
            Every piece in our collection is thoughtfully crafted with an emphasis on quality, detail, and timeless design — created to be cherished for years to come.
          </p>

          <div className="pt-4 border-t border-luxury-champagne/60">
            <blockquote className="text-sm font-serif italic text-luxury-black/75">
              "Simplicity is the keynote of all true elegance."
            </blockquote>

            <span className="text-[9px] tracking-widest uppercase font-light text-luxury-muted block mt-2">
              — Coco Chanel
            </span>
          </div>

        </div>

        {/* Right Columns: Featured Products Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

          {featuredProducts.map((product) => (
            <div key={product.id} className="space-y-4">
              <ProductCard product={product} settings={settings} />
            </div>
          ))}

        </div>
      </div>
    </div>
  </section>
  );
}
