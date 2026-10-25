export const SITE_ORIGIN = "https://drixil-group.vercel.app";

export const INTERACTIVE_MISSION = "Drixil Interactive is an Africa-based game studio building for a global audience. Our goal is to create original games that meet international standards in gameplay, presentation, and performance.";

export type PageMetadata = {
  name: string;
  title: string;
  description: string;
  pathname: string;
  image?: string;
  noIndex?: boolean;
};

export const PUBLIC_PAGES: ReadonlyArray<PageMetadata> = [
  {
    name: "Drixil Group",
    pathname: "/",
    title: "Drixil Group | Games, Motion Design & Creative Technology",
    description: "Drixil Group brings together Roblox games, motion design, digital media, software, and original IP through its focused creative technology divisions.",
  },
  {
    name: "Drixil Interactive",
    pathname: "/interactive",
    title: "Drixil Interactive | Games for a Global Audience",
    description: "An Africa-based game studio building for a global audience. Explore Beyond 90 and Volleyball Rally, our Roblox games in development.",
    image: "/media/beyond-90-main-blue-1672.webp",
  },
  {
    name: "Drixil Studio",
    pathname: "/studio",
    title: "Drixil Studio | Motion Design & Creative Services",
    description: "Drixil Studio focuses on motion design for product showcases and launches, editing, trailers, branding, and digital design. Its website is in development.",
  },
  {
    name: "Drixil Labs",
    pathname: "/labs",
    title: "Drixil Labs | Drixil Group",
    description: "Drixil Labs focuses on AI, software, SaaS, automation, and internal tools. Its website is in development.",
  },
  {
    name: "Drixil Originals",
    pathname: "/originals",
    title: "Drixil Originals | Drixil Group",
    description: "Drixil Originals focuses on original IP, animation, stories, music, and worlds. Its website is in development.",
  },
  {
    name: "Drixil Store",
    pathname: "/store",
    title: "Drixil Store | Drixil Group",
    description: "Drixil Store focuses on merchandise, apparel, accessories, and fan objects. Its website is in development.",
  },
  {
    name: "Drixil Ventures",
    pathname: "/ventures",
    title: "Drixil Ventures | Drixil Group",
    description: "Drixil Ventures is planned for future publishing, investment, acquisitions, and venture building. Its website is in development.",
  },
];

export function normalizePathname(pathname: string) {
  return pathname.replace(/\/+$/, "") || "/";
}

export function getPageMetadata(pathname: string): PageMetadata {
  const normalized = normalizePathname(pathname);
  return PUBLIC_PAGES.find((page) => page.pathname === normalized) ?? {
    name: "Page not found",
    title: "Page not found | Drixil Group",
    description: "The page you requested could not be found.",
    pathname: normalized,
    noIndex: true,
  };
}

export function getPageSchema(pathname: string) {
  const page = getPageMetadata(pathname);
  const url = `${SITE_ORIGIN}${page.pathname}`;
  const groupId = `${SITE_ORIGIN}/#organization`;
  const interactiveId = `${SITE_ORIGIN}/interactive#organization`;
  const websiteId = `${SITE_ORIGIN}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": groupId,
        name: "Drixil Group",
        url: `${SITE_ORIGIN}/`,
        logo: `${SITE_ORIGIN}/favicon.jpeg`,
        subOrganization: { "@id": interactiveId },
      },
      {
        "@type": "Organization",
        "@id": interactiveId,
        name: "Drixil Interactive",
        url: `${SITE_ORIGIN}/interactive`,
        description: INTERACTIVE_MISSION,
        parentOrganization: { "@id": groupId },
        sameAs: [
          "https://www.tiktok.com/@drixil.interactive",
          "https://www.instagram.com/drixil.interactive/",
          "https://www.youtube.com/@drixil.interactive",
          "https://x.com/drixil_inter",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "Drixil Group",
        url: `${SITE_ORIGIN}/`,
        publisher: { "@id": groupId },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": page.pathname === "/interactive" ? interactiveId : groupId },
        ...(!page.noIndex && page.pathname !== "/" ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
      },
      ...(!page.noIndex && page.pathname !== "/" ? [{
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Drixil Group", item: `${SITE_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: page.name, item: url },
        ],
      }] : []),
    ],
  };
}

export function serializeSchema(pathname: string) {
  return JSON.stringify(getPageSchema(pathname)).replace(/</g, "\\u003c");
}
