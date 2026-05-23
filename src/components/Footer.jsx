import React from 'react';

export default function Footer({ settings }) {
  const currentYear = new Date().getFullYear();

 return (
  <footer className="bg-luxury-black text-luxury-ivory py-20 border-t border-luxury-charcoal/60">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">

      {/* Brand Column */}
      <div className="space-y-5">
        <h3 className="text-2xl font-serif font-light tracking-[0.3em] text-white uppercase">
          Chic
        </h3>

        <p className="text-xs font-light text-luxury-muted leading-7 max-w-xs">
          Handcrafted creations designed to capture the beauty of life’s most cherished moments, expressed through timeless design and refined detail.
        </p>
      </div>

      {/* Links Column */}
      <div className="space-y-5">
        <h4 className="text-[10px] tracking-[0.3em] font-semibold uppercase text-luxury-muted">
          Explore
        </h4>

        <ul className="space-y-3 text-xs font-light text-luxury-champagne/80">
          <li>
            <a href="#collections" className="hover:text-luxury-gold transition-colors duration-300">
              Collections
            </a>
          </li>

          <li>
            <a href="#showcase" className="hover:text-luxury-gold transition-colors duration-300">
              Showcase
            </a>
          </li>

          <li>
            <a
              href={settings?.instagramUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-luxury-gold transition-colors duration-300"
            >
              Instagram
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-luxury-gold transition-colors duration-300">
              Inquire
            </a>
          </li>
        </ul>
      </div>

      {/* Contact/Info Column */}
      <div className="space-y-5">
        <h4 className="text-[10px] tracking-[0.3em] font-semibold uppercase text-luxury-muted">
          Contact
        </h4>

        <ul className="space-y-3 text-xs font-light text-luxury-champagne/80">
          <li>
            <a
              href={`mailto:${settings?.email || 'manasiawati@ymail.com'}`}
              className="hover:text-luxury-gold transition-colors duration-300"
            >
              {settings?.email || 'manasiawati@ymail.com'}
            </a>
          </li>

          <li className="text-luxury-muted/80">
            Worldwide Online Consultations
          </li>

          <li className="text-luxury-muted/80">
            By Appointment
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-luxury-charcoal/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] tracking-[0.3em] font-light text-luxury-muted uppercase">

      <p>© {currentYear} Chic. All rights reserved.</p>

      <p className="text-luxury-muted/60">
        Crafted with intention
      </p>
    </div>
  </footer>
  );
}
