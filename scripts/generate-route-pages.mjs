import { readFile, writeFile } from "node:fs/promises";

const origin = "https://drixil-group.vercel.app";
const defaultImage = `${origin}/og.png`;
const routes = [
  {
    file: "interactive.html",
    pathname: "/interactive",
    title: "Beyond 90 | Drixil Interactive",
    description: "Beyond 90 is Drixil Interactive’s competitive Roblox football experience, currently in development.",
    image: `${origin}/media/beyond-90-1254.webp`,
  },
  {
    file: "studio.html",
    pathname: "/studio",
    title: "Drixil Studio | Drixil Group",
    description: "Drixil Studio focuses on editing, motion graphics, commercials, trailers, branding, UI/UX, web, and graphic design. Its website is in development.",
  },
  {
    file: "labs.html",
    pathname: "/labs",
    title: "Drixil Labs | Drixil Group",
    description: "Drixil Labs focuses on AI, software, SaaS, automation, and internal tools. Its website is in development.",
  },
  {
    file: "originals.html",
    pathname: "/originals",
    title: "Drixil Originals | Drixil Group",
    description: "Drixil Originals focuses on original IP, animation, stories, music, and worlds. Its website is in development.",
  },
  {
    file: "store.html",
    pathname: "/store",
    title: "Drixil Store | Drixil Group",
    description: "Drixil Store focuses on merchandise, apparel, accessories, and fan objects. Its website is in development.",
  },
  {
    file: "ventures.html",
    pathname: "/ventures",
    title: "Drixil Ventures | Drixil Group",
    description: "Drixil Ventures is planned for future publishing, investment, acquisitions, and venture building. Its website is in development.",
  },
  {
    file: "404.html",
    pathname: "/404",
    title: "Page not found | Drixil Group",
    description: "The page you requested could not be found.",
    noIndex: true,
  },
];

const source = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");

function replaceMeta(html, selector, content) {
  const pattern = new RegExp(`(<meta\\s+${selector}\\s+content=")[^"]*("\\s*\\/?>)`, "i");
  return html.replace(pattern, `$1${content}$2`);
}

for (const route of routes) {
  const canonical = `${origin}${route.pathname}`;
  const image = route.image ?? defaultImage;
  let html = source
    .replace(/<title>[^<]*<\/title>/i, `<title>${route.title}</title>`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/i, `$1${canonical}$2`);

  html = replaceMeta(html, 'name="description"', route.description);
  html = replaceMeta(html, 'name="robots"', route.noIndex ? "noindex, nofollow" : "index, follow");
  html = replaceMeta(html, 'property="og:title"', route.title);
  html = replaceMeta(html, 'property="og:description"', route.description);
  html = replaceMeta(html, 'property="og:url"', canonical);
  html = replaceMeta(html, 'property="og:image"', image);
  html = replaceMeta(html, 'name="twitter:title"', route.title);
  html = replaceMeta(html, 'name="twitter:description"', route.description);
  html = replaceMeta(html, 'name="twitter:image"', image);

  await writeFile(new URL(`../dist/${route.file}`, import.meta.url), html);
}
