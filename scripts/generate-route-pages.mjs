import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { loadEnv } from "vite";
import { renderPage, staticPaths, SITE_ORIGIN } from "../.cache/prerender/entry-server.js";

const dist = new URL("../dist/", import.meta.url);
const source = await readFile(new URL("index.html", dist), "utf8");
const verificationToken = loadEnv("production", process.cwd(), "GOOGLE_").GOOGLE_SITE_VERIFICATION?.trim();

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function replaceMeta(html, selector, value) {
  const pattern = new RegExp(`(<meta\\s+${selector}\\s+content=")[^"]*("\\s*\\/?>)`, "i");
  assert.ok(pattern.test(html), `Missing metadata template: ${selector}`);
  return html.replace(pattern, (_, start, end) => `${start}${escapeHtml(value)}${end}`);
}

for (const pathname of staticPaths) {
  const { html: content, metadata, schema, year } = renderPage(pathname);
  const canonical = `${SITE_ORIGIN}${metadata.pathname}`;
  const image = new URL(metadata.image ?? "/og.png", SITE_ORIGIN).href;
  const filename = pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`;

  assert.ok(content.includes("<main"), `No page content generated for ${pathname}`);
  assert.ok(source.includes('<div id="root"></div>'), "Missing React root template");
  let html = source
    .replace(/<title>[^<]*<\/title>/i, () => `<title>${escapeHtml(metadata.title)}</title>`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/i, (_, start, end) => `${start}${escapeHtml(canonical)}${end}`)
    .replace(/(<script\s+id="site-schema"\s+type="application\/ld\+json">)[\s\S]*?(<\/script>)/i, (_, start, end) => `${start}${schema}${end}`)
    .replace('<div id="root"></div>', () => `<div id="root" data-render-year="${year}">${content}</div>`);

  for (const [selector, value] of [
    ['name="description"', metadata.description],
    ['name="robots"', metadata.noIndex ? "noindex, nofollow" : "index, follow"],
    ['property="og:title"', metadata.title],
    ['property="og:description"', metadata.description],
    ['property="og:url"', canonical],
    ['property="og:image"', image],
    ['name="twitter:title"', metadata.title],
    ['name="twitter:description"', metadata.description],
    ['name="twitter:image"', image],
  ]) {
    html = replaceMeta(html, selector, value);
  }

  if (verificationToken) {
    html = html.replace("</head>", () => `  <meta name="google-site-verification" content="${escapeHtml(verificationToken)}" />\n  </head>`);
  }

  await writeFile(new URL(filename, dist), html);
  console.log(`Prerendered ${pathname} (${Buffer.byteLength(content).toLocaleString("en-US")} bytes of HTML)`);
}
