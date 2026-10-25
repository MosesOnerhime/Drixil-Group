# Website asset provenance

Recorded for the 2026-10-25 publisher-layout revamp. This update reuses the supplied company and game artwork; it adds no stock photographs, invented portfolio pieces, or regenerated game scenes.

| Website asset | Source / status | Use and treatment |
| --- | --- | --- |
| `public/media/drixil-mark-white.webp` | Existing compact derivative of the supplied Drixil identity, retained unchanged. Original logo variants remain in `src/assets/brand/`. | Navigation/footer mark with reserved dimensions, clear space and rounded container. |
| `src/assets/brand/drixil-metallic.jpeg` | Supplied silver/violet Drixil logo, retained unchanged. | Parent hero uses a CSS crop retaining the complete monogram; Studio's directory entry uses a subdued decorative copy. Division pages show the complete logo. |
| `public/media/beyond-90-{640,1254}.webp` | Existing derivatives of `src/assets/beyond-90-icon.png`. | Game icon in Group current work and Interactive project detail. |
| `public/media/beyond-90-matchday-{768,1672}.webp` | Existing derivatives of `src/assets/beyond-90-thumbnail-1.png`. | Publisher banner, company feature and full landscape gallery. Desktop banner crops intentionally; phones and gallery preserve the full image. |
| `public/media/beyond-90-broadcast-{768,1672}.webp` | Existing derivatives of `src/assets/beyond-90-thumbnail-3.png`. | Full landscape gallery. |
| `public/media/volleyball-rally-icon-{640,1254}.webp` | Existing user-supplied Volleyball Rally icon derivatives. | Game detail icon, retained unchanged. |
| `public/media/volleyball-rally-spike-{768,1672}.webp` | Source `2.png` in the supplied game thumbnail directory, as verified in the [2026-10-16 handoff](../handoffs/2026-10-16-volleyball-thumbnails.md). | Compact next-project preview; full composition on phones. |
| `public/media/volleyball-rally-block-{768,1672}.webp` | Supplied thumbnail `1.png`; same verified media handoff. | Full landscape gallery: At the net. |
| `public/media/volleyball-rally-teamwork-{768,1672}.webp` | Supplied thumbnail `3.png`; same verified media handoff. | Full landscape gallery: Better together. |
| `public/media/volleyball-rally-dive-{768,1672}.webp` | Supplied thumbnail `4.png`; same verified media handoff. | Full landscape gallery: Keep it alive. |
| `public/media/volleyball-rally-receive-{768,1672}.webp` | Supplied thumbnail `5.png`; same verified media handoff. | Full landscape gallery: Read the rally. |
| `public/media/novatrax-logo-{800,1600}.webp` | Existing optimized derivatives of the supplied `public/media/novatrax logo.png`; see the [partner handoff](../handoffs/2026-10-18-novatrax-partner.md). | Linked partner attribution; proportions and white identity retained. |
| `public/og.png`, `public/favicon.jpeg` | Existing site/social identity assets; retained unchanged. See the [search-readiness handoff](../handoffs/2026-10-18-search-readiness.md). | Social metadata and browser icon. |

The supplied Volleyball Rally source directory was `D:/repos/Drixil Interactive/Volleyball-Rally/assets/media/thumbnails`. Source files are never overwritten by this website work. Existing optimized derivatives are used rather than importing the large game repository into the website.

## Development-only visual references

Approved Group A and Interactive B mockups live under `.impeccable/approved-group/` and `.impeccable/mocks/`. They were generated with the built-in image tool from the existing identity and project assets. Exact prompts, input roles, dates and the user's explicit selection are recorded in their PNG metadata and JSON sidecars. Unselected drafts and derived inspection/QA files are local process evidence, not website content.

Generated mockups changed some game-art geometry. Production uses the factual originals, not crops of those mockups. The font matcher supplied reference measurements and proof sheets; final browser captures and independent review assess the implemented layout. No numeric fidelity score is represented as a human approval.

## Fonts and icons

Mitr Bold and variable Merriweather Sans Latin WOFF2 files are self-hosted in `src/assets/fonts/`, alongside their original SIL OFL texts and source notes. Icons use the existing Lucide dependency. The compact Roblox pictogram is a simple inline SVG identifying the linked platform; it is not a redrawn game or company logo.
