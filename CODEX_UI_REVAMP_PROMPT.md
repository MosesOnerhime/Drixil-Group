# Prompt for Codex — Drixil Group Website Industry-Standard Revamp

We are doing a **complete quality revamp of the Drixil Group website UI/UX**, but this is **NOT a rebrand**.

I already like the current design. Treat the existing visual identity as the baseline.

Your job is to inspect the entire existing website and implementation, identify issues I may not notice, and bring the experience up to modern corporate/B2B website standards for:

- visitor retention;
- clarity;
- credibility and trust;
- conversion/inquiry flow;
- information hierarchy;
- navigation;
- responsive behavior;
- mobile usability;
- accessibility;
- interaction quality;
- visual consistency;
- performance;
- Core Web Vitals;
- SEO/metadata;
- maintainability.

The finished website should still look recognizably like the current Drixil Group website—just significantly more refined, coherent, usable, trustworthy, responsive, and technically polished.

## BEFORE MAKING CHANGES

1. Read the repository's root `AGENTS.md` completely.
2. Read `DESIGN.md`.
3. Read all files under `docs/ui/`.
4. Use `.agents/skills/drixil-ui/SKILL.md`.
5. Inspect the complete repository and determine the actual framework, styling approach, dependencies, routing, data sources, components, and build commands.
6. Inspect git status and current diff so you do not overwrite unrelated work.
7. Audit every public/user-facing route, not only the homepage.
8. Identify the strongest existing visual patterns and preserve them.

Do not begin by replacing colors, fonts, components, or layout wholesale.

## CORE DESIGN DIRECTION

Use the principle:

**Evolution, not reinvention.**

Preserve the current:

- Drixil branding;
- logo;
- recognizable color language;
- typography where it works;
- premium visual direction;
- strongest page compositions;
- existing content and business identity;
- tasteful existing motion.

Improve only where there is a reason connected to:

- usability;
- clarity;
- accessibility;
- trust;
- consistency;
- responsiveness;
- performance;
- conversion;
- discoverability.

Do NOT make the site look like a generic SaaS, AI startup, or trendy template.

## PHASE 1 — COMPLETE AUDIT

Before implementing major changes, audit the current site using:

`docs/ui/INDUSTRY_STANDARD_AUDIT.md`

Create a brief internal list of findings classified as:

- P0 — broken/accessibility/usability;
- P1 — high-impact retention/trust/conversion/performance/responsive;
- P2 — polish/consistency.

Then proceed with implementation. Do not stop after giving me the audit.

## PHASE 2 — FIRST IMPRESSION AND RETENTION

Review the homepage and major landing pages.

A first-time visitor should quickly understand:

1. who Drixil Group is;
2. what the organization does;
3. what areas/businesses/capabilities they can explore;
4. why the organization is credible;
5. what the visitor should do next.

Improve, when needed:

- hero hierarchy;
- heading clarity;
- intro copy presentation;
- CTA hierarchy;
- section order;
- scannability;
- spacing;
- proof placement;
- media loading;
- above-the-fold information density.

Do not make the hero larger just to look premium.

Do not hide important content behind slow entrance animations.

## PHASE 3 — INFORMATION ARCHITECTURE AND NAVIGATION

Audit:

- desktop navigation;
- mobile navigation;
- dropdowns;
- current-page states;
- route naming;
- footer navigation;
- deep-page return paths;
- anchor behavior;
- internal links;
- CTA destinations.

Use real links for navigation and buttons for actions.

Make mobile navigation fully keyboard/touch accessible.

Ensure sticky UI does not obscure anchors or focused elements.

Do not change routes or public URLs without a clear need.

## PHASE 4 — CORPORATE TRUST

Read `docs/ui/CORPORATE_TRUST_CONTENT.md`.

Improve presentation of existing verified company information.

Where the repository already contains real content, make credibility easier to evaluate through:

- clearer business/capability descriptions;
- real project/case-study presentation;
- leadership/company information;
- existing certifications;
- real partner/client references;
- contact information;
- company history/location information;
- privacy/legal pathways.

CRITICAL:

Do NOT invent:

- clients;
- partners;
- testimonials;
- projects;
- project results;
- awards;
- certifications;
- office locations;
- statistics;
- years of experience;
- employee counts;
- revenue;
- leadership;
- social proof.

If useful trust content is absent, document the gap instead of fabricating it.

## PHASE 5 — CONTENT AND CTA QUALITY

Keep approved business meaning intact.

Improve presentation and copy only where the existing repository gives enough factual context.

Fix:

- vague CTA labels;
- repeated `Learn more` links where destination is unclear;
- walls of text;
- weak heading hierarchy;
- content that is hard to scan;
- sections that repeat the same message;
- dead-end pages.

Every major page should have a logical next step.

Do not add aggressive popups or fake urgency.

## PHASE 6 — DESIGN SYSTEM CONSISTENCY

Audit existing:

- colors;
- typography;
- spacing;
- container widths;
- buttons;
- links;
- labels/eyebrows;
- cards;
- borders;
- shadows;
- radii;
- icons;
- forms;
- media;
- section headers.

Consolidate accidental inconsistencies.

Create/reuse shared primitives where this improves maintainability.

Do not over-componentize simple one-off content.

Do not add a large new UI framework merely to standardize appearance.

## PHASE 7 — RESPONSIVE AND MOBILE

Follow `docs/ui/RESPONSIVE_ACCESSIBILITY.md`.

Treat mobile as a first-class design.

Test at minimum:

- 360 px;
- 390 px;
- 430 px;
- 768 px;
- 1024 px;
- 1280 px;
- 1440 px;
- wide desktop.

Fix:

- horizontal overflow;
- clipped headings;
- awkward line breaks;
- giant mobile hero whitespace;
- cramped columns;
- unusable menus;
- tiny controls;
- poor media crops;
- forms that overflow;
- CTA groups that do not stack intentionally;
- excessive sticky-header height.

Aim for approximately 44×44 CSS px hit areas for important mobile controls where practical.

## PHASE 8 — ACCESSIBILITY

Target WCAG 2.2 AA.

Implement/fix:

- semantic landmarks;
- logical headings;
- skip-to-main-content;
- keyboard navigation;
- visible `:focus-visible` states;
- focus not obscured by sticky UI;
- accessible mobile menus/dialogs;
- form labels;
- form error association;
- descriptive accessible names;
- alt text behavior;
- color-independent states;
- sufficient contrast;
- reduced-motion support;
- sensible target sizes.

Do not disable browser zoom.

Do not remove focus outlines without an accessible replacement.

## PHASE 9 — MOTION

Preserve tasteful Drixil motion where it improves the brand.

Audit it critically.

Remove/simplify:

- animation that delays reading;
- reveal effects applied to nearly every element;
- scroll hijacking;
- unnecessary parallax;
- heavy cursor effects;
- layout-affecting animation;
- `transition: all`;
- effects that cause jank.

Prefer opacity and transform.

Respect `prefers-reduced-motion`.

The visitor must not have to wait for the site to finish animating before using it.

## PHASE 10 — PERFORMANCE / CORE WEB VITALS

Read `docs/ui/PERFORMANCE_SEO.md`.

Target the current good Core Web Vitals thresholds:

- LCP <= 2.5 s;
- INP <= 200 ms;
- CLS <= 0.1;

at the 75th percentile in field measurement where data is available.

In the implementation:

- identify likely LCP elements;
- do not lazy-load true hero/LCP media;
- prioritize critical hero media appropriately;
- lazy-load below-the-fold images;
- use responsive image sizes;
- reserve image/video dimensions;
- optimize oversized assets;
- avoid unnecessary JS;
- avoid unnecessary animation libraries;
- avoid large blocking media;
- review font loading;
- minimize layout shift.

Do not sacrifice the brand for tiny benchmark gains, but do not sacrifice performance for decorative effects either.

## PHASE 11 — SEO AND TECHNICAL DISCOVERABILITY

Audit all important public pages for:

- page-specific titles;
- useful meta descriptions;
- canonical URLs;
- Open Graph metadata;
- social preview imagery;
- favicon/site identity;
- logical H1 usage;
- crawlable internal links;
- sitemap;
- robots behavior;
- mobile content parity.

Where accurate company data exists, consider valid:

- Organization structured data;
- WebSite structured data;
- BreadcrumbList structured data.

Do not fabricate structured-data properties.

Do not accidentally make the Vercel preview/staging deployment the production canonical if a real production domain is configured elsewhere.

## PHASE 12 — FORMS / CONTACT FLOW

Audit every inquiry/contact form.

Improve:

- labels;
- autocomplete;
- input types;
- validation;
- error recovery;
- loading state;
- success state;
- keyboard behavior;
- duplicate-submit prevention;
- mobile usability.

Do not request extra fields without a business reason.

Preserve the existing backend/form destination and API contract.

## PHASE 13 — FINAL QA

Apply every relevant item in:

`docs/ui/DESIGN_QA.md`

Then run all available project validation, such as:

- production build;
- lint;
- TypeScript/typecheck;
- unit/integration tests;
- any existing accessibility/performance checks.

Fix problems introduced by your changes.

Review the final git diff carefully.

## FUNCTIONAL SAFETY

Preserve existing working:

- routes;
- content/data integrations;
- forms;
- APIs;
- analytics;
- links;
- business information;
- legal links;
- SEO behavior;

unless a change is clearly required.

Do not delete functionality merely to make the UI cleaner.

Do not commit or push unless I explicitly ask you to.

## FINAL REPORT

When implementation is finished, tell me:

1. the most important issues you found;
2. what you changed;
3. what you deliberately kept because it was already strong;
4. retention/conversion improvements;
5. accessibility improvements;
6. responsive/mobile improvements;
7. performance/Core Web Vitals improvements;
8. SEO/metadata improvements;
9. component/design-system improvements;
10. validation commands/results;
11. any issues you could not verify;
12. any content/trust gaps that require real information from Drixil instead of fabricated placeholders.

Do not stop after the audit or plan. Proceed through implementation unless genuinely blocked.
