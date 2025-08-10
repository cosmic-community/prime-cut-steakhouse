# Prime Cut Steakhouse

![Prime Cut Steakhouse](https://imgix.cosmicjs.com/2b125570-75a9-11f0-a051-23c10f41277a-photo-1558030006-450675393462-1754802987258.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A premium steakhouse website showcasing fine dining excellence with expertly crafted menus, wine pairings, and chef profiles. Built with Next.js 15 and powered by Cosmic for seamless content management.

## Features

- **Dynamic Menu Display** - Browse steaks, appetizers, sides, and desserts with detailed descriptions and pricing
- **Wine Pairing Integration** - Curated wine recommendations with tasting notes for each dish
- **Chef Profiles** - Meet our culinary team with their specialties and experience
- **Mobile Responsive** - Optimized experience across all devices
- **SEO Optimized** - Built for search engine visibility and local discovery
- **Fast Loading** - Optimized images and performance for quick page loads

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6898296926131b9aad669ff2&clone_repository=68982cb626131b9aad66a010)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a fine dining steak restaurant website

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS with custom design system
- **CMS:** Cosmic for content management
- **Images:** Optimized with imgix transformations
- **TypeScript:** Full type safety with strict mode
- **Font:** Inter for modern typography

## Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account with your restaurant content

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd prime-cut-steakhouse
```

2. **Install dependencies**
```bash
bun install
```

3. **Environment Setup**
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. **Run development server**
```bash
bun dev
```

Visit `http://localhost:3000` to see your steakhouse website.

## Cosmic SDK Examples

### Fetching Menu Items with Wine Pairings
```typescript
const response = await cosmic.objects
  .find({ type: 'menu-items' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include wine pairing objects
  .limit(20);

const menuItems = response.objects;
```

### Getting Chef Profiles
```typescript
const chefs = await cosmic.objects
  .find({ type: 'chef-profiles' })
  .props(['id', 'title', 'slug', 'metadata']);
```

### Wine Collection
```typescript
const wines = await cosmic.objects
  .find({ type: 'wine-pairings' })
  .props(['id', 'title', 'slug', 'metadata']);
```

## Cosmic CMS Integration

Your content is organized into three main types:

- **Menu Items** (`menu-items`): Dishes with descriptions, prices, categories, and wine pairings
- **Wine Pairings** (`wine-pairings`): Curated wines with tasting notes and pricing
- **Chef Profiles** (`chef-profiles`): Team members with bios and specialties

Each content type includes rich metadata fields, image galleries, and relationship connections for a complete restaurant experience.

## Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the `out` folder to Netlify
```

### Environment Variables
Set these in your deployment platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`

## Local Development

```bash
bun dev          # Start development server
bun build        # Build for production
bun start        # Start production server
bun type-check   # Run TypeScript validation
```

---

Built with ❤️ using [Cosmic](https://www.cosmicjs.com/docs) and Next.js 15
<!-- README_END -->