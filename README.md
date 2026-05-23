# Chic — Stylishly Simple

A production-quality static showcase website built with a modern React + Vite + TailwindCSS stack. It features a luxury editorial design aesthetic with cinematic scrolling, visual-first storytelling, and responsive layouts designed for boutique inquiries.

## Tech Stack
* **Framework:** React 18 (Vite Bundler)
* **Styling:** TailwindCSS + Vanilla CSS (Luxury color palette: Ivory, Champagne, Beige, Soft Black)
* **Animations:** Framer Motion (for smooth, lightweight scrolling and modal reveals)
* **Icons:** Lucide React
* **Deployment:** GitHub Pages (Fully static, zero database/SSR overhead)

---

## Folder Structure
```txt
/chic
├── public/
│   └── images/
│       ├── kids-frocks/      # Folders for image categorization
│       ├── teen-frocks/
│       ├── jewellery/
│       ├── gift-envelopes/
│       └── kids-envelopes/
├── src/
│   ├── components/           # Reusable layout UI blocks
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductGrid.jsx
│   ├── data/
│   │   └── products.json     # Single source of truth for products & setup
│   ├── sections/             # Page flow panels
│   │   ├── Contact.jsx
│   │   ├── Featured.jsx
│   │   ├── Hero.jsx
│   │   └── InstagramPreview.jsx
│   ├── styles/
│   │   └── index.css         # Tailwind & custom typography style imports
│   ├── App.jsx               # Main App Assembly
│   └── main.jsx              # DOM Bootstrapper
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Local Development Instructions

If Node.js is not configured globally on your system, please install the runtime to begin development:

### 1. Install Node.js
Download and install Node.js (which includes `npm`) from [nodejs.org](https://nodejs.org/). The LTS version is recommended.

### 2. Install Project Dependencies
Navigate to the project root directory (`E:\Chic`) in your terminal and run:
```bash
npm install
```

### 3. Launch Development Server
Start the local server with hot-reload support:
```bash
npm run dev
```
Open the local URL displayed (usually `http://localhost:5173`) in your browser.

### 4. Build Production Bundle
To compile a minimized production-ready bundle:
```bash
npm run build
```
The output will be placed in the `/dist` directory.

---

## Product Image Management Guide

To maintain a luxury feel, we follow strict image constraints.

### Image Storage location
Store all files under their matching subfolder inside the `/public/images/` directory:
* Kids Frocks: `/public/images/kids-frocks/`
* Teen Frocks: `/public/images/teen-frocks/`
* Jewellery: `/public/images/jewellery/`
* Gift Envelopes: `/public/images/gift-envelopes/`
* Kids Envelopes: `/public/images/kids-envelopes/`

### Image Naming Convention
We utilize a structured naming scheme for simple asset tracking and dynamic referencing:

| Category Code | Meaning | Example Filename |
| :--- | :--- | :--- |
| **kf** | Kids Frocks | `kf001-1.webp`, `kf001-2.webp` |
| **tf** | Teen Frocks | `tf001-1.webp`, `tf001-2.webp` |
| **jw** | Jewellery | `jw001-1.webp`, `jw001-2.webp` |
| **ge** | Gift Envelopes | `ge001-1.webp`, `ge001-2.webp` |
| **ke** | Kids Envelopes | `ke001-1.webp`, `ke001-2.webp` |

* **Why it matters:**
  * **Scalability:** Simplifies adding new items without rewriting component code.
  * **Dynamic Rendering:** Enables our product cards to programmatically swap between primary views and secondary detail carousels.
  * **Easier Asset Audits:** Keeps the directory structured so you instantly know which images belong to which items.
  * **Future Compatibility:** Standardizes image keys to map directly into future e-commerce databases (like Shopify, WooCommerce, or custom databases).

### Technical Image Specifications
* **Format:** **WebP** (offers superior compression and quality compared to JPEG/PNG, speeding up static page rendering)
* **Width:** **1200px** (ideal balance for high-density mobile screens without bloating size)
* **Aspect Ratio:** **4:5 portrait** (standard fashion editorial frame for high-quality product layout)

---

## products.json Usage Guide

The file `/src/data/products.json` controls the entire site content dynamically.

### Structure Example
```json
{
  "settings": {
    "whatsappNumber": "919999999999",
    "instagramUrl": "https://instagram.com/your-boutique"
  },
  "products": [
    {
      "id": "kf001",
      "title": "Pastel Bloom Frock",
      "category": "Kids Frocks",
      "price": "₹2,499",
      "description": "Elegant, lightweight frock with hand-embroidered flowers.",
      "images": [
        "/images/kids-frocks/kf001-1.webp",
        "/images/kids-frocks/kf001-2.webp"
      ],
      "customizable": true,
      "featured": true
    }
  ]
}
```

* **settings:** Update your contact number (include country code without `+` or spaces, e.g., `91` for India) and Instagram URL here.
* **products:** Add or remove objects in this list. The gallery, search filter, and detail pages will update automatically.

---

## Performance & SEO Optimization
* **Lazy Loading:** All catalog images utilize native `loading="lazy"` tags to defer rendering below-the-fold content.
* **Semantic HTML:** Features semantic markup (`<nav>`, `<main>`, `<section>`, `<footer>`) to maximize search engine discoverability.
* **Metadata & OpenGraph:** Includes header tag hooks in `index.html` to configure previews for WhatsApp, Facebook, and Instagram sharing.

## Future E-Commerce Migration
This architecture is custom-built to easily transition into a transaction-ready storefront in the future:
* The products JSON can easily map to a REST API.
* The local React state can be linked to a shopping cart context (e.g. Redux or Context API) without breaking component views.
* Product IDs (`kf001`, `tf001`, etc.) act as SKU codes, simplifying future integration with inventory managers.
