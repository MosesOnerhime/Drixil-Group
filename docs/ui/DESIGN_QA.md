# Drixil Group Design QA Checklist

Complete this after the revamp.

## A. Identity and visual continuity

- [ ] The site still looks recognizably like Drixil Group.
- [ ] Logo and brand assets were not altered unintentionally.
- [ ] Existing strong visual patterns were preserved.
- [ ] No new aesthetic conflicts with the established brand.
- [ ] Palette usage is consistent.
- [ ] Typography feels intentional across pages.
- [ ] Spacing follows a repeatable rhythm.

## B. First impression and retention

- [ ] Homepage first viewport clearly identifies Drixil.
- [ ] A new visitor can understand what the company/group does.
- [ ] Primary CTA is understandable.
- [ ] Important content is not delayed by decorative animation.
- [ ] Hero content is not unnecessarily tall.
- [ ] The first two screenfuls establish context and credibility.

## C. Navigation

- [ ] Logo links home.
- [ ] Navigation labels are clear.
- [ ] Active/current states make sense.
- [ ] Dropdowns work with keyboard.
- [ ] Mobile menu opens/closes reliably.
- [ ] Focus returns correctly after modal mobile navigation, if used.
- [ ] Sticky nav does not hide focused or anchored content.
- [ ] Footer links work.

## D. Content and trust

- [ ] No invented corporate facts.
- [ ] No invented numbers or proof.
- [ ] Contact information is consistent.
- [ ] Claims are specific enough to understand.
- [ ] Proof is near major claims where real proof exists.
- [ ] No repetitive vague marketing sections.
- [ ] Long copy is scannable.

## E. CTAs

- [ ] Primary and secondary actions are visually distinct.
- [ ] Button labels describe the outcome.
- [ ] Major pages do not end in dead ends.
- [ ] Contact/inquiry is findable.
- [ ] Repeated generic “Learn more” links are contextualized.

## F. Components

- [ ] Buttons have all relevant states.
- [ ] Links use link semantics.
- [ ] Actions use button semantics.
- [ ] Cards have consistent padding/radii.
- [ ] Icons use a consistent system.
- [ ] No accidental duplicate component variants.
- [ ] No card-inside-card clutter.

## G. Forms

- [ ] Every field has a label.
- [ ] Appropriate autocomplete is used.
- [ ] Validation is clear.
- [ ] First invalid field is easy to find.
- [ ] User input is retained after recoverable errors.
- [ ] Loading submission prevents duplicate requests.
- [ ] Success state is clear.
- [ ] Keyboard submission works where appropriate.

## H. Responsive

- [ ] 360 px viewport checked.
- [ ] 390 px viewport checked.
- [ ] 430 px viewport checked.
- [ ] 768 px viewport checked.
- [ ] 1024 px viewport checked.
- [ ] 1440 px viewport checked.
- [ ] Wide desktop checked.
- [ ] No unintended horizontal scrolling.
- [ ] Headings do not overflow.
- [ ] CTA groups stack/wrap correctly.
- [ ] Media scales correctly.
- [ ] Navigation remains usable.
- [ ] Touch targets are comfortable.

## I. Accessibility

- [ ] Skip link works.
- [ ] Keyboard-only navigation works.
- [ ] Focus is visible.
- [ ] Focus is not hidden behind sticky UI.
- [ ] Heading order is logical.
- [ ] Landmarks are sensible.
- [ ] Icon-only buttons have accessible names.
- [ ] Images have appropriate alt behavior.
- [ ] Color is not the only status cue.
- [ ] Reduced-motion mode works.
- [ ] Browser zoom was not disabled.
- [ ] Form errors are accessible.

## J. Motion

- [ ] Motion supports rather than delays content.
- [ ] No unnecessary scroll hijacking.
- [ ] No `transition: all`.
- [ ] Reduced-motion removes nonessential effects.
- [ ] Animations do not cause visible layout shifts.

## K. Performance

- [ ] LCP element identified on major landing pages.
- [ ] LCP asset is not incorrectly lazy-loaded.
- [ ] Below-fold images are lazy-loaded where appropriate.
- [ ] Image dimensions/aspect ratios reserve layout space.
- [ ] Responsive images are used where appropriate.
- [ ] No unnecessary large video/media added.
- [ ] No unnecessary animation/UI dependency added.
- [ ] Layout shifts checked.
- [ ] Build output reviewed for obvious payload regressions.

## L. SEO

- [ ] Important pages have useful titles.
- [ ] Meta descriptions are page-specific where appropriate.
- [ ] Canonicals are correct.
- [ ] Open Graph metadata is correct.
- [ ] Social image works.
- [ ] One clear H1 per page.
- [ ] Internal links are crawlable/descriptive.
- [ ] Sitemap/robots behavior checked.
- [ ] Structured data is accurate and validated if present.
- [ ] No staging/preview URL accidentally treated as production canonical.

## M. Technical validation

- [ ] Production build passes.
- [ ] Lint passes or pre-existing failures are documented.
- [ ] Typecheck passes or pre-existing failures are documented.
- [ ] Tests pass where available.
- [ ] Final git diff reviewed.
- [ ] No accidental route/API/content deletion.
- [ ] Remaining issues are listed honestly.
