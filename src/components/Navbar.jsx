import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ settings }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // lock body scroll when menu is open (prevents hero interaction issues)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Collections', href: '#collections' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Instagram', href: settings?.instagramUrl || '#instagram' },
    { name: 'Inquire', href: '#contact' }
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 inset-x-0 z-[9999]
          h-20 flex items-center
          transition-all duration-300
          ${isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-luxury-champagne/40 shadow-sm'
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-between items-center">

          {/* BRAND */}
          <a href="#" className="flex flex-col leading-none z-[10000]">
            <span className="text-2xl md:text-3xl font-serif font-light tracking-[0.25em] text-luxury-black uppercase">
              Chic
            </span>
            <span className="text-[9px] tracking-[0.35em] text-luxury-muted uppercase mt-1">
              Stylishly Simple
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isExternal = item.href?.startsWith("http");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="text-xs tracking-widest uppercase font-light text-luxury-black/80 hover:text-luxury-gold transition-colors"
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href="#contact"
              className="flex items-center gap-2 text-xs tracking-widest uppercase font-light bg-luxury-charcoal text-luxury-ivory px-5 py-2.5 hover:bg-luxury-gold transition-all"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden z-[10000]"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-luxury-black" />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`
          fixed inset-0 z-[10000] md:hidden
          transition-all duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >

        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />

        {/* MENU PANEL */}
        <div className="absolute inset-0 bg-luxury-ivory flex flex-col items-center justify-center gap-8">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6"
            aria-label="Close menu"
          >
            <X className="w-7 h-7 text-luxury-black" />
          </button>

          {/* LINKS */}
          {navItems.map((item) => {
            const isExternal = item.href?.startsWith('http');

            return (
              <a
                key={item.name}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="text-xl tracking-[0.25em] uppercase font-serif font-light text-luxury-black hover:text-luxury-gold transition-colors"
              >
                {item.name}
              </a>
            );
          })}

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-sm tracking-widest uppercase bg-luxury-charcoal text-luxury-ivory px-8 py-3.5 mt-4"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>
      </div>
    </>
  );
}