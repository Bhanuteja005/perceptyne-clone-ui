"use client";

import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";

export default function Automation() {
  return (
    <section
      id="automation"
      className="relative grid min-h-screen place-items-center overflow-hidden bg-white py-32 text-ink md:py-40"
    >
      <div className="container-site">
        <Reveal variants={fadeUp}>
          <p className="mx-auto max-w-5xl text-center text-3xl font-normal leading-snug tracking-tight text-ink md:text-4xl lg:text-5xl">
            Traditional automation is rigid, slow to deploy, and hard to adapt.
            It struggles with variability, causes frequent downtime, and often
            needs specialists just to keep it running.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
