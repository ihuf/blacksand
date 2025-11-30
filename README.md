# Black Sand Real Estate Website

A modern, stunning real estate website for Black Sand built with Next.js 14, Sanity CMS, and Tailwind CSS. Features rich animations, bilingual support (Arabic/English with RTL), and a headless CMS architecture.

## Features

- **Modern Design**: Dark theme with gold accents, inspired by top-tier websites like roocode.com and bridgemind.ai
- **Rich Animations**: Scroll-triggered animations, parallax effects, and smooth transitions using Framer Motion and GSAP
- **Bilingual Support**: Full Arabic and English support with RTL layout switching
- **Headless CMS**: Sanity.io for flexible content management
- **Property Listings**: Advanced filtering, search, and detailed property pages
- **Blog**: Market updates and real estate insights
- **Team Profiles**: Agent/team member pages with contact integration
- **WhatsApp Integration**: Quick contact via WhatsApp
- **Google Maps**: Property location maps
- **SEO Optimized**: Server-side rendering, meta tags, structured data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP, Lenis (smooth scroll)
- **CMS**: Sanity.io
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity.io account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ihuf/blacksand.git
cd blacksand
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
- Get your Sanity project ID from [sanity.io/manage](https://sanity.io/manage)
- Add your Google Maps API key
- Configure your WhatsApp number

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

### Sanity Studio

To access the Sanity Studio (CMS):

1. Run the Sanity dev server:
```bash
npm run sanity
```

2. Or access it at `/studio` when running the Next.js app

## Project Structure

```
blacksand/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── page.tsx       # Homepage
│   │   ├── properties/    # Property listings
│   │   ├── about/         # About page
│   │   ├── team/          # Team page
│   │   ├── blog/          # Blog section
│   │   └── contact/       # Contact page
│   └── globals.css        # Global styles
├── components/
│   ├── animations/        # Animation components
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Page sections
│   ├── ui/                # Reusable UI components
│   └── providers/         # Context providers
├── lib/                   # Utility functions
├── messages/              # i18n translations
│   ├── en.json
│   └── ar.json
├── public/                # Static assets
├── sanity/
│   ├── schemas/           # Sanity schema definitions
│   └── lib/               # Sanity client & queries
└── styles/                # Additional styles
```

## Content Management

### Adding Properties

1. Go to Sanity Studio (`/studio` or run `npm run sanity`)
2. Click "Property" in the sidebar
3. Fill in the property details:
   - Title (English & Arabic)
   - Property type, status, price
   - Location with coordinates
   - Images and gallery
   - Features and amenities
   - Assign an agent

### Managing Team Members

1. Go to "Team Member" in Sanity Studio
2. Add name, role, bio, and contact info
3. Upload profile photo
4. Set display order

### Writing Blog Posts

1. Go to "Blog Post" in Sanity Studio
2. Add title, excerpt, and content (English & Arabic)
3. Select category and upload featured image
4. Set publish date

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  sand: {
    DEFAULT: '#C9A962',  // Primary accent
    // ... other shades
  },
  black: {
    DEFAULT: '#0A0A0A',  // Background
    // ... other shades
  },
}
```

### Fonts

Fonts are configured in `app/[locale]/layout.tsx`. The site uses:
- Plus Jakarta Sans (English headings)
- IBM Plex Sans Arabic (Arabic text)

### Animations

Animation settings can be adjusted in:
- `components/animations/FadeIn.tsx` - Scroll animations
- `components/providers/SmoothScroll.tsx` - Smooth scroll settings
- `tailwind.config.ts` - CSS animations

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SITE_URL`

## Performance

The site is optimized for performance:
- Server-side rendering for SEO
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Efficient animations (GPU-accelerated)

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## License

This project is proprietary software for Black Sand Real Estate.

## Support

For support, please contact the development team.