Create a production-quality static boutique showcase website named “Chic” with tagline “Stylishly Simple”.

TECH STACK:
- React + Vite
- TailwindCSS
- Framer Motion
- Static GitHub Pages deployment
- No backend
- No SSR
- No database

DESIGN STYLE:
- luxury editorial + modern boutique minimal
- cinematic scrolling
- visual-first storytelling
- elegant whitespace
- premium typography
- neutral luxury palette:
  ivory, champagne, beige, soft black

PRODUCT CATEGORIES:
- Kids Frocks
- Teenager Frocks
- Jewellery
- Gift Envelopes
- Kids Envelopes

SITE PURPOSE:
- boutique showcase only
- inquiry based
- WhatsApp CTA
- future ecommerce ready

REQUIRED PROJECT STRUCTURE:

/public
  /images
    /kids-frocks
    /teen-frocks
    /jewellery
    /gift-envelopes
    /kids-envelopes

/src
  /components
  /sections
  /pages
  /layouts
  /data
  /styles
  /hooks
  /utils

MANDATORY DATA FILE:

/src/data/products.json

MANDATORY IMAGE RULES:
- all product images must load from /public/images/*
- no base64 images
- no embedded image URLs
- no hardcoded remote assets
- use relative paths only

PRODUCT DATA FORMAT:

{
  "id": "kf001",
  "title": "Pastel Bloom Frock",
  "category": "Kids Frocks",
  "price": "₹2,499",
  "description": "Handcrafted premium frock.",
  "images": [
    "/images/kids-frocks/kf001-1.webp"
  ],
  "customizable": true,
  "featured": true
}

REQUIRED FEATURES:
- responsive masonry gallery
- expandable product cards
- category filtering
- search functionality
- lazy-loaded images
- featured collections
- Instagram preview section
- WhatsApp inquiry CTA
- contact form
- SEO-ready structure

HOMEPAGE STRUCTURE:
- cinematic hero
- featured collections
- editorial gallery sections
- brand statement
- Instagram preview
- contact CTA
- footer

ANIMATIONS:
- cinematic but lightweight
- fade reveals
- hover zoom
- parallax hero
- smooth transitions
- avoid excessive motion

SEO:
- semantic HTML
- metadata
- OpenGraph support
- sitemap ready
- image optimization friendly

IMPORTANT CONSTRAINTS:
- do not hardcode products in JSX
- all products must render dynamically from products.json
- all collections generated from JSON
- maintain reusable scalable architecture
- optimize for GitHub Pages static hosting
- mobile-first mandatory
- avoid template appearance
- avoid ecommerce clutter
- avoid bright colors

OUTPUT REQUIREMENTS:
- generate complete folder structure
- generate all required files
- include sample products.json
- include reusable components
- include deployment instructions for GitHub Pages