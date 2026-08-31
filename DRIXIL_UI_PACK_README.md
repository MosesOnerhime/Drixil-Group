# Drixil Group UI Standards Pack

This pack is designed for a **careful, site-wide quality revamp** of the Drixil Group website.

The goal is **not to rebrand or replace a design that already works**. The existing Drixil visual identity and the strongest parts of the current site are the baseline. The goal is to bring every page, state, interaction, breakpoint, accessibility detail, performance decision, trust signal, and conversion path up to modern corporate-web standards.

## Important installation note

Do **not** overwrite your existing project `README.md`.

This pack intentionally uses `DRIXIL_UI_PACK_README.md` instead of `README.md`.

If your repository already has a root `AGENTS.md`, do **not** overwrite it either. Merge the relevant instructions from `AGENTS_UI_ADDENDUM.md` into your existing `AGENTS.md`.

## Recommended project structure

```text
your-project/
├── README.md                         # keep your original
├── AGENTS.md                         # keep/merge your existing file
├── DESIGN.md                         # add from this pack
├── CODEX_UI_REVAMP_PROMPT.md         # add from this pack
├── AGENTS_UI_ADDENDUM.md             # merge into AGENTS.md
├── .agents/
│   └── skills/
│       └── drixil-ui/
│           └── SKILL.md
└── docs/
    └── ui/
        ├── INDUSTRY_STANDARD_AUDIT.md
        ├── RETENTION_CONVERSION.md
        ├── CORPORATE_TRUST_CONTENT.md
        ├── COMPONENT_INTERACTION_STANDARDS.md
        ├── RESPONSIVE_ACCESSIBILITY.md
        ├── PERFORMANCE_SEO.md
        ├── ANTI_PATTERNS.md
        ├── DESIGN_QA.md
        └── SOURCES.md
```

## How to use this pack

1. Add the files to the repository.
2. Merge `AGENTS_UI_ADDENDUM.md` into the project's existing `AGENTS.md`.
3. Give Codex the contents of `CODEX_UI_REVAMP_PROMPT.md`.
4. Let Codex inspect the current implementation before changing anything.
5. Require Codex to preserve existing working behavior and branding.
6. Review its final diff before committing.

## Design philosophy

**Evolution, not reinvention.**

The current Drixil Group website is the visual baseline. Codex should retain what already feels premium and intentional while fixing issues that visitors may notice subconsciously:

- unclear information hierarchy;
- inconsistent spacing or component behavior;
- weak mobile behavior;
- awkward navigation or CTA flow;
- insufficient trust or proof near important claims;
- inaccessible interactions;
- unnecessary animation or motion;
- layout instability;
- slow hero/media loading;
- weak metadata or semantic structure;
- hidden dead ends;
- inconsistent focus, hover, active, loading, and error states;
- content that sounds polished but is difficult to scan or verify.

A visual change is justified only when it improves clarity, trust, accessibility, responsiveness, performance, or conversion.
