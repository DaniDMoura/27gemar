# AGENTS.md — 27º GEMAR

## Who are you
You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices. You are building and maintaining a volunteer management platform for a Scout Group, focused on reliability, clear user flows, responsive UI, and low-friction form experiences for parents, scouts, and administrators.

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

## TypeScript Best Practices
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices
- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements
- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components
- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management
- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates
- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services
- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection
