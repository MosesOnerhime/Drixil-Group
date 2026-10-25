# Drixil layout mockups

Prepared on 2026-10-25 using the built-in image-generation tool. Moses confirmed a balanced Group homepage, a game-first Interactive page, and a comp-first workflow. He subsequently approved **Group A + Interactive B**. These are approved desktop layout references, not yet implemented web pages or responsive browser-test results.

## Approved references

| Surface | Selected reference | Layout emphasis |
| --- | --- | --- |
| Group / A Feature | [Group mockup](../approved-group/a-group.png) | Company masthead and a 60/40 Interactive/Studio feature pair. |
| Interactive / B Showcase | [Interactive mockup](b-interactive.png) | Full-width game artwork, factual captions/actions, and a studio-purpose band. |

The selected pair is Group A with Interactive B. A, B and C alternatives were presented for each route; the unselected images and their sidecars remain ignored local process material. They are not implemented pages or approvals. The completed responsive implementation, review and delivery status are recorded in the redesign handoff.

## Inputs and integrity

The input references were the existing site captures, supplied Drixil mark and metallic logo, Beyond 90 matchday art, and Volleyball Rally spike art. Keep the original repository assets as production truth; a generated approximation must not silently redesign a logo or be presented as evidence of a different game.

The first B Group draft included unsupported current-investment wording. The first C Group draft invented a Studio photograph. Both drafts were rejected for those details and corrected in `b-group-v2.png` and `c-group-v2.png`; the originals remain only as unapproved process evidence. The corrected files are the approval candidates.

## Exact prompts and provenance

Each generated PNG has an embedded generation prompt and a sibling `<image>.png.json` sidecar. Only `../approved-group/a-group.png.json` and `b-interactive.png.json` have `approved: true`, recording Moses's explicit selection. Group A is stored separately because the single-surface phase tracker accepts exactly one approved root comp; Interactive B is its primary measured surface. Both user approvals remain intact. The exact prompts and reference roles are also saved as text:

- [A Group prompt](prompts/a-group.txt)
- [B Interactive prompt](prompts/b-interactive.txt)

Workflow context is in root `PRODUCT.md`, `.impeccable/config.json`, `.impeccable/direction-notes.md`, the surface brief, and `docs/handoffs/2026-10-24-rockstar-layout-revamp.md`. After approval Moses delegated remaining judgments; the implementation was independently reviewed. Historical tool limitations are preserved without fabricated passing receipts. See the handoff for actual deployment verification.
