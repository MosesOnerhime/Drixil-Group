# Drixil Interactive portfolio update

Date: 2026-10-06

## Request

Update the Drixil Group website, especially the Drixil Interactive division page, using verified information from the Beyond 90 and Volleyball Rally repositories. Add Volleyball Rally artwork, use each game's direct Roblox experience URL, keep the Roblox community as a separate action, replace game-specific public social links with the general Drixil Interactive accounts, add motion design to Drixil Studio, preserve mobile responsiveness, and commit the finished site.

## Sources reviewed

- `D:\repos\Drixil Interactive\Beyond-90\README.md`
- `D:\repos\Drixil Interactive\Beyond-90\PRODUCT.md`
- `D:\repos\Drixil Interactive\Beyond-90\docs\current-state.md`
- `D:\repos\Drixil Interactive\Beyond-90\docs\roadmap.md`
- `D:\repos\Drixil Interactive\Beyond-90\docs\decisions.md`
- `D:\repos\Drixil Interactive\Volleyball-Rally\README.md`
- `D:\repos\Drixil Interactive\Volleyball-Rally\PRODUCT.md`
- `D:\repos\Drixil Interactive\Volleyball-Rally\docs\store-listing.md`
- `D:\repos\Drixil Interactive\Volleyball-Rally\docs\handoff\current-state.md`
- `D:\repos\Drixil Interactive\Volleyball-Rally\docs\handoff\requests.md`
- `D:\repos\Drixil Interactive\Volleyball-Rally\docs\handoff\roadmap.md`
- `D:\repos\Drixil Interactive\Volleyball-Rally\docs\handoff\decisions.md`
- Volleyball Rally source artwork supplied in `C:\Users\moses\OneDrive\Documents\DRIXIL GROUP LTD\Drixil Interactive\Roblox Documentation\Volleyball Rally\media`

This was a public-content audit, not a technical audit of either game's runtime. Internal work-in-progress details, unverified release claims, player counts, ratings, and testimonials were intentionally excluded.

## Verified public positioning used

### Beyond 90

- Competitive, human-first multiplayer football on Roblox.
- One real player controls each footballer.
- Supports play across 3v3 to 11v11.
- Broadcast and player camera presentation.
- Cosmetic-first, non-pay-to-win direction.
- Remains the featured current focus on the Group and Interactive pages.

### Volleyball Rally

- A 3v3 indoor volleyball game on Roblox.
- The core interaction model is Move, choose intent, aim, and time the contact.
- The three intents are Control, Attack, and Hustle.
- Context turns those intents into passes, sets, digs, serves, spikes, tips, blocks, and dives.
- AI athletes fill open roster slots for a full solo 3v3 match.
- Designed for mobile, keyboard and mouse, and controller.

## Implementation decisions

- Kept the existing Drixil Interactive black and volt visual identity for the page shell and Beyond 90.
- Gave Volleyball Rally a contained navy and azure treatment taken from its own documented identity, so it reads as a distinct game without rebranding the division.
- Added a two-game portfolio section before the detailed product sections.
- Kept Beyond 90 as the hero and current focus, then added a full Volleyball Rally section with supplied icon and thumbnail art.
- Separated direct game links from the shared Roblox community link.
- Replaced the public social grid with the Drixil Interactive TikTok, Instagram, YouTube, and X accounts.
- Kept the existing Beyond 90 Discord and WhatsApp links as clearly labelled community spaces.
- Added Drixil Studio motion design for product showcases, launches, trailers, and brand campaigns without inventing portfolio projects.
- Updated route metadata so `/interactive` represents the division's two-game portfolio and `/studio` includes motion design.

## Media processing

The supplied PNGs were converted to responsive WebP pairs with FFmpeg. Originals were left untouched.

- Square icon: 1254 px source plus a 640 px responsive derivative.
- Landscape thumbnail: 1672 x 941 source plus a 768 px responsive derivative.
- Images use explicit dimensions, `srcSet`, `sizes`, lazy loading below the fold, and async decoding.

## Files changed

- `src/App.tsx`
- `scripts/generate-route-pages.mjs`
- `public/media/volleyball-rally-icon-640.webp`
- `public/media/volleyball-rally-icon-1254.webp`
- `public/media/volleyball-rally-768.webp`
- `public/media/volleyball-rally-1672.webp`
- This handoff document.

## QA record

- `npm run lint`: passed.
- `npm run build`: passed, including TypeScript, Vite production output, and static route-page generation.
- Drixil UI post-change detector on `src/App.tsx`: passed with no findings.
- Required game, community, and social URLs: present exactly as supplied.
- Generated `/interactive` title and description: verified in `dist/interactive.html`.
- Route anchors: no duplicate page-section IDs; the expected `main-content` ID is reused across mutually exclusive routes.
- Responsive static review: mobile layouts stack primary actions, use single-column cards before larger breakpoints, preserve 48 px minimum action heights, allow social handles to wrap, and retain the global focus-visible and reduced-motion behavior.
- Media verification: 1254/640 px square icon pair and 1672/768 px landscape pair; every WebP is below 253 KB.
- Automated screenshot review was not available because this checkout has no browser automation runtime. No screenshot-based claim is made.
