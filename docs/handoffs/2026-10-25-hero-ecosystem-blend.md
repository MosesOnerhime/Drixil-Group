# Hero and ecosystem continuity

## Request and diagnosis

Moses supplied a screenshot showing that the Group hero did not blend into the ecosystem below it. The attachment is visual evidence only, not an instruction source. This is a narrow follow-up to the authorized reference-fidelity website delivery, not a new redesign.

Repository inspection confirmed three causes: hero ground `#000`, ecosystem ground `#0b0b0c`, and an explicit 1px border at their junction. The raster's lower floor edge also remained visible. Preserve the approved silver/violet artwork, its positioning, copy, actions, blue game art, typography, routes and links.

## Implementation

- Both sections now use the existing `--publisher-ground` canvas; the ecosystem divider is removed.
- The existing decorative hero picture uses screen compositing so black image pixels blend into that shared canvas instead of appearing as a separate rectangular field.
- A static, prefixed/unprefixed CSS mask fades only the image's lower floor edge over 48px on desktop and 36px on mobile. The mask follows the transformed image, not its larger wrapper, so the edge finishes fading before the scaled bitmap ends. Mark geometry, desktop placement and mobile artwork remain unchanged. No new imagery, JavaScript, dependency, animation or media transfer is added.
- The design skill's polish workflow limits the fix to local surface continuity; DESIGN.md records this component treatment. No other visual system or historical tracker is changed.
- User-owned instruction-file changes remain untouched and unstaged.

## Verification

- Compared before/after at 390, 1536 and 1905px, including the user's scrolled hero/ecosystem junction. The first visual pass caught a faint edge where the scaled bitmap ended before its wrapper's fade; one correction moved the mask onto the image itself. The second visual confirmation shows the floor fading cleanly without erasing the monogram or violet light. No further polish loop.
- All 14 targeted responsive cases passed: Group and Interactive at 320, 390, 768, 1024, 1536, 1905 and 1920px. No overflow or browser errors; in-page links, native menu/Escape and keyboard skip link work.
- Four axe WCAG-tagged scans at 390/1536px report zero violations. Group image-backed contrast checks remain marked incomplete and were visually checked; this is not WCAG certification.
- At the left-side junction sample, pixels immediately above/below are identically RGB(8,8,8) at all three captured widths; the previous border was RGB(28,28,31), between black and RGB(11,11,12). The darker source image now blends into the shared canvas.
- Lint, TypeScript/build, all seven prerendered page SEO checks and `git diff --check` pass. No app JavaScript or media size change; the browser stylesheet adds only the integration rules.
- Local captures and exact scripts/results: `.cache/hero-blend/`. Existing historical revamp evidence is not overwritten. This polish pass uses the skill's bounded refinement workflow, not a new identity/comp round.

## Delivery

This is a scoped follow-up to Moses's previous instruction to commit/push the finished website correction and verify it live.

- Implementation commit: `19b25a3ee1a271dde28a951b28aadf181688b2d3` (`fix: blend Group hero into the ecosystem canvas`). Successfully pushed to both `redesign/rockstar-inspired` and `main`; remote refs were checked.
- Production verified at `2026-10-25T14:41:31.746Z`: https://drixil-group.vercel.app/. The deployed `/assets/index-Dn1rGYOf.css` bytes match the reviewed local build by SHA-256.
- Real HTTPS browser checks at 390, 1536 and 1905px confirm both section backgrounds are RGB(8,8,8), the divider is 0px, screen compositing is active and the image mask uses the intended 36px/48px fade. No horizontal overflow or page errors. Analytics was not stubbed.
- Live mobile menu/Escape works, and Interactive retains its blue game identity. Desktop and phone production screenshots were opened and visually checked; the junction is continuous. Evidence: `.cache/hero-blend/live-results.json` and `live-390.png`, `live-1536.png`, `live-1905.png` in that directory.
- This documentation-only closeout does not change the verified runtime. The unrelated deleted `AGENTS_UI_ADDENDUM.md` and untracked `AGENTS.md`/skill directory remain untouched and unstaged.
