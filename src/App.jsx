import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Featured from './sections/Featured';
import ProductGrid from './components/ProductGrid';
// import InstagramPreview from './sections/InstagramPreview';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Load static product and settings configuration
import products from './data/products.json';
import settings from './data/settings.json';

export default function App() {
  return (
    <div className="bg-[#FCFBF9] min-h-screen text-[#121212] selection:bg-[#E9E2D2]">
      {/* Dynamic Header */}
      <Navbar settings={settings}/>

      {/* Hero Intro */}
      <Hero />

      {/* Featured Items Collection */}
      <Featured products={products} settings={settings} />

      {/* Interactive Grid & Search */}
      <ProductGrid products={products} settings={settings} />

      {/* Curated Social Feed */}
      {/* <InstagramPreview settings={settings} /> */}

      {/* Direct Inquiries & Map */}
      <Contact settings={settings} />

      {/* Footer Info */}
      <Footer settings={settings} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp settings={settings} />
    </div>
  );
}
