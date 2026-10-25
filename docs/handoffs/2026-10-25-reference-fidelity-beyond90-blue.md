# Reference fidelity and Beyond 90 blue identity

## Request and scope

Moses requested a faithful implementation of the approved Group A screenshot, especially its integrated metallic-D hero environment, and correction of Beyond 90's outdated lime identity. Creating production artwork and blue variants is explicitly authorized in this request. Commit, push, and verified live delivery are required. The seven public routes, game/community destinations, partner, social links, truthful development status, accessibility, and prerendered SEO remain intact.

## Audit before implementation

- Website baseline: `2c7ebe1`, following publisher implementation `74e89a5`. The previous design backup remains `backup-pre-rockstar-revamp-2026-10-24` at `78b51fc`.
- P1: Group hero uses an oversized cropped square JPEG rather than the approved atmospheric full-width scene. The copy is live HTML, but the material, floor reflection, integration, typography, and scale do not match Group A.
- P1: Beyond 90 artwork and Interactive actions still use the superseded lime/volt treatment.
- Read-only game-repository audit: `D:/repos/Drixil Interactive/Beyond-90/src/client/UI/Theme.luau` explicitly identifies electric blue as the interaction colour. `Accent` and `Theme.Drixil.Primary` are RGB(56,150,255), `#3896ff`; secondary violet is RGB(130,84,244), `#8254f4`. Dark surfaces are deliberate, not saturated blue panels.
- Authoritative artwork: `assets/media/thumbnail main.png` has blue/cyan branding and secondary violet. The repository's `icon.png` is also current; red clothing is not a lime brand accent. No game code or game-repository files are modified.
- Group identity remains violet. The approved composition, copy, routes, native mobile menu, and independent game/community links are preserved.
- Design read: reference-matched cinematic corporate homepage, balanced partner/client audience. Variance 6, motion 2, density 4. Static production art and existing interaction feedback; no new animation or UI dependencies.

## Production assets

The built-in image-generation tool is used for a text-free hero environment, blue matchday and broadcast variants, and a Studio backdrop. Prompts and exact input roles will be recorded in `docs/design/reference-fidelity-assets.md`. Original company/game files are preserved. Production uses responsive WebP derivatives stored inside the repository, not user-machine paths.

Inter is self-hosted for Group typography because the approved screenshot has a neutral grotesk voice that the previous Merriweather Sans rendering does not reproduce. Interactive retains its measured Mitr/Merriweather pairing. Source and licence are retained under `src/assets/fonts/`.

## Implementation and verification

- `src/App.tsx`: semantic full-width hero scene, live reference copy/actions and play icon, Studio background, current icon, blue matchday/broadcast assets and added full original main-art gallery image.
- Shared CSS: Group Inter hierarchy and tracked desktop navigation, measured 418px desktop hero, mobile text/actions above the atmospheric mark, restrained branded directory art, Interactive electric-blue action/hover/active/focus tokens. Existing native disclosure navigation is retained.
- `src/site.ts`: Interactive social image is the current blue main artwork. All seven routes and prerendered/noindex 404 are retained.
- Two bounded build-thread visual rounds: first batched inspection found hero spacing/proportions and desktop crop; one correction batch adjusted Group type/spacing and uses the blue matchday composition for the lead while retaining full original main art in the gallery. Second confirmation completed.
- Final responsive checks: 80 cases (8 routes at widths 320,360,390,430,768,1024,1280,1440,1536,1920), 8 no-JavaScript routes, 8 hydration checks, and native-menu/Escape/focus/skip/history/metadata/Studio navigation checks passed with no findings.
- Initial pre-review accessibility: 16 axe WCAG-tagged scans passed with zero violations. This is not WCAG certification. A separate Lighthouse advisory about the brand link's visible/accessibility name was sent to the fresh reviewer and fixed in the correction batch below.
- Initial pre-review Lighthouse 12.8.2 diagnostic (superseded by the final94/110ms result below): performance95, accessibility100, best practices96, SEO100; FCP1.8s, LCP2.7s, TBT90ms, CLS0. Best-practice console errors are the Vercel-only analytics endpoints returning404 in local preview. LCP exceeds the2.5s good field target in this lab simulation; do not mislabel it a field pass. Initial report remains `.cache/reference-fidelity/group-lighthouse.json`.
- Cold unthrottled local contexts: Group CLS0/LCP476ms, Interactive CLS0.00164/LCP236ms. These are local diagnostics, not field p75 or INP measurements.
- Initial pre-review comp comparison at the exact1536x1024 reference viewport (superseded by the after-fix comparison below): overall0.8451, structure0.7013, colour0.9488, detail0.8617, band0.98. These are image-comparison diagnostics, not human approval or a pixel-perfect certificate. Narrow crops flag visible shifted copy as missing; the user-authorized blue recolour and original source-art composition also differ from the mockup.
- Detector ran once; output was truncated, so the dated `detector-results.json` is an explicit summary, not a full clean certificate. Most observed findings are prior DESIGN.md font/palette/ramp drift pending documentation or deliberate pinned-reference treatments.
- Lint, TypeScript/build and7public-page SEO checks passed. The fresh full review and correction batch are recorded below; verified production delivery remains to be recorded.

No pixel-perfect certificate is claimed from the archived failed native component tracker; that history is preserved unchanged.

## Independent reviewer correction batch

The fresh full reviewer returned `fix`, not ship: (1) a 16:9 cover crop still hid the ball/pitch in desktop slots, (2) brand visible text/accessibility names disagreed, including other division names, and (3) design/acceptance documents needed refresh.

- Produced a new, explicitly authorized blue panoramic matchday asset using the approved Group/Interactive compositions as focal-scale references. `MatchdayBanner` supplies panorama WebP sources on desktop and complete16:9 artwork on phones. Both desktop captures now show the complete90, football, pitch and shooting action. Gallery content remains intact.
- Brand adds a real text separator and includes each actual visible division name in its accessible label, preserving its existing destination. Group current-project icon has a320px responsive-size cap to avoid selecting an unnecessarily large mobile source.
- Rebuilt and repeated80responsive,8no-JS,8hydration, keyboard/navigation and16axe checks after these fixes, all passing. Four required viewport screenshots were recaptured, opened and validated.
- Final local Lighthouse: performance94, accessibility100, best practices96, SEO100; LCP2.7s, TBT110ms, CLS0. The previously failing `label-content-name-mismatch` now passes (score1, empty failing-node list). Local-only analytics404s and simulated LCP caveat remain documented; production browser checks will verify the real endpoints.
- After-fix image diagnostics: overall about85%, structure74%, colour95%, detail84%, bands98%. Automatic labels do not replace the actual paired-image review. No second detector run.
- A separate finish documenter merged the actual Inter/blue/hero/source system into DESIGN.md and its sidecar and corrected effective surface/provenance guidance. The original failed native state remains untouched.

## Final local review

The same independent reviewer reopened all20 required recaptures and scored the three material fixes **resolved**, with no fix-batch regressions observed. Disposition: **ship at the scope of the scored fixes**. This is not a whole-surface recertification, pixel-perfect or WCAG certificate. The full initial review and appended fix verdict are retained in the dated `finish-review.md`.

The separate documenter validated schema-v2 design snippets, canonical section order, narrative consistency and22 mapped asset paths. Current local diagnostics: Group unthrottled CLS0/LCP544ms; Interactive CLS0.00166/LCP264ms. These remain non-field measurements. Final Lighthouse94/100/96/100 and LCP2.7s are recorded in `lighthouse-results.json`; final comp diagnostics and matched captures are saved beside them.

Implementation is ready for the authorized commit/push and production verification, which follow below when established.

The native `build-phase finish --disposition ship` recorder was attempted and refused because there is no active `.impeccable/build/state.json`; the prior failed state remains archived. No replacement phase history or passing receipt was fabricated. The real independent fix verdict and browser evidence above, not a completed native phase pipeline, establish local acceptance for this correction.

## GitHub and live delivery

- Implementation commit: `9f582ec85a4f83201a8b7ffef8dd6b9415b3fd72`, `fix: match Group reference and restore Beyond 90 blue identity`.
- Pushed successfully, without force, to both `origin/redesign/rockstar-inspired` and `origin/main`. `git ls-remote` confirmed both at the implementation commit and the original backup still at `78b51fc584a25e175cfec3cf651755ad919abe66`.
- Production origin: https://drixil-group.vercel.app/ . Verified live at2026-10-25T14:16:31Z: all7public routes return200, include the reviewed `/assets/index-DgxozE5P.js`, and retain expected titles, canonical/schema/prerendered content. The actual game/community/partner destinations remain present. The missing-page test returns real404/noindex; sitemap7and robots are valid.
- SHA256 comparison passed for20deployed resources: reviewed JS/CSS, all3font files and all15new production WebP assets. No production-only asset is missing. Results are saved in the dated `production-results.json`.
- Real HTTPS Chrome verification, with NO analytics stubbing: all7routes at390px and1536px return200 with oneH1, no horizontal overflow, matching visible/accessible brand names, and zero page/console errors. Native phone menus open and Escape closes them. Phone selects complete16:9matchday artwork; desktop selects the new panorama. Interactive computed accent is `#3896ff`. Results: `production-browser-results.json`. Group/Interactive live desktop screenshots were opened and visually checked against final local captures.
- The first Node-only verification attempt hit a connection timeout. An independent PowerShell request and real Chrome passed; retrying the verifier in a fresh process with IPv4-first ordering passed every check. No DNS settings or production configuration was changed.
- This final documentation-only closeout also removes a trailing blank line and whitespace in the copied font licence without changing licence wording or browser assets. It does not change the reviewed runtime bundle. User-owned instruction-file changes remain unstaged and untouched.

Completion scope: reference-based Group hero/layout correction, audited blue Beyond90identity, generated/source assets and prompts saved in-repository, responsive/accessibility/SEO regression checks, scoped independent review, authorized GitHub delivery and verified live site. Remaining limits: not pixel-identical; local simulated LCP2.7s is not a field pass; no WCAG/pixel/native-gate certificate or clean full-detector receipt is claimed.

## Preserved unrelated state

The user-owned deleted `AGENTS_UI_ADDENDUM.md`, untracked root `AGENTS.md`, and untracked nested design-skill directory are not part of this implementation and will not be staged.
