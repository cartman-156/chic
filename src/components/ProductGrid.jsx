import React, { useMemo, useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, settings }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mountedItems, setMountedItems] = useState({});

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        product.category === selectedCategory;

      const matchesSearch =
        product.title.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        (product.description || '').toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  // ✅ FIX: stable per-product animation trigger
  useEffect(() => {
    const newState = {};

    filteredProducts.forEach((product, i) => {
      newState[product.id] = false;

      setTimeout(() => {
        setMountedItems((prev) => ({
          ...prev,
          [product.id]: true,
        }));
      }, i * 50);
    });

    setMountedItems(newState);
  }, [selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <section id="showcase" className="py-24 bg-luxury-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div>
            <span className="text-[10px] tracking-widest text-luxury-muted uppercase font-light">
              Bespoke Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-luxury-black">
              Explore Our Creations
            </h2>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search showcase..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-luxury-champagne/80 focus:border-luxury-gold py-2.5 pl-2 pr-10 text-sm font-light text-luxury-black focus:outline-none transition-colors placeholder:text-luxury-muted/60"
            />
            <Search className="absolute right-2 top-3 w-4 h-4 text-luxury-muted stroke-[1.25]" />
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex overflow-x-auto space-x-8 pb-4 mb-12 scrollbar-none border-b border-luxury-champagne/20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xs tracking-widest uppercase pb-4 whitespace-nowrap border-b font-light transition-all duration-300 ${
                selectedCategory === category
                  ? 'border-luxury-gold text-luxury-black font-normal'
                  : 'border-transparent text-luxury-muted hover:text-luxury-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {filteredProducts.map((product) => {
            const isVisible = mountedItems[product.id];

            return (
              <div
                key={product.id}
                className={`
                  transition-all duration-700 ease-out
                  will-change-transform
                  ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                  }
                `}
              >
                <ProductCard product={product} settings={settings} />
              </div>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg font-serif font-light text-luxury-muted">
              No creations found matching your request.
            </p>

            <button
              onClick={resetFilters}
              className="mt-4 text-xs tracking-widest uppercase font-light text-luxury-gold hover:text-luxury-black transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}