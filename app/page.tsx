import Hero from "@/components/Hero";
import QuoteBand from "@/components/QuoteBand";
import RealWorld from "@/components/RealWorld";
import PRPhi from "@/components/PRPhi";
import Automation from "@/components/Automation";
import WhyExists from "@/components/WhyExists";
import Workflows from "@/components/Workflows";
import DreamBuild from "@/components/DreamBuild";
import News from "@/components/News";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";

/**
 * Quote and Real-World are sticky and pinned to the top, so Real-World slides
 * up over Quote and PR-Phi slides up over Real-World — the parallax reveals for
 * the 3rd and 4th sections. The hero and everything from PR-Phi scroll normally.
 *
 * `data-theme` tells the fixed Navbar whether the panel under it is dark or
 * light so the logo + contact pill invert accordingly.
 */
const PANELS = [
  { Comp: Hero, theme: "dark", sticky: false },
  { Comp: QuoteBand, theme: "dark", sticky: true },
  { Comp: RealWorld, theme: "dark", sticky: true },
  { Comp: PRPhi, theme: "dark", sticky: false },
  { Comp: Automation, theme: "light", sticky: false },
  { Comp: WhyExists, theme: "light", sticky: false },
  { Comp: Workflows, theme: "light", sticky: false },
  { Comp: DreamBuild, theme: "light", sticky: false },
  { Comp: News, theme: "light", sticky: false },
  { Comp: Footer, theme: "light", sticky: false },
] as const;

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative bg-ink">
        {PANELS.map(({ Comp, theme, sticky }, i) => (
          <div
            key={i}
            data-theme={theme}
            className={sticky ? "sticky top-0" : "relative"}
            style={{ zIndex: i + 1 }}
          >
            <Comp />
          </div>
        ))}
      </main>

      <BottomNav />
    </>
  );
}
