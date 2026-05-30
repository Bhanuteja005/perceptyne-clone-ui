import AboutHero from "@/components/about/AboutHero";
import OurMission from "@/components/about/OurMission";
import OurValues from "@/components/about/OurValues";
import BackedBy from "@/components/about/BackedBy";
import Team from "@/components/about/Team";
import DreamBuild from "@/components/DreamBuild";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";

const PANELS = [
  { Comp: AboutHero, theme: "light" },
  { Comp: OurMission, theme: "light" },
  { Comp: OurValues, theme: "light" },
  { Comp: BackedBy, theme: "dark" },
  { Comp: Team, theme: "light" },
  {
    Comp: () => (
      <DreamBuild
        id="project-cta"
        title={
          <>
            Have a project, inquiry, or
            <br />
            collaboration in mind?
          </>
        }
      />
    ),
    theme: "light",
  },
  { Comp: Footer, theme: "light" },
] as const;

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative bg-ink">
        {PANELS.map(({ Comp, theme }, i) => (
          <div key={i} data-theme={theme} className="relative">
            <Comp />
          </div>
        ))}
      </main>

      <BottomNav />
    </>
  );
}
