# Drixil UI Anti-Patterns

These are default prohibitions unless the current design already uses a pattern successfully and there is a strong reason to preserve it.

## Do not rebrand accidentally

Do not:

- replace the current palette because another palette looks “more modern”;
- swap fonts casually;
- redesign the logo;
- introduce a completely new visual language;
- convert the site into a generic dark tech template;
- copy another company's website.

## Avoid generic AI-generated website aesthetics

Do not add by default:

- neon blue/purple gradients;
- glowing blobs;
- glass panels everywhere;
- animated grid backgrounds;
- random noise textures;
- floating decorative particles;
- large “AI startup” type treatments;
- excessive pill-shaped labels.

Drixil should look like Drixil.

## No card inflation

Do not put every paragraph, value, service, number, and CTA into a rounded card.

Use cards only when grouping helps comprehension.

## No unnecessary hero bloat

Avoid:

- 100vh hero sections without reason;
- huge headings that leave no useful context above the fold;
- long intro animations;
- large blank areas used to signal luxury;
- important information positioned several screens below decorative media.

## No fake credibility

Never invent:

- awards;
- clients;
- testimonials;
- certifications;
- statistics;
- years of operation;
- office locations;
- projects;
- partner logos.

## No motion overload

Avoid:

- reveal-on-scroll for every element;
- scroll hijacking;
- delayed content;
- cursor-following effects;
- page-transition cinematics;
- auto-playing motion that competes with reading;
- `transition: all`.

## No inaccessible minimalism

Do not achieve a “clean” look by removing:

- labels;
- focus states;
- link underlines/affordances where needed;
- contrast;
- button boundaries;
- navigation clarity;
- useful error messages.

## No desktop-only thinking

Do not:

- simply shrink desktop;
- leave huge desktop margins on mobile;
- preserve 3–4 columns on narrow screens;
- use hover as the only interaction;
- make mobile menus difficult to close;
- use tiny icon targets.

## No content theater

Avoid:

- vague counters with no source;
- statistics used as decoration;
- meaningless progress bars;
- “trusted by” logo clouds without actual permission;
- empty case-study shells;
- generic stock-photo sections unrelated to content.

## No navigation surprises

Avoid:

- buttons masquerading as links;
- menu items that unexpectedly scroll elsewhere without clarity;
- inconsistent labels for the same destination;
- hidden primary navigation;
- opening ordinary internal pages in a new tab.

## No performance-hostile polish

Do not add:

- huge uncompressed background video;
- multiple animation libraries;
- oversized hero images;
- unnecessary webfont weights;
- heavy 3D/WebGL effects;

unless specifically justified and performance-tested.

## No SEO shortcuts

Do not:

- stuff keywords;
- duplicate titles across pages;
- hide keyword text;
- fabricate structured data;
- add misleading metadata.

## No “revamp for revamp's sake”

If a component already meets:

- design consistency;
- usability;
- accessibility;
- performance;
- responsiveness;

leave it alone unless a broader system consolidation clearly improves maintainability.
