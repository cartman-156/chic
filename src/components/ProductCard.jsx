import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ProductCard({ product, settings }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Desktop zoom
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);

  // Mobile zoom
  const [mobileZoom, setMobileZoom] = useState(false);

  const imageRef = useRef(null);
  const rafRef = useRef(null);
  const latestPos = useRef({ x: 50, y: 50 });

  const nextImage = (e) => {
    e.stopPropagation();
    if (product.images?.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (product.images?.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  const formatWhatsAppLink = () => {
    const number = settings?.whatsappNumber || '919999999999';

    const text = `Hello Chic, I'm interested in:
Product: ${product.title}
Code: ${product.id}
Price: ${product.price}
Customization: ${product.customizable ? 'Yes' : 'No'}`;

    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  };

  const getProductImage = (index) => {
    if (product.images?.length > 0) return product.images[index];
    return 'https://via.placeholder.com/600x750.png?text=Image+Coming+Soon';
  };

  // 🔥 SMOOTH APPLE-STYLE MOUSE TRACKING
  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    latestPos.current = { x, y };

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        setZoomPos(latestPos.current);
        rafRef.current = null;
      });
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* PRODUCT CARD */}
      <motion.div
        layoutId={`card-${product.id}`}
        onClick={() => setIsExpanded(true)}
        className="group cursor-pointer bg-[#FCFBF9] text-left"
        whileHover={{ y: -8 }}
      >
        <div className="aspect-[4/5] overflow-hidden bg-luxury-champagne relative mb-4">
          <img
            src={getProductImage(0)}
            alt={product.title}
            className="w-full h-full object-cover"
          />

          {product.customizable && (
            <span className="absolute top-4 left-4 bg-luxury-ivory/90 text-[9px] uppercase px-3 py-1 border">
              Customizable
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

      {/* MODAL */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6">

            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsExpanded(false);
                setMobileZoom(false);
              }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* MODAL */}
            <motion.div
              layoutId={`card-${product.id}`}
              className="relative w-full max-w-5xl bg-luxury-ivory shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh] overflow-hidden"
            >

              {/* CLOSE */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 z-20 bg-black text-white p-2"
              >
                <X className="w-5 h-5" />
              </button>

              {/* IMAGE SECTION */}
              <div
                ref={imageRef}
                className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden bg-black"
                onMouseMove={!mobileZoom ? handleMouseMove : undefined}
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setMobileZoom(true);
                  }
                }}
              >
                <img
                  src={getProductImage(activeImageIndex)}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    mobileZoom ? 'scale-150 cursor-grab' : ''
                  }`}
                  style={
                    !mobileZoom
                      ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
                      : {}
                  }
                />

                {/* DESKTOP APPLE-LIKE LENS */}
                {!mobileZoom && isZooming && (
                  <div
                    className="absolute pointer-events-none w-44 h-44 rounded-full border border-white/40 shadow-2xl backdrop-blur-sm"
                    style={{
                      top: `${zoomPos.y}%`,
                      left: `${zoomPos.x}%`,
                      transform: 'translate(-50%, -50%)',
                      backgroundImage: `url(${getProductImage(activeImageIndex)})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '260%',
                      backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`
                    }}
                  />
                )}

                {/* MOBILE CLOSE ZOOM */}
                {mobileZoom && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileZoom(false);
                    }}
                    className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs"
                  >
                    Exit Zoom
                  </button>
                )}

                {/* NAV ARROWS */}
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

                <a
                  href={formatWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-black text-white py-4 text-xs uppercase tracking-widest"
                >
                  Inquire via WhatsApp
                </a>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}