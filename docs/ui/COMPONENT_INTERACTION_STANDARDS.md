# Component and Interaction Standards

## 1. Links and buttons

Use:

- links for navigation;
- buttons for actions.

Never make a `div` or generic text element behave like a button when a native element works.

### Button hierarchy

Use a small, consistent set:

- primary;
- secondary;
- tertiary/text;
- icon button where justified.

All must define:

- default;
- hover;
- active;
- focus-visible;
- disabled;
- loading where applicable.

Loading buttons should retain the original action label alongside or with an accessible loading indicator.

## 2. Navigation

Desktop and mobile navigation must support keyboard interaction.

Dropdowns:

- have predictable open/close behavior;
- are reachable with keyboard;
- do not close unexpectedly when moving between trigger and content;
- restore logical focus;
- can be dismissed with Escape where appropriate.

Mobile menu:

- has a named open/close control;
- traps focus if implemented as a modal/dialog;
- restores focus on close;
- prevents background interaction if modal;
- does not rely on tiny close icons.

## 3. Focus

Use visible `:focus-visible` states.

A focus ring should be:

- clearly visible;
- not clipped;
- not hidden under sticky headers;
- sufficiently contrasting with surrounding colors.

Never remove focus outlines without a replacement.

## 4. Hit targets

Important mobile controls should aim for approximately 44×44 CSS px.

At minimum, avoid tightly packed tiny targets.

The visual icon may be smaller than the hit area.

## 5. Forms

Every field has:

- visible label or equivalent programmatic label;
- appropriate `name`;
- relevant `autocomplete`;
- correct `type`/`inputmode`;
- error association;
- help text where needed.

Do not use placeholder text as the only label.

Validation:

- occurs at a useful time;
- does not aggressively interrupt normal typing;
- explains how to recover;
- focuses the first invalid field after submit when appropriate.

## 6. Accordions

Use accordions only when content benefits from progressive disclosure.

- trigger is a button;
- expanded state is programmatically exposed;
- content is keyboard accessible;
- do not hide essential page context inside closed panels by default.

## 7. Carousels

Avoid carousels for essential marketing information.

If an existing carousel is retained:

- allow manual control;
- pause/stop auto-advance;
- provide accessible controls;
- do not shift layout;
- do not require waiting to discover important information;
- respect reduced motion.

Static grids are often better for business/service navigation.

## 8. Cards

Cards should have one obvious interaction model.

If the whole card is clickable, avoid nested competing links unless implemented carefully.

Do not create dead zones where the card looks clickable but only the title works.

## 9. Icons

Use one established icon family when possible.

- decorative icons: hidden from assistive tech;
- informative icon-only controls: accessible label required;
- do not use icons as the only signal for unfamiliar actions;
- maintain consistent stroke/weight sizing.

## 10. Tooltips

Use sparingly.

Inline explanations are preferable for important information.

Tooltips must not contain essential content that mobile/touch users cannot access.

## 11. Sticky UI

Sticky headers and banners must:

- leave enough viewport space on mobile;
- not obscure anchor destinations;
- not obscure keyboard focus;
- account for safe areas where relevant.

## 12. Motion

Use explicit animated properties.

Preferred:

- `opacity`;
- `transform`.

Avoid animating layout properties unnecessarily.

Never use:

```css
transition: all;
```

## 13. Media controls

Video or audio:

- does not autoplay with sound;
- provides controls when needed;
- supports keyboard use;
- has captions/transcript when meaningful spoken content is present;
- has a poster frame to avoid blank loading areas.

## 14. Loading and skeletons

Skeletons should match final geometry to avoid CLS.

Avoid flashing a spinner for extremely short loads.

Do not block the whole page for a local component request.

## 15. Empty and error states

No dead ends.

Every error or empty state should provide:

- what happened;
- what the visitor can do next.

Avoid generic `Something went wrong` without recovery when a more specific message is possible.
