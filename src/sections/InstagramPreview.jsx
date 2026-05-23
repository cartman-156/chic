import React from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramPreview({ settings }) {
  const instagramUrl = settings?.instagramUrl || 'https://instagram.com';

  const feedItems = [
    { id: 1, image: '/images/insta-1.webp', fallback: 'https://via.placeholder.com/600x750.png?text=Studio+Detail+1' },
    { id: 2, image: '/images/insta-2.webp', fallback: 'https://via.placeholder.com/600x750.png?text=Studio+Detail+2' },
    { id: 3, image: '/images/insta-3.webp', fallback: 'https://via.placeholder.com/600x750.png?text=Studio+Detail+3' },
  ];

  return (
    <section id="instagram" className="py-24 bg-luxury-ivory border-t border-luxury-champagne/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest text-luxury-muted uppercase font-light block">
            Studio Journal
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-luxury-black">
            Captured Moments
          </h2>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase font-light text-luxury-gold hover:text-luxury-black transition-colors duration-300"
          >
            <Instagram className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>@chic.stylishlysimple</span>
          </a>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedItems.map((item) => (
            <a
              key={item.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-[4/5] bg-luxury-champagne overflow-hidden relative image-zoom-container group"
            >
              <img
                src={item.image}
                alt="Instagram Studio Journal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = item.fallback;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-luxury-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xs tracking-widest uppercase font-light border border-white/40 px-6 py-3 backdrop-blur-sm">
                  View Story
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
