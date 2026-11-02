# Design decisions

## Approved creative identity

- Creative Direction: **Crafted Product Editorial**.
- Creative Philosophy: **Creative Precision**.
- Visual Art Direction: **Quiet Contemporary Editorial**.
- Personality: **Quiet Confidence**.
- Brand Voice: **Thoughtful & Personal**.
- Bilingual Philosophy: **Equal Creative Presence**.
- Recruiters / technical hiring managers and potential freelance clients have equal importance.
- Six principles: Quietly Distinctive; Clarity With Character; Evidence Before Adjectives; Every Detail Earns Its Place; Curated, Not Reduced; Credibility by Design.
- Minimal, distinctive, professional, readable and responsive; restrained meaningful motion. No generic portfolio clichés, decorative glass/glow, fake screenshots, inflated claims or arbitrary repetitive cards.

## Exploratory preferences, not final approval

English candidates: Newsreader + Source Sans 3, with Instrument Serif + Cabin as alternatives. Arabic candidates: Lemonada (preferred aesthetic), El Messiri (challenger), Readex Pro and Zain (supporting options). Cool & Architectural is a color personality, not a finalized palette. No exact font, palette or layout has been approved.

## Provisional first implementation — 2026-11-02

The complete build brief explicitly authorizes a full reversible implementation and supersedes the earlier foundation-only scope. It also directs choosing safe working decisions without another questionnaire. All choices below await review.

### Rationale and composition

An editorial practice folio links two complementary forms of evidence: confirmed design/frontend participation in DEVORA and employer-attributed workflow engineering in Customer Survey. Large type, asymmetric project spreads, factual captions and open supporting rows provide hierarchy without simulating unavailable product images. The scene is a recruiter or client reading in ordinary daylight, which motivates a cool light canvas. The dark contact footer supplies a clear close rather than a second theme.

The first viewport pairs a large two-part positioning statement with a personal introduction and a work action. The featured projects follow, then practical capabilities. Work, about and two case pages add substance without repeating the home page or inventing deep case-study outcomes. Seed `c5af597e`, assigned direction 3, is recorded in the root document contract; the explicitly pinned editorial identity takes precedence over unrelated catalog challengers.

### Typography and color trials

- English display: locally hosted variable Newsreader; body: Source Sans 3.
- Arabic display: locally hosted Lemonada; body: Readex Pro, with independent scale, leading and zero display tracking.
- SIL OFL license files sit beside the optimized Latin/Arabic WOFF2 subsets. Unicode ranges and swap loading are preserved.
- Paper `#f5f6f4`, ink `#23343c`, muted ink `#51616a`, slate blue `#3d6475`, ice `#e3ebee`, warm stone `#eae6df`.
- The compact radius, spacing scale, exact type sizes and all surface values are implementation trials. They are documented from the built code in DESIGN.md, not promoted to approved brand decisions.

### Interaction trials

In-flow mobile navigation with a localized menu button, expanded state, Escape handling and closure after navigation. A native-link language switch preserves equivalent routes, queries and anchors. A skip link moves keyboard focus to main content; route changes move focus without disrupting scroll restoration. Links and project panels use brief state transitions; reduced-motion users receive immediate changes. No scroll entrances, scroll-jacking, dark mode or animation library.

## Implemented engineering decisions

- Preserve and extend the existing Angular 22.2 strict TypeScript 6 foundation, standalone components, OnPush, SCSS and zoneless behavior.
- Use feature-owned typed copy and project data; both locales are independently authored. Route data remains the locale source of truth.
- Lazy-load home, work, about, case and recovery pages beneath the portfolio shell. The featured project component is reused on home and work; header/footer exist once.
- Normalize trailing slashes before route matching; retain query strings and fragments. Unknown localized routes retain their language in the recovery experience.
- Retain static output and prerender all 12 localized pages plus the root redirect. No server or backend is needed. Hydration and event replay are retained.
- Extend the document title strategy with localized descriptions and OpenGraph text. No production origin, canonical URL, sitemap, robots.txt or invented sharing image is created.
- Keep preview indexing restricted with `noindex, follow` until an explicit launch review. No hosting/publishing was requested.
- No new application dependencies, tracking or fake forms. The supplied CV is now downloadable, and actual profile links share one typed source. Self-hosted fonts do not contact external providers during use.
- Retain Node 24.15.0 in `.nvmrc`; system Node 24.12.0 remains unchanged. Validation uses the temporary compatible runtime.
- Replace and delete the foundation placeholder files instead of retaining obsolete templates, styles and tests. Existing unrelated workspace work is preserved.

## Content and publication boundaries

User-supplied facts are recorded in PRODUCT.md. All ten supplied projects are represented. Only DEVORA and Customer Survey receive case pages because they have enough verified narrative. No fabricated business outcomes, dates, metrics, screenshots, personal profiles or professional claims are added.

DEVORA’s confirmed design participation is explicit; the case does not imply exclusive ownership. Customer Survey and other enterprise work are attributed to NileTronix and imply no public demo/source access. Avokatoo’s product-owner/developer attribution comes from the supplied CV facts.

The actual 2026 CV is supplied, read and available for download. Its embedded LinkedIn/GitHub URLs are now included; real public-site captures and the NPark user-manual screenshot are now present. Verified evidence replaces the earlier title-only project panels. Public freelance projects have visual spreads; all six enterprise projects now have actual interface captures from local applications or the NPark manual. Karim Dawod resolved in the browser and now has a live link. El Mostafa was captured from its actual site but its invalid HTTPS certificate keeps the live link omitted.

## Pending decisions

User review of the complete English/Arabic implementation, exact fonts, palette, scale, layout and motion. A real deployment origin and an indexing launch decision remain outstanding. Richer authenticated dashboard captures are optional future evidence; current sign-in/sample/fallback captures are explicitly labeled. The résumé and exact social profiles have now been supplied and integrated. No missing asset is represented by a dead link or synthetic product visual.

## Project evidence integration — 2026-11-02

The user authorized real screenshots and alternative project treatments. Four public websites and the NPark manual provide actual images. A reusable discriminated evidence model separates captures from scope schematics; no generic or generated dashboard substitutes for missing imagery. Full-size links, source captions, independent Arabic copy, responsive WebP srcsets and native disclosures preserve accessibility and maintainability. Obsolete title-panel CSS, hover colors and arrow-direction tokens were removed. The exact visual treatment remains provisional. All ten CV projects remain represented once on the work index.

## Local application capture replacement

The projects were found on this device and opened. Customer Survey, Traffic, CRM, Q-SYSTEM and QBooking captures now replace all five scope schematics. The evidence model is a simple required image record; obsolete union variants, scope data, renderer markup/styles and translation keys are deleted. All ten project captures remain responsive, self-hosted and source-captioned. Q-SYSTEM uses its existing sample queue, QBooking shows its real unavailable-API fallback filters, and protected Customer Survey/Traffic pages are represented by their actual entry screens without bypassing authentication. No professional claims or backend records were added.
