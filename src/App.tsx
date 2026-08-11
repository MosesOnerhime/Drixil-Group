import {
  ArrowUpRight,
  BadgeDollarSign,
  BrainCircuit,
  Clapperboard,
  Gamepad2,
  Menu,
  MousePointer2,
  Orbit,
  PenTool,
  Play,
  Sparkles,
  Store,
  Trophy,
  UsersRound,
  WandSparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import furrealLogo from "./assets/brand/furreal-logo.jpeg";
import furrealMark from "./assets/brand/furreal-mark.jpeg";
import logoBoard from "./assets/brand/logo-board-02.jpeg";

const ventures = [
  {
    name: "Furreal Interactive",
    descriptor: "Roblox games, future PC/mobile games, and publishing.",
    icon: Gamepad2,
    accent: "text-furreal",
  },
  {
    name: "Furreal Studio",
    descriptor: "Editing, motion graphics, commercials, trailers, branding, UI/UX, web, and graphic design.",
    icon: PenTool,
    accent: "text-cyan",
  },
  {
    name: "Furreal Labs",
    descriptor: "AI, software, SaaS, automation, and internal tools.",
    icon: BrainCircuit,
    accent: "text-volt",
  },
  {
    name: "Furreal Originals",
    descriptor: "Original IP, animation, stories, music, and worlds.",
    icon: Clapperboard,
    accent: "text-furreal",
  },
  {
    name: "Furreal Store",
    descriptor: "Merchandise, apparel, accessories, and fan objects.",
    icon: Store,
    accent: "text-cyan",
  },
  {
    name: "Furreal Ventures",
    descriptor: "Future publishing, investment, acquisitions, and venture building.",
    icon: BadgeDollarSign,
    accent: "text-volt",
  },
];

const roadmap = [
  {
    phase: "01",
    title: "Launch the Engine",
    text: "Launch Furreal Studio and Furreal Interactive. Build cash flow through creative services while growing Roblox games and community.",
  },
  {
    phase: "02",
    title: "Expand the Audience",
    text: "Launch Furreal Store and Furreal Labs once revenue, trust, and fan demand are established.",
  },
  {
    phase: "03",
    title: "Own the Worlds",
    text: "Move into Furreal Originals and a creator network for owned stories, characters, and media.",
  },
  {
    phase: "04",
    title: "Compound the Portfolio",
    text: "Explore publishing, investments, acquisitions, and shared infrastructure through Furreal Ventures.",
  },
];

const beyond90Modes = ["3v3", "5v5", "7v7", "11v11", "Ranked", "Clubs", "Street", "Training"];

const navLinks = [
  ["Ecosystem", "#ecosystem"],
  ["Interactive", "#interactive"],
  ["Roadmap", "#roadmap"],
  ["Contact", "#contact"],
];

const beyond90Features: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: UsersRound,
    title: "Real-player football",
    text: "Teamwork-led football where the pitch is controlled by real Roblox players, not a single avatar fantasy.",
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-ink text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Furreal Productions home">
            <img src={furrealMark} alt="" className="h-8 w-8 rounded-xl object-cover shadow-violet sm:h-9 sm:w-9" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white sm:text-sm sm:tracking-[0.34em]">Furreal</span>
          </a>
          <div className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.22em] text-white/60 md:flex">
            {navLinks.map(([label, href]) => (
              <a key={href} className="transition hover:text-white" href={href}>
                {label}
              </a>
            ))}
          </div>
          <a
            href="mailto:mosesonerhime11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-furreal hover:text-white sm:inline-flex"
          >
            Start a brief
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white md:hidden"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-4 py-4 shadow-2xl md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  className="min-h-12 border border-white/10 bg-white/[0.035] px-4 py-3 transition hover:border-furreal hover:text-white"
                  href={href}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href="mailto:mosesonerhime11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-black"
              >
                Start a brief
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="top" className="relative flex min-h-svh scroll-mt-14 items-end border-b border-white/10 sm:min-h-[86svh]">
        <img src={logoBoard} alt="" className="absolute inset-0 h-full w-full object-cover object-left opacity-[0.32] sm:object-center sm:opacity-[0.48]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(123,92,255,0.3),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.62),rgba(0,0,0,0.9)_52%,rgba(0,0,0,0.98))] sm:bg-[radial-gradient(circle_at_20%_20%,rgba(123,92,255,0.28),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.95),rgba(0,0,0,0.66)_45%,rgba(0,0,0,0.38))]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 pb-10 pt-24 sm:gap-10 sm:px-6 sm:pb-12 sm:pt-28 lg:grid-cols-[1.05fr_0.7fr] lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 border border-white/12 bg-white/5 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/70 sm:mb-6 sm:text-xs sm:tracking-[0.22em]">
              <Sparkles className="h-4 w-4 shrink-0 text-furreal" />
              Where ideas become interactive
            </div>
            <h1 className="max-w-5xl text-[2.75rem] font-semibold leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Furreal Productions
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:mt-7 sm:text-xl sm:leading-8">
              A creative entertainment company building interactive entertainment, digital media, software, original IP, and consumer brands for a global audience.
            </p>
            <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
              <a href="#ecosystem" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-furreal px-5 py-3 text-sm font-bold text-white shadow-violet transition hover:bg-white hover:text-black">
                Explore ecosystem
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#interactive" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/16 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">
                <Play className="h-4 w-4" />
                View Beyond 90
              </a>
            </div>
          </div>
          <div className="grid content-end gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["Parent Company", "Strategy, finance, IP, investment, and shared services."],
              ["Creative Technology", "Games, software, media, automation, design, and story worlds."],
              ["Long-Term Vision", "One of Africa's leading creative technology companies."],
            ].map(([title, text]) => (
              <div key={title} className="border border-white/12 bg-black/55 p-4 backdrop-blur-md sm:p-5">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-furreal sm:text-xs sm:tracking-[0.22em]">{title}</p>
                <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white text-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.72fr_1fr] lg:px-8">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-furreal sm:text-xs sm:tracking-[0.24em]">The philosophy</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
              We turn imagination into experiences people remember.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Own", "Build and protect the master brand, subsidiaries, and intellectual property."],
              ["Fund", "Use service revenue and product growth to finance original IP and software."],
              ["Scale", "Launch and acquire ventures that share one trusted Furreal identity."],
            ].map(([title, text]) => (
              <article key={title} className="border border-black/10 p-4 sm:p-5">
                <p className="text-lg font-semibold sm:text-xl">{title}</p>
                <p className="mt-3 text-sm leading-6 text-black/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="relative scroll-mt-14 border-b border-white/10 bg-coal py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-furreal sm:text-xs sm:tracking-[0.24em]">Brand architecture</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-6xl">
                One mark. Multiple ventures. Shared momentum.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/60">
              Furreal uses a branded-house system: the star logo and typography stay consistent while each business line carries its own descriptor.
            </p>
          </div>

          <div className="mt-9 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
            {ventures.map((venture) => {
              const Icon = venture.icon;
              return (
                <article key={venture.name} className="group bg-coal p-5 transition hover:bg-white hover:text-black sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className={`h-6 w-6 shrink-0 sm:h-7 sm:w-7 ${venture.accent} transition group-hover:text-black`} />
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition group-hover:text-black" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold sm:mt-10 sm:text-2xl">{venture.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60 transition group-hover:text-black/60 sm:mt-4">{venture.descriptor}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="interactive" className="scroll-mt-14 border-b border-white/10 bg-ink py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative min-h-[560px] overflow-hidden border border-white/10 bg-smoke sm:min-h-[520px]">
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(123,92,255,0.34),transparent_35%),radial-gradient(circle_at_74%_18%,rgba(85,230,255,0.18),transparent_25%)]" />
            <div className="absolute left-5 right-5 top-5 flex items-center gap-3 sm:left-8 sm:right-8 sm:top-8">
              <img src={furrealMark} alt="" className="h-10 w-10 shrink-0 rounded-xl object-cover sm:h-11 sm:w-11" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 sm:text-sm sm:tracking-[0.24em]">Furreal Interactive</span>
            </div>
            <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8">
              <div className="mb-6 flex flex-wrap gap-2 sm:mb-7">
                {beyond90Modes.map((mode) => (
                  <span key={mode} className="border border-white/12 bg-black/40 px-2.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/75 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
                    {mode}
                  </span>
                ))}
              </div>
              <h2 className="text-4xl font-semibold leading-none sm:text-7xl">Beyond 90</h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                The definitive football platform on Roblox: every player on the pitch is real, every mode feeds identity, and every match is built for social, competitive moments.
              </p>
            </div>
          </div>

          <div className="grid content-center gap-4">
            {beyond90Features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="flex gap-4 border border-white/10 bg-white/[0.035] p-4 sm:gap-5 sm:p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center bg-furreal text-white sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="scroll-mt-14 border-b border-white/10 bg-white py-14 text-black sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1fr]">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-furreal sm:text-xs sm:tracking-[0.24em]">5-year roadmap</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-6xl">
                Service revenue funds IP. IP compounds the company.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10">
              {roadmap.map((item) => (
                <article key={item.phase} className="grid gap-4 bg-white p-5 sm:grid-cols-[92px_1fr] sm:gap-5 sm:p-6">
                  <p className="text-3xl font-semibold text-furreal sm:text-4xl">{item.phase}</p>
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/60">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-coal py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div className="border border-white/10 bg-black p-4 sm:p-8">
            <img src={furrealLogo} alt="Furreal Productions logo" className="mx-auto max-h-[320px] w-full object-contain sm:max-h-[420px]" />
          </div>
          <div id="contact" className="flex scroll-mt-14 flex-col justify-between border border-white/10 bg-white p-5 text-black sm:p-8">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-furreal sm:text-xs sm:tracking-[0.24em]">Investment opportunity</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                A diversified creative technology ecosystem with recurring revenue potential.
              </h2>
              <p className="mt-5 text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                Furreal Productions owns the master brand, sets strategy, manages capital allocation, and provides shared services across games, media, software, merchandise, and original entertainment.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2">
              <a
                href="mailto:mosesonerhime11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-furreal"
              >
                Contact Furreal
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#top" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-center text-sm font-bold text-black transition hover:border-black hover:bg-black hover:text-white">
                Back to top
                <Orbit className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.18em] text-white/45 sm:flex-row">
          <p>Furreal Productions</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Interactive</span>
            <span>Studio</span>
            <span>Labs</span>
            <span>Originals</span>
            <span>Ventures</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
