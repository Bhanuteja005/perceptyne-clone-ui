"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";
import { DICHOTOMIES } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const STEP_MS = 3200;

// Cycle the three shapes in the requested order: 2 → 3 → 1.
const GIFS = ["/about-cube2.gif", "/about-cube3.gif", "/about-cube.gif"];

/**
 * "/Our Values" — the five dichotomies cycle through one slot. Each value loads
 * its 20% segment of the progress underline, then vanishes for the next. The
 * looping cube sits on the right.
 */
export default function OurValues() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setI((prev) => (prev + 1) % DICHOTOMIES.length),
      STEP_MS
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="our-values"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-white py-24"
    >
      <div className="container-site w-full">
        <Reveal variants={fadeUp}>
          <p className="font-mono text-sm tracking-tight text-gray-400">
            /Our Values
          </p>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_1.15fr_0.55fr] lg:gap-10">
          {/* Left — heading */}
          <Reveal variants={fadeUp}>
            <h2 className="text-4xl font-normal leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
              At Perceptyne, we greatly value these dichotomies
            </h2>
          </Reveal>

          {/* Middle — single cycling slot */}
          <div className="relative">
            <div className="relative min-h-[150px] md:min-h-[170px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <span className="font-mono text-sm text-gray-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 max-w-md text-2xl font-normal leading-snug tracking-tight text-ink md:text-[1.85rem]">
                    {DICHOTOMIES[i]}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress underline — fills as each value loads, then resets */}
            <div className="mt-6 h-px w-full max-w-md bg-gray-300">
              <motion.span
                key={i}
                className="block h-full bg-ink"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: STEP_MS / 1000, ease: "linear" }}
              />
            </div>
          </div>

          {/* Right — looping shape (cycles 2 → 3 → 1) on a plain white field */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-40 w-40 xl:h-48 xl:w-48">
              <AnimatePresence mode="wait">
                <motion.img
                  key={GIFS[i % GIFS.length]}
                  src={GIFS[i % GIFS.length]}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
