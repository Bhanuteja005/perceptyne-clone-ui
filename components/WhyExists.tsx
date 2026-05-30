"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { PerceptyneGlyph } from "@/components/ui/PerceptyneGlyph";
import { WHY_CARDS } from "@/data/site";

/**
 * Diagonal staircase placement on desktop — each card steps one column right
 * and (every other one) one row down, exactly like the source screenshot.
 */
const PLACEMENT = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-4 lg:row-start-2",
];

export default function WhyExists() {
  return (
    <section
      id="why-exists"
      className="relative min-h-screen overflow-hidden bg-[#F7F7F8] py-28 text-ink md:py-36"
    >
      {/* Decorative faint Perceptyne glyph in the far right area */}
      <PerceptyneGlyph className="absolute -right-10 top-1/4 z-0 hidden h-[30rem] w-auto md:block lg:right-4 lg:h-[34rem]" />

      <div className="container-site relative z-10">
        <Reveal variants={fadeUp}>
          <h2 className="mx-auto max-w-4xl text-center text-4xl font-semibold tracking-tight text-ink md:text-[3.25rem]">
            That&apos;s Why Perceptyne Exists
          </h2>
        </Reveal>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-start gap-7 sm:grid-cols-2 md:mt-24 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
        >
          {WHY_CARDS.map((card, i) => (
            <motion.li
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={cn(
                "group relative min-h-[17rem] rounded-2xl border border-black/[0.06] bg-white/70 p-8 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_24px_50px_-24px_rgba(124,58,237,0.35)] lg:p-9",
                PLACEMENT[i]
              )}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-violet-300/0 transition duration-300 group-hover:bg-violet-glow/[0.03] group-hover:opacity-100 group-hover:ring-violet-300/40"
              />

              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 object-contain"
                />

                <h3 className="mt-7 whitespace-pre-line text-xl font-semibold leading-snug tracking-tight text-ink md:text-2xl">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-[15px]">
                  {card.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
