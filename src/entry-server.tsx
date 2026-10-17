import { renderToString } from "react-dom/server";
import SiteRoot from "./SiteRoot";
import { getPageMetadata, PUBLIC_PAGES, serializeSchema, SITE_ORIGIN } from "./site";

export const staticPaths = [...PUBLIC_PAGES.map((page) => page.pathname), "/404"];
export { SITE_ORIGIN };

export function renderPage(pathname: string) {
  const year = new Date().getFullYear();
  return {
    html: renderToString(<SiteRoot pathname={pathname} year={year} />),
    metadata: getPageMetadata(pathname),
    schema: serializeSchema(pathname),
    year,
  };
}
