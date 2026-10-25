import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  BadgeDollarSign,
  BrainCircuit,
  Clapperboard,
  Gamepad2,
  Instagram,
  Menu,
  MessageCircle,
  MousePointer2,
  Music2,
  PenTool,
  Phone,
  Store,
  Trophy,
  UsersRound,
  WandSparkles,
  X,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import drixilMetallic from "./assets/brand/drixil-metallic.jpeg";
import "./styles/publisher-components.css";
import "./styles/publisher-layout.css";
import {
  getPageMetadata,
  INTERACTIVE_MISSION,
  normalizePathname,
  serializeSchema,
  SITE_ORIGIN,
  type PageMetadata,
} from "./site";

function setMeta(
  selector: string,
  attribute: "content" | "href",
  value: string,
) {
  const element = document.head.querySelector<
    HTMLMetaElement | HTMLLinkElement
  >(selector);
  element?.setAttribute(attribute, value);
}

function usePageMetadata({
  title,
  description,
  pathname,
  image = "/og.png",
  noIndex = false,
}: PageMetadata) {
  useEffect(() => {
    const url = `${SITE_ORIGIN}${pathname === "/" ? "/" : pathname}`;
    const imageUrl = image.startsWith("http")
      ? image
      : `${SITE_ORIGIN}${image}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);
    setMeta(
      'meta[name="robots"]',
      "content",
      noIndex ? "noindex, nofollow" : "index, follow",
    );
    setMeta('link[rel="canonical"]', "href", url);
    const schema = document.getElementById("site-schema");
    if (schema) schema.textContent = serializeSchema(pathname);
  }, [description, image, noIndex, pathname, title]);
}

type Division = {
  name: string;
  shortName: string;
  slug: string;
  number: string;
  descriptor: string;
  icon: LucideIcon;
  accent: string;
  accentClass: string;
  stage: "active" | "development";
};

const divisions: Division[] = [
  {
    name: "Drixil Interactive",
    shortName: "Interactive",
    slug: "interactive",
    number: "01",
    descriptor:
      "An Africa-based game studio building for a global audience, starting with Roblox.",
    icon: Gamepad2,
    accent: "#d8ff1f",
    accentClass: "text-volt",
    stage: "active",
  },
  {
    name: "Drixil Studio",
    shortName: "Studio",
    slug: "studio",
    number: "02",
    descriptor:
      "Editing, motion design for product showcases and launches, commercials, trailers, branding, UI/UX, web, and graphic design.",
    icon: PenTool,
    accent: "#55e6ff",
    accentClass: "text-cyan",
    stage: "development",
  },
  {
    name: "Drixil Labs",
    shortName: "Labs",
    slug: "labs",
    number: "03",
    descriptor: "AI, software, SaaS, automation, and internal tools.",
    icon: BrainCircuit,
    accent: "#d6ff4b",
    accentClass: "text-volt",
    stage: "development",
  },
  {
    name: "Drixil Originals",
    shortName: "Originals",
    slug: "originals",
    number: "04",
    descriptor: "Original IP, animation, stories, music, and worlds.",
    icon: Clapperboard,
    accent: "#7b5cff",
    accentClass: "text-drixil",
    stage: "development",
  },
  {
    name: "Drixil Store",
    shortName: "Store",
    slug: "store",
    number: "05",
    descriptor: "Merchandise, apparel, accessories, and fan objects.",
    icon: Store,
    accent: "#55e6ff",
    accentClass: "text-cyan",
    stage: "development",
  },
  {
    name: "Drixil Ventures",
    shortName: "Ventures",
    slug: "ventures",
    number: "06",
    descriptor:
      "Future publishing, investment, acquisitions, and venture building.",
    icon: BadgeDollarSign,
    accent: "#d6ff4b",
    accentClass: "text-volt",
    stage: "development",
  },
];

const roadmap = [
  {
    phase: "01",
    title: "Launch the Engine",
    text: "Launch Drixil Studio and Drixil Interactive. Build cash flow through creative services while growing Roblox games and community.",
  },
  {
    phase: "02",
    title: "Expand the Audience",
    text: "Launch Drixil Store and Drixil Labs once revenue, trust, and fan demand are established.",
  },
  {
    phase: "03",
    title: "Own the Worlds",
    text: "Move into Drixil Originals and a creator network for owned stories, characters, and media.",
  },
  {
    phase: "04",
    title: "Compound the Portfolio",
    text: "Explore publishing, investments, acquisitions, and shared infrastructure through Drixil Ventures.",
  },
];

const ROBLOX_COMMUNITY_URL = "https://www.roblox.com/share/g/451345789";
const BEYOND_90_GAME_URL =
  "https://www.roblox.com/games/138362130200118/Beyond-90";
const VOLLEYBALL_RALLY_GAME_URL =
  "https://www.roblox.com/games/87714615725428/Volleyball-Rally";

const volleyballRallyGallery = [
  {
    asset: "block",
    caption: "At the net",
    alt: "Volleyball Rally artwork of a blue-team player jumping to block a red-team attack at the net",
  },
  {
    asset: "teamwork",
    caption: "Better together",
    alt: "Volleyball Rally artwork of three teammates celebrating with a high five on an indoor court",
  },
  {
    asset: "dive",
    caption: "Keep it alive",
    alt: "Volleyball Rally artwork of a player diving across the gym floor to reach the ball",
  },
  {
    asset: "receive",
    caption: "Read the rally",
    alt: "Volleyball Rally artwork from a receiver's viewpoint, with an incoming ball and the opposing team across the net",
  },
];

const beyond90Modes = ["3v3", "5v5", "7v7", "11v11", "Clubs", "Training"];

const beyond90Features: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    icon: UsersRound,
    title: "Human-first football",
    text: "One real player controls each footballer, making positioning, movement, and teamwork matter across the pitch.",
  },
  {
    icon: Trophy,
    title: "3v3 to 11v11",
    text: "Different team sizes support quick matches and the scale of a proper full-pitch game.",
  },
  {
    icon: MousePointer2,
    title: "Broadcast and player cameras",
    text: "Authentic broadcast presentation with optional third-person and first-person views by mode.",
  },
  {
    icon: WandSparkles,
    title: "Cosmetic-first economy",
    text: "Monetization focused on expression, identity, and cosmetics instead of pay-to-win advantages.",
  },
];

const interactiveSocials: Array<{
  name: string;
  handle: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    name: "TikTok",
    handle: "@drixil.interactive",
    href: "https://www.tiktok.com/@drixil.interactive?is_from_webapp=1&sender_device=pc",
    icon: Music2,
  },
  {
    name: "Instagram",
    handle: "@drixil.interactive",
    href: "https://www.instagram.com/drixil.interactive?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    icon: Instagram,
  },
  {
    name: "YouTube",
    handle: "@drixil.interactive",
    href: "https://www.youtube.com/@drixil.interactive",
    icon: Youtube,
  },
  {
    name: "X / Twitter",
    handle: "@drixil_inter",
    href: "https://x.com/drixil_inter?s=20",
    icon: AtSign,
  },
];

const communityLinks: Array<{
  name: string;
  text: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    name: "Roblox community",
    text: "Join Drixil Interactive on Roblox",
    href: ROBLOX_COMMUNITY_URL,
    icon: Gamepad2,
  },
  {
    name: "Beyond 90 Discord",
    text: "Talk with the Beyond 90 community",
    href: "https://discord.gg/63ZZBdW8p",
    icon: MessageCircle,
  },
  {
    name: "Beyond 90 WhatsApp",
    text: "Join the Beyond 90 group chat",
    href: "https://chat.whatsapp.com/Hg51qcoU6EN2bEOeqGliex?mode=gi_t",
    icon: Phone,
  },
];

function RouteLink({
  to,
  className,
  children,
  ariaLabel,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    window.history.pushState({}, "", to);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <a
      href={to}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

const CONTACT_URL = "mailto:mosesonerhime11@gmail.com";
const groupNav = [
  ["Ecosystem", "#ecosystem"],
  ["Current project", "#current-project"],
  ["Roadmap", "#roadmap"],
  ["Contact", "#contact"],
];
const gameNav = [
  ["Games", "#games"],
  ["Beyond 90", "#beyond-90"],
  ["Volleyball Rally", "#volleyball-rally"],
  ["Partners", "#partners"],
  ["Follow", "#community"],
];

function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}

function Brand({ division = "Group" }: { division?: string }) {
  return (
    <RouteLink
      to={division === "Interactive" ? "/interactive" : "/"}
      className="brand"
      ariaLabel={
        division === "Interactive"
          ? "Drixil Interactive home"
          : "Drixil Group home"
      }
    >
      <img
        src="/media/drixil-mark-white.webp"
        alt=""
        width="256"
        height="256"
        className="publisher-mark"
      />
      <span className="publisher-brand-name">
        Drixil<span>{division}</span>
      </span>
    </RouteLink>
  );
}

function PublisherHeader({
  division = "Group",
  compact = false,
}: {
  division?: string;
  compact?: boolean;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const isGroup = division === "Group";
  const links = compact
    ? []
    : isGroup
      ? groupNav
      : division === "Interactive"
        ? gameNav
        : [];
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && detailsRef.current?.open) {
        detailsRef.current.open = false;
        summaryRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1100 && detailsRef.current)
        detailsRef.current.open = false;
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };
  return (
    <header className="publisher-header">
      <div className="header-inner">
        <Brand division={division} />
        {links.length > 0 && (
          <nav
            className="desktop-nav"
            aria-label={
              isGroup ? "Primary navigation" : "Drixil Interactive navigation"
            }
          >
            {links.map(([label, href]) => (
              <a className="publisher-nav-link" href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        )}
        <div className="header-actions">
          {isGroup ? (
            <a href={CONTACT_URL} className="publisher-button header-contact">
              Contact Drixil
              <ArrowUpRight aria-hidden="true" className="publisher-icon" />
            </a>
          ) : (
            <RouteLink
              to="/"
              className="publisher-return"
              ariaLabel="Return to Drixil Group"
            >
              <ArrowLeft aria-hidden="true" className="publisher-icon" />
              <span>Drixil Group</span>
            </RouteLink>
          )}
          {links.length > 0 && (
            <details className="mobile-menu" ref={detailsRef}>
              <summary ref={summaryRef} aria-label="Navigation menu">
                <Menu aria-hidden="true" className="menu-open-icon" />
                <X aria-hidden="true" className="menu-close-icon" />
              </summary>
              <nav
                id="mobile-navigation"
                className="mobile-navigation"
                aria-label="Mobile navigation"
              >
                {links.map(([label, href]) => (
                  <a key={href} href={href} onClick={closeMenu}>
                    {label}
                    <ArrowRight aria-hidden="true" size={18} />
                  </a>
                ))}
                <a href={CONTACT_URL} onClick={closeMenu}>
                  Contact Drixil
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </nav>
            </details>
          )}
        </div>
      </div>
    </header>
  );
}

function SiteFooter({
  year,
  division = "Group",
}: {
  year: number;
  division?: string;
}) {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-top">
        <Brand division={division} />
        <a href={CONTACT_URL} className="footer-contact">
          Contact Drixil
          <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </div>
      <nav className="page-shell footer-links" aria-label="Drixil divisions">
        {divisions.map((d) => (
          <RouteLink key={d.slug} to={"/" + d.slug}>
            {d.name}
          </RouteLink>
        ))}
      </nav>
      <div className="page-shell footer-bottom">
        <p>
          © {year} Drixil {division}
        </p>
        <p>
          {division === "Group"
            ? "Games. Media. Technology."
            : "A Drixil Group division"}
        </p>
      </div>
    </footer>
  );
}

function ExternalButton({
  href,
  children,
  outline = false,
  roblox = false,
}: {
  href: string;
  children: ReactNode;
  outline?: boolean;
  roblox?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "publisher-button" + (outline ? " publisher-button--outline" : "")
      }
    >
      {roblox && (
        <svg
          className="publisher-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5 1 23 6 18 24 0 19Zm5.1 8.6-1.3 4.6 4.6 1.3 1.3-4.6Z"
          />
        </svg>
      )}
      {outline && <UsersRound aria-hidden="true" className="publisher-icon" />}
      {children}
      <ArrowUpRight aria-hidden="true" className="publisher-icon" />
    </a>
  );
}

function Artwork({
  asset,
  alt,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  className,
}: {
  asset: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <img
      src={"/media/" + asset + "-1672.webp"}
      srcSet={
        "/media/" +
        asset +
        "-768.webp 768w, /media/" +
        asset +
        "-1672.webp 1672w"
      }
      sizes={sizes}
      alt={alt}
      width="1672"
      height="941"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
}

function ParentSite({ year }: { year: number }) {
  usePageMetadata(getPageMetadata("/"));
  return (
    <div className="publisher-theme group-theme">
      <SkipLink />
      <PublisherHeader />
      <main id="main-content" tabIndex={-1}>
        <section
          id="top"
          className="page-shell company-hero"
          aria-labelledby="home-title"
        >
          <div className="company-intro">
            <h1 id="home-title">Drixil Group</h1>
            <p className="company-tagline">Games. Media. Technology.</p>
            <p className="company-summary">
              A creative entertainment company building games, digital media,
              software, and original IP for a global audience.
            </p>
            <div className="action-row">
              <a href="#ecosystem" className="publisher-button">
                Explore the divisions
                <ArrowUpRight aria-hidden="true" className="publisher-icon" />
              </a>
              <a
                href="#current-project"
                className="publisher-button publisher-button--outline"
              >
                View current work
                <ArrowRight aria-hidden="true" className="publisher-icon" />
              </a>
            </div>
          </div>
          <div className="company-mark" aria-hidden="true">
            <img
              src={drixilMetallic}
              alt=""
              width="1254"
              height="1254"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </section>
        <section
          id="ecosystem"
          className="ecosystem-section section-panel"
          aria-labelledby="ecosystem-title"
        >
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="publisher-label accent-text">Ecosystem</p>
                <h2 id="ecosystem-title">Across the group</h2>
              </div>
              <p>
                Complementary divisions creating and supporting a global
                entertainment ecosystem.
              </p>
            </div>
            <div className="division-features">
              <RouteLink to="/interactive" className="interactive-feature">
                <div className="feature-art">
                  <Artwork
                    asset="beyond-90-matchday"
                    alt="Beyond 90 football artwork from Drixil Interactive"
                    priority
                    sizes="(min-width: 1100px) 57vw, 100vw"
                  />
                </div>
                <div className="feature-caption">
                  <div>
                    <h3>Drixil Interactive</h3>
                    <p>Beyond 90 / Currently working on</p>
                  </div>
                  <span className="editorial-link">
                    Explore Interactive
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </span>
                </div>
              </RouteLink>
              <RouteLink to="/studio" className="studio-feature">
                <img
                  src={drixilMetallic}
                  alt=""
                  width="1254"
                  height="1254"
                  loading="lazy"
                  decoding="async"
                />
                <div className="studio-feature-content">
                  <p className="publisher-label accent-text">
                    Creative services
                  </p>
                  <h3>Drixil Studio</h3>
                  <p>Motion design for product showcases and launches.</p>
                  <p className="development-note">Website in development.</p>
                  <span className="editorial-link">
                    Explore Studio
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </span>
                </div>
              </RouteLink>
            </div>
            <div className="division-directory">
              {divisions.slice(2).map((d) => (
                <RouteLink
                  key={d.slug}
                  to={"/" + d.slug}
                  className="division-entry"
                >
                  <div>
                    <h3>{d.name}</h3>
                    <p>{d.descriptor}</p>
                    <span>Website in development</span>
                  </div>
                  <ArrowUpRight aria-hidden="true" size={20} />
                </RouteLink>
              ))}
            </div>
            <p className="ecosystem-note">
              One company. Six focused divisions. Each has its own home and
              identity, connected by one shared standard.
            </p>
          </div>
        </section>
        <section
          id="current-project"
          className="page-shell content-section current-project"
          aria-labelledby="current-project-title"
        >
          <img
            src="/media/beyond-90-640.webp"
            srcSet="/media/beyond-90-640.webp 640w, /media/beyond-90-1254.webp 1254w"
            sizes="(min-width: 768px) 320px, 100vw"
            alt="Beyond 90 Roblox football game icon"
            width="1254"
            height="1254"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="publisher-status">Currently working on</p>
            <h2 id="current-project-title">Beyond 90</h2>
            <p className="large-copy">
              Football is better when every player matters.
            </p>
            <p>
              The first active project from Drixil Interactive: a team football
              experience built for Roblox. Real players. Real roles. Competitive
              clubs, ranked progression, and the feeling of a proper match from
              kickoff to the final whistle.
            </p>
            <ul className="mode-list" aria-label="Beyond 90 modes">
              {beyond90Modes.map((mode) => (
                <li key={mode}>{mode}</li>
              ))}
            </ul>
            <RouteLink to="/interactive" className="publisher-button">
              Explore Drixil Interactive
              <ArrowRight aria-hidden="true" className="publisher-icon" />
            </RouteLink>
          </div>
        </section>
        <section
          className="section-panel content-section"
          aria-labelledby="philosophy-title"
        >
          <div className="page-shell split-section">
            <div>
              <h2 id="philosophy-title">
                We turn imagination into experiences people remember.
              </h2>
              <p>
                Strategy, finance, IP, investment, and shared services connect
                our focused teams. Our long-term vision is an African
                creative-technology group for a global audience.
              </p>
            </div>
            <dl className="principle-list">
              {[
                [
                  "Own",
                  "Build and protect the master brand, subsidiaries, and intellectual property.",
                ],
                [
                  "Fund",
                  "Use service revenue and product growth to finance original IP and software.",
                ],
                [
                  "Scale",
                  "Launch and acquire ventures that share one trusted Drixil identity.",
                ],
              ].map(([title, text]) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <section
          id="roadmap"
          className="page-shell content-section split-section"
          aria-labelledby="roadmap-title"
        >
          <div>
            <h2 id="roadmap-title">
              Service revenue funds IP. IP compounds the company.
            </h2>
            <p>
              Our roadmap sets the direction. Future divisions and expansion
              remain plans, not launched offerings.
            </p>
          </div>
          <ol className="roadmap-list">
            {roadmap.map((item) => (
              <li key={item.phase}>
                <span>{item.phase}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section
          id="contact"
          className="contact-section section-panel"
          aria-labelledby="contact-title"
        >
          <div className="page-shell split-section">
            <div>
              <h2 id="contact-title">Big ideas deserve a serious home.</h2>
              <p>
                Drixil Group sets strategy, develops original products, and
                supports teams building across games, media, software, and
                design.
              </p>
            </div>
            <div className="contact-action">
              <a href={CONTACT_URL} className="publisher-button">
                Contact Drixil
                <ArrowUpRight aria-hidden="true" className="publisher-icon" />
              </a>
              <p>Tell us about your project or partnership.</p>
              <a className="email-link" href={CONTACT_URL}>
                mosesonerhime11@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter year={year} />
    </div>
  );
}

function InteractiveSite({ year }: { year: number }) {
  usePageMetadata(getPageMetadata("/interactive"));
  return (
    <div className="publisher-theme interactive-theme">
      <SkipLink />
      <PublisherHeader division="Interactive" />
      <main id="main-content" tabIndex={-1}>
        <section
          id="games"
          aria-labelledby="lead-game-title"
          className="game-showcase"
        >
          <Artwork
            asset="beyond-90-matchday"
            alt="Beyond 90 matchday artwork, with football players competing in a packed stadium"
            sizes="100vw"
            priority
            className="showcase-art"
          />
          <div className="page-shell showcase-caption">
            <div>
              <p id="lead-game-title" className="publisher-display">
                Beyond 90
              </p>
              <p className="publisher-status">Currently working on</p>
            </div>
            <div className="action-row">
              <ExternalButton href={BEYOND_90_GAME_URL} roblox>
                View game on Roblox
              </ExternalButton>
              <ExternalButton href={ROBLOX_COMMUNITY_URL} outline>
                Roblox community
              </ExternalButton>
            </div>
          </div>
        </section>
        <section
          className="purpose-section section-panel"
          aria-labelledby="interactive-title"
        >
          <div className="page-shell purpose-layout">
            <div>
              <p className="publisher-label">Drixil Interactive</p>
              <h1 id="interactive-title" className="publisher-display">
                <span>Games for players</span>{" "}
                <span className="accent-text">everywhere.</span>
              </h1>
            </div>
            <p>
              Drixil Interactive is an Africa-based game studio building
              original games for a global audience.
            </p>
          </div>
        </section>
        <section
          className="page-shell next-project"
          aria-labelledby="next-project-title"
        >
          <p className="publisher-label">Also in development</p>
          <div className="next-project-layout">
            <a
              href="#volleyball-rally"
              className="next-project-image"
              aria-label="Explore Volleyball Rally"
            >
              <Artwork
                asset="volleyball-rally-spike"
                alt="Volleyball Rally player spiking a blue and yellow volleyball"
                sizes="(min-width: 1100px) 65vw, 100vw"
              />
            </a>
            <div>
              <h2 id="next-project-title" className="publisher-display">
                Volleyball Rally
              </h2>
              <p className="publisher-status publisher-status--blue">
                In development
              </p>
              <a href="#volleyball-rally" className="publisher-text-link">
                Explore the game
                <ArrowRight aria-hidden="true" className="publisher-icon" />
              </a>
            </div>
          </div>
        </section>
        <section
          id="beyond-90"
          className="content-section section-panel"
          aria-labelledby="experience-title"
        >
          <div className="page-shell">
            <div className="project-heading">
              <div className="project-identity">
                <img
                  src="/media/beyond-90-640.webp"
                  alt="Beyond 90 game icon"
                  width="640"
                  height="640"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="publisher-label accent-text">
                    Current focus / Beyond 90
                  </p>
                  <h2 id="experience-title">
                    Football is better when every player matters.
                  </h2>
                </div>
              </div>
              <p>
                Human-first football where one real player controls each
                footballer, from compact 3v3 matches to full 11v11 play. More
                than a football game. A place to belong.
              </p>
            </div>
            <div className="feature-list">
              {beyond90Features.map(({ title, text }) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="modes-row">
              <h3 id="ways-to-play-title">Ways to play</h3>
              <ul className="mode-list" aria-labelledby="ways-to-play-title">
                {beyond90Modes.map((mode) => (
                  <li key={mode}>{mode}</li>
                ))}
              </ul>
            </div>
            <section
              id="media"
              className="game-media"
              aria-labelledby="media-title"
            >
              <div className="section-heading">
                <h3 id="media-title">Inside Beyond 90</h3>
                <p>
                  Promotional artwork showing the direction for competitive
                  matches, team play, and broadcast presentation.
                </p>
              </div>
              <div className="artwork-grid">
                <figure>
                  <Artwork
                    asset="beyond-90-matchday"
                    alt="Beyond 90 players competing in a packed Roblox football stadium"
                  />
                  <figcaption>
                    <span>Real football. Real competition.</span>
                    <span>Matchday artwork</span>
                  </figcaption>
                </figure>
                <figure>
                  <Artwork
                    asset="beyond-90-broadcast"
                    alt="Beyond 90 broadcast camera overlooking a full football pitch"
                  />
                  <figcaption>
                    <span>See every run. Read every play.</span>
                    <span>Broadcast artwork</span>
                  </figcaption>
                </figure>
              </div>
            </section>
            <div className="action-row project-actions">
              <ExternalButton href={BEYOND_90_GAME_URL} roblox>
                View Beyond 90 on Roblox
              </ExternalButton>
              <ExternalButton href={ROBLOX_COMMUNITY_URL} outline>
                Roblox community
              </ExternalButton>
            </div>
          </div>
        </section>
        <section
          id="volleyball-rally"
          className="page-shell content-section volleyball-section"
          aria-labelledby="volleyball-title"
        >
          <div className="volleyball-intro">
            <img
              src="/media/volleyball-rally-icon-640.webp"
              srcSet="/media/volleyball-rally-icon-640.webp 640w, /media/volleyball-rally-icon-1254.webp 1254w"
              sizes="(min-width: 768px) 320px, 100vw"
              alt="Volleyball Rally game icon showing a player spiking a volleyball"
              width="1254"
              height="1254"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="publisher-status publisher-status--blue">
                In development
              </p>
              <h2 id="volleyball-title" className="publisher-display">
                Volleyball Rally
              </h2>
              <p className="large-copy">Easy to learn, hard to master.</p>
              <p>
                Move, choose your intent, aim, and time the contact in fast 3v3
                indoor volleyball. Simple inputs become passes, sets, spikes,
                blocks, serves, and dives through context and timing.
              </p>
              <p>
                Playing solo still gives you a full 3v3 match, with AI athletes
                filling open roster spots.
              </p>
            </div>
          </div>
          <div className="feature-list">
            {[
              [
                "Control",
                "Pass, set, dig, and receive with one contextual intent.",
              ],
              [
                "Attack",
                "Serve, spike, tip, and block when the moment calls for it.",
              ],
              ["Hustle", "Dive for difficult balls and keep the rally alive."],
              [
                "Play your way",
                "Built for mobile, keyboard and mouse, and controller.",
              ],
            ].map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="action-row project-actions">
            <ExternalButton href={VOLLEYBALL_RALLY_GAME_URL} roblox>
              View Volleyball Rally on Roblox
            </ExternalButton>
            <ExternalButton href={ROBLOX_COMMUNITY_URL} outline>
              Roblox community
            </ExternalButton>
          </div>
          <section
            className="game-media"
            aria-labelledby="volleyball-artwork-title"
          >
            <div className="section-heading">
              <h3 id="volleyball-artwork-title">Inside Volleyball Rally</h3>
              <p>Promotional artwork for Volleyball Rally.</p>
            </div>
            <div className="artwork-grid">
              {volleyballRallyGallery.map(({ asset, caption, alt }) => (
                <figure key={asset}>
                  <Artwork asset={"volleyball-rally-" + asset} alt={alt} />
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </section>
        <section
          id="partners"
          className="content-section section-panel"
          aria-labelledby="partners-title"
        >
          <div className="page-shell partner-layout">
            <div>
              <h2 id="partners-title">Our partners</h2>
              <p>Alongside Drixil Interactive.</p>
            </div>
            <a
              href="https://www.novatraxstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Novatrax Studio website (opens in a new tab)"
              className="partner-link"
            >
              <img
                src="/media/novatrax-logo-800.webp"
                srcSet="/media/novatrax-logo-800.webp 800w, /media/novatrax-logo-1600.webp 1600w"
                sizes="(min-width: 768px) 400px, calc(100vw - 48px)"
                alt="Novatrax Studio"
                width="1600"
                height="246"
                loading="lazy"
                decoding="async"
              />
              <span>
                Visit Novatrax Studio
                <ArrowUpRight aria-hidden="true" size={18} />
              </span>
            </a>
          </div>
        </section>
        <section
          id="community"
          className="page-shell content-section"
          aria-labelledby="community-title"
        >
          <div className="section-heading">
            <div>
              <h2 id="community-title">All our game content, in one place.</h2>
              <p>
                Follow Drixil Interactive for progress from Beyond 90,
                Volleyball Rally, and the games that come next.
              </p>
            </div>
          </div>
          <div className="follow-layout">
            <nav className="social-list" aria-label="Follow Drixil Interactive">
              {interactiveSocials.map(({ name, handle, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"Follow Drixil Interactive on " + name}
                >
                  <Icon aria-hidden="true" size={22} />
                  <span>
                    <strong>{name}</strong>
                    <span>{handle}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" size={20} />
                </a>
              ))}
            </nav>
            <nav className="community-list" aria-label="Game communities">
              {communityLinks.map(({ name, text, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon aria-hidden="true" size={22} />
                  <span>
                    <strong>{name}</strong>
                    <span>{text}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" size={20} />
                </a>
              ))}
            </nav>
          </div>
        </section>
        <section
          className="section-panel content-section"
          aria-labelledby="interactive-closing-title"
        >
          <div className="page-shell split-section">
            <h2 id="interactive-closing-title">
              Roblox is our starting point.
            </h2>
            <div>
              <p>{INTERACTIVE_MISSION}</p>
              <p>
                Our long-term ambition is a focused portfolio of original games,
                with room to grow into PC, mobile, and console development,
                alongside future publishing. We aim to put quality before
                quantity, using playtesting and player feedback to build games
                and communities that last.
              </p>
              <RouteLink to="/" className="editorial-link">
                Explore Drixil Group
                <ArrowUpRight aria-hidden="true" size={18} />
              </RouteLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter year={year} division="Interactive" />
    </div>
  );
}

function DivisionPlaceholder({
  division,
  year,
}: {
  division: Division;
  year: number;
}) {
  usePageMetadata(getPageMetadata("/" + division.slug));
  return (
    <div
      className="publisher-theme group-theme division-page"
      style={{ "--division-accent": division.accent } as CSSProperties}
    >
      <SkipLink />
      <PublisherHeader division={division.shortName} />
      <main id="main-content" tabIndex={-1}>
        <section
          className="page-shell division-hero"
          aria-labelledby="division-title"
        >
          <div>
            <p className="publisher-status">Website in development</p>
            <h1 id="division-title">{division.name}</h1>
            <p className="large-copy">{division.descriptor}</p>
            <div className="action-row">
              <a href={CONTACT_URL} className="publisher-button">
                Contact Drixil
                <ArrowUpRight aria-hidden="true" className="publisher-icon" />
              </a>
              <RouteLink
                to="/"
                className="publisher-button publisher-button--outline"
              >
                All divisions
                <ArrowRight aria-hidden="true" className="publisher-icon" />
              </RouteLink>
            </div>
          </div>
          <div className="division-brand-art" aria-hidden="true">
            <img
              src={drixilMetallic}
              alt=""
              width="1254"
              height="1254"
              decoding="async"
            />
          </div>
        </section>
        {division.slug === "studio" && (
          <section
            className="section-panel content-section"
            aria-labelledby="studio-motion-title"
          >
            <div className="page-shell split-section">
              <div>
                <h2 id="studio-motion-title">Motion design</h2>
                <p>
                  Motion design for product showcases, launches, trailers, and
                  brand campaigns.
                </p>
              </div>
              <div>
                <p>
                  Portfolio links and project content will be added as they
                  become available.
                </p>
                <ul className="service-list">
                  <li>Product showcases and launches</li>
                  <li>Trailers and brand campaigns</li>
                  <li>Editing, branding, UI/UX, web, and graphic design</li>
                </ul>
                <a href={CONTACT_URL} className="editorial-link">
                  Discuss your project
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter year={year} division={division.shortName} />
    </div>
  );
}

function NotFoundSite({ pathname, year }: { pathname: string; year: number }) {
  usePageMetadata(getPageMetadata(pathname));
  return (
    <div className="publisher-theme group-theme division-page">
      <SkipLink />
      <PublisherHeader division="Group" compact />
      <main id="main-content" tabIndex={-1} className="page-shell not-found">
        <p className="publisher-label">404 / Page not found</p>
        <h1>This page is outside the Drixil ecosystem.</h1>
        <p>The address may have changed, or the page may no longer exist.</p>
        <RouteLink to="/" className="publisher-button">
          Return to Drixil Group
          <ArrowRight aria-hidden="true" className="publisher-icon" />
        </RouteLink>
      </main>
      <SiteFooter year={year} />
    </div>
  );
}

function App({
  initialPathname,
  year,
}: {
  initialPathname: string;
  year: number;
}) {
  const [pathname, setPathname] = useState(() =>
    normalizePathname(initialPathname),
  );
  const previousPath = useRef(pathname);
  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
  }, [pathname]);
  useEffect(() => {
    const syncPath = () =>
      setPathname(normalizePathname(window.location.pathname));
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);
  const activeDivision = divisions.find(
    (division) => "/" + division.slug === pathname,
  );
  if (activeDivision?.slug === "interactive")
    return <InteractiveSite year={year} />;
  if (activeDivision)
    return (
      <DivisionPlaceholder
        key={activeDivision.slug}
        division={activeDivision}
        year={year}
      />
    );
  if (pathname === "/") return <ParentSite year={year} />;
  return <NotFoundSite pathname={pathname} year={year} />;
}

export default App;
