# AGENTS.md — 27º GEMAR

## What this is
Institutional site for the 27º Grupo Escoteiro do Mar Cornelis Verolme. Angular 21, standalone components, SSR with client hydration.

## Developer commands
- `npm start` — runs `set-env.js` then `ng serve` on http://localhost:4200
- `npm run build` — runs `set-env.js` then production build. Output is `dist/27gemar/`
- `npm test` — Vitest via `@angular/build:unit-test`. **No test files exist yet.**

## Environment setup
`set-env.js` reads `.env` and writes `src/environments/environment.ts` and `environment.development.ts`.
- The only required env var is `GOOGLE_MAPS_API_KEY`.
- If `.env` is missing, the files are still generated with an empty key.
- **Do not hardcode the API key into the environment files** — they are regenerated on every build/start.

## Shared styling system
Global SCSS modules in `src/app/shared/styles/`:
- `_variables.scss` — colors, fonts, transitions, shadows, radii. Import with `@use 'app/shared/styles/variables' as var;`
- `_layout.scss` — reusable `.page-layout` class for institutional pages (hero + content container)
- `_animations.scss` — CSS animation classes (`animate-fade-up`, `animate-fade-left`, etc.) using `--i` custom property for stagger

Page-specific shared mixins:
- `src/app/pages/grupo/_team-page.scss` — `@mixin team-page-styles()` for chefia/diretoria grids
- `src/app/pages/escotismo/ramos/_ramo-page.scss` — `@mixin ramo-page-styles()` for ramo pages (text column + side column layout)

## Component conventions
- **Standalone components only.** No NgModules.
- **Shared components** (`src/app/shared/components/`) use `ChangeDetectionStrategy.OnPush`.
- **Shared component selectors** are prefixed with `app-` (e.g. `app-button`, `app-hero-mosaic`).
- Use `inject()` for DI, not constructor injection.
- **Inputs**: shared components still use `@Input()`. Newer code (e.g. `MapComponent`) uses Angular signals `input()`.
- All pages are lazy-loaded via `loadComponent` in `app.routes.ts`.

## Page composition pattern
Most content pages follow this structure:
1. `app-breadcrumb` (variant `bar`)
2. `app-hero-mosaic` (with `[images]"` array of `MosaicImage`)
3. `<article class="main-content">` with text sections
4. Optional `app-cta-box` at the bottom

## Navigation as source of truth
The single source of navigation hierarchy is `src/app/layout/header/nav-data.ts`. It drives:
- Header mega-menu
- `Breadcrumb` component (auto-generates path from current URL)

Add or rename routes here first, then update `app.routes.ts`.

## SEO
`SeoService` (`src/app/core/services/seo.service.ts`) reads `data: { seo: { title: '...' } }` from route config and updates:
- `<title>`, meta description, Open Graph, Twitter Cards, canonical link
- JSON-LD structured data (injected once on init in `App`)

Every route should include a `seo` data object.

## Google Maps
Map component (`app-map`) loads the Google Maps script lazily via `ScriptLoaderService`. It checks `isPlatformBrowser()` before any DOM/window access. Map interaction is disabled (static view) to prevent scroll hijacking.

## Docker / deploy
Dockerfile builds the Angular app, then copies `dist/27gemar/browser` into an nginx image. The nginx config serves `index.html` for all routes (SPA fallback) and adds 6-month cache headers for static assets.

## Prettier
Config is inline in `package.json`:
- `printWidth: 100`, `singleQuote: true`
- HTML files use `"parser": "angular"`

## Assets
Static files go in the `public/` folder (copied to dist root). Images referenced in components use paths like `assets/photos/ramos/lobinho/lobinho.jpg`.
