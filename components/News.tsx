"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { NEWS } from "@/data/site";

/** Two violet hex stops per card, indexed so Tailwind never purges the gradient. */
const CARD_GRADIENTS: ReadonlyArray<readonly [string, string]> = [
  ["#5B3DF5", "#7C5CFB"],
  ["#6A40F0", "#9B7BFC"],
  ["#5B3DF5", "#8B5CF6"],
];

export default function News() {
  return (
    <section
      id="news"
      className="relative overflow-hidden bg-white py-28 text-ink md:py-36"
    >
      <div className="container-site relative z-10">
        <Reveal variants={fadeUp}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-medium tracking-tight text-ink md:text-5xl">
              Latest News
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-gray-500 md:text-right md:text-base">
              Discover the latest stories and coverage highlighting
              Perceptyne&apos;s work across robotics, automation, and intelligent
              systems.
            </p>
          </div>
        </Reveal>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3"
        >
          {NEWS.map((item, i) => {
            const [from, to] = CARD_GRADIENTS[i % CARD_GRADIENTS.length];

            return (
              <motion.li
                key={item.publication}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-glow/10"
              >
                {/* Top: glowing violet render with the publication as a white serif wordmark */}
                <div
                  className="relative flex h-44 items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${from}, ${to})`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/20 blur-3xl"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-14 -left-10 h-44 w-44 rounded-full bg-black/20 blur-3xl"
                  />
                  <span className="relative px-6 text-center text-xl font-medium tracking-wide text-white drop-shadow-sm md:text-2xl">
                    {item.publication}
                  </span>
                </div>

                {/* Bottom: white content */}
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="line-clamp-1 text-base font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
                    {item.body}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
