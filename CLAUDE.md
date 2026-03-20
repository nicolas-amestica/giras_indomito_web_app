# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server (uses nvm, port 4400, HMR disabled)
npm start

# Production build
npm run build

# Development build with watch
npm run watch

# Run tests
npm test

# Serve SSR build locally
npm run serve:ssr:app
```

Node version is managed via `.nvmrc` (Node 22.12.0).

## Architecture

Angular 21 standalone application with Server-Side Rendering (SSR) via `@angular/ssr` + Express. All routes are prerendered (`RenderMode.Prerender`).

### Key config files
- `src/app/app.config.ts` — client providers (PrimeNG, router, hydration)
- `src/app/app.config.server.ts` — SSR providers
- `src/app/app.routes.server.ts` — SSR render mode per route
- `src/server.ts` — Express server, serves from `dist/app/browser/`

### Routing
All routes use lazy-loaded standalone components (`loadComponent`). Route titles are set inline. Wildcard redirects to `''`.

### Folder structure
```
src/app/
├── features/      # One folder per page/route (home, services, contact, about)
├── shared/
│   ├── components/  # header, footer, section-title, destination-card, loader
│   ├── directives/  # parallax, scroll-reveal
│   ├── models/      # TypeScript interfaces
│   └── utils/
```

Each feature component is standalone — no NgModules.

### Styling
- **Tailwind CSS 3** via `src/styles.css` (base → components → utilities)
- **PrimeNG 21** for UI components — configured globally in `app.config.ts` with `providePrimeNG()`
- **Custom fonts** — Avenir family loaded in `src/styles/fonts.css` (WOFF2/WOFF), used as `font-family: 'Avenir'`
- Custom colors in `tailwind.config.js`: `primary` (lime green `#D7FF00`) and `secondary` (dark gray `#2D2D2D`)
- Global button classes: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outlined`, `.btn-outlined-white`
- Static assets live in `public/` (served at root `/`)

### Animations
- **AOS** (Animate On Scroll) — initialized in `App.ngOnInit()`, only in browser (`isPlatformBrowser`)
- **GSAP** — available for imperative animations
- **View Transitions API** — enabled via `withViewTransitions()` in router config

### SSR considerations
Use `isPlatformBrowser(this.platformId)` before accessing `window`, `document`, or any browser-only API (scroll events, AOS init, etc.). The `parallax.directive.ts` shows the pattern.

### TypeScript
Strict mode is fully enabled including `strictTemplates`, `noImplicitReturns`, and `noPropertyAccessFromIndexSignature`.
