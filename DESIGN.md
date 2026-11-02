---
name: Mahmoud Doma Portfolio
description: PROVISIONAL implementation record for Crafted Product Editorial; all exact tokens await user review.
colors:
  paper: '#f5f6f4'
  ink: '#23343c'
  muted: '#51616a'
  accent: '#3d6475'
  ice: '#e3ebee'
  line: '#c4cdd0'
  footer-muted: '#c9d6dc'
typography:
  display:
    fontFamily: 'Newsreader, Georgia, serif'
    fontSize: 'clamp(3.5rem, 6.5vw, 6rem)'
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: '-0.035em'
  headline:
    fontFamily: 'Newsreader, Georgia, serif'
    fontSize: 'clamp(2rem, 3.4vw, 3.25rem)'
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: '-0.035em'
  body:
    fontFamily: 'Source Sans 3, system-ui, sans-serif'
    fontSize: '17px'
    lineHeight: 1.7
  label:
    fontFamily: 'Source Sans 3, system-ui, sans-serif'
    fontSize: '0.8125rem'
  display-ar:
    fontFamily: 'Lemonada, Readex Pro, sans-serif'
    fontSize: 'clamp(2.5rem, 4.6vw, 4.5rem)'
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: '0'
  headline-ar:
    fontFamily: 'Lemonada, Readex Pro, sans-serif'
    fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)'
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: '0'
  body-ar:
    fontFamily: 'Readex Pro, system-ui, sans-serif'
    fontSize: '16px'
    lineHeight: 1.9
rounded:
  radius: '0.25rem'
spacing:
  space-2: '0.5rem'
  space-3: '0.75rem'
  space-4: '1rem'
  space-5: '1.5rem'
  space-6: '2rem'
  space-7: '3rem'
  space-8: '4rem'
  space-9: '6rem'
  space-10: 'clamp(5rem, 10vw, 8rem)'
components:
  button-primary:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.paper}'
    rounded: '{rounded.radius}'
    padding: '0.7rem 1.5rem'
  button-primary-hover:
    backgroundColor: '{colors.accent}'
---

# Design System: Mahmoud Doma Portfolio

## Overview

**Creative North Star: "Crafted Product Editorial"**

The approved identity combines Creative Precision, Quiet Contemporary Editorial, Quiet Confidence, and a Thoughtful & Personal voice. English and Arabic have Equal Creative Presence. These commitments come from DESIGN-DECISIONS.md and PRODUCT.md; they do not approve any exact implementation value.

**PROVISIONAL — awaiting user review:** every exact color, font family, type measurement, spacing, radius, layout, breakpoint and motion value in this document and `.impeccable/design.json` records the current local implementation, not an approved brand standard. The frontmatter is the machine-readable record of that trial implementation; source styles remain the implementation source of truth. Palette names describe existing source roles. Do not treat this record as permission to freeze trial decisions.

The shipped expression is an editorial practice folio on cool paper, using ink, slate blue and ice. Actual public-site and NPark manual captures pair with attributed project descriptions. Every project has a real capture, including local application entry, built-in sample and fallback states identified in captions. Its surface contract is direction 3, seed `c5af597e`, recorded in `src/index.html`: meet Mahmoud, inspect attributed work, read experience, contact by email. The first viewport's two-part statement, introduction and work action describe the current home composition, not a universal layout requirement.

**Key Characteristics:**

- Editorial hierarchy with restrained color.
- Verified contributions before decorative imagery.
- Independently composed Latin and Arabic typography.
- Open supporting rows and asymmetric featured spreads.
- Brief state changes and visible keyboard focus.

Evidence: `src/styles.scss`, `src/_fonts.scss`, portfolio shell, featured-work, home, work, about and case-study styles/templates. This is a source scan, not a claim of rendered browser verification.

## Colors

The PROVISIONAL palette uses cool architectural neutrals with slate blue emphasis and a warm stone counterpoint. Exact values are recorded once in frontmatter.

### Primary

- **Slate Blue / accent:** second statement line, company names, link hover, primary-action hover and focus outline.

### Neutral

- **Cool Paper / paper:** page canvas and reversed footer/action text.
- **Deep Ink / ink:** body text, primary action and contact footer background.
- **Muted Ink / muted:** supporting descriptions, metadata and dates.
- **Ice / ice, ice-hover:** enterprise project panel and next-project surface; the hover step belongs to interactive project panels.
- **Warm Stone / stone, stone-hover:** product project panel and its hover step.
- **Divider / line:** section rules, language separator and mobile menu border.
- **Footer Muted / footer-muted:** supporting text on the dark contact close.

**The Evidence Rule.** Color supports readable hierarchy and meaningful project distinction; it does not substitute for verified project evidence.

## Typography

**PROVISIONAL font selections:** Latin display uses Newsreader with Georgia/serif fallback; Latin body uses Source Sans 3 with system-ui/sans-serif fallback. Arabic display uses Lemonada with Readex Pro/sans-serif fallback; Arabic body uses Readex Pro with system-ui/sans-serif fallback. All are self-hosted WOFF2 subsets with swap loading; source licenses accompany the font assets.

### Hierarchy

- **Display:** the frontmatter display roles serve page introductions, home statement and case titles.
- **Headline:** the headline roles serve major section titles and the contact close.
- **Body:** body roles set language-specific root size and leading. Introductory prose often uses a larger body step (1.125rem), while descriptive text uses the root body scale.
- **Label:** the small body-family role serves factual metadata; it is sentence case, not an invented uppercase eyebrow system.
- **Supporting titles:** project index and experience headings use the body family, medium weight (500), and a compact title step (1.25rem).

**The Equal Presence Rule.** Arabic receives its own scale, leading and zero display tracking. Use the locale-aware font properties; do not force Latin metrics onto Arabic. Project names and email preserve mixed-script isolation.

## Layout

All measurements in this section are PROVISIONAL. The centered shared container uses `min(100% - clamp(2.5rem, 8vw, 9rem), 76rem)`. The shared spacing scale in frontmatter sets internal and section rhythm; root sizes differ by language, so rem dimensions respond to the locale.

The home hero uses an asymmetric two-column split (1.6fr / 1fr), then stacks at the hero breakpoint (55rem). Featured project spreads use complementary proportions (1.25fr / 1fr and 1fr / 1.25fr); enterprise content places its panel in the second column on larger screens. About/experience uses a shared split (1fr / 1.5fr); case content uses facts beside narrative (1fr / 1.8fr). These are observed surface compositions, not a mandatory ratio for new pages.

At the shared compact breakpoint (45rem), featured spreads, supporting project rows, practice, biography and case columns stack; section headings also stack. Case facts retain two equal columns. Navigation expands in document flow, and the contact footer becomes a single column. Logical properties preserve RTL/LTR behavior. Body copy uses contextual line limits, generally 42–62ch; the featured summary is intentionally shorter (33ch).

## Elevation & Depth

The shipped system uses no box shadows. Flat tonal surfaces, whitespace and fine rules provide depth. The dark contact footer closes the reading sequence. There is no decorative glass, glow or fabricated device imagery, consistent with the approved identity.

**The Quiet Surface Rule.** Keep hierarchy in type, space, tonal planes and meaningful dividers rather than introducing ornamental elevation.

## Shapes

The recurring PROVISIONAL corner token is compact and shared by primary actions, featured panels and next-project surfaces. Supporting work and experience remain open rows with fine separators, not repeated rounded cards. The language divider and content rules establish structure without enclosing every region.

## Components

### Buttons

A restrained solid action uses ink on paper, the shared radius and the frontmatter padding. It has a minimum block size (3rem), medium body weight (500), and slate hover. The PROVISIONAL transition is background-color (160ms, ease). The global focus indicator is a visible accent outline (2px) offset from the element (5px); footer focus uses paper. Reduced motion sets duration to zero.

### Text links

Underlined text actions use medium body weight, an enlarged minimum block size (2.75rem), and accent hover. Navigation uses transparent underlines at rest and a visible underline for the current route. Do not remove focus affordances when translating these patterns.

### Project captures and scope evidence

The shared project-evidence component renders a required real capture from each typed project record. Real images reserve their dimensions, load lazily and use 640/960/1440px responsive WebP sources. Full-size image links include provenance captions in both languages. Screenshots retain the source interface; there are no fake browser frames, generated device mockups or invented charts. Featured project titles precede the evidence, followed by actual contributions.

All ten projects now use actual captures. Enterprise previews use native details/summary elements, expanded initially, so each picture is visible and can be collapsed. Source captions distinguish protected sign-in screens, the existing Q-SYSTEM sample queue and QBooking’s actual unavailable-API fallback. The schematic renderer, associated CSS/data and translation keys are removed. NPark retains its actual configuration screenshot from the manual. No backend response, protected session, user record or screenshot content is fabricated.

### Navigation

An identity block and compact links share one header. At the compact breakpoint a localized menu button controls an in-flow expanded navigation region with explicit expanded state, Escape handling and closure after navigation. The language link preserves equivalent routes. Native links and aria-current communicate destination and active page.

### Open evidence rows

Project index and experience entries use a fine top rule, shared spacing and factual text hierarchy. They preserve contribution and employer context without adding decorative status chips or synthetic outcome metrics.

### Contact close

The dark footer pairs a display heading with direct email contact and supporting availability text. Email wraps safely and stays isolated left-to-right in both locales. There is no form. A reusable profile-links component provides the supplied English résumé PDF and exact LinkedIn/GitHub links in the footer and About page, with localized labels. About presents source-backed expertise, qualifications and language levels through open rows, preserving the existing editorial system.

## Do's and Don'ts

### Do:

- **Do** preserve the approved editorial identity while treating every exact implementation value as PROVISIONAL until user review.
- **Do** use the shared source tokens and language-aware typography for consistent surfaces.
- **Do** preserve attribution, mixed-script isolation, visible focus, reduced motion and keyboard access.
- **Do** preserve real interface captures and accurately label sign-in, built-in sample and fallback states.

### Don't:

- **Don't** present trial fonts, colors, layout or motion as approved brand decisions.
- **Don't** add fake product captures, invented outcomes, fake terminal imagery or unavailable download links.
- **Don't** duplicate selectors, add specificity overrides, use !important or preserve obsolete UI code.
- **Don't** turn the home composition or a single project treatment into a universal brand requirement.

Not canonized: one-off geometry, the footer-only divider color and project-specific title treatments are local details, not shared tokens. No craft-floor defect is deliberately promoted to a reusable rule by this record; rendered review remains outstanding.
