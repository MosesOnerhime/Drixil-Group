# Reference-fidelity production artwork

Created on 2026-10-25 with the built-in image-generation tool, not the API/CLI fallback. Moses explicitly authorized creation of the Group hero and recreation of older Beyond 90 artwork in blue. These are promotional/brand visuals, not evidence of shipped gameplay or a Studio client portfolio.

All original inputs remain unmodified. Source PNGs are retained under `src/assets/`; runtime files are optimised WebP derivatives under `public/media/`. FFmpeg is used only for format conversion and proportional resizing. The approved homepage is a composition reference, not a rasterised website: text, controls, navigation and links remain semantic HTML.

## Group hero

Inputs: Approved Group A screenshot (composition) and `src/assets/brand/drixil-metallic.jpeg` (mark identity).

Saved files: `src/assets/brand/drixil-hero-v2.png`; `/media/drixil-hero-v2-{1080,1536,2172}.webp`.

Exact prompt:

```text
Use case: compositing. Asset type: production website hero background, not a UI mockup. Input image 1 is the approved Drixil Group homepage reference: use ONLY its hero environment (the band below the navigation and above Ecosystem) as the exact composition and atmosphere target. Input image 2 is the authoritative Drixil metallic logo: preserve its exact custom D silhouette and diagonal central star, do not redesign it. Create a clean panoramic background plate matching the reference hero: nearly black left 57% completely empty for live HTML text; on the right a front-facing large brushed silver metallic D emblem, a vivid violet-white star at the exact center, subtle purple smoke around its lower half, a thin violet horizontal light line at the floor, a soft realistic purple reflection on a dark polished concrete floor. The D occupies approximately x64%-86%, y12%-85% of the canvas, matching the screenshot. Whole scene is one seamless black environment: no rectangular logo tile, no border, no vignette edge abruptly cutting off the floor, no wordmark. Rich realistic fine silver texture and violet illumination, almost black elsewhere, tasteful restrained cinematic atmosphere. Output a wide panoramic banner, ideally 3072x840, suitable for the full-width 1536x420 hero. Preserve the emblem orientation and proportions from both references. No text anywhere: remove DRIXIL letters, navigation, buttons, headings and every other UI element; only the D emblem is allowed. Do not include a screenshot frame or website layout.
```

## Matchday blue variant

Inputs: `src/assets/beyond-90-thumbnail-1.png` (edit target); Beyond-90 `assets/media/thumbnail main.png` (blue palette reference).

Saved files: `src/assets/beyond-90-matchday-blue-v2.png`; `/media/beyond-90-matchday-blue-v2-{768,1672}.webp`.

Exact prompt:

```text
Use case: style-transfer. Asset type: official website promotional thumbnail colour update. Image 1 is the edit target: the original Beyond 90 matchday football artwork. Image 2 is the authoritative current blue brand reference from the game's repository, NOT a composition replacement. Change ONLY Image 1's old lime/volt-yellow brand accents to the electric blue/cyan brand treatment in Image 2 (primary #3896ff, luminous cyan-blue highlights, restrained violet secondary accents). Keep Image 1's exact wide 16:9 framing and composition: huge BEYOND lettering top centre, brush-script 90 beneath, goalkeeper foreground left, airborne black-kit player right, all other footballers and football positions, stadium, natural green grass, bottom information strip, and the exact existing words. All lime 90 numerals, kit trim, advertising branding, brand marks, stripe details and bottom-strip symbols must become blue/cyan; the blue goalkeeper kit can remain. Preserve white BEYOND, readable blue 90, all characters' skin and hair, black-and-white kit fabric, lighting, pitch and camera viewpoint. Keep title and 90 at the same positions and sizes so the artwork fits the existing website crop. No extra text, no added logos, no reshuffling characters, no new scene, no yellow or lime brand accents. Output a high-quality landscape thumbnail.
```

## Broadcast blue variant

Inputs: `src/assets/beyond-90-thumbnail-3.png` (edit target); Beyond-90 `assets/media/thumbnail main.png` (blue palette reference).

Saved files: `src/assets/beyond-90-broadcast-blue-v2.png`; `/media/beyond-90-broadcast-blue-v2-{768,1672}.webp`.

Exact prompt:

```text
Use case: style-transfer. Image 1 is the edit target, Beyond 90's broadcast-camera promotional artwork. Image 2 is the current official blue brand reference. Change ONLY the lime/yellow brand accents in Image 1 to the reference's electric blue/cyan (#3896ff, brighter cyan highlights, restrained violet edging). Keep EXACTLY the original 16:9 framing, stadium, football pitch green, camera angle, goal positions, players, pass-arrow paths, graphic layout and all lettering. White BROADCAST stays white; CAMERA becomes bright electric blue; the top-left BEYOND 90 logo's 90 becomes blue; branding stripes, advertising and players' target circles/passing arrows become blue. Preserve black panels, white text, natural grass and skin colours. No lime/yellow brand details, no new text, no new objects. A colour refresh, not a new composition. High-quality production website gallery artwork.
```

## Studio backdrop

Inputs: Approved Group A screenshot (Studio card composition) and `src/assets/brand/drixil-metallic.jpeg` (material identity).

Saved files: `src/assets/brand/drixil-studio-v2.png`; `/media/drixil-studio-v2-960.webp`.

Exact prompt:

```text
Use case: compositing. Asset type: production background image for the Drixil Studio feature card. Input 1 is the approved homepage: reproduce ONLY the dark purple metallic abstract backdrop behind the Drixil Studio card at lower right. Input 2 is the authoritative Drixil metallic logo. Create a clean 3:2 landscape plate: almost-black left half reserved for live HTML text, a huge cropped dark brushed-metal diagonal cross from the centre of the D logo fills the right half, a tiny bright violet light at its crossing around x76% y50%, restrained purple rim highlights, black-purple atmospheric background. Match the reference Studio card's refined angular metallic material, very dark purple and black, not the whole D standing on the floor, not a separate logo tile. No lettering, no DRIXIL wordmark, no navigation, buttons, headings, website frames, UI or borders. This is only a backdrop for real HTML text. Keep foreground text space very dark and empty.
```

## Original blue game artwork

`src/assets/beyond-90-main-blue.png` is a byte-preserved copy of `D:/repos/Drixil Interactive/Beyond-90/assets/media/thumbnail main.png`, not generated here. It supplies `/media/beyond-90-main-blue-{768,1672}.webp` for the full-width main gallery artwork and social preview. The lead desktop banner instead uses the purpose-built panorama; phone banners use the complete16:9 blue matchday artwork.

`src/assets/beyond-90-current-icon.png` is a byte-preserved copy of that repository's `assets/media/icon.png`. Its blue stadium setting and red/black football kit are original content, not a new palette decision. Runtime variants: `/media/beyond-90-current-icon-{640,1254}.webp`.

## Reviewer-requested panoramic banner

The fresh reviewer found a material desktop crop mismatch: covering a 16:9 source in a shallow slot hid the ball and pitch. A purpose-built blue panorama replaces only the desktop banner source on Group and Interactive. Phones and the full gallery retain complete 16:9 artwork. This is an explicitly authorized recreation, not a claim of shipped gameplay.

Saved source: `src/assets/beyond-90-panorama-blue-v3.png`. Runtime: `/media/beyond-90-panorama-blue-v3-{960,1536,2172}.webp`. Built-in generation, not CLI/API. Input1 is the blue 16:9 matchday edit target; input2 approved Interactive B and input3 approved Group A provide only composition/focal-scale references. The selected output was inspected: complete ball, pitch strip, smaller complete BEYOND/90, and airborne shooter's boot/action fit the shallow scene. Original wide artwork remains in gallery.

Exact prompt:

```text
Use case: compositing. Asset type: very wide Beyond 90 promotional website BANNER, not a screenshot. Image 1 is the edit target and character/blue identity source: Beyond 90 blue matchday art. Image 2 is the approved Interactive B homepage: use ONLY its top stadium banner as the EXACT composition/focal scale reference, not its navigation or any website UI. Image 3 is the approved Group A homepage: its Interactive image demonstrates the same shallow panorama crop. Recompose Image 1 into a panoramic 3:1 landscape banner (ideally 2172x724) that displays the COMPLETE key football action inside the inner 85% height, including the ball and strip of green pitch. Match Image 2's relative sizes: teal goalkeeper cropped in foreground far left (x0-28%); smaller large silver-white BEYOND at x28-55%, y8-34%, blue brush-script 90 beneath at x34-48%, y34-66%; black-haired black-kit shooter airborne at right x58-86%, with whole shooting boot and kicked turf visible by y88%; football around x49%,y80%, entirely visible; smaller team players through centre around y60-90%; white stadium floodlights at upper left/right and packed blue-lit stadium behind. The logo MUST NOT fill the frame height. A clear football plus pitch action area MUST be visible below the 90 lettering, as in Image 2. Preserve characters' Roblox body style, black hair, kit, skin, teal goalkeeper and scene identity from Image 1. ALL branding, black kit trim and 90 numerals use electric blue/cyan #3896ff, with subtle violet accents, NEVER lime/yellow. Grass remains natural green, BEYOND white, ball black-and-white. No bottom text/info strip, no website navigation, caption bars, buttons, UI, frames or watermark. Only in-world game branding and BEYOND 90 title allowed. This is a production panorama to fit a shallow 3.1:1 or 3.37:1 banner with minimal crop, NOT a 16:9 thumbnail stretched or cropped. Keep geometry natural, no squashing. Match reference composition, including visible ball and pitch.
```

## Selection review

All five generated outputs were visually inspected before integration: hero mark silhouette/orientation, silver material, violet core, ground reflection, empty copy area and no baked text; Studio dark copy area and diagonal metallic detail; two16:9 game variants preserve composition and readable original wording while replacing lime branding with blue; the panoramic banner keeps the full football action visible in shallow desktop slots. Promotional artwork is labelled as artwork. Final rendered-fit and mobile checks are recorded in the dated handoff.
