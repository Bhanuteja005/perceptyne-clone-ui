# Perceptyne — UI Clone

A high-fidelity, multi-page clone of [perceptyne.com](https://www.perceptyne.com/) —
a futuristic robotics / AI brand site.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (custom dark + violet design system, single Manrope typeface)
- **Framer Motion** (scroll reveals, hover glows, marquees, breathing animations)
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (stop `dev` first — both use ./.next)
```

## Pages

| Route      | Sections |
|------------|----------|
| `/`        | Hero · Quote band · Robots Built for the Real World · PR-Phi · Automation · Why Perceptyne Exists · Built for Real Workflows · Dream/Discover/Build · Latest News · Footer |
| `/about`   | Hero · Our Mission · Our Values (cycling dichotomies) · Backed by Visionaries · The Team · Project CTA · Footer |
| `/contact` | Contact form + direct details · Footer |

The fixed **Navbar** (colour-adaptive logo + Contact pill) and floating **BottomNav**
(`＋ MENU` → HOME / ABOUT / PRODUCTS panel / CAREERS) are shared across all pages.

## Architecture

```
app/
  layout.tsx              Root layout + Manrope font
  globals.css             Tailwind + design tokens
  page.tsx                Home (stacked-parallax panels)
  about/page.tsx          About
  contact/page.tsx        Contact
components/
  Navbar.tsx              Fixed top bar (adapts to section theme)
  BottomNav.tsx           Floating nav + PRODUCTS panel trigger
  ProductsPanel.tsx       PRODUCTS showcase dropdown
  Hero.tsx QuoteBand.tsx RealWorld.tsx PRPhi.tsx
  Automation.tsx WhyExists.tsx Workflows.tsx DreamBuild.tsx
  News.tsx Footer.tsx     Home sections (DreamBuild reused on About)
  about/                  AboutHero, OurMission, OurValues, BackedBy, Team
  contact/                ContactSection
  ui/                     Logo, ContactButton, PerceptyneGlyph, Reveal
data/site.ts              All copy + constants (nav, specs, products, team, …)
lib/motion.ts             Reusable Framer Motion variants
lib/utils.ts              cn() class helper
public/
  videos/                 hero.mp4, phi.mp4 (+ posters)
  about-hero-banner.webp  About hero robot-arm banner
  icons/                  1–4.gif  (Why-Perceptyne card icons)
  about-cube{,2,3}.gif    Our Values shapes
```

## Notes

- Robot / product visuals use CSS-rendered placeholders and free **Unsplash**
  imagery (no proprietary assets shipped). The hero and PR-Phi background videos
  are free, commercial-use **Mixkit** clips — swap real renders into `public/videos/`.
- The bottom-nav links HOME and ABOUT are real routes; PRODUCTS opens the showcase
  panel; the contact form is front-end only (no backend wired).
- `assets/` holds design-reference screenshots only and is not part of the build.
```
