# Website asset provenance

The first table is a historical record of the initial 2026-10-25 publisher-layout revamp, not the current source selection. The later reference-fidelity correction explicitly authorizes generated brand atmosphere and blue game-art variants; the current source/runtime mapping is recorded in the correction section below. No stock photographs, invented portfolio projects, or claims of shipped gameplay are added.

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

Generated mockups changed some game-art geometry. The initial production used factual originals rather than crops of those mockups. The later authorized production images below are separately generated assets derived from the supplied identity/art and composition references; no website screenshot is shipped as a flattened page. The font matcher supplied reference measurements and proof sheets; final browser captures and independent review assess the implemented layout. No numeric fidelity score is represented as a human approval.

## Fonts and icons

Inter, Mitr Bold and variable Merriweather Sans Latin WOFF2 files are self-hosted in `src/assets/fonts/`, alongside their original SIL OFL texts and source notes. Group uses Inter; Interactive retains Merriweather Sans and Mitr. Icons use the existing Lucide dependency. The compact Roblox pictogram is a simple inline SVG identifying the linked platform; it is not a redrawn game or company logo.

## Reference-fidelity and blue identity correction (2026-10-25)

The user supplied Group A again and explicitly authorized image generation. This replaces the earlier restriction on generated atmosphere/colour variants, not the requirement to preserve identity and facts. Exact prompts, input roles, selected outputs and stored source paths are in [reference-fidelity-assets.md](../design/reference-fidelity-assets.md).

| Preserved production source | Runtime asset | Origin and current use |
| --- | --- | --- |
| `src/assets/brand/drixil-hero-v2.png` | `public/media/drixil-hero-v2-{1080,1536,2172}.webp` | Built-in image generation from approved Group A composition and original metallic D identity. Text-free continuous black/silver/violet environment, smoke and floor reflection; live copy/controls are HTML. Full-width desktop atmosphere and the lower phone plate replace the old cropped JPEG hero. |
| `src/assets/brand/drixil-studio-v2.png` | `public/media/drixil-studio-v2-960.webp` | Built-in image generation from the approved Studio backdrop and original metallic mark. Dark diagonal metal and violet lighting behind actual service copy, not a portfolio piece. Also supplies low-opacity, route-tinted directory backgrounds. |
| `src/assets/beyond-90-matchday-blue-v2.png` | `public/media/beyond-90-matchday-blue-v2-{768,1672}.webp` | Built-in colour update of original `src/assets/beyond-90-thumbnail-1.png`, with the current main thumbnail as palette reference. Complete 16:9 source used in the gallery and as both banners' phone fallback; no longer the desktop shallow-banner source. Original wording and scene remain recognizable; originals are preserved. |
| `src/assets/beyond-90-panorama-blue-v3.png` | `public/media/beyond-90-panorama-blue-v3-{960,1536,2172}.webp` | Reviewer-requested, built-in 3:1 recreation of the blue matchday composition. Group A and Interactive B guide focal scale only. Smaller complete BEYOND/90, visible ball, pitch and shooting action fit the shallow desktop slots. `MatchdayBanner` selects it at widths from 768px for the Group feature and Interactive lead; it is not substituted into the full gallery. |
| `src/assets/beyond-90-broadcast-blue-v2.png` | `public/media/beyond-90-broadcast-blue-v2-{768,1672}.webp` | Built-in colour update of original `src/assets/beyond-90-thumbnail-3.png`. Existing complete broadcast gallery retained with blue branding. |
| `src/assets/beyond-90-main-blue.png` | `public/media/beyond-90-main-blue-{768,1672}.webp` | Byte-preserved copy of current original `D:/repos/Drixil Interactive/Beyond-90/assets/media/thumbnail main.png`. Full composition spans the main gallery row and supplies Interactive social preview. Not generated and not the desktop lead-banner source. |
| `src/assets/beyond-90-icon-v2.png` | `public/media/beyond-90-icon-v2-{640,1254}.webp` | Byte-preserved copy of the user's explicitly selected `D:/repos/Drixil Interactive/Beyond-90/assets/media/icon v2.0.png`. Replaces the earlier `icon.png` selection in Group current-work and Interactive detail; older sources/derivatives remain archived and are not referenced by page content. Proportional format conversion only. |
| Official Google Fonts Inter normal variable | `src/assets/fonts/inter-latin-variable.woff2` | Latin-subset with fontTools, self-hosted for Group reference typography. SIL OFL retained as `Inter-OFL.txt`. Interactive's Mitr/Merriweather pairing remains. |

All old supplied artwork is retained, but old lime Beyond 90 derivatives are no longer referenced by page content or metadata. Generated source PNGs remain in `src/assets/` and are not imported into the browser bundle. Runtime WebP files have exact-prompt/origin sidecars; generated PNGs embed exact prompts. Production assets are proportionally resized and compressed with FFmpeg. No game source file was modified.

Beyond 90's `Theme.luau` confirms RGB (56, 150, 255), used as the Interactive interaction blue (`#3896ff`). Its secondary violet (`#8254f4`) is present in artwork, not promoted to a universal UI token. The original current main image and icon remain distinct from the generated palette updates and panorama.

At this documentation merge, the fresh finish review remains **fix**, pending re-verification of the panorama, brand accessible names and these records. The original review and single truncated detector summary remain in `.impeccable/review/reference-fidelity-2026-10-25/`; the failed native phase state is archived unchanged under `.impeccable/archive/publisher-2026-10-25/`. Provenance is not a new ship, pixel-perfect or clean-detector certificate. Final QA/review/deployment evidence belongs in the dated handoff.
