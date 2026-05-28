import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ProductCard({ product, settings }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    if (product.images?.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (product.images?.length > 0) {
      setActiveImageIndex(
        (prev) => (prev - 1 + product.images.length) % product.images.length
      );
    }
  };

  const formatWhatsAppLink = () => {
    const number = settings?.whatsappNumber || '919999999999';

    const text = `Hello Chic, I'm interested in:
Product: ${product.title}
Code: ${product.id}
Price: ${product.price}`;

    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  };

  const getProductImage = (index) => {
    if (product.images?.length > 0) {
      const imagePath = product.images[index];
      return `${import.meta.env.BASE_URL}${imagePath.replace(/^\/+/, '')}`;
    }

    return 'https://via.placeholder.com/600x750.png?text=Image+Coming+Soon';
  };

  return (
    <>
      {/* CARD (NO layoutId) */}
      <motion.div
        onClick={() => setIsExpanded(true)}
        className="group cursor-pointer bg-[#FCFBF9] text-left"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
      >
        <div className="aspect-[4/5] overflow-hidden bg-luxury-champagne relative mb-4">
          <img
            src={getProductImage(0)}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {product.customizable && (
            <span className="absolute top-4 left-4 bg-luxury-ivory/90 text-[9px] uppercase px-3 py-1 border">
              Customizable
            </span>
          )}
          {!product.inStock && (
            <span className="absolute top-12 left-4 bg-luxury-muted/90 text-[9px] uppercase px-3 py-1 border">
              Sold Out
            </span>
          )}
        </div>

        <div className="space-y-1">
          <p className="text-[10px] tracking-widest uppercase text-luxury-muted">
            {product.category}
          </p>

          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-serif font-light group-hover:text-luxury-gold transition-colors">
              {product.title}
            </h3>
            <p className="text-sm font-light">{product.price}</p>
          </div>
        </div>
      </motion.div>

      {/* MODAL (clean AnimatePresence) */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6">

            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsExpanded(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* MODAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl bg-luxury-ivory shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh] overflow-hidden"
            >
              {/* CLOSE */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 z-30 bg-black text-white p-2"
              >
                <X className="w-5 h-5" />
              </button>

              {/* IMAGE */}
              <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden bg-black">
                <img
                  src={getProductImage(activeImageIndex)}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                {product.images?.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* DETAILS */}
              <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">
                    {product.category}
                  </span>

                  <h2 className="text-3xl font-serif font-light">
                    {product.title}
                  </h2>

                  <p className="text-lg mt-2">{product.price}</p>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {product.details?.length > 0 && (
                  <ul className="space-y-2 text-xs text-gray-600 list-disc list-inside">
                    {product.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => window.open(formatWhatsAppLink(), '_blank')}
                  className="w-full bg-black text-white py-4 px-6 md:px-10 text-xs uppercase tracking-widest box-border"
                >
                  {product.inStock
                    ? 'Inquire via WhatsApp'
                    : 'Request a Similar Creation'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}