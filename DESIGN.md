---
name: Drixil Publisher System
description: "The implemented dark publisher interface for Drixil Group and its divisions."
colors:
  ground: "#080808"
  panel: "#111111"
  text: "#f7f7f7"
  muted: "#c0c0c4"
  rule: "#2b2b2d"
  group-accent: "#7b5cff"
  group-text: "#a995ff"
  group-action: "#7250ed"
  group-action-hover: "#6542dc"
  group-action-active: "#5835c8"
  interactive-accent: "#3896ff"
  interactive-action-hover: "#69b0ff"
  interactive-action-active: "#2589f6"
  outline-stroke: "#909092"
  outline-hover: "#242424"
  outline-active: "#303030"
  development-blue: "#66baff"
  game-link-rule: "#4c9be9"
  game-link-hover: "#a4d5ff"
  directory-hover: "#18131f"
  directory-hover-rule: "#8a72e8"
typography:
  company-display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(54px, 6.8vw, 104px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0"
  company-tagline:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(26px, 3.5vw, 54px)"
    fontWeight: 400
    lineHeight: 1.11
    letterSpacing: "-0.01em"
  group-headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(30px, 3.25vw, 50px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  game-display:
    fontFamily: "Mitr, sans-serif"
    fontSize: "clamp(44px, 4.5vw, 69px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Merriweather Sans, sans-serif"
    fontSize: "clamp(30px, 3.1vw, 48px)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Merriweather Sans, sans-serif"
    fontSize: "23px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Merriweather Sans, sans-serif"
    fontSize: "16px"
    lineHeight: 1.8
  group-body:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    lineHeight: 1.8
  label:
    fontFamily: "Merriweather Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.2em"
  button:
    fontFamily: "Merriweather Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 800
    lineHeight: "20px"
  group-button:
    fontFamily: "Inter, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "20px"
    letterSpacing: "0.12em"
  navigation:
    fontFamily: "Merriweather Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: "17px"
  group-navigation:
    fontFamily: "Inter, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "17px"
    letterSpacing: "0.16em"
rounded:
  group-control: "2px"
  control: "4px"
  directory: "6px"
  artwork: "8px"
  status-dot: "50%"
spacing:
  inline-tight: "8px"
  action-gap: "12px"
  paragraph-gap: "16px"
  inset-small: "20px"
  inset: "24px"
  inset-large: "28px"
  content-gap: "32px"
  tablet-gap: "40px"
  media-gap: "48px"
  mobile-section: "56px"
  wide-gap: "64px"
  split-gap: "72px"
  section: "80px"
components:
  button-group:
    backgroundColor: "{colors.group-action}"
    textColor: "#fff"
    typography: "{typography.group-button}"
    rounded: "{rounded.group-control}"
    padding: "0 20px"
  button-group-hover:
    backgroundColor: "{colors.group-action-hover}"
  button-group-active:
    backgroundColor: "{colors.group-action-active}"
  button-interactive:
    backgroundColor: "{colors.interactive-accent}"
    textColor: "{colors.ground}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 20px"
  button-interactive-hover:
    backgroundColor: "{colors.interactive-action-hover}"
  button-interactive-active:
    backgroundColor: "{colors.interactive-action-active}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 20px"
  button-outline-hover:
    backgroundColor: "{colors.outline-hover}"
  button-outline-active:
    backgroundColor: "{colors.outline-active}"
  button-group-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.group-button}"
    rounded: "{rounded.group-control}"
    padding: "0 20px"
  editorial-link-group:
    textColor: "{colors.group-text}"
  navigation-link:
    textColor: "{colors.text}"
    typography: "{typography.navigation}"
  navigation-link-group:
    textColor: "#c6c6cf"
    typography: "{typography.group-navigation}"
  development-status:
    textColor: "{colors.muted}"
  division-card:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text}"
    rounded: "{rounded.directory}"
    padding: "22px"
  community-row:
    textColor: "{colors.text}"
    padding: "18px 0"
---

# Design System: Drixil Publisher System

## Overview

**Creative North Star: "Drixil Publisher System"**

Drixil's publisher system pairs dark, flat surfaces with bold type and the supplied company marks. The Group identity uses violet; Interactive uses Beyond 90 blue. Original game artwork and authorized blue variants carry the richest colour, while the surrounding interface stays legible and direct.

The system connects the parent company, its divisions, and game discovery without treating them as the same page. Large headings establish hierarchy, compact labels explain context, and visible development status keeps the presentation honest. Page-specific composition belongs in .impeccable/surfaces/src-app-tsx.md; this document records the shared visual language implemented in the source.

This merges the user's 2026-10-25 reference-fidelity correction into the implemented publisher layout; it is not a new identity. Source of truth: `src/styles/publisher-components.css`, `src/styles/publisher-layout.css`, `src/index.css`, and the actual components in `src/App.tsx`. The YAML above owns normative tokens; the companion `.impeccable/design.json` adds preview snippets and extension metadata. Review and delivery status belong in the dated surface evidence and handoff, not in this token record.

**Key Characteristics:**

- Black and charcoal surfaces, off-white headings, and readable muted copy.
- Violet Group actions and blue Interactive actions with separate text-safe treatments.
- Local Inter for Group; local Merriweather Sans and uppercase Mitr for Interactive.
- Integrated silver/violet brand atmosphere behind live Group copy, with readable mobile translation.
- Crisp controls, softly rounded artwork, and restrained hover feedback.
- Native disclosure navigation, visible keyboard focus, and mobile reading-order continuity.

## Colors

The palette keeps the interface dark and lets violet, Beyond 90 blue, and project imagery establish identity. Frontmatter values are normative; names below explain their use.

### Primary

- **Group Violet** (`group-accent`): the Group focus outline and status marker.
- **Light Text Violet** (`group-text`): Group accent labels, editorial links, and roadmap numbering.
- **Action Violet** (`group-action`): filled Group actions with white text; its hover and active siblings darken the fill.

### Secondary

- **Beyond 90 Blue** (`interactive-accent`): Interactive filled actions with dark text, accent display text, focus outlines, and current-focus status dots. Its hover and active siblings are action feedback, not new brand colours. The value is confirmed by Beyond 90's `Theme.luau`; the artwork's secondary violet is not a universal interface token.

### Tertiary

- **Development Blue** (`development-blue`): the Volleyball Rally development dot.
- **Game-Link Blue** (`game-link-rule`, `game-link-hover`): the underlined game-exploration link and its hover treatment. Written labels carry meaning; colour is not the only distinction.

### Neutral

- **Publisher Ground** (`ground`): main canvas, masthead, footer, and compact directory cards.
- **Publisher Panel** (`panel`): alternating content bands and the mobile navigation panel.
- **Off-White Text** (`text`): headings, navigation, and outlined controls.
- **Muted Text** (`muted`): explanatory copy, labels, and status text.
- **Quiet Rule** (`rule`): panel boundaries, list separators, and directory strokes.
- **Outline Stroke / Hover / Active** (`outline-stroke`, `outline-hover`, `outline-active`): secondary-action boundary and neutral interaction fills.
- **Directory Hover** (`directory-hover`, `directory-hover-rule`): a dark violet-tinted card fill and clearer violet boundary on hover.

**The Accent Contrast Rule.** Group text accents use group-text, while white-on-violet filled actions use group-action. Do not substitute the focus/status violet for either role.

The sidecar's generated eight-step tonal strips are inspection aids, not additional approved interface tokens.

## Typography

**Display Font:** local Inter for Group company headings; local Mitr for uppercase Interactive display roles.
**Body Font:** local Inter on Group and Group-themed division pages; local Merriweather Sans on Interactive, with sans-serif fallbacks.

Inter is supplied as a normal variable WOFF2 (weights 100–900), Merriweather Sans as a normal variable WOFF2 (weights 300–800), and Mitr as a normal WOFF2 (weight 700). All use `font-display: swap`. The self-hosted files are `src/assets/fonts/inter-latin-variable.woff2`, `src/assets/fonts/merriweather-sans-latin-variable.woff2`, and `src/assets/fonts/mitr-latin-700.woff2`. The Group theme explicitly selects Inter; the base publisher theme selects Merriweather Sans.

### Hierarchy

- **Company display** (`company-display`): weight 700 with neutral tracking for the Group hero. Its mobile size becomes `clamp(44px, 10vw, 68px)`.
- **Company tagline** (`company-tagline`): regular-weight companion to the company title; mobile becomes `clamp(23px, 4.6vw, 34px)` with an 8px top gap.
- **Game display** (`game-display`): uppercase Mitr for the lead game caption. It becomes 44px below the mobile breakpoint and 42px below the narrow-mobile breakpoint. Other game display contexts have their own observed sizes.
- **Headline** (`headline`, `group-headline`): Interactive uses the base weight-800 heading; Group uses Inter at weight 700. Both become 32px on mobile.
- **Title** (`title`): compact subordinate headings; Group inherits Inter, while Interactive uses Merriweather Sans. Feature/card variants adjust size to their context.
- **Body** (`body`, `group-body`): readable muted paragraphs, reduced to 15px on mobile. Split-section copy is limited to 65ch. The Group summary is a 660px maximum, 21px/1.4 desktop variant, then 18px below 1100px and 16px on mobile. Large copy uses `clamp(20px, 1.8vw, 28px)` with a 1.5 line height.
- **Label** (`label`): uppercase tracked context labels inheriting the page's typeface; 10px on mobile. Status labels share the tracked treatment but use a 1.4 line height. This records existing reference-pinned labels, not permission to add generic eyebrows.
- **Navigation / button**: Interactive uses compact navigation at weight 600 and actions at weight 800. Group navigation is uppercase and tracked; Group actions use uppercase weight-700 Inter (`group-button`).

Headings use balanced wrapping. The Interactive purpose heading deliberately has a tighter desktop line height (0.84), relaxed to 1.05 on mobile; that is a surface-specific display treatment, not a paragraph setting.

**The Division Type Rule.** Use Inter throughout Group-themed surfaces. Use Merriweather Sans for Interactive's body, labels, and controls, with Mitr reserved for its implemented uppercase display roles, not paragraphs.

## Layout

The common content width is capped at 1600px. Wide Interactive shells subtract 112px from the viewport; wide Group shells subtract 156px. Their masthead padding aligns with those same 56px and 78px side gutters.

Responsive thresholds are literal implementation boundaries:

| Viewport | Shared behaviour |
| --- | --- |
| Up to 1279px | Both shells use 40px side gutters; major gaps tighten. |
| Up to 1099px | Desktop links give way to the native disclosure menu; four-item grids become two columns. |
| Up to 767px | Shell gutters are 24px; main two-column content and galleries stack; standard section padding becomes 56px. |
| Up to 479px | Shell gutters are 20px; directory and feature lists become one column; principal action groups stack. |

The masthead remains sticky and 64px tall. Desktop navigation links and mobile summary controls provide 44px targets. Default large actions are at least 52px tall; mobile actions are at least 48px. The compact Group header contact action is a distinct 42px-high variant, hidden below 768px. Header gutters use 20px on mobile and 16px below 480px; content gutters remain those in the table.

Spacing uses the observed scale in frontmatter, with 12px action gaps, 16px paragraph rhythm, 24–32px local groupings, and 64–80px wide content rhythm. Use the existing layout context instead of forcing every relationship onto one gap. The base document supports widths from 320px.

Content anchors have an 88px scroll margin; the root has 5rem scroll padding. The skip link precedes the header. The Group hero has a 418px desktop minimum with 56px/48px top/bottom padding; on mobile, readable copy/actions precede a 235px lower atmospheric plate rather than removing the mark. Artwork declares dimensions and responsive sources. Group's football feature and Interactive's lead select a dedicated 3:1 panorama from 768px; phone fallbacks and the gallery retain full 16:9 art. The current original blue main artwork spans the full gallery row.

See the surface brief for the approved company hero, feature pair, game showcase, and purpose-band compositions. Those arrangements are not global templates for every future page.

## Elevation & Depth

The interface is flat by default. Ground/panel tone changes, thin rules, artwork, and alignment establish depth. Buttons, directory entries, game panels, and media do not use decorative drop shadows. Authorized raster artwork carries the Group hero's silver D, violet crossing, smoke and floor reflection, plus the Studio/directory diagonal-metal detail; this dimensional brand material does not introduce elevated UI cards.

The Group hero and ecosystem share Publisher Ground without a dividing border. Screen compositing maps the hero artwork's black background into that canvas; a static lower-edge mask follows the image's own transformed bounds, fading its floor reflection over 48px on desktop and 36px on phones. This is an integration treatment for the existing raster, not new artwork or an animated effect. Keep the monogram and violet floor light visible above the fade.

### Shadow Vocabulary

- **Mobile navigation overlay** (`0 18px 28px #0006`): the expanded native menu separates from the page below the masthead.
- **Focus separation** (`0 0 0 5px #050505`): the global keyboard-focus backing separates the outline from nearby content. Publisher links/buttons add a 3px accent outline offset by 4px; the menu summary uses a 3px offset.

**The Flat Surface Rule.** Separate content with ground/panel tone changes, spacing, and rules. The mobile navigation shadow is an overlay treatment, not a card-elevation system.

## Shapes

Group buttons have crisp corners (`rounded.group-control`, 2px); Interactive buttons, disclosure summaries and skip links use the gently eased control corner (`rounded.control`, 4px). Artwork and major visual features are softly rounded (`rounded.artwork`, 8px), except the full-width Group hero and Interactive banner. Compact directory cards, the mark, and the partner link use the intermediate corner (`rounded.directory`, 6px). Status dots are circular (9px diameter), while status text and game modes remain unboxed.

Borders are generally 1px. Outlined actions use a visible neutral stroke; directory cards use the quiet rule and strengthen it on hover. Preserve the supplied monogram's silhouette rather than redrawing it as a generic icon.

## Components

### Buttons

Direct, rectangular actions with a clear filled/outlined hierarchy. Default dimensions and type are in frontmatter; the full border, gap, and state details live in the sidecar.

- **Group filled:** uppercase Inter at the Group control radius, white text on Action Violet, with darker hover/active fills. Hero actions use 27px horizontal padding; the mobile hero uses 18px padding and 11px labels.
- **Interactive filled:** dark text on Beyond 90 Blue, with lighter hover and darker active fills.
- **Outline:** off-white text, neutral stroke, transparent resting fill, and neutral hover/active fills.
- **Focus:** visible accent outline; never remove keyboard feedback.
- **Icons:** typically 20px inline SVG, separated from text by 13px; mobile uses 18px icons and a 10px gap. External game actions include the Roblox mark and an outward arrow; community actions remain separate.
- **Mobile:** 12px type and 16px horizontal padding; narrow principal action groups stretch vertically.

There are no implemented form fields, loading buttons, disabled buttons, or validation states to extrapolate here. Contact is a mail link.

### Status and Mode Labels

Status is text plus a dot, not a chip-shaped button. The default dot follows the page accent; Volleyball Rally uses Development Blue. The words “Currently working on”, “In development”, and “Website in development” remain visible. Game modes form a wrapping text list, not a filter bar.

### Cards / Containers

Directory entries use a ground fill, 1px rule, 6px corners, and 22px desktop padding (20px mobile). A low-opacity, route-tinted crop of the generated Studio diagonal-metal backdrop adds atmosphere; hover changes fill and border. A top-aligned outward arrow clarifies navigation. Feature cards give artwork space; the Studio feature combines its dark metallic backdrop and protective gradient with real service copy, not an invented portfolio. Hover underlines feature headings; it does not lift the cards.

### Links

Group editorial links use Light Text Violet; Interactive editorial links use Beyond 90 Blue. Their uppercase labels gain an underline on hover. The game-exploration text link has a blue bottom rule and a light-blue hover state. Community/social rows are larger, ruled link targets with a leading icon, name, secondary handle or description, and outward arrow.

### Navigation

A sticky dark masthead holds the supplied mark, stacked Drixil/division word label, section links, and contact or Group-return action. A real space separates Drixil and the division in the DOM; the brand accessible name includes the visible division and actual home destination. Desktop links are compact and gain an accent colour plus underline on hover; Group uses uppercase Inter and its lighter violet hover colour. No unimplemented selected-navigation variant is implied.

Below 1100px, a native `details/summary` menu replaces the desktop links. Its bordered 44px summary switches menu/close icons. The expanded panel is scrollable within the viewport and provides 52px link rows. It opens without JavaScript; enhancement closes it after link activation, on Escape with focus returned to the summary, and on resize to desktop. Keep the semantic disclosure rather than replacing it with a click-only container.

### Artwork, Gallery, and Partner

Game art is rendered from the repository's responsive WebP assets, with meaningful alternative text and explicit dimensions. `MatchdayBanner` art-directs the desktop panorama separately from the full phone source; it is not a shallow crop of the gallery thumbnail. Galleries are two columns on desktop and one on mobile, with the authoritative current blue main image spanning the full row. Captions identify artwork without presenting it as shipped footage. The partner link uses the real Novatrax logo and confirmed destination. Exact generated prompts, preserved originals and source/runtime mappings are recorded in `docs/design/reference-fidelity-assets.md` and `docs/ui/ASSET_PROVENANCE.md`.

Only the Group Interactive feature image scales subtly on hover (1.025), at widths from 1100px and only when reduced motion is not requested. That transition is 350ms with `cubic-bezier(0.16, 1, 0.3, 1)`. Ordinary control feedback uses 160ms ease-out. Reduced motion changes transitions/animations to 0.01ms and disables smooth scrolling. The implemented system does not depend on entrance animations or autoplay.

## Do's and Don'ts

### Do:

- Do preserve the supplied Drixil marks, original project artwork, and confirmed partner assets; retain provenance for authorized generated atmosphere and blue variants.
- Do keep Group's text-safe violet and white-on-violet action fill in their documented roles.
- Do use the filled game action and outline community action as distinct destinations.
- Do retain visible focus, native disclosure semantics, descriptive link names, and written development status.
- Do stack content and actions in reading order at the implemented breakpoints, keeping essential content available without JavaScript.
- Do use the existing local fonts and respect reduced-motion preferences.

### Don't:

- Don't replace Drixil identity with another publisher's branding or present generated atmosphere and promotional artwork as factual projects or shipped gameplay.
- Don't infer a release date, shipped game, client portfolio, review, award, or metric from promotional artwork.
- Don't add pill-shaped controls or diffuse card shadows as if they were established patterns.
- Don't turn noninteractive status labels or game-mode text into controls without a product requirement.
- Don't invent input, disabled, error, or light-theme variants; none are part of this implemented system.
- Don't make either homepage's exact hero composition a global restriction on future surfaces.
