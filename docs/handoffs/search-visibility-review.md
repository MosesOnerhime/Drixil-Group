# Search visibility review

## Scope

Moses asked how to make Drixil appear when people search for its company name or its work. This records the initial advisory review of the repository and public deployment, before implementation. No website code, Search Console settings, or deployment settings were changed during that review.

The follow-up request to implement what can be done independently is recorded in [the search-readiness handoff](2026-10-18-search-readiness.md). The observations below describe the earlier deployment, not the subsequent prerendered implementation.

## Verified observations

- The live homepage at `https://drixil-group.vercel.app/` responds with HTTP 200.
- `/interactive` also responds with HTTP 200 and has its own title and canonical URL.
- Both inspected pages have `index, follow` robots metadata and no observed `X-Robots-Tag` blocking header.
- `/robots.txt` responds with HTTP 200, allows crawling, and advertises `/sitemap.xml`.
- `/sitemap.xml` responds with HTTP 200 and lists the homepage and all six division routes.
- The initial HTML body contains an empty React root. The site renders its page content using JavaScript; `scripts/generate-route-pages.mjs` generates route-specific metadata but does not prerender page content.
- The inspected HTML does not contain a Google site verification meta tag. This does not establish whether Search Console is configured: ownership may be verified by another method.
- Public search checks did not surface a clear Drixil company result in the returned results. This does not prove that the site is absent from Google's index.

## Unknowns requiring the owner's Search Console

- Whether a property has already been verified.
- Whether the sitemap has been submitted and processed.
- Which URLs Google has indexed and which canonical URLs it selected.
- Whether Google's renderer sees all intended page content.
- Which searches currently generate impressions and clicks.

## Recommended sequence

1. Add or open the URL-prefix property `https://drixil-group.vercel.app/` in Google Search Console. HTML tag or HTML file verification can be used for this hosted subdomain; do not attempt to claim the provider's entire `vercel.app` domain.
2. Submit the existing sitemap through the Sitemaps report.
3. Inspect the homepage and `/interactive`, test their live versions, review Google's rendered content and any indexing reasons, and request indexing when appropriate.
4. Consider prerendering complete public page HTML to reduce dependence on JavaScript rendering. Google supports JavaScript; the current React setup is not by itself proof of an indexing failure.
5. Build useful, specific public pages around actual products and services. Separate product pages for Beyond 90 and Volleyball Rally and substantive Studio examples are sensible candidates when approved content is available. Do not describe planned divisions as established services or invent portfolio proof.
6. Link to the relevant website pages from official Drixil profiles and the existing project repositories; keep brand names consistent.
7. Use Search Console's indexing and performance reports to evaluate progress. Brand-name visibility and ranking for competitive service searches are separate goals, and neither submission nor SEO guarantees a ranking.

## Official references

- [Google: Get your website on Google](https://developers.google.com/search/docs/fundamentals/get-on-google)
- [Google: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Search Console: Add a property](https://support.google.com/webmasters/answer/34592?hl=en)
- [Search Console: Verify site ownership](https://support.google.com/webmasters/answer/9008080?hl=en)
- [Search Console: Sitemaps report](https://support.google.com/webmasters/answer/7451001?hl=en)
- [Search Console: URL Inspection](https://support.google.com/webmasters/answer/9012289/)
- [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
