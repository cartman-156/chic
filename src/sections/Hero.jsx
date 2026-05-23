import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-luxury-champagne overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-editorial-1.webp"
          alt="Boutique Banner"
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            // Graceful fallback if user has not uploaded the image yet
            e.target.style.display = 'none';
          }}
        />
        {/* Soft luxurious linear overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBF9] via-[#FCFBF9]/30 to-black/25" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center space-y-6 max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="space-y-4"
        >
          <h1 className="text-6xl md:text-8xl font-serif font-light text-luxury-black uppercase tracking-[0.15em] leading-tight">
            Chic
          </h1>
          <span className="text-xs md:text-sm tracking-[0.4em] uppercase font-light text-luxury-muted block">
            Stylishly Simple
          </span>
          <div className="h-px w-20 bg-luxury-gold mx-auto my-6" />
          <p className="text-lg md:text-2xl font-serif italic font-light text-luxury-black/80 max-w-xl mx-auto">
            Handcrafted frocks, bespoke jewellery, and elegant gift accessories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="pt-10"
        >
          <a
            href="#collections"
            className="inline-block text-xs tracking-[0.25em] uppercase font-light border-b border-luxury-black pb-2 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300"
          >
            Explore Collections
          </a>
        </motion.div>
      </div>

      {/* Floating scroll down indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 cursor-pointer"
        onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-light text-luxury-muted">
          Scroll
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-luxury-muted stroke-[1.25]" />
      </motion.div>
    </section>
  );
}
