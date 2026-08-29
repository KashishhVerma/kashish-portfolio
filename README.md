# Kashish Verma — Portfolio (Next.js + Tailwind)

A black-pink, neo-brutalist style portfolio with calligraphy headings,
scroll animations, a custom cursor tail, an interactive terminal, a
basic 3D element, and a working contact form.

## Run it locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm start
```

## Features
- **Light / Dark mode** — toggle in the navbar (saved in your browser)
- **Custom cursor tail** — smooth pink/mauve gradient trail (desktop only)
- **Scroll animations** — sections fade + zoom in as you scroll
- **Click-to-wiggle headings & tags** — click any badge, tag, or heading
- **Interactive Terminal** — "Terminal" button in the navbar opens a
  typeable terminal (`help`, `about`, `skills`, `projects`, `leetcode`,
  `contact`, `clear`, or a project name like `collabboard`)
- **Basic 3D** — a rotating wireframe shape with an orbiting satellite
  and particles in the Hero, reacts to mouse movement (Three.js)
- **Working contact form** — sends real emails via Web3Forms, no backend needed

## Stack
Next.js 14 (App Router) · Tailwind CSS · Framer Motion · Three.js ·
Canvas-based cursor trail · lucide-react (icons) · Web3Forms (contact form)
