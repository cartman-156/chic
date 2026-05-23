# Chic Website Setup Guide (Non-Technical)

Follow these steps in order.

---

# PART 1 — Generate the Website

## Step 1 — Open Antigravity

Create a new project.

---

## Step 2 — Use Prompt #1

Copy the “Foundation + Architecture Prompt” and paste it into Antigravity.

Wait for generation to finish.

---

## Step 3 — Use Prompt #2

Paste the “Gallery + Product System Prompt”.

Wait for generation.

---

## Step 4 — Use Prompt #3

Paste the “Luxury Editorial Polish Prompt”.

Wait for generation.

---

## Step 5 — Use Prompt #4

Paste the “GitHub Pages Optimization Prompt”.

Wait for generation.

---

## Step 6 — Use Prompt #5

Paste the “README.md Generation Prompt”.

Wait for generation.

---

# PART 2 — Generate Product Images

## Step 7 — Open Gemini

Use the image prompts provided earlier.

Generate:

* product images
* hero banner
* Instagram preview images

---

# PART 3 — Save Images Properly

## Step 8 — Create These Folders

Inside your project create:

```txt id="wzw2zm"
/public/images/kids-frocks/
/public/images/teen-frocks/
/public/images/jewellery/
/public/images/gift-envelopes/
/public/images/kids-envelopes/
```

---

# PART 4 — Rename Images Properly

## Step 9 — Use Proper File Names

### Kids frocks

```txt id="gn1exg"
kf001-1.webp
kf001-2.webp
```

### Teen frocks

```txt id="s9vl9r"
tf001-1.webp
```

### Jewellery

```txt id="0y2ij4"
jw001-1.webp
```

### Gift envelopes

```txt id="e6clim"
ge001-1.webp
```

### Kids envelopes

```txt id="1g9d0o"
ke001-1.webp
```

---

# PART 5 — Add Images to Correct Folders

## Step 10 — Move Images Into Correct Folder

Example:

```txt id="r5tt2y"
/public/images/kids-frocks/kf001-1.webp
```

Example:

```txt id="sow6fk"
/public/images/jewellery/jw001-1.webp
```

---

# PART 6 — Add Product Information

## Step 11 — Open This File

```txt id="dtpq78"
/src/data/products.json
```

---

## Step 12 — Add Product Entry

Example:

```json id="bklj6y"
{
  "id": "kf001",
  "title": "Pastel Bloom Frock",
  "category": "Kids Frocks",
  "price": "₹2,499",
  "description": "Elegant handcrafted frock.",
  "images": [
    "/images/kids-frocks/kf001-1.webp",
    "/images/kids-frocks/kf001-2.webp"
  ],
  "customizable": true,
  "featured": true
}
```

---

# PART 7 — Add More Products

## Step 13 — Repeat These 3 Things

Every time you add a product:

### A.

Generate product images

### B.

Save them in correct folder

### C.

Add product information in:

```txt id="7g9rxp"
/src/data/products.json
```

Done.

The website updates automatically.

---

# FILE NAME MEANINGS

| Prefix | Meaning        |
| ------ | -------------- |
| kf     | Kids Frocks    |
| tf     | Teen Frocks    |
| jw     | Jewellery      |
| ge     | Gift Envelopes |
| ke     | Kids Envelopes |

---

# IMPORTANT IMAGE SETTINGS

When exporting images:

| Setting | Value  |
| ------- | ------ |
| Format  | WEBP   |
| Width   | 1200px |
| Ratio   | 4:5    |

---

# BEST PRACTICE

Generate:

* 2–3 images per product

Example:

```txt id="ktvvlv"
kf001-1.webp
kf001-2.webp
kf001-3.webp
```

---

# WHAT HAPPENS AUTOMATICALLY

After setup, the website automatically:

* shows products
* creates gallery
* enables search
* enables filters
* creates featured sections
* shows expandable cards

No coding needed later for products.

---

# FINAL STEP — DEPLOY WEBSITE

## Step 14 — Upload to GitHub

Push project to GitHub repository.

---

## Step 15 — Enable GitHub Pages

In GitHub:

* Open repository
* Go to Settings
* Open Pages
* Select deployment branch
* Save

Your website becomes live.

---

# SIMPLE DAILY WORKFLOW

Whenever you create new product:

```txt id="l6sxmh"
1. Generate images
2. Rename images properly
3. Put images in correct folder
4. Add product info in products.json
5. Upload changes to GitHub
```

That’s it.
