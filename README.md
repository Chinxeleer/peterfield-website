# Peter Field Technologies - Web Platform

A modern, responsive landing page for Peter Field Technologies, an enterprise IT solutions provider and authorized dealer for Cisco, HP, Lenovo, Huawei, and more.

## Overview

This project showcases Peter Field Technologies' enterprise IT solutions, services, and partnerships. Built with modern web technologies, it provides a professional online presence with a focus on performance, accessibility, and user experience.

## Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4 (Lightning-fast build tool)
- **Styling**: Tailwind CSS 3.4 with custom animations
- **Component Library**: shadcn/ui (Radix UI + Tailwind CSS)
- **State Management**: TanStack React Query 5.8
- **Routing**: React Router DOM 6.30
- **Forms**: React Hook Form 7.61 with Zod validation
- **Animation**: GSAP 3.14 & Lenis smooth scrolling
- **Charts & Visualization**: Recharts 2.15
- **UI Utilities**: Lucide Icons, Sonner toasts
- **Development**: ESLint, Vitest for testing
- **Package Manager**: Bun (alternatives: npm, yarn, pnpm)

## Features

- ✨ Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with Tailwind CSS animations
- ⚡ Optimized performance with Vite
- 🔍 SEO-optimized with proper meta tags
- 📱 PWA ready with web manifest
- 🎯 Type-safe with TypeScript
- 🧪 Unit testing support with Vitest
- ♿ Accessible components (WCAG compliant)
- 🌙 Theme support ready (next-themes integration)
- 📊 Chart support for data visualization

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ui/              # shadcn/ui component library
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Landing hero section
│   ├── Services.tsx     # Services showcase
│   ├── Leadership.tsx   # Team information
│   └── ...
├── pages/               # Page components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
│   ├── use-mobile.tsx   # Mobile detection
│   └── useScrollAnimation.ts
├── lib/                 # Utility functions
│   └── utils.ts         # Helper functions
├── assets/              # Static assets
│   └── products/        # Product images
├── test/                # Test files
└── App.tsx              # Main app component
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.0+
- npm, yarn, pnpm, or bun as package manager

### Installation

1. **Clone the repository** (if applicable)

   ```bash
   git clone <repository-url>
   cd pft-launchpad
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using bun
   bun install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

## Development

### Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

**Features:**

- Hot Module Replacement (HMR) for instant updates
- Source maps for debugging
- Disabled error overlays for better visibility

### Build for Production

```bash
npm run build
```

Generates optimized production build in the `dist/` directory.

### Development Build

```bash
npm run build:dev
```

Creates a development-mode production build with enhanced debugging capabilities.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally to test before deployment.

## Testing

Run tests with Vitest:

```bash
# Run tests once
npm run test

# Watch mode for development
npm run test:watch
```

## Linting

Check code quality and fix issues:

```bash
npm run lint
```

## Favicon

Favicons are properly integrated for all devices:

- Standard `.ico` for legacy browsers
- PNG icons (16x16, 32x32) for modern browsers
- Apple touch icon for iOS devices
- Web app manifest for Android and PWA support
- Theme color for browser UI coloring

Located in `public/favicon/` and automatically served in production.

## Environment Configuration

### Development

- HMR overlay disabled for better visibility
- Custom host configuration (`::` for IPv6 support)
- Port: 8080

### Production

- Optimized build output
- Asset hashing for cache busting
- Minified bundles
- Source maps available for debugging

## Performance Optimization

- ⚡ Vite's native code splitting
- 🖼️ Image optimization (supported via Vite)
- 📦 Tree-shaking for unused imports
- 🎯 Strategic React Query caching
- 🎨 Tailwind CSS purging (unused styles removed)
- ✂️ GSAP animation optimization

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- iOS Safari: 12+
- Android Chrome: Latest

## Deployment

### Build Steps

1. ```bash
   npm run build
   ```

2. Deploy the `dist/` directory to your hosting provider

### Recommended Hosting

- Vercel (recommended for Vite projects)
- Netlify
- Firebase Hosting
- AWS Amplify
- GitHub Pages

All static assets from `public/` are correctly served at the root path.

## Configuration Files

- **vite.config.ts** - Vite build configuration
- **tsconfig.json** - TypeScript configuration
- **tailwind.config.ts** - Tailwind CSS customization
- **postcss.config.js** - PostCSS plugins
- **eslint.config.js** - ESLint rules
- **vitest.config.ts** - Test runner configuration
- **components.json** - shadcn/ui configuration

## Available Scripts Reference

| Command              | Purpose                           |
| -------------------- | --------------------------------- |
| `npm run dev`        | Start development server          |
| `npm run build`      | Build for production              |
| `npm run build:dev`  | Build for development (debugging) |
| `npm run preview`    | Preview production build locally  |
| `npm run test`       | Run tests once                    |
| `npm run test:watch` | Run tests in watch mode           |
| `npm run lint`       | Check and fix code quality        |

## Contributing

When contributing to this project:

1. Follow the existing code style (enforced by ESLint)
2. Write tests for new features
3. Update TypeScript types for all changes
4. Keep components in `src/components/` organized
5. Use Tailwind CSS for styling (no inline CSS)
6. Reference shadcn/ui components when applicable

## Troubleshooting

### Port 8080 Already in Use

Change the port in `vite.config.ts` under `server.port`

### Node Modules Issues

```bash
rm -rf node_modules
npm install
```

### Build Errors

Ensure TypeScript is properly configured:

```bash
npx tsc --noEmit
```

## License

Proprietary - Peter Field Technologies

## Support & Contact

For questions or issues, contact the development team.

---

**Last Updated**: February 2026  
**Project Status**: Active Development
