# Imran Textiles — Luxury Heritage Website

A luxury digital flagship website for Imran Textiles, Hyderabad's premier destination for traditional menswear — Sherwanis, Suits, Kurta Pajamas, Dress Materials, and Custom Tailoring.

## Getting Started

### Install dependencies

```bash
npm install
# or
pnpm install
```

### Run the development server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
# or
pnpm build
```

### Preview the production build

```bash
npm run preview
# or
pnpm preview
```

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **Tailwind CSS v4** (styling)
- **Framer Motion** (animations)
- **Wouter** (routing)
- **shadcn/ui** components (Radix UI primitives)

## Project Structure

```
src/
├── assets/
│   └── generated_images/   # Editorial campaign images
├── components/
│   ├── ui/                 # shadcn/ui base components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── hooks/
├── lib/
├── pages/
│   └── Home.tsx            # Main landing page (all sections)
├── App.tsx
├── index.css
└── main.tsx
```

## Requirements

- Node.js 18+
- npm 9+ or pnpm 8+
