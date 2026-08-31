# Industry-Standard UI Audit

Use this audit before and after implementation.

## Severity levels

### P0 — must fix
Issues that cause:

- broken navigation;
- inaccessible primary flows;
- unusable mobile layouts;
- unreadable content;
- severe contrast problems;
- form failure;
- layout shifts that interfere with interaction;
- missing primary content;
- broken links or routes.

### P1 — high impact
Issues likely to harm:

- trust;
- comprehension;
- retention;
- conversion;
- search visibility;
- performance;
- cross-device usability.

### P2 — polish
Issues that mainly affect:

- visual consistency;
- perceived quality;
- micro-interaction quality;
- spacing;
- alignment;
- subtle hierarchy.

Do not spend disproportionate effort on P2 while P0/P1 remain.

## 1. First-impression audit

Within the first viewport, a new visitor should be able to determine:

- Drixil Group's name/identity;
- what kind of organization it is;
- the core value/capability;
- where to go next;
- how to contact or explore it.

Flag:

- vague slogan without concrete supporting context;
- hero content delayed by animation;
- CTA visually buried;
- hero height so large that supporting proof is unnecessarily far below;
- important text rendered over busy imagery;
- unclear header/navigation labels.

## 2. Information architecture

Check whether the site structure matches external visitor mental models.

Typical visitor needs may include:

- understanding the group;
- exploring business areas/services;
- reviewing experience/projects;
- validating credibility;
- finding leadership/company information;
- contacting Drixil;
- finding careers or other stakeholder information if those areas exist.

Do not create new sections merely because they are common. Add them only when real content exists.

## 3. Navigation

Audit:

- global navigation consistency;
- current-page indication;
- dropdown interaction;
- keyboard interaction;
- mobile menu;
- logo-home behavior;
- deep-page return paths;
- footer navigation;
- anchor behavior with sticky headers;
- descriptive link labels.

## 4. Content hierarchy

Every page should have:

- one clear H1;
- a readable intro;
- scannable section headings;
- visually grouped related content;
- a clear conclusion/next step.

Flag:

- paragraphs that are too wide;
- repeated marketing claims;
- duplicate headings;
- blocks of text without scannable structure;
- all sections using identical card layouts;
- decorative labels that compete with the actual heading.

## 5. Trust and credibility

Audit for verified:

- company identity;
- legal/company name where appropriate;
- contact information;
- location information;
- leadership or governance information if available;
- real projects;
- real capabilities;
- certifications;
- partner/client logos with permission;
- privacy/legal links;
- copyright/year.

Flag vague claims that are not backed by evidence.

## 6. CTA flow

For each page, write down:

- primary visitor intent;
- primary CTA;
- secondary CTA;
- next logical page.

Flag:

- dead ends;
- repeated generic “Learn More” links;
- conflicting CTAs;
- CTAs that jump to unrelated sections;
- inquiry actions that are hard to find after the visitor scrolls.

## 7. Component consistency

Compare:

- buttons;
- tags/eyebrows;
- cards;
- section headers;
- image treatments;
- accordions;
- tabs;
- metrics;
- forms;
- icons;
- link styles.

Consolidate accidental variants while keeping purposeful variants.

## 8. Interaction states

Every interactive component must define relevant:

- default;
- hover;
- active/pressed;
- focus-visible;
- disabled;
- loading;
- error;
- success;
- expanded/collapsed;
- selected/current states.

## 9. Mobile audit

Test at minimum:

- 360 px;
- 390 px;
- 430 px;
- 768 px;
- 1024 px;
- 1440 px.

Check:

- no unintended horizontal scrolling;
- no clipped text;
- no navigation overlap;
- no tiny two-column text blocks on phones;
- forms fit the viewport;
- media preserves aspect ratio;
- touch targets are usable;
- hero copy remains concise;
- sticky UI does not consume excessive height.

## 10. Accessibility audit

Check:

- keyboard-only navigation;
- skip link;
- logical tab order;
- visible focus;
- landmarks;
- heading order;
- accessible names;
- form labels;
- errors;
- contrast;
- target sizes;
- reduced motion;
- media alternatives;
- no hover-only functionality.

## 11. Performance audit

Inspect:

- LCP element;
- image sizing;
- hero preload/priority;
- lazy loading;
- font loading;
- third-party scripts;
- animation cost;
- hydration cost;
- unused client-side JS;
- CLS;
- responsive image behavior.

## 12. SEO/metadata audit

Check:

- unique page titles;
- unique descriptions where appropriate;
- canonical URLs;
- Open Graph metadata;
- social preview image;
- sitemap;
- robots directives;
- semantic headings;
- logical internal links;
- organization/site structured data only when accurate;
- favicons/site name;
- no accidental `noindex` on production pages.

## 13. Final decision rule

A “revamp” is successful when the site feels recognizably Drixil, but:

- clearer;
- faster;
- more trustworthy;
- easier to navigate;
- more consistent;
- more accessible;
- better on mobile;
- more deliberate.

The goal is not for a returning visitor to ask, “Why did they completely change the site?”

The goal is for them to feel, “This is much more polished.”
