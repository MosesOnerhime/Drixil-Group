# Responsive and Accessibility Standards

Target: **WCAG 2.2 AA**.

## 1. Responsive coverage

Test at minimum:

- 360×800;
- 390×844;
- 430×932;
- 768×1024;
- 1024×768;
- 1280×800;
- 1440×900;
- wide desktop.

The design should also remain stable between breakpoints.

## 2. Mobile-first requirements

On small screens:

- no unintended horizontal overflow;
- body text remains comfortably readable;
- primary controls are easy to tap;
- navigation does not dominate the viewport;
- section spacing is reduced proportionally;
- images scale without cropping important content unintentionally;
- forms do not require horizontal scrolling;
- dialogs fit the viewport;
- CTAs wrap or stack intentionally;
- tables use a meaningful responsive strategy if present.

## 3. Text

Do not rely on fixed pixel heights for containers with text.

Support:

- browser text zoom;
- longer text;
- localization where relevant;
- user font settings.

Do not disable page zoom.

## 4. Semantic structure

Pages should use:

- `header`;
- `nav`;
- `main`;
- `section` when it has a meaningful accessible label/heading;
- `footer`;
- real heading hierarchy;
- lists for lists;
- native buttons/links/forms.

Use ARIA only when native semantics are insufficient.

## 5. Keyboard

A keyboard-only visitor must be able to:

- reach navigation;
- open/close menus;
- follow links;
- activate buttons;
- use forms;
- operate dialogs/accordions;
- reach the footer;
- see where focus is.

Tab order should follow visual/logical order.

## 6. Focus

Every focusable element has a visible focus indication.

Sticky headers, banners, and overlays must not completely cover focused elements.

Add `scroll-margin-top` where anchored sections would otherwise hide behind sticky navigation.

## 7. Skip link

Provide a “Skip to main content” link for pages with persistent navigation.

It may be visually hidden until focused.

## 8. Target size

WCAG 2.2 AA includes a 24×24 CSS px minimum target-size criterion with exceptions.

For Drixil, aim higher for important controls, especially on mobile:

- approximately 44×44 CSS px for primary buttons and icon controls where practical.

## 9. Contrast

Ensure sufficient contrast for:

- body text;
- small labels;
- nav links;
- buttons;
- borders used to communicate state;
- focus indicators;
- form errors.

Do not rely on opacity alone to create disabled or secondary text if it becomes unreadable.

## 10. Color independence

Do not communicate:

- active state;
- error;
- success;
- category;
- selection;

with color alone.

Use text, icons, shape, underline, position, or another redundant cue.

## 11. Images

Informative images require useful alt text.

Decorative images should usually use empty alt text.

Do not duplicate nearby captions verbatim in alt text.

## 12. Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Reduced-motion mode should:

- remove nonessential parallax;
- remove large entrance transitions;
- disable smooth scrolling when appropriate;
- preserve all content and functionality.

## 13. Forms

Each control requires an accessible name.

Errors should:

- be visible;
- be programmatically associated when possible;
- explain recovery;
- not disappear before the visitor can read them.

Required status must be understandable without color alone.

## 14. Dialogs and drawers

If used:

- move focus into the dialog;
- constrain focus while modal;
- provide an accessible name;
- close with an obvious button;
- support Escape when appropriate;
- return focus to the opener.

## 15. Links

Link text should make sense in context.

Repeated `Learn more` links must have distinguishable accessible names or be rewritten to be descriptive.

## 16. Hover content

Anything important shown on hover must also be available through keyboard/touch.

Do not create hover-only navigation.

## 17. QA

Automated accessibility tools are useful but insufficient.

Perform manual checks for:

- keyboard;
- focus;
- zoom;
- reduced motion;
- mobile touch;
- reading order;
- form recovery.
