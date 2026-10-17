# Drixil Group website

The Drixil Group company website and its division pages, built with React, TypeScript, Vite, and Tailwind CSS. Drixil Interactive showcases Beyond 90 and Volleyball Rally; the other division pages retain their published development status.

## Run locally

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Build and check

```sh
npm run lint
npm run build
npm run preview
```

The production build creates the browser assets, builds a temporary server renderer in `.cache/prerender`, and generates complete HTML for the homepage, division pages, and custom 404. Only `dist` is deployed. React hydrates that HTML to preserve the existing navigation and interactions.

`npm run build` also checks the generated page content, metadata, structured data, asset links, robots rules, and sitemap. To repeat those checks after a build:

```sh
npm run check:seo
```

## Search configuration

- `src/site.ts` owns the production origin, page metadata, and structured data. Update it when the public domain or published page information changes.
- Keep `public/sitemap.xml` aligned with the public routes. The build check fails if the sitemap omits a public page or includes the error page.
- `public/robots.txt` permits crawling and points to the sitemap.
- Vercel serves the generated clean URLs and uses `404.html` for missing pages. Do not add a catch-all rewrite to the homepage; it would obscure real missing-page status codes.
- The division development notices are intentional; do not invent business activity, clients, or portfolio content for search terms.

## Google Search Console verification

1. Add the URL-prefix property `https://drixil-group.vercel.app/` in Search Console.
2. Choose HTML-tag verification and copy only the `content` value from the tag Google supplies.
3. Set `GOOGLE_SITE_VERIFICATION` to that value in the Vercel production build environment and redeploy. For a local build, use `.env.production.local`; `.env.example` documents the variable.
4. Confirm the generated homepage contains the verification tag, then click Verify in Search Console. Keep the token configured for subsequent builds.
5. Submit `https://drixil-group.vercel.app/sitemap.xml` and inspect the homepage and Interactive page.

The token is a public ownership-verification value, not an account password or API key. No tag is emitted without a supplied token. Publishing the site does not by itself confirm Search Console ownership or guarantee indexing/rankings.

See [the search-readiness handoff](docs/handoffs/2026-10-18-search-readiness.md) for implementation and QA evidence, and [the visibility review](docs/handoffs/search-visibility-review.md) for the original observations and Google references.
