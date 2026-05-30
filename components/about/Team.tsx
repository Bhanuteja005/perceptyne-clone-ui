"use client";

import { useState } from "react";
import { ArrowRight, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { TEAM } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Team() {
  const [tab, setTab] = useState<"Leaders" | "Team">("Leaders");

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#F4F4F5] py-28 md:py-36"
    >
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-[0.6fr_2fr] md:gap-16">
          {/* Left — label + tabs */}
          <div>
            <Reveal variants={fadeUp}>
              <p className="font-mono text-sm tracking-tight text-gray-400">
                /The Team
              </p>
            </Reveal>
            <Reveal variants={fadeUp} delay={0.05}>
              <div className="mt-6 flex flex-col gap-2 text-sm">
                {(["Leaders", "Team"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={cn(
                      "w-fit transition-colors",
                      tab === t
                        ? "font-medium text-violet-400"
                        : "text-gray-500 hover:text-ink"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — intro + CTA */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <Reveal variants={fadeUp} delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-ink md:text-xl">
                We are builders, scientists, and systems thinkers. Dedicated to
                engineering intelligence into machines; from first principles to
                field deployment.
              </p>
            </Reveal>
            <Reveal variants={fadeUp} delay={0.15}>
              <a
                href="#careers"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-black px-5 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-black/85"
              >
                Join Our Team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Cards */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3"
        >
          {TEAM.map((member) => (
            <motion.li
              key={member.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-neutral-200">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-lg bg-black/70 text-white backdrop-blur transition-colors hover:bg-black"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{member.role}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
