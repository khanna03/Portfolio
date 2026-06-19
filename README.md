# The Royal Archive | Aryan Khanna

A premium, futuristic luxury portfolio inspired by ancient Greek architectural aesthetics. Built with high-performance modern web technologies to showcase my journey as an AI/ML Engineer and Full-Stack Developer.

## Overview
"The Royal Archive" is designed to feel like "Apple meets a Greek Kingdom"—pairing deep, obsidian blacks with marble-inspired textures, imperial gold accents, and fluid micro-animations.

**Live Demo:** [aryankhanna.dev](https://aryankhanna.dev) *(Replace with actual domain if deployed)*

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons

## Features
- **Grand Entrance (Hero):** Animated typographic introduction with a custom radial spotlight and floating Greek meander motifs.
- **Legacy Chamber (About):** Interactive experience counters utilizing `requestAnimationFrame` for high-performance ease-out animations.
- **Hall of Service (Experience):** Scroll-triggered alternating timeline for professional history.
- **Hall of Innovation (Projects):** Interactive bento-grid layout with a custom Framer Motion modal for deep-dive case studies.
- **Custom Cursor:** Replaces the default browser cursor with an elegant dual-element geometric ring that dynamically scales on hover states.
- **SEO & Performance:** Fully SSR-compliant components, dynamic JSON-LD structured data, and optimized web fonts.

## Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture Notes
The application strictly separates data models from presentation components. All portfolio content (skills, projects, experience) is maintained centrally in `lib/data.ts`. Components leverage Tailwind's `group` architecture for complex parent-child hover state interactions, avoiding unnecessary React re-renders.

## License
Created by [Aryan Khanna](https://github.com/khanna03). All rights reserved.
