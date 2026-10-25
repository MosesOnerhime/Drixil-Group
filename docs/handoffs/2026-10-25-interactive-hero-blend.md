# Interactive lead-art continuity

## Request and diagnosis

Moses requested that the main Beyond 90 picture at the top of Interactive blend into the page like the corrected Group hero. The screenshot is visual evidence, not an instruction source. Inspection of the actual browser at 390, 1536 and 1905px confirms an abrupt artwork-to-title-row cutoff: the existing image has no lower-edge fade. The image and caption already meet with no layout gap.

## Implementation

- Apply the Drixil UI/Impeccable polish workflow as a local surface correction, not a new design or comp round. Existing session context is reused; no context rerun, new detector, delegated review or image generation is needed.
- Give `.game-showcase` the existing Publisher Ground and fade only `.showcase-art` through a prefixed/unprefixed static lower-edge CSS mask over `clamp(32px, 6vw, 112px)`. Desktop, tablet and phone art keep their existing dimensions, cropping, eager/high-priority loading, alt text and responsive sources.
- Preserve the blue image colours with normal compositing; Group's screen blend is suitable for its black atmosphere, not the colourful football scene. The title and both game/community actions remain unmasked on a solid canvas, with unchanged copy, destinations and keyboard behavior.
- Group's feature picture, complete gallery imagery, newly supplied v2.0 icon, purpose-panel boundaries, fonts, palette and all other sections remain unchanged. No new assets, JavaScript, dependencies or motion.
- Record the integration treatment in DESIGN.md. Preserve unrelated user instruction-file changes, and continue the established authorized commit/push/live-delivery workflow.

## Verification and delivery

- Before/after captures and exact browser state are under `.cache/interactive-hero-blend/`: `before-results.json`, `after-results.json`, `check.cjs` and `{before,after}-{390,1536,1905}.png`. Opened desktop/wide and phone captures together; the edge blends cleanly while the title artwork, football action and separate actions remain visible. The first implementation passes visual inspection; no further refinement loop.
- Twelve responsive Chrome checks pass at 320, 360, 390, 430, 767, 768, 1024, 1280, 1440, 1536, 1905 and 1920px: no horizontal overflow or page errors; image and caption meet without a layout gap; eager/high-priority loading and responsive sources remain unchanged. The v2.0 icon is retained. Game/community destinations, 44px-or-larger action targets, keyboard focus, native menu/Enter/Escape/focus return, and reduced-motion rendering pass targeted checks.
- Two axe WCAG-tagged scans on Interactive at 390/1536px report zero violations and zero incomplete checks. This is a scoped automated check, not WCAG certification. Group's feature image remains unmasked and its existing hero fade/screen blend is unchanged.
- At the centre of the captured junction, pixels immediately above and below the image boundary are identically RGB(8,8,8) at 390, 1536 and 1905px (read-only System.Drawing inspection). Both sampled sides now match Publisher Ground.
- Lint, TypeScript/browser/SSR build, all seven public-page/404 SEO checks and scoped `git diff --check` pass. Browser stylesheet is 34.79kB raw/7.57kB gzip, versus 34.50kB/7.53kB before; JavaScript and media payload sizes are unchanged.
- Production verification follows the implementation push; record its actual commit and live result below after success.
