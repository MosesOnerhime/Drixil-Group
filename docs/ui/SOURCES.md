# Research Sources

This pack synthesizes guidance from current web-platform, accessibility, UX, B2B/corporate, performance, and search documentation.

These sources are references, not visual templates. Drixil's existing brand remains the visual source of truth.

## Web interface implementation

### Vercel Labs — Web Interface Guidelines
https://github.com/vercel-labs/web-interface-guidelines

Key themes used:
- keyboard support;
- visible focus;
- minimum hit targets;
- semantic links/buttons;
- responsive coverage;
- stable skeletons;
- accessible labels;
- form recovery;
- no `transition: all`;
- intentional interaction states.

### Vercel agent skill
https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md

Useful as a Codex review pattern for auditing UI code against current interface guidelines.

## Accessibility

### W3C — WCAG 2.2
https://www.w3.org/TR/WCAG22/

### What's New in WCAG 2.2
https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/

Key criteria reflected here:
- Focus Not Obscured;
- Focus Visible;
- Target Size (Minimum);
- predictable interaction;
- accessible authentication/form principles where relevant.

### W3C — Target Size (Minimum)
https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

WCAG 2.2 AA defines a 24×24 CSS pixel minimum target-size criterion with exceptions. This pack recommends larger primary mobile targets where practical.

## Performance and retention

### web.dev — Optimize Largest Contentful Paint
https://web.dev/articles/optimize-lcp

Good LCP target: ≤ 2.5 s at the 75th percentile.

### web.dev — Interaction to Next Paint
https://web.dev/articles/inp

Good INP target: ≤ 200 ms at the 75th percentile.

### web.dev — Cumulative Layout Shift
https://web.dev/articles/cls

Good CLS target: ≤ 0.1 at the 75th percentile.

### web.dev — Renault case study
https://web.dev/case-studies/renault

Renault analyzed 10 million visits and found lower LCP correlated with lower bounce rate and more conversions. This supports treating performance as a visitor-retention/business concern rather than only a technical score.

### web.dev — QuintoAndar case study
https://web.dev/case-studies/quintoandar

A performance-focused redesign/migration reported lower bounce rate, more pages per session, and improved conversion during validation. The exact percentages are case-specific; the general lesson is that faster, more stable experiences can materially affect engagement.

## B2B/corporate credibility

### Nielsen Norman Group — Corporate Website / About Us research
https://www.nngroup.com/reports/about-us-presenting-company-information/

The research program focuses on how corporate sites should present company information so visitors can understand and trust the organization.

### Nielsen Norman Group — UX research reports
https://www.nngroup.com/reports/

Includes dedicated B2B Websites, Corporate Websites, Navigation, Content Strategy, Accessibility, and Web Usability research.

### McLean (2017) — Investigating the online customer experience: a B2B perspective
https://doi.org/10.1108/MIP-12-2016-0222

Study of B2B website usage found website credibility and information quality significantly affect online customer experience. This pack therefore treats trustworthy information architecture and content quality as first-class UI requirements.

## Search and discoverability

### Google Search Central — Title links
https://developers.google.com/search/docs/appearance/title-link

Key themes:
- unique, descriptive titles;
- concise page-specific wording;
- clear primary page title.

### Google Search Central — Meta descriptions
https://developers.google.com/search/docs/appearance/snippet

Use relevant, page-specific descriptions that help searchers understand the page.

### Google Search Central — Search appearance
https://developers.google.com/search/docs/appearance

### Google Search Central — Structured data
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

Structured data should describe real content. Do not invent organization facts or ratings.

### Google Search Central — Sitelinks
https://developers.google.com/search/docs/appearance/sitelinks

Logical site structure, useful headings, and descriptive internal links help search engines understand important destinations.

### Google Search Central — Mobile-first indexing
https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing

Google uses the mobile version of content for indexing/ranking; important content should not disappear on mobile.

### Google Search Central — Canonicalization
https://developers.google.com/search/docs/crawling-indexing/canonicalization

Useful for avoiding duplicate/staging/deployment URL confusion.

## Research interpretation rule

Do not copy another company's design system.

Apply these sources as constraints on:
- usability;
- accessibility;
- clarity;
- credibility;
- performance;
- semantics;
- discoverability.

The Drixil visual identity remains the design authority.
