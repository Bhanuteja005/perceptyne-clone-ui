"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

/** Deterministic vertical light beams (avoids hydration mismatch). */
const BEAMS = [
  { left: "16%", delay: 0, dur: 5.5 },
  { left: "34%", delay: 1.6, dur: 6.5 },
  { left: "52%", delay: 0.8, dur: 5 },
  { left: "70%", delay: 2.4, dur: 7 },
  { left: "85%", delay: 1.1, dur: 6 },
];

/**
 * Section 3 — "Robots Built for the Real World".
 * Black panel with a visible blueprint grid, animated vertical light beams
 * descending from the top, and a single centred line.
 */
export default function RealWorld() {
  return (
    <section
      id="real-world"
      className="relative grid min-h-screen place-items-center overflow-hidden bg-[#050505]"
    >
      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "min(18vw, 240px) min(20vh, 210px)",
          backgroundPosition: "center",
          maskImage:
            "radial-gradient(130% 100% at 50% 40%, #000 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(130% 100% at 50% 40%, #000 55%, transparent 100%)",
        }}
      />

      {/* Animated vertical light beams descending from the top */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-2/3">
        {BEAMS.map((b, i) => (
          <motion.span
            key={i}
            className="absolute top-0 h-full w-px"
            style={{
              left: b.left,
              background:
                "linear-gradient(to bottom, rgba(167,139,250,0.55), rgba(124,58,237,0.12) 45%, transparent 80%)",
            }}
            initial={{ opacity: 0, scaleY: 0.6 }}
            animate={{ opacity: [0, 0.9, 0], scaleY: [0.6, 1, 0.6] }}
            transition={{
              duration: b.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: b.delay,
            }}
          />
        ))}
      </div>

      {/* Top + edge darkening for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 30%, rgba(5,5,5,0) 45%, rgba(5,5,5,0.6) 100%), linear-gradient(180deg, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0) 24%)",
        }}
      />

      {/* Soft violet ambient bloom behind the text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[46vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-glow/10 blur-[160px]"
      />

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-site relative z-10 text-center text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Robots Built for the Real World
      </motion.h2>
    </section>
  );
}
