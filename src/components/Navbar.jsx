import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Collections', href: '#collections' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Inquire', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass-nav py-4 border-b border-luxury-champagne/40 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col">
          <span className="text-2xl md:text-3xl font-serif font-light tracking-[0.25em] text-luxury-black uppercase">
            Chic
          </span>
          <span className="text-[9px] font-sans font-light tracking-[0.35em] text-luxury-muted uppercase -mt-0.5">
            Stylishly Simple
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs tracking-widest uppercase font-light text-luxury-black/80 hover:text-luxury-gold transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="group flex items-center space-x-2 text-xs tracking-widest uppercase font-light bg-luxury-charcoal text-luxury-ivory px-5 py-2.5 hover:bg-luxury-gold transition-all duration-300 shadow-sm"
          >
            <span>Contact</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-luxury-black hover:text-luxury-gold transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6 stroke-[1.25]" /> : <Menu className="w-6 h-6 stroke-[1.25]" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`fixed inset-0 top-[68px] bg-luxury-ivory/98 z-40 md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-xl tracking-[0.2em] uppercase font-serif font-light text-luxury-black hover:text-luxury-gold transition-colors"
          >
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="flex items-center space-x-2 text-sm tracking-widest uppercase font-light bg-luxury-charcoal text-luxury-ivory px-8 py-3.5 hover:bg-luxury-gold transition-all duration-300"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
