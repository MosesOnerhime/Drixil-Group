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
  interactive-accent: "#d6ff4b"
  interactive-action-hover: "#e4ff83"
  interactive-action-active: "#c4ec36"
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
    fontFamily: "Merriweather Sans, sans-serif"
    fontSize: "clamp(54px, 6.5vw, 100px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.04em"
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
  navigation:
    fontFamily: "Merriweather Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: "17px"
rounded:
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
    typography: "{typography.button}"
    rounded: "{rounded.control}"
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
  editorial-link-group:
    textColor: "{colors.group-text}"
  navigation-link:
    textColor: "{colors.text}"
    typography: "{typography.navigation}"
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

Drixil's publisher system pairs dark, flat surfaces with bold type and the supplied company marks. The Group identity uses violet; Interactive uses volt. Real game artwork carries the richest colour, while the surrounding interface stays legible and direct.

The system connects the parent company, its divisions, and game discovery without treating them as the same page. Large headings establish hierarchy, compact labels explain context, and visible development status keeps the presentation honest. Page-specific composition belongs in .impeccable/surfaces/src-app-tsx.md; this document records the shared visual language implemented in the source.

This is the implemented replacement publisher layout, not the superseded evolution-only direction. Source of truth: `src/styles/publisher-components.css`, `src/styles/publisher-layout.css`, `src/index.css`, and the actual components in `src/App.tsx`. The YAML above owns normative tokens; the companion `.impeccable/design.json` adds preview snippets and extension metadata.

**Key Characteristics:**

- Black and charcoal surfaces, off-white headings, and readable muted copy.
- Violet Group actions and volt Interactive actions with separate text-safe treatments.
- Local Merriweather Sans for the interface; local Mitr for uppercase game display type.
- Crisp controls, softly rounded artwork, and restrained hover feedback.
- Native disclosure navigation, visible keyboard focus, and mobile reading-order continuity.

## Colors

The palette keeps the interface dark and lets violet, volt, and real project imagery establish identity. Frontmatter values are normative; names below explain their use.

### Primary

- **Group Violet** (`group-accent`): the Group focus outline and status marker.
- **Light Text Violet** (`group-text`): Group accent labels, editorial links, and roadmap numbering.
- **Action Violet** (`group-action`): filled Group actions with white text; its hover and active siblings darken the fill.

### Secondary

- **Interactive Volt** (`interactive-accent`): Interactive filled actions, accent display text, focus outlines, and current-focus status dots. Its hover and active siblings are action feedback, not new brand colours.

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

**Display Font:** local Merriweather Sans for company headings; local Mitr for uppercase Interactive display roles.
**Body Font:** local Merriweather Sans, with sans-serif fallback.

Merriweather Sans is supplied as a normal variable WOFF2 (weights 300–800); Mitr is a normal WOFF2 (weight 700). Both use `font-display: swap`. The files are `src/assets/fonts/merriweather-sans-latin-variable.woff2` and `src/assets/fonts/mitr-latin-700.woff2`. The publisher wrapper overrides the root's Inter/system fallback; do not mistake the root fallback for the publisher's design face.

### Hierarchy

- **Company display** (`company-display`): weight 800, tight tracking, for the Group masthead. Its mobile size becomes `clamp(44px, 10vw, 68px)`.
- **Game display** (`game-display`): uppercase Mitr for the lead game caption. It becomes 44px below the mobile breakpoint and 42px below the narrow-mobile breakpoint. Other game display contexts have their own observed sizes.
- **Headline** (`headline`): responsive section headings; 32px on mobile.
- **Title** (`title`): compact subordinate headings; feature/card variants adjust size to their context.
- **Body** (`body`): readable muted paragraphs, reduced to 15px on mobile. Split-section copy is limited to 65ch; the Group summary is limited to 660px. Large copy uses `clamp(20px, 1.8vw, 28px)` with a 1.5 line height.
- **Label** (`label`): uppercase tracked context labels; 10px on mobile. Status labels share the tracked treatment but use a 1.4 line height.
- **Navigation / button**: compact navigation at weight 600; filled and outlined actions at weight 800.

Headings use balanced wrapping. The Interactive purpose heading deliberately has a tighter desktop line height (0.84), relaxed to 1.05 on mobile; that is a surface-specific display treatment, not a paragraph setting.

**The Two Faces Rule.** Use Merriweather Sans for company headings, body copy, labels, and controls. Use Mitr for the implemented uppercase Interactive display roles, not for paragraphs.

## Layout

The common content width is capped at 1600px. Wide Interactive shells subtract 112px from the viewport; wide Group shells subtract 156px. Their masthead padding aligns with those same 56px and 78px side gutters.

Responsive thresholds are literal implementation boundaries:

| Viewport | Shared behaviour |
| --- | --- |
| Up to 1279px | Both shells use 40px side gutters; major gaps tighten. |
| Up to 1099px | Desktop links give way to the native disclosure menu; four-item grids become two columns. |
| Up to 767px | Shell gutters are 24px; main two-column content and galleries stack; standard section padding becomes 56px. |
| Up to 479px | Shell gutters are 20px; directory and feature lists become one column; principal action groups stack. |

The masthead remains sticky and 64px tall. Desktop navigation links and mobile summary controls provide 44px targets. Default large actions are at least 52px tall; mobile actions are at least 48px. The compact Group header contact action is a distinct 40px-high variant, hidden below 768px.

Spacing uses the observed scale in frontmatter, with 12px action gaps, 16px paragraph rhythm, 24–32px local groupings, and 64–80px wide content rhythm. Use the existing layout context instead of forcing every relationship onto one gap. The base document supports widths from 320px.

Content anchors have an 88px scroll margin; the root has 5rem scroll padding. The skip link precedes the header. Mobile keeps essential content and destinations, but omits the decorative metallic hero mark. Real artwork declares dimensions and responsive sources; mobile lead imagery returns to its full 1672:941 aspect ratio rather than retaining a desktop crop.

See the surface brief for the approved company hero, feature pair, game showcase, and purpose-band compositions. Those arrangements are not global templates for every future page.

## Elevation & Depth

The site is flat by default. Ground/panel tone changes, thin rules, artwork, and alignment establish depth. Buttons, directory entries, game panels, and media do not use decorative drop shadows. The low-opacity metallic mark in the Studio feature is an existing image treatment, not a new surface texture.

### Shadow Vocabulary

- **Mobile navigation overlay** (`0 18px 28px #0006`): the expanded native menu separates from the page below the masthead.
- **Focus separation** (`0 0 0 5px #050505`): the global keyboard-focus backing separates the outline from nearby content. Publisher links/buttons add a 3px accent outline offset by 4px; the menu summary uses a 3px offset.

**The Flat Surface Rule.** Separate content with ground/panel tone changes, spacing, and rules. The mobile navigation shadow is an overlay treatment, not a card-elevation system.

## Shapes

Controls and skip links have crisp, gently eased corners (`rounded.control`, 4px). Artwork and major visual features are softly rounded (`rounded.artwork`, 8px). Compact directory cards, the mark, and the partner link use the intermediate corner (`rounded.directory`, 6px). Status dots are circular (9px diameter), while status text and game modes remain unboxed.

Borders are generally 1px. Outlined actions use a visible neutral stroke; directory cards use the quiet rule and strengthen it on hover. Preserve the supplied monogram's silhouette rather than redrawing it as a generic icon.

## Components

### Buttons

Direct, rectangular actions with a clear filled/outlined hierarchy. Default dimensions and type are in frontmatter; the full border, gap, and state details live in the sidecar.

- **Group filled:** white text on Action Violet, with darker hover/active fills.
- **Interactive filled:** dark text on Interactive Volt, with lighter hover and darker active fills.
- **Outline:** off-white text, neutral stroke, transparent resting fill, and neutral hover/active fills.
- **Focus:** visible accent outline; never remove keyboard feedback.
- **Icons:** typically 20px inline SVG, separated from text by 13px; mobile uses 18px icons and a 10px gap. External game actions include the Roblox mark and an outward arrow; community actions remain separate.
- **Mobile:** 12px type and 16px horizontal padding; narrow principal action groups stretch vertically.

There are no implemented form fields, loading buttons, disabled buttons, or validation states to extrapolate here. Contact is a mail link.

### Status and Mode Labels

Status is text plus a dot, not a chip-shaped button. The default dot follows the page accent; Volleyball Rally uses Development Blue. The words “Currently working on”, “In development”, and “Website in development” remain visible. Game modes form a wrapping text list, not a filter bar.

### Cards / Containers

Directory entries use a ground fill, 1px rule, 6px corners, and 22px desktop padding (20px mobile). Hover changes fill and border. A top-aligned outward arrow clarifies navigation. Feature cards instead give real artwork space; the Studio feature combines the supplied metallic mark at low opacity with real service copy. Hover underlines feature headings; it does not lift the cards.

### Links

Group editorial links use Light Text Violet; Interactive editorial links use volt. Their uppercase labels gain an underline on hover. The game-exploration text link has a blue bottom rule and a light-blue hover state. Community/social rows are larger, ruled link targets with a leading icon, name, secondary handle or description, and outward arrow.

### Navigation

A sticky dark masthead holds the supplied mark, stacked Drixil/division word label, section links, and contact or Group-return action. Desktop links are compact and gain an accent colour plus underline on hover; no unimplemented selected-navigation variant is implied.

Below 1100px, a native `details/summary` menu replaces the desktop links. Its bordered 44px summary switches menu/close icons. The expanded panel is scrollable within the viewport and provides 52px link rows. It opens without JavaScript; enhancement closes it after link activation, on Escape with focus returned to the summary, and on resize to desktop. Keep the semantic disclosure rather than replacing it with a click-only container.

### Artwork, Gallery, and Partner

Game art is rendered from the repository's responsive WebP assets, with meaningful alternative text and explicit dimensions. Galleries are two columns on desktop and one on mobile; captions identify artwork without presenting it as shipped footage. The partner link uses the real Novatrax logo and confirmed destination.

Only the Group Interactive feature image scales subtly on hover (1.025), at widths from 1100px and only when reduced motion is not requested. That transition is 350ms with `cubic-bezier(0.16, 1, 0.3, 1)`. Ordinary control feedback uses 160ms ease-out. Reduced motion changes transitions/animations to 0.01ms and disables smooth scrolling. The implemented system does not depend on entrance animations or autoplay.

## Do's and Don'ts

### Do:

- Do preserve the supplied Drixil marks, real project artwork, and confirmed partner assets.
- Do keep Group's text-safe violet and white-on-violet action fill in their documented roles.
- Do use the filled game action and outline community action as distinct destinations.
- Do retain visible focus, native disclosure semantics, descriptive link names, and written development status.
- Do stack content and actions in reading order at the implemented breakpoints, keeping essential content available without JavaScript.
- Do use the existing local fonts and respect reduced-motion preferences.

### Don't:

- Don't replace Drixil identity or game art with another publisher's branding or invented imagery.
- Don't infer a release date, shipped game, client portfolio, review, award, or metric from promotional artwork.
- Don't add pill-shaped controls or diffuse card shadows as if they were established patterns.
- Don't turn noninteractive status labels or game-mode text into controls without a product requirement.
- Don't invent input, disabled, error, or light-theme variants; none are part of this implemented system.
- Don't make either homepage's exact hero composition a global restriction on future surfaces.
