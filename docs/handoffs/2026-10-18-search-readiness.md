# Search readiness implementation

## Request

Moses asked what can be done independently now to improve Drixil's visibility in search. The preceding review identified a working sitemap and crawl permissions, but page bodies were empty until JavaScript executed.

## Plan and constraints

- Generate complete HTML for the existing homepage, six division pages, and the custom 404 page during the production build.
- Hydrate the same React components in the browser, preserving navigation, analytics, artwork, and the established design.
- Use one metadata source for the generated HTML and client-side route changes.
- Improve descriptive titles and consistent descriptions using existing approved company, game, and service information.
- Include accurate organization, page, and breadcrumb structured data.
- Provide optional Search Console HTML-tag verification through a build environment variable; never invent a verification token.
- Add a production-output SEO check and verify JavaScript-disabled reading, hydration, links, navigation, mobile behavior, and error-page indexing behavior.
- Document account-side tasks that still require Moses: ownership verification and sitemap/indexing submission in Search Console.

## Implemented

- `src/site.ts` is the shared source for production URLs, page titles, descriptions, and organization/page/breadcrumb JSON-LD. Interactive's title names both games; Studio's title names motion design, with the development status retained in its description.
- `src/entry-server.tsx` renders the same `SiteRoot` used by the browser through `react-dom/server` during the build. No runtime server or additional framework was introduced.
- `scripts/generate-route-pages.mjs` now emits full page bodies for all seven public pages and the noindex error page, preserving each route's metadata and canonical.
- `src/main.tsx` hydrates prerendered content and retains client rendering for the development server. The build year is passed consistently to avoid a new-year hydration mismatch in the footer.
- Navigation updates metadata and JSON-LD from the same source. Analytics and Speed Insights are preserved.
- Optional `GOOGLE_SITE_VERIFICATION` build configuration emits a verification meta tag only when a real token is supplied. `.env.example` and `README.md` document the setup.
- `scripts/check-seo.mjs` is part of `npm run build` and is also available through `npm run check:seo`. It checks real generated content, one H1, unique titles, canonical/description/social metadata, JSON-LD, asset references, crawl permissions, sitemap coverage, and error-page noindex behavior.
- The ESLint Fast Refresh rule is disabled only for the build-only server entry, whose exports are intentionally rendering helpers rather than browser components.

## Verification

- `npm run build`: passed. The homepage contains 28,134 bytes of rendered body HTML and Interactive contains 39,022 bytes, replacing their empty React roots.
- `npm run lint`: passed with no errors or warnings after the server-entry-specific rule adjustment.
- Production-output SEO checks: passed for all seven public pages and the custom 404.
- Headless Chrome checks passed on every generated page with JavaScript disabled: readable content, correct metadata/robots/canonicals, and real links. The two Roblox experience URLs and Volleyball Rally gallery remain present in the HTML.
- Hydration checked on all eight generated pages while initially holding the JavaScript response. The original H1 DOM node was preserved after hydration, page titles stayed consistent, and no React hydration/application errors were logged.
- Homepage and Interactive checked at 360 x 800, 390 x 844, 430 x 932, 768 x 1024, 1024 x 768, 1280 x 800, 1440 x 900, and 1920 x 1080. No horizontal overflow or application errors were observed; reduced-motion scrolling remained enabled.
- Verified skip link, mobile menu, Escape dismissal/focus return, browser back navigation, and route-specific canonical/schema updates through Home, Interactive, and Studio.
- Reviewed phone and desktop captures against the existing design. Evidence and the local browser harness are in ignored `.cache/seo-qa/`.
- Vercel-injected analytics endpoints were stubbed only in local browser tests because Vite preview does not host those endpoints. Production integrations remain unchanged.
- No Search Console token was available. Token issuance/ownership verification and real Google indexing status were not tested or claimed.

## Delivery and remaining account tasks

Published in commit `af01da4` using the GitHub/Vercel workflow Moses previously authorized for website updates. The implementation commit includes only this task's source, configuration, checks, and documentation. Pre-existing `AGENTS.md`, nested skill directory, and addendum deletion remain outside the commit.

Post-deploy checks passed on the public production origin: all seven public pages returned HTTP 200 with complete HTML, one H1, the expected titles, indexable robots metadata, and page-specific JSON-LD. Sitemap and robots endpoints returned HTTP 200 and retained the seven-page coverage. A deliberately missing page returned HTTP 404 with the prerendered custom error content and `noindex, nofollow`. All referenced browser JavaScript, CSS, and imported brand-image assets checked on the homepage returned HTTP 200. The live evidence is recorded in ignored `.cache/seo-qa/live-results.json`.

Moses still needs to open the URL-prefix property in Google Search Console, supply or configure Google's verification token if ownership is not already verified, submit the sitemap, and inspect/request indexing for important pages. These changes improve crawlability and consistency; they do not prove Google has indexed the site or guarantee rankings.

## References

- [React hydration](https://react.dev/reference/react-dom/client/hydrateRoot)
- [React server rendering](https://react.dev/reference/react-dom/server/renderToString)
- [Vite server-side build](https://vite.dev/guide/ssr.html)
- [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
