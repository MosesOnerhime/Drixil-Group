---
name: Drixil Group
designStrategy: "Evolution, not reinvention"
primaryGoal: "Premium corporate clarity, trust, retention, and conversion"
accessibilityTarget: "WCAG 2.2 AA"
performanceTargets:
  lcp: "<= 2.5s at p75"
  inp: "<= 200ms at p75"
  cls: "<= 0.1 at p75"
---

# Drixil Group Design Direction

## 1. Design intent

The Drixil Group website should feel:

- established;
- capable;
- modern;
- composed;
- premium;
- credible;
- precise;
- easy to navigate.

It should **not** feel like a generic startup template, speculative tech landing page, or design-showcase experiment.

The current website is the visual baseline. Retain its strongest visual language, branding, palette, typography, imagery, and motion. Improve consistency and usability around it.

## 2. The design test

Every design change should answer at least one of these questions positively:

- Does this make Drixil easier to understand?
- Does this make the company feel more credible?
- Does this improve scanning or information hierarchy?
- Does this reduce friction in navigation or inquiry?
- Does this improve mobile usability?
- Does this improve accessibility?
- Does this improve perceived or measured performance?
- Does this make the current design more consistent?

If the answer is no, the change is probably unnecessary.

## 3. Visual hierarchy

A typical marketing page should provide:

1. one unmistakable page purpose;
2. one dominant heading;
3. concise supporting copy;
4. a clear primary next action;
5. optional secondary exploration;
6. proof/context after the initial promise.

Avoid giving every heading, card, and metric the same visual weight.

## 4. Typography

Preserve the current brand typefaces unless there is a technical or legibility problem.

Rules:

- use a deliberate type scale;
- maintain comfortable line lengths for body copy;
- avoid very thin font weights for body text;
- avoid low-contrast grey body copy;
- avoid all-caps for paragraphs;
- use line-height appropriate for reading, not merely visual density;
- do not use oversized marketing headings that push all useful information below the first viewport;
- ensure heading levels map sensibly to semantic HTML.

Prefer editorial restraint over decorative typography.

## 5. Spacing

Consolidate spacing into a predictable scale.

The page should feel generous but not empty.

Audit for:

- sections with excessive top/bottom whitespace;
- inconsistent card padding;
- unequal gaps between related elements;
- mobile sections that retain desktop-sized whitespace;
- headings visually detached from their content;
- CTA groups with accidental spacing.

Spacing communicates hierarchy. Do not use empty space as a substitute for structure.

## 6. Containers and grids

Use a consistent page container strategy.

- Keep long-form copy readable.
- Let imagery or media go wider only when it benefits the composition.
- Avoid arbitrary one-off widths.
- Align page sections to common vertical axes.
- Ensure cards and columns collapse intentionally rather than simply wrapping.

Wide screens should not cause content to float in an excessively large empty canvas.

## 7. Color

Preserve Drixil's existing brand palette.

Improvements should focus on:

- accessible text contrast;
- consistent semantic use;
- consistent interaction states;
- restraint with accent colors;
- ensuring links and controls remain identifiable without relying only on color.

Do not introduce a new palette just to make the site look different.

## 8. Surfaces, cards, borders, and shadows

Cards are for meaningful grouping, not decoration.

Use them when they help a visitor distinguish:

- businesses/services;
- projects/case studies;
- people/leadership;
- contact pathways;
- structured data.

Avoid turning every section into a card.

Shadows should be subtle and physically coherent. Borders should be crisp. Nested radii should look concentric.

## 9. Imagery and media

Corporate imagery should support trust and understanding.

Prioritize, where available:

1. real company/project imagery;
2. real team/operations imagery;
3. high-quality branded diagrams;
4. carefully selected supporting imagery.

Avoid adding generic stock imagery solely to fill space.

Technical requirements:

- reserve dimensions to avoid CLS;
- serve responsive sizes;
- use modern formats where supported;
- lazy-load below-the-fold media;
- prioritize the true LCP hero asset;
- avoid autoplay media with sound;
- include poster images for video;
- ensure media still makes sense with motion disabled.

## 10. Motion

Keep polished motion if it contributes to the existing Drixil identity.

Motion rules:

- use motion to communicate hierarchy, continuity, or feedback;
- avoid animating every section simply because it enters the viewport;
- avoid long delays before content becomes readable;
- prefer opacity/transform;
- never use `transition: all`;
- respect `prefers-reduced-motion`;
- avoid scroll hijacking;
- avoid parallax that harms readability;
- keep important controls usable before decorative animation completes.

Visitors should never have to wait for the website to finish performing.

## 11. Navigation

Navigation should feel stable and predictable.

- logo returns home;
- current location is understandable;
- labels use visitor language, not internal org jargon;
- dropdowns are keyboard accessible;
- mobile navigation is easy to open, close, and traverse;
- sticky navigation must not obscure anchored content or focused controls;
- primary contact/engagement action is visually clear but not aggressive.

## 12. CTA hierarchy

Every page should have a sensible next step.

Use:

- one primary CTA per decision context;
- secondary links for exploration;
- descriptive labels such as “Explore our businesses”, “View projects”, or “Contact Drixil” rather than repeated vague “Learn more” links where context is unclear.

Do not place multiple equally loud CTAs next to each other without hierarchy.

## 13. Trust

Trust should be distributed through the experience.

Where verified content exists, use:

- specific business capabilities;
- real project/case-study detail;
- client/partner references with permission;
- leadership/company information;
- physical/contact details;
- certifications;
- dates/history;
- measurable outcomes;
- clear privacy/legal information.

Never fabricate proof.

## 14. Forms

Contact/inquiry forms should be low-friction.

- ask only for information that is useful at first contact;
- use visible labels;
- use appropriate autocomplete;
- show field-level errors;
- focus the first invalid field after submission;
- preserve entered data on recoverable errors;
- provide clear success confirmation;
- do not disable the submit button before the visitor has a chance to receive validation;
- prevent duplicate submissions while a request is in flight.

## 15. Responsive behavior

Mobile is not a scaled-down desktop layout.

At small widths:

- collapse navigation intentionally;
- reduce decorative whitespace;
- stack content in logical reading order;
- keep important CTAs easy to reach;
- prevent awkward orphaned words and tiny columns;
- maintain minimum target sizes;
- prevent media from causing overflow;
- preserve hierarchy without oversized headings.

## 16. Accessibility

Target WCAG 2.2 AA.

At minimum:

- keyboard-accessible primary journeys;
- visible focus;
- no focus hidden behind sticky UI;
- semantic headings/landmarks;
- descriptive link text;
- accessible forms;
- appropriate alt text;
- sufficient contrast;
- reduced motion;
- no color-only meaning;
- meaningful accessible names for icon-only controls;
- a skip-to-content mechanism on multi-section pages.

## 17. Page personality

The site may be visually premium and distinctive, but the visitor should notice **Drixil**, not the UI designer.

Restraint is part of the brand.
