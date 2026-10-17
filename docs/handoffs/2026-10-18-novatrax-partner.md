# Novatrax Studio partnership section

## Request

Moses confirmed Novatrax Studio as a partner of Drixil Interactive and requested a linked logo using `public/media/novatrax logo.png`. The supplied gamr.africa screenshot is a layout reference for a restrained partner-logo section.

## Source and presentation decisions

- Partner relationship: explicitly supplied by Moses.
- Partner destination: `https://www.novatraxstudio.com/`; the official website identifies the company as Novatrax Studio.
- Supplied asset: 8192 x 1258 RGBA PNG containing a white wordmark on transparency. Its initially blank-looking preview was checked on the site's dark background.
- Preserve the original PNG and create lossless WebP display assets at 800 px and 1600 px widths. Do not redraw, recolor, or distort the mark.
- Add an Our partners section to `/interactive` after the game sections and before the social/community section.
- Use a single spacious logo link with a clear external-link label, matching the existing dark palette and typography. Do not repeat the one logo to imitate a larger partner roster or add unverified endorsement claims.
- Add a Partners anchor to the desktop division navigation. The section remains in the mobile reading flow and the generated HTML.

## Implementation and verification

- Added the Partners navigation anchor and Our partners section on `/interactive` with the supplied wordmark and a link to Novatrax's official website.
- The link has a descriptive accessible name, an external-link indicator, `target="_blank"`, and `rel="noopener noreferrer"`.
- Both display assets retain transparency and are lossless WebP: `novatrax-logo-800.webp` is 9,398 bytes (800 x 123), and `novatrax-logo-1600.webp` is 18,446 bytes (1600 x 246). The original source remains available as `novatrax logo.png`.
- `npm run lint`: passed with no warnings or errors.
- `npm run build`: passed, including TypeScript, prerendering, metadata, schema, asset, and sitemap checks.
- Browser checks passed at 360, 390, 430, 768, 1024, 1280, 1440, and 1920 px widths: the logo loads with its correct aspect ratio, the section fits the viewport, the link has visible keyboard focus and a generous hit area, and the desktop navigation does not overlap.
- The Partners anchor lands below the fixed navigation. Reduced-motion mode remains usable.
- Verified that the partner name, image alt text, and website link are present in generated HTML and available with JavaScript disabled.
- Reviewed normal phone and desktop viewport captures. Local evidence is in ignored `.cache/partner-qa/`.
- The confirmed partnership is shown as page content; no unverified contractual role or endorsement was added to structured data.

## Delivery

Publish through the existing GitHub/Vercel workflow. Commit scope: the Interactive page, original supplied PNG, two optimized WebPs, this handoff, and the preceding search-readiness handoff's verified production results. Existing unrelated agent/skill-file changes stay outside the commit.

## Reference

- [Novatrax Studio](https://www.novatraxstudio.com/)
