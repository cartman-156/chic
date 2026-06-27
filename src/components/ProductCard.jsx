import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProductCard({ product, settings }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Detect touch device (mobile safety layer)
  useEffect(() => {
    const touch = window.matchMedia('(hover: none)').matches;
    setIsTouch(touch);
  }, []);

  // Auto image rotation (softened timing)
  useEffect(() => {
    if (!product.images || product.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % product.images.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [product.images]);

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

  const showOverlay = isTouch ? false : isHovered;

  return (
    <>
      {/* CARD */}
      <motion.div
        ref={ref}
        onClick={() => setIsExpanded(true)}
        onMouseEnter={() => !isTouch && setIsHovered(true)}
        onMouseLeave={() => !isTouch && setIsHovered(false)}
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.25, 1, 0.5, 1]
        }}
      >
        {/* IMAGE */}
        <div className="aspect-[4/5] overflow-hidden bg-[#F6F4EF] relative">
          <motion.img
            key={activeImageIndex}
            src={getProductImage(activeImageIndex)}
            alt={product.title}
            // className="w-full h-full object-cover"
            className="w-full h-full object-contain"
            animate={{
              scale: showOverlay ? 1.03 : 1
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 1, 0.5, 1]
            }}
          />

          {/* BADGES */}
          <div className="absolute top-3 left-3 flex gap-2">
            {!product.inStock && (
              <span className="text-[9px] tracking-widest uppercase px-2 py-1 bg-black/70 text-white backdrop-blur-sm">
                Sold Out
              </span>
            )}

            {product.customizable && product.inStock && (
              <span className="text-[9px] tracking-widest uppercase px-2 py-1 bg-white/80 text-black/70 backdrop-blur-sm">
                Custom
              </span>
            )}
          </div>

          {/* INDEX */}
          {product.images?.length > 1 && (
            <div className="absolute bottom-3 right-3 text-[9px] text-white/60 tracking-widest">
              {activeImageIndex + 1}/{product.images.length}
            </div>
          )}

          {/* TITLE OVERLAY */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/10"
            initial={false}
            animate={{
              opacity: showOverlay ? 1 : 0
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1]
            }}
          >
            <h3 className="text-white text-sm tracking-wide font-light px-4 text-center">
              {product.title}
            </h3>
          </motion.div>
        </div>

        {/* BASE INFO */}
        <motion.div
          className="mt-3 space-y-1"
          animate={{
            opacity: showOverlay ? 0.35 : 1
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 1, 0.5, 1]
          }}
        >
          <div className="flex justify-between items-baseline">
            <h3 className="text-sm font-light text-black/80">
              {product.title}
            </h3>

            <span className="text-xs text-black/50">
              {product.price}
            </span>
          </div>

          <p className="text-[10px] tracking-widest uppercase text-black/40">
            {product.category}
          </p>
        </motion.div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="absolute inset-0 bg-black/60"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1]
              }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white flex flex-col md:flex-row overflow-hidden"
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 z-10 text-black/60"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 aspect-[4/5] bg-[#F6F4EF] relative">
                <img
                  src={getProductImage(activeImageIndex)}
                  alt={product.title}
                  // className="w-full h-full object-cover"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-light">
                      {product.title}
                    </h2>

                    <p className="text-sm text-black/60 mt-1">
                      {product.price}
                    </p>

                    <p className="text-[10px] tracking-widest uppercase text-black/40 mt-2">
                      {product.category}
                    </p>
                  </div>

                  {product.description && (
                    <div className="bg-stone-50 border border-stone-200 px-5 py-4 rounded-sm">
                      <p className="text-[15px] leading-7 text-black/90 font-light italic">
                        {product.description}
                      </p>
                    </div>
                  )}

                  {product.details?.length > 0 && (
                    <div>
                      <h3 className="text-[11px] uppercase tracking-[0.25em] text-black/40 mb-4">
                        Product Details
                      </h3>

                      <div className="space-y-3">
                        {product.details.map((detail, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 text-sm text-black/70 leading-6"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40 shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() =>
                      window.open(formatWhatsAppLink(), '_blank')
                    }
                    className="w-full border border-black/10 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}