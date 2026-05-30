"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * About hero — the Perceptyne robot arm on a studio-grey backdrop (the brand
 * banner). The image's grey background blends into the section and keeps the
 * dark logo / contact pill legible. No headline; the visual carries it.
 */
export default function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  return (
    <section
      ref={ref}
      id="about-hero"
      className="relative h-screen w-full overflow-hidden bg-[#c3c4c7]"
    >
      <motion.img
        src="/about-hero-banner.webp"
        alt="Perceptyne robot arm"
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Keep the top legible for the dark logo + contact pill, and fade the
          base into the next (light) section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(225,226,229,0.75) 0%, rgba(225,226,229,0.1) 15%, rgba(180,182,186,0) 55%, rgba(244,244,245,0.9) 100%)",
        }}
      />
    </section>
  );
}
