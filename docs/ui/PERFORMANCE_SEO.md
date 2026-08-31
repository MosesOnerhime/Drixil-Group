# Performance, SEO, and Technical Experience Standards

## 1. Core Web Vitals targets

Use current “good” Core Web Vitals thresholds as product targets:

- **LCP:** ≤ 2.5 s
- **INP:** ≤ 200 ms
- **CLS:** ≤ 0.1

These targets are ideally evaluated at the 75th percentile of real visits on mobile and desktop.

Lab scores are diagnostics, not a substitute for field data.

## 2. LCP

Identify the LCP element on key landing pages.

Typical fixes:

- do not lazy-load the LCP image;
- give the hero image appropriate loading priority;
- preload only when justified;
- use responsive `srcset`/`sizes`;
- compress oversized media;
- avoid rendering the hero only after client-side JavaScript;
- minimize render-blocking resources;
- avoid unnecessary font delays.

## 3. CLS

Reserve space for:

- images;
- video;
- embeds;
- dynamically injected content.

Avoid:

- font swaps that drastically change layout;
- banners inserted above existing content after load;
- image dimensions omitted;
- skeletons that do not match final geometry.

## 4. INP and interaction responsiveness

Avoid blocking the main thread with:

- unnecessary animation libraries;
- excessive scroll listeners;
- large hydration payloads;
- expensive hover effects;
- synchronous heavy work in click handlers.

Interactions should acknowledge input immediately.

## 5. Images

For each image:

- choose an appropriate format;
- serve realistic dimensions;
- provide responsive variants;
- lazy-load below the fold;
- keep the LCP asset eager/priority when appropriate;
- provide width/height or aspect ratio;
- do not ship 4K assets into small cards.

## 6. Video

Avoid using large autoplay background video as a default hero solution unless it is core to the current brand and performance remains acceptable.

If retained:

- compress aggressively;
- provide poster;
- disable or simplify for reduced motion/data-sensitive contexts when appropriate;
- do not block the page's meaningful paint.

## 7. Fonts

- keep the family/weight set intentional;
- preload only critical font files;
- use modern font formats;
- avoid loading unused weights;
- use a sensible `font-display` strategy;
- avoid icon fonts when an SVG icon solution already exists.

## 8. JavaScript

Preserve the project's framework.

Do not introduce a large UI/animation dependency for minor polish.

Prefer:

- server/static rendering where already supported;
- code splitting;
- CSS for simple responsive behavior;
- native browser APIs;
- dependency reuse.

## 9. Metadata

Each important indexable page should have:

- concise unique `<title>`;
- useful meta description where appropriate;
- canonical URL;
- Open Graph title/description/image;
- appropriate social metadata;
- favicon/site icon.

Avoid boilerplate titles such as only `Home`.

## 10. Heading semantics

Each page should have a clear primary H1.

Do not use headings purely for styling.

Search engines and assistive technologies should be able to infer page structure.

## 11. Internal links

Use real crawlable links.

Important pages should be linked from relevant pages and from coherent navigation.

Use descriptive anchor text.

## 12. Structured data

Where accurate and appropriate, consider:

- `Organization`;
- `WebSite`;
- `BreadcrumbList`.

Only include properties that are true and supported by visible/approved business information.

Do not fabricate ratings, reviews, locations, founders, subsidiaries, or social profiles.

Validate structured data after implementation.

## 13. Sitemap and robots

Check:

- sitemap exists where appropriate;
- important production pages are discoverable;
- no accidental `noindex`;
- robots rules do not block required content;
- preview/staging deployments are not unintentionally canonicalized as production.

## 14. Canonicalization

Use consistent canonical URLs.

Avoid indexing duplicate deployment URLs or multiple URL variants where possible.

## 15. Mobile indexing

The mobile version must contain the same important content and metadata needed to understand each page.

Do not hide essential company information only on desktop.

## 16. Performance regression rule

A visual polish change should not materially degrade:

- LCP;
- INP;
- CLS;
- JavaScript payload;
- image payload;
- accessibility.

If a decorative effect causes measurable degradation, simplify or remove it.
