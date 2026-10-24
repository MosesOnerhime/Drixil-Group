import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { renderPage, staticPaths, SITE_ORIGIN } from "../.cache/prerender/entry-server.js";

const dist = new URL("../dist/", import.meta.url);
const decode = (value) => value.replace(/&(?:amp|lt|gt|quot|#39);/g, (entity) => ({
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'",
})[entity]);
const metadataAttribute = (html, selector) => {
  const matches = [...html.matchAll(new RegExp(`<meta\\s+${selector}\\s+content="([^"]*)"`, "g"))];
  assert.equal(matches.length, 1, `Expected one ${selector} tag`);
  return decode(matches[0][1]);
};
const titles = new Set();
const indexedPaths = [];

for (const pathname of staticPaths) {
  const filename = pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`;
  const html = await readFile(new URL(filename, dist), "utf8");
  const { metadata } = renderPage(pathname);
  const canonical = `${SITE_ORIGIN}${pathname}`;
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
  assert.equal(headings.length, 1, `${pathname} must have exactly one prerendered H1`);
  assert.ok(headings[0][1].replace(/<[^>]+>/g, "").trim(), `${pathname} has an empty H1`);
  assert.ok(html.includes('<main id="main-content"'), `${pathname} has no prerendered main content`);
  assert.ok(html.includes("data-render-year="), `${pathname} has no stable hydration year`);
  assert.ok(!html.includes('src="/src/'), `${pathname} points to development source`);

  const titleMatches = [...html.matchAll(/<title>([^<]*)<\/title>/g)];
  assert.equal(titleMatches.length, 1);
  const title = decode(titleMatches[0][1]);
  assert.equal(title, metadata.title);
  assert.ok(!titles.has(title), `Duplicate page title: ${title}`);
  titles.add(title);
  assert.equal(metadataAttribute(html, 'name="description"'), metadata.description);
  assert.equal(metadataAttribute(html, 'property="og:title"'), title);
  assert.equal(metadataAttribute(html, 'name="twitter:title"'), title);
  assert.equal(metadataAttribute(html, 'property="og:description"'), metadata.description);
  assert.equal(metadataAttribute(html, 'name="twitter:description"'), metadata.description);
  assert.equal(metadataAttribute(html, 'property="og:url"'), canonical);
  const canonicalLinks = [...html.matchAll(/<link\s+rel="canonical"\s+href="([^"]+)"/g)];
  assert.equal(canonicalLinks.length, 1);
  assert.equal(decode(canonicalLinks[0][1]), canonical);
  assert.equal(metadataAttribute(html, 'name="robots"'), metadata.noIndex ? "noindex, nofollow" : "index, follow");

  const schemaTags = [...html.matchAll(/<script\s+id="site-schema"\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.equal(schemaTags.length, 1);
  const schema = JSON.parse(schemaTags[0][1]);
  assert.equal(schema["@context"], "https://schema.org");
  const pageSchema = schema["@graph"].find((item) => item["@type"] === "WebPage");
  assert.equal(pageSchema.url, canonical);
  const breadcrumb = schema["@graph"].find((item) => item["@type"] === "BreadcrumbList");
  if (!metadata.noIndex && pathname !== "/") {
    assert.equal(breadcrumb.itemListElement.length, 2);
    assert.equal(breadcrumb.itemListElement[1].item, canonical);
  }

  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const resource = match[1];
    if (resource.startsWith("//")) continue;
    if (resource === "/" || staticPaths.includes(resource)) continue;
    await access(new URL(`.${resource}`, dist));
  }
  const image = metadataAttribute(html, 'property="og:image"');
  assert.equal(metadataAttribute(html, 'name="twitter:image"'), image);
  assert.ok(image.startsWith(SITE_ORIGIN));
  await access(new URL(`.${new URL(image).pathname}`, dist));

  if (!metadata.noIndex) indexedPaths.push(pathname);
  if (pathname === "/interactive") {
    const mainContent = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
    assert.ok(mainContent.includes("Volleyball Rally") && mainContent.includes("Beyond"));
    const heading = headings[0][1].replace(/<[^>]+>/g, "");
    assert.equal(heading, "Games for players everywhere.", "Interactive must lead with the studio-wide audience");
    assert.ok(mainContent.includes("Africa-based game studio building for a global audience"));
    assert.ok(mainContent.includes("Our goal is to create original games that meet international standards"));
    assert.ok(mainContent.includes("Currently working on") && mainContent.includes("Current focus / Beyond 90"));
    assert.ok(mainContent.includes("Roblox is our starting point."));
    assert.ok(mainContent.includes("Our long-term ambition"));
    const studioSchema = schema["@graph"].find((item) => item["@id"] === `${SITE_ORIGIN}/interactive#organization`);
    assert.ok(studioSchema.description.includes("Africa-based game studio building for a global audience"));
    assert.ok(html.includes("https://www.roblox.com/games/138362130200118/Beyond-90"));
    assert.ok(html.includes("https://www.roblox.com/games/87714615725428/Volleyball-Rally"));
    assert.ok(html.includes("https://www.roblox.com/share/g/451345789"));
  }
}

const sitemap = await readFile(new URL("sitemap.xml", dist), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(sitemapUrls.sort(), indexedPaths.map((pathname) => `${SITE_ORIGIN}${pathname}`).sort());
const robots = await readFile(new URL("robots.txt", dist), "utf8");
assert.ok(robots.includes(`Sitemap: ${SITE_ORIGIN}/sitemap.xml`));
assert.ok(!/^Disallow:\s*\/\s*$/m.test(robots));
console.log(`SEO checks passed: ${indexedPaths.length} public pages, prerendered 404, metadata, schema, assets, and sitemap.`);
