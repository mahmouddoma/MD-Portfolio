# Portfolio verification — 2026-11-02

## Environment and baseline

Existing Angular foundation reused: Angular 22.2.4, CLI/build 22.2.5, TypeScript 6.0.3, Vitest 4.1.12 and npm 11.12.1. Validation used temporary Node 24.15.0. The system Node 24.12.0 remains unchanged and is incompatible with Angular 22; choose a supported version before running the README commands.

Before implementation, the foundation production build and all six original tests passed. Existing application dependencies were reused; no application package was added for the portfolio. Fonts and SIL OFL licenses are self-hosted assets. Prettier, browser tooling and axe ran from temporary/npm-cache locations outside the application dependency set.

## Final executed checks

| Check                              | Result                                                                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Production Angular build           | Passed; 13 prerendered routes, no build errors or budget warnings                                                                          |
| Vitest                             | Passed: 18 tests in 2 files                                                                                                                |
| Source formatting                  | Prettier applied using the repository’s existing configuration                                                                             |
| Whitespace consistency             | `git diff --check` passed                                                                                                                  |
| Impeccable mechanical detector     | Initial build returned `[]`; latest evidence-component scan has documented advisories, including Angular `[ngSrc]` not recognized as `src` |
| Chrome page checks                 | Passed: 24 cases, 12 localized routes at 1440px and 320px                                                                                  |
| axe WCAG 2 A/AA + WCAG 2.1 A/AA    | Zero violations across those 24 cases                                                                                                      |
| Browser runtime / hydration errors | None observed                                                                                                                              |
| No-JavaScript rendering            | Main content/headings and correct language verified for 10 localized home/work/about/case pages                                            |

Final initial bundle after local application captures: **326.57 kB raw / 89.42 kB estimated transfer**, excluding fonts. Shell and route components are lazy-loaded. The root redirect plus six pages in each locale are statically generated. The direction contract is retained in emitted HTML.

Unit tests exercise localized home content and metadata, both case studies in both languages, employer attribution/no public enterprise demo, equivalent-page switching with query and anchor preservation, mobile menu state and Escape, ten project entries, root/unknown-route handling and trailing-slash normalization without changing query values.

Browser checks use the actual production static output and installed Chrome. They verify no horizontal overflow, one primary heading, locale metadata, keyboard skip behavior, mobile-menu Escape/closure, language switching on a case page, browser Back, same-page contact anchors, direct links, refresh, root and localized recovery redirects, trailing paths and reduced-motion preference. Hydration is awaited before testing interactions. The 24 page scans use reduced motion; source CSS removes transition duration under that preference. Automated checks do not establish complete accessibility conformance.

No lint script is configured; no lint success is claimed. No publishing or hosting change was performed.

## Independent visual review of the initial implementation

Final disposition: **ship** for the provisional implementation; exact brand/visual choices remain subject to the user’s approval.

| Finding                                | Status   | Evidence                                                                                                                                                           |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Project attribution                    | Resolved | Both metadata descriptions explicitly separate DEVORA design participation from Customer Survey frontend development at NileTronix.                                |
| Featured project eyebrows              | Resolved | Updated English and Arabic captures place attribution below titles and disciplines; titles lead each panel.                                                        |
| Arabic mobile header and accessibility | Resolved | At 320px, menu and identity remain alongside each other without clipping. Redundant labels were removed, explicit skip focus added, and interaction checks passed. |
| Superseded documentation               | Resolved | DESIGN-DECISIONS.md describes the complete implementation and provisional review scope.                                                                            |

The reviewer reported no remaining material regressions in refreshed captures. This technical/visual review is not a claim of final brand approval.

## Evidence and limitations

Production browser runner: `%TEMP%\doma-portfolio-validation\portfolio.cjs`. Desktop/mobile captures and results: `%TEMP%\doma-portfolio-validation\portfolio\`. These are local QA artifacts, not invented product screenshots. The browser server shuts down after each run. The runner uses temporary Playwright/axe packages and is not a new application dependency or permanent test framework.

No project captures or portrait were supplied for the first version. A later CV integration supplied the actual two-page PDF, which is now downloadable with its real social links. Featured work remains honestly text-led; no dead résumé or social links exist. DEVORA and Avokatoo domains resolved through the web tool. Karim Dawod Group and El Mostafa domains could not be verified and are deliberately omitted as outbound links. See ASSET-MANIFEST.md.

The inherited npm lockfile contains an optional transitive WASM entry (`@emnapi/wasi-threads@1.2.3`) that npm 11.12.1 labels extraneous in its listing but requires for clean-install consistency. It remains generated tooling metadata, not a direct portfolio dependency. The dependency inputs were unchanged in this portfolio milestone.

Static hosting must serve directory indexes and fall back to `index.csr.html` for unknown application URLs. The site retains `noindex, follow` pending user review and a real deployment decision. No production origin, sitemap, canonical URL, sharing image or analytics are invented.

## Supplied CV integration — 2026-11-02

Read both pages of `Mahmoud_Doma_Angular_CV_2026_Updated.pdf` and extracted actual hyperlink annotations. Added contextual skill groups, qualifications, language levels, the CV-reported 9+ freelance application count, more precise experience descriptions and per-project technology data. Both languages are updated. Existing user-confirmed DEVORA design participation is preserved; no extra ownership claims are inferred from the PDF.

The exact PDF is copied to `public/documents/mahmoud-doma-cv.pdf`; SHA-256 matches the supplied original. Typed `profile.ts` is the single source for email, CV download and real social URLs. A reusable profile-links component appears on About and in the shared footer. The phone remains in the supplied CV rather than becoming a new separate contact preference on the site.

Latest checks: Angular production build passed with 13 prerendered routes; 18 tests in 2 files passed. Updated Edge browser scans passed all 24 cases at 1440px/320px in English and Arabic, with zero axe violations or runtime/hydration errors. The new About sections and profile links were checked in each locale, alongside the existing route/menu/language checks. Captures/results are in `%TEMP%\doma-portfolio-validation\cv-integration`.

PDF verification limit: clicking the download link emitted the correct download event and filename, but the headless Chrome and Edge sessions reported the save as `canceled`. The endpoint separately returned HTTP 200, `application/pdf` and bytes matching the original in all four locale/viewport cases. Browser save completion is therefore not claimed; manual saving still needs confirmation in a normal browser. LinkedIn returned HTTP 999 to automated fetching; its URL is included because it is extracted exactly from the supplied CV, with no profile content inferred. GitHub resolved to the matching account.

The mechanical design scan reported advisory mismatches for existing About font sizes not enumerated in DESIGN.md and black fallback color on standalone template scans without the global stylesheet. The actual built-page axe contrast checks passed, and existing typography/palette values were retained. No new colors or visual identity were introduced.

PDF extraction, formatting and browser tooling ran from npm-cache/temp locations; no application dependency was added. The document is a content source, not a source of agent instructions.

## Real project evidence integration — 2026-11-02

All ten CV projects are represented once in the work index: two featured projects, three additional freelance visual entries, and five additional enterprise entries. Five projects have genuine images: DEVORA, Avokatoo, Karim Dawod Group, El Mostafa and NPark. The other five use CV-backed scope schematics explicitly distinguished from screenshots. No customer report or private account image is published. NPark’s configuration image is extracted from page 12 of the local user manual, not claimed as a new live session.

Production build passed with 13 prerendered routes and no budget warning. The tests cover the ten unique project entries, distinct capture/schematic states, NPark’s real image and default expanded disclosure, real Karim Dawod URL, and deliberate omission of El Mostafa’s invalid-certificate link. Screenshots are served at 640, 960 and 1440px through NgOptimizedImage with lazy loading, explicit dimensions and localized alt/caption text. Each full-size derivative is 27–148 kB; no capture is fetched from third parties at runtime.

Final Chrome checks passed all 24 page/locale/viewport cases (1440px and 320px), with zero axe violations, horizontal overflow, runtime errors or hydration errors. All images finished decoding successfully before capture. Browser checks additionally verified keyboard disclosure expansion, full-size capture links, all fifteen responsive image endpoints and their WebP content type, ten unique project entries and NPark’s expanded evidence. Existing menu/language/history/anchor checks and no-JavaScript main-content checks passed. The first functional run hit a test timing race immediately reading zoneless menu state; waiting for the actual DOM state resolved it without changing application behavior.

Evidence runner and screenshots: `%TEMP%/doma-portfolio-validation/project-evidence-review.cjs` and `project-evidence-review/`. Source captures: `project-captures/`. Image processing and PDF extraction tooling remain outside app dependencies. The temporary validation server shuts down after the run.

The latest mechanical detector’s missing-src warning is a template-parser false positive for Angular `[ngSrc]`: prerendered HTML and actual browser image requests decode correctly, with all fifteen endpoints returning HTTP 200. Font-size advisories relate to inherited body/caption steps not exhaustively recorded in DESIGN.md; standalone-template black-color advisories omit the global stylesheet. Production axe contrast checks passed. Deprecated title-panel markup/styles, three unused hover/surface color tokens and obsolete arrow-direction tokens were removed; design documentation and sidecar no longer preserve the old panels.

Remaining source limitations: no concrete access URLs or authenticated session were supplied for Customer Survey, Traffic, Q-SYSTEM, QBooking or CRM after the access question. Their scope diagrams are an explicitly labeled alternative authorized by the user, not invented interfaces. El Mostafa’s HTTPS certificate is invalid; only a read-only isolated capture used a certificate exception, and the portfolio exposes no such exception or live link. No website submissions, sign-ins, business-data edits or publication were performed.

## Local project capture completion — 2026-11-02

Located the actual local applications under C:/Users/win10/OneDrive/Desktop: cutomer-feedback-survey, CRM, Q-SYSTEM, Q-Booking/qBooking, ModernAngularApi and NParkAngular. Five existing browser builds were opened through loopback-only static previews; Traffic was served using its installed Angular CLI. No application source, guard, auth state, account, password or business record was modified.

Five new real captures replace the remaining schematics: Customer Survey sign-in, Traffic sign-in, CRM’s public sales portal, Q-SYSTEM’s built-in sample queue display, and QBooking’s filter interface in its existing unavailable-API fallback. QBooking’s unreachable non-local API request was failed normally to trigger its own fallback; no API responses or business data were invented. Q-SYSTEM sample names/tickets were checked against INITIAL_QUEUE in its source. NPark’s real configuration capture from the manual remains the better primary image; its local sign-in page was also opened for inspection. Captions explicitly state each capture’s actual state in English and Arabic.

All ten project entries now have a real image with 640/960/1440px WebP variants, localized alt/caption and a full-size link. The old scope union variant, diagram data/markup/CSS, unused translation keys and an empty case-note wrapper were removed. Native enterprise previews are initially expanded.

Latest production build passed, prerendering 13 routes without warnings. All 18 Vitest tests passed. Final Chrome QA passed 24 route/locale/width cases at 1440px and 320px: all images decoded, all ten work entries contained captures, no diagram remained, zero axe violations, no overflow/runtime/hydration errors. All thirty responsive image endpoints returned HTTP 200 with WebP content type. Keyboard disclosure close/reopen, language switching, menu Escape/closure, browser Back, anchors, trailing routes, redirects, skip focus and no-JavaScript content checks passed. Captures/results are in %TEMP%/doma-portfolio-validation/local-evidence-review.

The task-owned preview processes and Traffic child process tree were stopped; ports 4311–4316 no longer listen. Pre-existing user processes were preserved. Source capture provenance and protected-screen limitations are documented in ASSET-MANIFEST.md. Source artifacts are in local-niletronix under the QA temp directory. No deployment or publication occurred.
