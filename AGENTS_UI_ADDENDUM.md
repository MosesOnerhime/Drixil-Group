# Drixil Group — UI/UX Agent Instructions

> Merge this file into the repository's root `AGENTS.md`. If an existing instruction conflicts with this file, preserve project-specific functional/technical requirements and use these rules for UI/UX decisions unless explicitly told otherwise.

## Scope

These instructions apply whenever an agent modifies:

- public website pages;
- navigation;
- footer;
- marketing sections;
- contact or inquiry flows;
- corporate/about content;
- service/business-unit pages;
- project/case-study content;
- forms;
- responsive behavior;
- motion;
- accessibility;
- metadata or UI-related performance.

## Core principle: improve, do not rebrand

Drixil Group already has an established visual direction.

Before changing UI, the agent must:

1. inspect the current implementation;
2. identify the existing design tokens, type scale, spacing rhythm, imagery treatment, section patterns, motion patterns, buttons, cards, navigation, and footer;
3. identify the strongest current pages/components and use them as internal references;
4. read `DESIGN.md` and the relevant files in `docs/ui/`;
5. preserve the current brand identity unless a specific element fails accessibility, responsiveness, usability, credibility, performance, or consistency requirements.

Do not replace the design merely because another aesthetic is fashionable.

## Source-of-truth order

For UI decisions, use this order:

1. verified Drixil brand assets and content in the repository;
2. established high-quality patterns already used in the current site;
3. `DESIGN.md`;
4. `docs/ui/*`;
5. current web-platform and accessibility best practices.

When two existing patterns conflict, consolidate toward the clearer and more reusable pattern.

## Audit before implementation

For any substantial UI task, inspect:

- page structure and route coverage;
- header/nav states;
- footer;
- typography hierarchy;
- section spacing;
- container widths;
- component consistency;
- mobile/tablet/desktop layouts;
- image/video loading;
- CTA hierarchy;
- trust signals;
- form states;
- keyboard navigation;
- focus visibility;
- reduced-motion behavior;
- empty/loading/error states;
- metadata;
- semantic heading structure;
- performance-sensitive components.

Do not start by rewriting the design system.

## Preserve functionality

Do not remove or alter working:

- routes;
- links;
- contact destinations;
- forms;
- analytics integrations;
- API calls;
- CMS/data bindings;
- content;
- legal/privacy links;
- SEO metadata;
- business information;

unless the task explicitly requires it or the current implementation is demonstrably broken.

Never invent corporate facts, clients, awards, project numbers, revenue, office locations, certifications, staff, testimonials, partner logos, or performance claims.

## UI implementation rules

- Prefer semantic HTML before ARIA.
- Navigation uses real links.
- Actions use buttons.
- Every interactive element has visible hover, active, and keyboard-focus behavior.
- Use `:focus-visible` where appropriate.
- Do not remove browser zoom.
- Do not use `transition: all`.
- Respect `prefers-reduced-motion`.
- Keep mobile touch targets generous; aim for about 44×44 CSS px for primary controls.
- Ensure form labels are programmatically associated.
- Errors must explain recovery, not merely state failure.
- Keep the original label visible when a button enters a loading state.
- Avoid layout shifts caused by late-loading media or fonts.
- Images require meaningful alt text when informative and empty alt text when decorative.
- Decorative motion must never block content access.
- Do not make text, navigation, or important content dependent on hover.
- Avoid horizontal scrolling at standard viewport widths.

## Corporate-site priorities

Every major page should help a first-time visitor quickly understand:

1. who Drixil Group is;
2. what it does;
3. why the visitor should trust it;
4. what the visitor can explore next;
5. how to contact or engage the company.

The page must not require a visitor to decode abstract brand language before understanding the business.

## Content integrity

Prefer specific, verifiable language over unsubstantiated superlatives.

Avoid adding claims such as:

- “industry-leading”;
- “world-class”;
- “best-in-class”;
- “trusted by thousands”;
- “award-winning”;

unless the repository contains reliable evidence and the claim is approved content.

## Completion standard

Before considering a UI revamp complete:

1. run the project's lint/typecheck/build/tests that are available;
2. test major pages at mobile, tablet, laptop, and wide-desktop widths;
3. perform keyboard-only navigation on primary flows;
4. inspect light/dark themes if both exist;
5. check reduced-motion behavior;
6. apply `docs/ui/DESIGN_QA.md`;
7. review the final diff for accidental content or behavior changes;
8. report remaining limitations honestly.

Do not commit or push unless explicitly requested.
