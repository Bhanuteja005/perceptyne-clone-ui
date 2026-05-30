"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const HEADLINE_LINES = ["AI Robots for", "Intelligent,", "Dexterous Tasks"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle scroll-driven parallax + fade for the cinematic video.
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-[#050505]"
    >
      {/* Cinematic robotics video background */}
      <motion.div
        aria-hidden="true"
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 z-0"
      >
        <video
          className="h-full w-full object-cover"
          src="/videos/hero.mp4"
          poster="/videos/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* Tonal grade: deepen the video + add a soft violet ambient bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.2) 35%, rgba(5,5,5,0.55) 70%, rgba(5,5,5,0.95) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[58%] z-[1] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-violet-glow/20 blur-[150px]"
      />

      {/* Content layer */}
      <div className="container-site relative z-10 flex h-full flex-col justify-end pb-28 pt-40 md:pb-32">
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl font-sans text-5xl font-medium leading-[1.04] tracking-tightest text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] md:text-6xl lg:text-7xl"
        >
          {HEADLINE_LINES.map((line) => (
            <motion.span key={line} variants={fadeUp} className="block">
              {line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-end"
        >
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 border-b border-white/25 pb-1 text-sm uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
          >
            Discover
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>

      {/* Cinematic vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 40%, rgba(5,5,5,0) 55%, rgba(5,5,5,0.5) 82%, rgba(5,5,5,0.92) 100%)",
        }}
      />
    </section>
  );
}
