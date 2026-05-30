"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";
import { MARQUEE_ROWS } from "@/data/site";

/**
 * Section 7 — Built for Real Workflows.
 * Heading + supporting copy, then two rows of images that auto-scroll to the
 * right in a seamless, classy marquee.
 */

function MarqueeRow({
  images,
  duration,
}: {
  images: readonly { src: string; alt: string }[];
  duration: number;
}) {
  // Two identical copies sit side by side; translating from -50% to 0%
  // moves the strip rightwards and loops seamlessly.
  const strip = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-4"
        initial={{ x: "-50%" }}
        animate={{ x: "0%" }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {strip.map((img, i) => (
          <div
            key={i}
            className="group relative h-44 w-72 shrink-0 overflow-hidden rounded-xl bg-neutral-200 md:h-52 md:w-80"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Workflows() {
  return (
    <section
      id="workflows"
      className="relative overflow-hidden bg-white py-28 md:py-36"
    >
      <div className="container-site relative">
        {/* Top row: heading + supporting copy */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal variants={fadeUp} className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-[#050505] md:text-5xl">
              Built for Real Workflows
            </h2>
          </Reveal>

          <Reveal
            variants={fadeUp}
            delay={0.1}
            className="max-w-xs self-start text-sm leading-relaxed text-neutral-500 md:self-end md:text-right"
          >
            <p>
              Pick, place, bolt , inspect , test, assemble, insert, - with zero
              workflow changes.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Two auto-scrolling rows (full-bleed, edge-faded) */}
      <Reveal
        variants={fadeUp}
        className="relative mt-14 flex flex-col gap-4 md:mt-16"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        <MarqueeRow images={MARQUEE_ROWS[0]} duration={45} />
        <MarqueeRow images={MARQUEE_ROWS[1]} duration={55} />
      </Reveal>
    </section>
  );
}
