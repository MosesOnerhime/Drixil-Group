---
name: drixil-ui
description: Audit and improve Drixil Group website UI/UX while preserving the existing visual identity. Use for redesign, polish, accessibility, responsive, conversion, retention, corporate trust, performance, and UI QA tasks.
---

# Drixil UI Skill

## Objective

Improve Drixil Group's website to modern corporate-web standards without turning the task into a rebrand.

## Mandatory reading

Before significant UI work, read:

- `/DESIGN.md`
- `/docs/ui/INDUSTRY_STANDARD_AUDIT.md`
- `/docs/ui/RETENTION_CONVERSION.md`
- `/docs/ui/CORPORATE_TRUST_CONTENT.md`
- `/docs/ui/COMPONENT_INTERACTION_STANDARDS.md`
- `/docs/ui/RESPONSIVE_ACCESSIBILITY.md`
- `/docs/ui/PERFORMANCE_SEO.md`
- `/docs/ui/ANTI_PATTERNS.md`
- `/docs/ui/DESIGN_QA.md`

Also inspect the existing implementation.

## Workflow

### 1. Inventory

Identify:

- routes/pages;
- shared layout;
- design tokens;
- typography;
- header/nav;
- footer;
- buttons;
- section patterns;
- cards;
- media;
- forms;
- motion;
- metadata.

### 2. Preserve

Write down the strongest existing patterns.

Do not replace them merely for novelty.

### 3. Audit

Classify findings:

- P0 broken/accessibility;
- P1 trust, retention, responsive, performance, conversion;
- P2 polish/consistency.

### 4. Implement

Prioritize:

1. clarity and navigation;
2. mobile/responsive issues;
3. accessibility;
4. content hierarchy and CTA flow;
5. trust/content presentation;
6. performance-sensitive UI;
7. component consistency;
8. motion polish;
9. SEO/metadata improvements;
10. subtle visual polish.

### 5. Validate

Use `docs/ui/DESIGN_QA.md`.

Run available build/lint/typecheck/tests.

## Rules

- Preserve existing brand identity.
- Do not invent content or business facts.
- Do not introduce a large UI framework without a repository-specific need.
- Reuse current dependencies and abstractions.
- Prefer small system-wide improvements over one-off page hacks.
- Do not degrade performance for decoration.
- Do not hide content behind animation.
- Do not remove functionality to simplify visuals.
- Do not commit or push unless explicitly requested.

## Desired outcome

The finished site should look like the same Drixil website after a high-end product/design/engineering team completed a rigorous refinement pass.
