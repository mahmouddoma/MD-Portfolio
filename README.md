# doma-portfolio

Mahmoud Doma’s bilingual Angular portfolio. This first implementation includes a home page, curated work index, about/experience page, and factual DEVORA and Customer Survey case studies. Exact typography, colors, layout and motion are **provisional for review**. Approved creative identity and decision status are in [DESIGN-DECISIONS.md](DESIGN-DECISIONS.md).

## Run locally

Use Node **24.15.0** (`.nvmrc`) and npm 11.12.1. The existing workstation Node 24.12.0 remains unchanged and is below Angular 22’s supported minimum for Node 24. Select a compatible runtime before using these commands. Installed engine compatibility: `^22.22.3 || ^24.15.0 || >=26.0.0`. TypeScript is 6.0.x.

```sh
npm ci
npm start
```

Open `http://localhost:4200/en` or `http://localhost:4200/ar`.

```sh
npm run build
npm test -- --watch=false
```

`npm test` runs watch mode; `npm run watch` rebuilds the development configuration. No dedicated lint script is configured. Source formatting uses the existing Prettier options in `package.json`.

## Pages and architecture

Both `/en` and `/ar` provide:

| Path after locale       | Page                                                                              |
| ----------------------- | --------------------------------------------------------------------------------- |
| `/`                     | Home: positioning, featured work, engineering approach and email contact          |
| `/work`                 | Two featured projects, three visual freelance entries and five enterprise entries |
| `/work/devora`          | Confirmed design and frontend contribution                                        |
| `/work/customer-survey` | Employer-attributed enterprise frontend work                                      |
| `/about`                | Personal introduction, professional experience and education                      |
| `/not-found`            | Localized recovery page                                                           |

`/` redirects to `/en`. Unknown localized paths go to that locale’s not-found page; unsupported locales go to `/en/not-found`. Trailing slashes normalize without changing queries or fragments. The language link preserves the equivalent page, query string and anchor.

```text
src/
  _fonts.scss
  styles.scss
  app/
    core/
      i18n/              # locale definitions and document metadata strategy
      routing/           # trailing-slash normalization and tests
    features/portfolio/
      portfolio.content.ts
      projects.ts
      portfolio.routes.spec.ts
      layout/            # header, mobile menu, skip link, outlet, contact footer
      components/featured-work/
      pages/
        home/
        work/
        about/
        case-study/
        not-found/
    app.routes.ts
    app.routes.server.ts
    app.config.ts
    app.config.server.ts
    app.component.ts
    app.component.html
  main.ts
  main.server.ts
public/fonts/             # local WOFF2 subsets and OFL licenses
```

The existing Angular 22 standalone foundation is retained. Each page is lazy-loaded; components use OnPush. Required signal inputs receive typed route data through `withComponentInputBinding()`, with inherited locale data enabled. Signals hold only reactive UI state and derived content. Subscriptions use Angular’s destruction-aware cleanup. The shared project spread has real reuse on home and work; no generic card library or empty shared layer is added.

## Bilingual content and metadata

`core/i18n/locales.ts` defines language names, codes and directions. `portfolio.content.ts` provides independently authored English/Arabic UI copy under one typed contract. `projects.ts` stores factual project identity, context, publication status through public URL availability, technologies and locale-specific descriptions/contributions. Do not infer sole ownership or product impact from a project’s scope.

Add both language versions when editing content. Use native technical names where appropriate and `bdi` for isolated names or identifiers. Global SCSS uses logical properties, and Arabic has its own typography variables. Do not add a second language state, persistence service or translation library.

`LocaleTitleStrategy` applies document `lang`, `dir`, route title, description and OpenGraph text after successful navigation, in browser and prerendering. No canonical origin, sitemap, robots.txt, social image or external profile URL is invented. Pages retain `noindex, follow` while this provisional version awaits review; remove the indexing restriction as an explicit launch step after approving content and deployment URLs.

## Static output

`npm run build` prerenders **13 routes** (12 localized pages and the root redirect) into `dist/doma-portfolio/browser`. Deploy that directory to a static host; no Express or Node production server is required. The host must serve locale directory indexes and use `index.csr.html` for unknown application paths, without rewriting existing pages to the fallback. No hosting changes or publishing are included in this local implementation.

Hydration and event replay support initial interaction; Angular 22 is zoneless by default. No animation library, analytics, tracking, backend, UI framework or translation package was added. Fonts use local WOFF2 subsets, Unicode ranges and swap loading; visitors make no Google Fonts request.

## Adding real evidence

See [ASSET-MANIFEST.md](ASSET-MANIFEST.md) for sources, licenses, missing files and verified/omitted external links.

- Real DEVORA, Avokatoo, Karim Dawod, El Mostafa and NPark captures live under `public/images/projects/<id>/`, in three responsive WebP sizes. Provenance and HTTPS limitations are documented in ASSET-MANIFEST.md.
- Add supplied, sanitized Customer Survey captures under `public/images/projects/customer-survey/`.
- The supplied English CV is available at `public/documents/mahmoud-doma-cv.pdf`; replace that file to update the download.
- `features/portfolio/profile.ts` owns the CV download, email and actual GitHub/LinkedIn URLs extracted from the PDF. The reusable profile-links component renders localized labels on About and in the contact footer.

The shared `project-evidence` component renders actual captures for all ten projects. `projects.ts` is the source of truth for source-accurate dimensions, localized alt text and captions. Supporting enterprise captures use native disclosures, initially expanded. Captions distinguish login pages, built-in sample data and the QBooking unavailable-API fallback; the old schematic renderer and content have been removed. Enterprise work is attributed to NileTronix and exposes no private URLs, source or personal data.

## Verification and review

[VERIFICATION.md](VERIFICATION.md) records executed checks and limitations. [PRODUCT.md](PRODUCT.md) records user-supplied product truth; [DESIGN.md](DESIGN.md) records the implemented provisional visual system.

The next review should focus on the English and Arabic home pages, then the two featured project narratives. Review all ten project captures. Richer authenticated workflow captures can be added later through a normal authorized sign-in; the current entry-screen images do not imply protected dashboards were accessed.
