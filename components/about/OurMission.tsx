"use client";

import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";
import { ABOUT_MISSION } from "@/data/site";

/** "/Our Mission" — label left, large statement right. */
export default function OurMission() {
  return (
    <section
      id="our-mission"
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#F4F4F5] py-28 md:py-40"
    >
      <div className="container-site grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <Reveal variants={fadeUp}>
          <p className="font-mono text-sm tracking-tight text-gray-400">
            /Our Mission
          </p>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.1}>
          <p className="max-w-3xl text-2xl font-normal leading-snug tracking-tight text-ink md:text-[2rem] lg:text-[2.25rem]">
            {ABOUT_MISSION}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
