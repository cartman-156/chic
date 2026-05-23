import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ProductCard({ product, settings }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    if (product.images && product.images.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (product.images && product.images.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  const selectImageIndex = (e, index) => {
    e.stopPropagation();
    setActiveImageIndex(index);
  };

  const formatWhatsAppLink = () => {
    const number = settings?.whatsappNumber || '919999999999';
    const text = `Hello Chic, I'm interested in inquiring about the following item:
Product: ${product.title}
Code: ${product.id}
Price: ${product.price}
Customization: ${product.customizable ? 'Yes' : 'No'}
Please share details.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  };

  // Fallback for missing images
  const getProductImage = (index) => {
    if (product.images && product.images.length > 0) {
      return product.images[index];
    }
    return 'https://via.placeholder.com/600x750.png?text=Image+Coming+Soon';
  };

  return (
    <>
      {/* Product Grid Card */}
      <motion.div
        layoutId={`card-${product.id}`}
        onClick={() => setIsExpanded(true)}
        className="group cursor-pointer bg-[#FCFBF9] text-left"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="aspect-[4/5] overflow-hidden bg-luxury-champagne relative image-zoom-container mb-4">
          <img
            src={getProductImage(0)}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {product.customizable && (
            <span className="absolute top-4 left-4 bg-luxury-ivory/90 text-luxury-black text-[9px] tracking-widest uppercase font-light px-3 py-1.5 backdrop-blur-sm border border-luxury-champagne/30">
              Customizable
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-[10px] tracking-widest text-luxury-muted uppercase font-light">
            {product.category}
          </p>
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-serif font-light text-luxury-black group-hover:text-luxury-gold transition-colors duration-300">
              {product.title}
            </h3>
            <p className="text-sm font-light text-luxury-black font-sans">
              {product.price}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="absolute inset-0 bg-luxury-black/60 backdrop-blur-sm"
              transition={{ duration: 0.4 }}
            />

            {/* Modal Box */}
            <motion.div
              layoutId={`card-${product.id}`}
              className="relative w-full max-w-4xl bg-luxury-ivory overflow-hidden border border-luxury-champagne/30 shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-[80vh]"
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 z-20 bg-luxury-black text-luxury-ivory p-2 rounded-none hover:bg-luxury-gold transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 stroke-[1.25]" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 aspect-[4/5] bg-luxury-champagne relative flex items-center justify-center">
                <img
                  src={getProductImage(activeImageIndex)}
                  alt={`${product.title} view`}
                  className="w-full h-full object-cover"
                />

                {/* Left/Right Carousel Nav */}
                {product.images && product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-luxury-ivory/80 hover:bg-luxury-ivory text-luxury-black p-2 shadow-md transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-luxury-ivory/80 hover:bg-luxury-ivory text-luxury-black p-2 shadow-md transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[1.5]" />
                    </button>

                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {product.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => selectImageIndex(e, idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeImageIndex === idx ? 'bg-luxury-black scale-125' : 'bg-luxury-black/30'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Detail Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] tracking-widest text-luxury-muted uppercase font-light block mb-2">
                      {product.category}
                    </span>
                    <h2 className="text-3xl font-serif font-light text-luxury-black leading-tight">
                      {product.title}
                    </h2>
                    <p className="text-lg font-light text-luxury-black font-sans mt-2">
                      {product.price}
                    </p>
                  </div>

                  <div className="h-px bg-luxury-champagne" />

                  <p className="text-sm font-light text-luxury-muted leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-[10px] tracking-widest font-semibold uppercase text-luxury-black">
                      Product Details
                    </h4>
                    <ul className="text-xs font-light text-luxury-muted space-y-2 list-disc list-inside">
                      <li>Bespoke Handcrafted Design</li>
                      {product.customizable && <li>Custom Measurements & Styling Available</li>}
                      <li>Premium Material Curation</li>
                      <li>Secure Boutique Inquiry System</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-luxury-champagne/40 space-y-4">
                  <a
                    href={formatWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center flex items-center justify-center space-x-2 text-xs tracking-widest uppercase font-light bg-luxury-charcoal text-luxury-ivory py-4 hover:bg-luxury-gold transition-colors duration-300 shadow-sm"
                  >
                    <span>Inquire via WhatsApp</span>
                  </a>
                  {product.customizable && (
                    <p className="text-[10px] font-light text-center text-luxury-muted italic">
                      This piece is custom-tailored. Standard production time is 2-3 weeks.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
