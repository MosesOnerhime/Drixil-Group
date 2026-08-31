import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
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
  Play,
  Sparkles,
  Store,
  Trophy,
  UsersRound,
  WandSparkles,
  X,
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
import drixilFlatBlack from "./assets/brand/drixil-flat-black.jpeg";
import drixilMetallic from "./assets/brand/drixil-metallic.jpeg";

const SITE_ORIGIN = "https://drixil-group.vercel.app";
const DEFAULT_DESCRIPTION =
  "Drixil Group is a creative entertainment company building interactive entertainment, digital media, software, original IP, and consumer brands.";

type PageMetadata = {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  noIndex?: boolean;
};

function setMeta(selector: string, attribute: "content" | "href", value: string) {
  const element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  element?.setAttribute(attribute, value);
}

function usePageMetadata({ title, description, pathname, image = "/og.png", noIndex = false }: PageMetadata) {
  useEffect(() => {
    const url = `${SITE_ORIGIN}${pathname === "/" ? "/" : pathname}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_ORIGIN}${image}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);
    setMeta('meta[name="robots"]', "content", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta('link[rel="canonical"]', "href", url);
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
    descriptor: "Roblox games, future PC/mobile games, and publishing.",
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
    descriptor: "Editing, motion graphics, commercials, trailers, branding, UI/UX, web, and graphic design.",
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
    descriptor: "Future publishing, investment, acquisitions, and venture building.",
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

const beyond90Modes = ["3v3", "5v5", "7v7", "11v11", "Ranked", "Clubs", "Street", "Training"];

const beyond90Features: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: UsersRound,
    title: "Real-player football",
    text: "Teamwork-led football where the pitch is controlled by real Roblox players, not a single-avatar fantasy.",
  },
  {
    icon: Trophy,
    title: "Clubs and ranked progression",
    text: "Persistent clubs, seasons, promotion and relegation, tournaments, and player reputation.",
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

const beyond90Socials: Array<{ name: string; handle: string; href: string; icon: LucideIcon }> = [
  {
    name: "Discord",
    handle: "Join the server",
    href: "https://discord.gg/63ZZBdW8p",
    icon: MessageCircle,
  },
  {
    name: "Instagram",
    handle: "@beyond90_studio",
    href: "https://www.instagram.com/beyond90_studio?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
    icon: Instagram,
  },
  {
    name: "TikTok",
    handle: "@beyond90.dev",
    href: "https://www.tiktok.com/@beyond90.dev?is_from_webapp=1&sender_device=pc",
    icon: Music2,
  },
  {
    name: "WhatsApp",
    handle: "Join the community chat",
    href: "https://chat.whatsapp.com/Hg51qcoU6EN2bEOeqGliex?mode=gi_t",
    icon: Phone,
  },
];

function RouteLink({ to, className, children, ariaLabel }: { to: string; className?: string; children: ReactNode; ariaLabel?: string }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.history.pushState({}, "", to);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <a href={to} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  );
}

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-volt px-4 py-3 text-sm font-bold text-black shadow-lg transition-transform focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}

function DrixilNavLockup() {
  return (
    <span className="flex items-center gap-3">
      <span
        className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black p-1 shadow-[0_8px_24px_rgba(123,92,255,0.18)]"
        aria-hidden="true"
      >
        <img
          src="/media/drixil-mark-white.webp"
          alt=""
          width="256"
          height="256"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="leading-none">
        <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white">Drixil</span>
        <span className="mt-1 block text-[0.48rem] font-medium uppercase tracking-[0.32em] text-white/65">Group</span>
      </span>
    </span>
  );
}

function BrandLink() {
  return (
    <RouteLink to="/" className="inline-flex items-center" ariaLabel="Drixil Group home">
      <DrixilNavLockup />
    </RouteLink>
  );
}

function ParentSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navLinks = [
    ["Ecosystem", "#ecosystem"],
    ["Current project", "#current-project"],
    ["Roadmap", "#roadmap"],
    ["Contact", "#contact"],
  ];

  usePageMetadata({
    title: "Drixil Group | Creative Entertainment and Technology",
    description: DEFAULT_DESCRIPTION,
    pathname: "/",
  });

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-white">
      <SkipLink />
      <header>
      <nav aria-label="Primary navigation" className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          <a href="#top" className="inline-flex items-center" aria-label="Drixil Group home">
            <DrixilNavLockup />
          </a>
          <div className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.22em] text-white/70 lg:flex">
            {navLinks.map(([label, href]) => (
              <a key={href} className="transition hover:text-white" href={href}>
                {label}
              </a>
            ))}
          </div>
          <a
            href="mailto:mosesonerhime11@gmail.com"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-drixil hover:text-white sm:inline-flex"
          >
            Start a brief
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            ref={menuButtonRef}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-white transition hover:border-white hover:bg-white/10 lg:hidden"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div id="mobile-navigation" className="border-t border-white/10 bg-black/95 px-4 py-4 shadow-2xl lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              {navLinks.map(([label, href]) => (
                <a key={href} className="min-h-12 border border-white/10 bg-white/[0.035] px-4 py-3" href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
              <a
                href="mailto:mosesonerhime11@gmail.com"
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-black"
                onClick={() => setMenuOpen(false)}
              >
                Start a brief
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
      </header>

      <main id="main-content" tabIndex={-1}>

      <section id="top" aria-labelledby="home-title" className="relative flex min-h-[88svh] scroll-mt-14 items-end border-b border-white/10 sm:min-h-[82svh]">
        <img src={drixilMetallic} alt="" width="1254" height="1254" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.32] sm:opacity-[0.48]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(123,92,255,0.3),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.62),rgba(0,0,0,0.9)_52%,rgba(0,0,0,0.98))] sm:bg-[radial-gradient(circle_at_20%_20%,rgba(123,92,255,0.28),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.95),rgba(0,0,0,0.66)_45%,rgba(0,0,0,0.38))]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 pb-10 pt-24 sm:gap-10 sm:px-6 sm:pb-12 sm:pt-28 lg:grid-cols-[1.05fr_0.7fr] lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 border border-white/12 bg-white/5 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/70 sm:mb-6 sm:text-xs sm:tracking-[0.22em]">
              <Sparkles className="h-4 w-4 shrink-0 text-drixil" />
              Where ideas become interactive
            </div>
            <h1 id="home-title" className="max-w-5xl text-[2.75rem] font-semibold leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">Drixil Group</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:mt-7 sm:text-xl sm:leading-8">
              A creative entertainment company building interactive entertainment, digital media, software, original IP, and consumer brands for a global audience.
            </p>
            <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
              <a href="#ecosystem" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-drixil px-5 py-3 text-sm font-bold text-white shadow-violet transition hover:bg-white hover:text-black">
                Explore the divisions
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#current-project" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/16 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">
                <Play className="h-4 w-4" />
                See what we’re building
              </a>
            </div>
          </div>
          <div className="grid content-end gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["Parent Company", "Strategy, finance, IP, investment, and shared services."],
              ["Creative Technology", "Games, software, media, automation, design, and story worlds."],
              ["Long-Term Vision", "Build an African creative-technology group for a global audience."],
            ].map(([title, text]) => (
              <div key={title} className="border border-white/12 bg-black/55 p-4 backdrop-blur-md sm:p-5">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-drixil sm:text-xs sm:tracking-[0.22em]">{title}</p>
                <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="philosophy-title" className="border-b border-white/10 bg-white text-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.72fr_1fr] lg:px-8">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-drixil sm:text-xs sm:tracking-[0.24em]">The philosophy</p>
            <h2 id="philosophy-title" className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">We turn imagination into experiences people remember.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Own", "Build and protect the master brand, subsidiaries, and intellectual property."],
              ["Fund", "Use service revenue and product growth to finance original IP and software."],
              ["Scale", "Launch and acquire ventures that share one trusted Drixil identity."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-black/10 p-4 sm:p-5">
                <p className="text-lg font-semibold sm:text-xl">{title}</p>
                <p className="mt-3 text-sm leading-6 text-black/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" aria-labelledby="ecosystem-title" className="relative scroll-mt-14 border-b border-white/10 bg-coal py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-drixil sm:text-xs sm:tracking-[0.24em]">Independent division websites</p>
              <h2 id="ecosystem-title" className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-6xl">One company. Six focused divisions.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/75">Each Drixil division has its own home, focus, and identity—connected by one shared standard and one parent company.</p>
          </div>

          <div className="mt-9 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
            {divisions.map((division) => {
              const Icon = division.icon;
              return (
                <RouteLink key={division.name} to={`/${division.slug}`} className="group flex min-h-[230px] flex-col justify-between bg-coal p-5 transition hover:bg-white hover:text-black sm:min-h-[270px] sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className={`h-6 w-6 shrink-0 sm:h-7 sm:w-7 ${division.accentClass} transition group-hover:text-black`} />
                    <span className="flex items-center gap-2 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white/65 transition group-hover:text-black/60">
                      {division.stage === "active" ? "Active" : "In development"}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-white/55 transition group-hover:text-black/60">{division.number}</p>
                    <h3 className="text-xl font-semibold sm:text-2xl">{division.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/75 transition group-hover:text-black/70 sm:mt-4">{division.descriptor}</p>
                  </div>
                </RouteLink>
              );
            })}
          </div>
        </div>
      </section>

      <section id="current-project" aria-labelledby="current-project-title" className="scroll-mt-14 border-b border-white/10 bg-ink py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-volt sm:text-xs sm:tracking-[0.24em]">
                <span className="h-2 w-2 rounded-full bg-volt shadow-[0_0_14px_#d6ff4b]" />
                Currently working on
              </div>
              <h2 id="current-project-title" className="mt-4 text-3xl font-semibold sm:text-6xl">Beyond 90</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/75">The first active project from Drixil Interactive—an ambitious team football experience built for Roblox.</p>
          </div>

          <RouteLink to="/interactive" ariaLabel="Explore Beyond 90 on Drixil Interactive" className="group grid overflow-hidden rounded-3xl border border-white/10 bg-smoke lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative aspect-square overflow-hidden sm:min-h-[600px] lg:aspect-auto">
              <img
                src="/media/beyond-90-1254.webp"
                srcSet="/media/beyond-90-640.webp 640w, /media/beyond-90-1254.webp 1254w"
                sizes="(min-width: 1024px) 55vw, 100vw"
                alt="Beyond 90 Roblox football game artwork"
                width="1254"
                height="1254"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/25" />
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-volt">Drixil Interactive / 001</span>
                <ArrowUpRight className="h-6 w-6 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="mt-14 lg:mt-0">
                <p className="text-2xl font-semibold leading-tight sm:text-4xl">Football is better when every player matters.</p>
                <p className="mt-5 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">Real players. Real roles. Competitive clubs, ranked progression, and the feeling of a proper match—from kickoff to the final whistle.</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {beyond90Modes.slice(0, 6).map((mode) => (
                    <span key={mode} className="border border-white/12 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/65">{mode}</span>
                  ))}
                </div>
              </div>
              <span className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-white">Enter Drixil Interactive <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </div>
          </RouteLink>
        </div>
      </section>

      <section id="roadmap" aria-labelledby="roadmap-title" className="scroll-mt-14 border-b border-white/10 bg-white py-14 text-black sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1fr]">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-drixil sm:text-xs sm:tracking-[0.24em]">5-year roadmap</p>
              <h2 id="roadmap-title" className="mt-4 text-3xl font-semibold leading-tight sm:text-6xl">Service revenue funds IP. IP compounds the company.</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10">
              {roadmap.map((item) => (
                <article key={item.phase} className="grid gap-4 bg-white p-5 sm:grid-cols-[92px_1fr] sm:gap-5 sm:p-6">
                  <p className="text-3xl font-semibold text-drixil sm:text-4xl">{item.phase}</p>
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/70">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-14 bg-coal py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white p-4 sm:p-8">
            <img src={drixilFlatBlack} alt="Drixil Group logo" width="1254" height="1254" loading="lazy" decoding="async" className="mx-auto max-h-[320px] w-full object-contain sm:max-h-[420px]" />
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white p-5 text-black sm:p-8">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-drixil sm:text-xs sm:tracking-[0.24em]">Build with Drixil</p>
              <h2 id="contact-title" className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">Big ideas deserve a serious home.</h2>
              <p className="mt-5 text-sm leading-6 text-black/70 sm:text-base sm:leading-7">Drixil Group sets strategy, develops original products, and supports the focused teams building across games, media, software, and design.</p>
            </div>
            <a href="mailto:mosesonerhime11@gmail.com" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-drixil sm:mt-10">
              Contact Drixil
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      </main>

      <footer className="border-t border-white/10 bg-black px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs uppercase tracking-[0.18em] text-white/65 sm:flex-row">
          <p>© {new Date().getFullYear()} Drixil Group</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {divisions.map((division) => <RouteLink key={division.slug} to={`/${division.slug}`} className="transition hover:text-white">{division.shortName}</RouteLink>)}
            <a href="mailto:mosesonerhime11@gmail.com" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InteractiveSite() {
  usePageMetadata({
    title: "Beyond 90 | Drixil Interactive",
    description: "Beyond 90 is Drixil Interactive’s competitive Roblox football experience, currently in development.",
    pathname: "/interactive",
    image: "/media/beyond-90-1254.webp",
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070905] text-white selection:bg-volt selection:text-black">
      <SkipLink />
      <header>
      <nav aria-label="Drixil Interactive navigation" className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandLink />
          <div className="hidden items-center gap-6 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/65 lg:flex">
            <a href="#game" className="transition hover:text-white">Experience</a>
            <a href="#media" className="transition hover:text-white">Media</a>
            <a href="#community" className="transition hover:text-white">Community</a>
          </div>
          <RouteLink to="/" ariaLabel="Return to all Drixil Group divisions" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/65 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">All divisions</span>
          </RouteLink>
        </div>
      </nav>
      </header>

      <main id="main-content" tabIndex={-1}>

      <section aria-labelledby="interactive-title" className="relative border-b border-white/10 pt-16 lg:min-h-svh">
        <div className="mx-auto grid max-w-[1600px] lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-10 flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-16 lg:px-14 xl:px-20">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/65">Drixil Interactive presents</p>
            <div className="mt-8 inline-flex w-fit items-center gap-2 border border-volt/30 bg-volt/10 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-volt sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-volt shadow-[0_0_14px_#d6ff4b]" />
              Currently working on
            </div>
            <h1 id="interactive-title" className="mt-5 text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-8xl lg:text-[7.8rem]">Beyond<br /><span className="text-volt">90</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">A competitive Roblox football experience where every position is played by a real person—and every touch can change the match.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#game" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-volt px-5 py-3 text-sm font-bold text-black transition hover:bg-white">
                Discover the game
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.roblox.com/share/g/451345789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-volt hover:text-volt"
              >
                <Gamepad2 className="h-4 w-4" />
                Join on Roblox
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:min-h-0">
            <img
              src="/media/beyond-90-1254.webp"
              srcSet="/media/beyond-90-640.webp 640w, /media/beyond-90-1254.webp 1254w"
              sizes="(min-width: 1024px) 60vw, 100vw"
              alt="Beyond 90 Roblox football game artwork"
              width="1254"
              height="1254"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070905] lg:bg-gradient-to-r lg:from-[#070905] lg:via-transparent lg:to-transparent" />
            <span className="absolute bottom-5 right-5 border border-white/15 bg-black/70 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur-md sm:bottom-8 sm:right-8">Project 001 / Roblox</span>
          </div>
        </div>
      </section>

      <section id="game" aria-labelledby="experience-title" className="scroll-mt-16 border-b border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-volt">The experience</p>
              <h2 id="experience-title" className="mt-5 text-4xl font-semibold leading-[1.02] sm:text-6xl">More than a football game. A place to belong.</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {beyond90Features.map(({ icon: Icon, title, text }) => (
                <article key={title} className="bg-[#0b0d08] p-5 sm:p-7">
                  <Icon className="h-6 w-6 text-volt" />
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="media" aria-labelledby="media-title" className="scroll-mt-16 border-b border-white/10 bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-volt">Inside Beyond 90</p>
              <h2 id="media-title" className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">See the vision in play.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/75 sm:text-base sm:leading-7">Competitive matches, coordinated team play, and a broadcast presentation built to make every moment feel important.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <figure className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d08]">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/media/beyond-90-matchday-1672.webp"
                  srcSet="/media/beyond-90-matchday-768.webp 768w, /media/beyond-90-matchday-1672.webp 1672w"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Beyond 90 players competing in a packed Roblox football stadium"
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 p-4 sm:p-5">
                <span className="text-sm font-semibold">Real football. Real competition.</span>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-volt">Matchday</span>
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d08]">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/media/beyond-90-broadcast-1672.webp"
                  srcSet="/media/beyond-90-broadcast-768.webp 768w, /media/beyond-90-broadcast-1672.webp 1672w"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Beyond 90 broadcast camera overlooking a full football pitch"
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 p-4 sm:p-5">
                <span className="text-sm font-semibold">See every run. Read every play.</span>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-volt">Broadcast view</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="ways-to-play-title" className="border-b border-white/10 bg-volt py-12 text-black sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="ways-to-play-title" className="text-xs font-black uppercase tracking-[0.25em]">Ways to play</h2>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-black/20 sm:grid-cols-4 lg:grid-cols-8">
            {beyond90Modes.map((mode, index) => (
              <div key={mode} className="bg-volt p-4 sm:p-5">
                <span className="text-[0.6rem] font-bold text-black/55">0{index + 1}</span>
                <p className="mt-8 text-lg font-black uppercase sm:text-xl">{mode}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" aria-labelledby="community-title" className="scroll-mt-16 border-b border-white/10 bg-[#0b0d08] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-volt">Beyond the pitch</p>
              <h2 id="community-title" className="mt-5 text-4xl font-semibold leading-[1.02] sm:text-6xl">Join the Beyond 90 community.</h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/75">Follow development, meet future teammates, share feedback, and be there for every milestone on the road to kickoff.</p>
              <a
                href="https://www.roblox.com/share/g/451345789"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-volt px-5 py-3 text-sm font-bold text-black transition hover:bg-white"
              >
                <Gamepad2 className="h-5 w-5" />
                Join the Roblox community
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {beyond90Socials.map(({ name, handle, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Beyond 90 on ${name}`}
                  className="group flex min-h-44 flex-col justify-between bg-[#070905] p-5 transition hover:bg-white hover:text-black sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-6 w-6 text-volt transition group-hover:text-black" />
                    <ArrowUpRight className="h-5 w-5 text-white/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="mt-2 text-sm text-white/70 transition group-hover:text-black/65">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="interactive-closing-title" className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-volt">Drixil Interactive</p>
            <h2 id="interactive-closing-title" className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">We build games that feel bigger together.</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-base leading-7 text-white/75">Beyond 90 is our current focus. More from Drixil Interactive will be revealed when it is ready.</p>
            <RouteLink to="/" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-white/25 pb-2 text-sm font-bold transition hover:border-volt hover:text-volt">
              Explore Drixil Group
              <ArrowUpRight className="h-4 w-4" />
            </RouteLink>
          </div>
        </div>
      </section>

      </main>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.18em] text-white/65 sm:flex-row">
          <p>© {new Date().getFullYear()} Drixil Interactive</p>
          <p>A Drixil Group division</p>
        </div>
      </footer>
    </div>
  );
}

function DivisionPlaceholder({ division }: { division: Division }) {
  const Icon = division.icon;

  usePageMetadata({
    title: `${division.name} | Drixil Group`,
    description: `${division.name}: ${division.descriptor} The division website is currently in development.`,
    pathname: `/${division.slug}`,
  });

  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-[#050505] text-white" style={{ "--division-accent": division.accent } as CSSProperties}>
      <SkipLink />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[var(--division-accent)] opacity-[0.08] blur-[120px]" />
      <header className="relative z-10">
      <nav aria-label={`${division.name} navigation`} className="border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandLink />
          <RouteLink to="/" ariaLabel="Return to all Drixil Group divisions" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">All divisions</span>
          </RouteLink>
        </div>
      </nav>
      </header>

      <main id="main-content" tabIndex={-1} className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15" style={{ color: division.accent }}><Icon className="h-6 w-6" /></span>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/65">Division {division.number}</p>
        </div>
        <h1 className="mt-10 max-w-5xl text-5xl font-semibold leading-[0.94] sm:text-7xl lg:text-8xl">{division.name}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">{division.descriptor}</p>
        <div className="mt-14 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em]" style={{ color: division.accent }}>
          <span className="h-2 w-2 rounded-full bg-[var(--division-accent)]" />
          Website in development
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:mosesonerhime11@gmail.com" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-[var(--division-accent)]">
            Contact Drixil
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <RouteLink to="/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold transition hover:border-white hover:bg-white/10">
            Return to Drixil Group
            <ArrowRight className="h-4 w-4" />
          </RouteLink>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.18em] text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {division.name}</p>
          <p>A Drixil Group division</p>
        </div>
      </footer>
    </div>
  );
}

function NotFoundSite() {
  usePageMetadata({
    title: "Page not found | Drixil Group",
    description: "The page you requested could not be found.",
    pathname: window.location.pathname,
    noIndex: true,
  });

  return (
    <div className="flex min-h-svh flex-col bg-ink text-white">
      <SkipLink />
      <header className="border-b border-white/10 bg-black">
        <nav aria-label="Page navigation" className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandLink />
          <RouteLink to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Home
          </RouteLink>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1} className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-drixil">404 / Page not found</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight sm:text-7xl">This page is outside the Drixil ecosystem.</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/75">The address may have changed, or the page may no longer exist.</p>
        <RouteLink to="/" className="mt-9 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-drixil hover:text-white">
          Return to Drixil Group
          <ArrowRight className="h-4 w-4" />
        </RouteLink>
      </main>
    </div>
  );
}

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname.replace(/\/+$/, "") || "/");

  useEffect(() => {
    const syncPath = () => setPathname(window.location.pathname.replace(/\/+$/, "") || "/");
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  const activeDivision = divisions.find((division) => `/${division.slug}` === pathname);
  if (activeDivision?.slug === "interactive") return <InteractiveSite />;
  if (activeDivision) return <DivisionPlaceholder division={activeDivision} />;
  if (pathname === "/") return <ParentSite />;
  return <NotFoundSite />;
}

export default App;
