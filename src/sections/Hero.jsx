import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {

  const heroImage = `${import.meta.env.BASE_URL}images/hero-editorial-1.webp`;

  return (
    <section className="relative isolate h-screen bg-luxury-champagne overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Boutique Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBF9] via-[#FCFBF9]/30 to-black/25" />
      </div>

      {/* CONTENT (FIXED VERTICAL POSITIONING) */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-20 px-6 text-center max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-6"
        >

          <h1 className="text-6xl md:text-8xl font-serif font-light text-luxury-black uppercase tracking-[0.15em] leading-[1.1]">
            Chic
          </h1>

          <span className="text-xs md:text-sm tracking-[0.4em] uppercase font-light text-luxury-muted">
            Stylishly Simple
          </span>

          <div className="h-px w-20 bg-luxury-gold" />

          <p className="text-lg md:text-2xl font-serif italic font-light text-luxury-black/80 max-w-xl leading-relaxed">
            Thoughtfully crafted pieces with timeless appeal.
          </p>

        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <a
            href="#collections"
            className="inline-block text-xs tracking-[0.25em] uppercase font-light border-b border-luxury-black pb-2"
          >
            Explore Collections
          </a>
        </motion.div>

      </div>

      {/* SCROLL */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 cursor-pointer"
        onClick={() =>
          document.getElementById('collections')?.scrollIntoView({
            behavior: 'smooth'
          })
        }
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-light text-luxury-muted">
          Scroll
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-luxury-muted" />
      </motion.div>

    </section>
  );
}