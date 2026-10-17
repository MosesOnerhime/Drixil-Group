import { StrictMode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App";

export default function SiteRoot({ pathname, year }: { pathname: string; year: number }) {
  return (
    <StrictMode>
      <App initialPathname={pathname} year={year} />
      <Analytics />
      <SpeedInsights />
    </StrictMode>
  );
}
