import { createRoot, hydrateRoot } from "react-dom/client";
import SiteRoot from "./SiteRoot";
import "./index.css";

const container = document.getElementById("root")!;
const year = Number(container.dataset.renderYear) || new Date().getFullYear();
const app = <SiteRoot pathname={window.location.pathname} year={year} />;

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
