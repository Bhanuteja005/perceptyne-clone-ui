"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";
import { PHI_SPECS } from "@/data/site";

/** Deterministic ambient particle positions (avoids hydration mismatch). */
const PARTICLES = [
  { left: "8%", top: "22%", size: 3, delay: 0 },
  { left: "16%", top: "68%", size: 2, delay: 1.4 },
  { left: "27%", top: "38%", size: 2, delay: 0.6 },
  { left: "34%", top: "82%", size: 3, delay: 2.1 },
  { left: "44%", top: "16%", size: 2, delay: 1.1 },
  { left: "57%", top: "74%", size: 2, delay: 0.3 },
  { left: "63%", top: "30%", size: 3, delay: 1.8 },
  { left: "72%", top: "60%", size: 2, delay: 0.9 },
  { left: "81%", top: "24%", size: 2, delay: 2.4 },
  { left: "88%", top: "70%", size: 3, delay: 1.5 },
  { left: "93%", top: "44%", size: 2, delay: 0.5 },
  { left: "48%", top: "52%", size: 2, delay: 2.0 },
];

export default function PRPhi() {
  return (
    <section
      id="pr-phi"
      className="relative isolate overflow-hidden bg-[#06060a] py-28 text-white md:py-36 lg:py-44"
    >
      {/* ---------- Ambient energy field (decorative) ---------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Faint circuit-machinery video, deep in the mix for techy motion */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12] mix-blend-screen"
          src="/videos/phi.mp4"
          poster="/videos/phi-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-[#06060a]/40" />

        {/* Radial violet bloom at the core */}
        <div className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(124,58,237,0.28)_0%,_rgba(124,58,237,0.08)_38%,_transparent_68%)] blur-[40px]" />

        {/* Horizontal flowing energy wave streaks emanating from center */}
        <svg
          className="absolute left-1/2 top-1/2 h-[120%] w-[160%] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 1600 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="phi-streak-violet" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="phi-streak-indigo" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="phi-streak-cyan" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
              <stop offset="50%" stopColor="#67E8F9" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
            </linearGradient>
            <filter id="phi-streak-blur" x="-20%" y="-50%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          <g filter="url(#phi-streak-blur)">
            {[
              { d: "M0 380 C 420 300, 600 300, 800 360 C 1000 420, 1180 420, 1600 340", stroke: "url(#phi-streak-violet)", w: 2.5, op: 0.55 },
              { d: "M0 450 C 440 450, 600 450, 800 450 C 1000 450, 1160 450, 1600 450", stroke: "url(#phi-streak-cyan)", w: 1.5, op: 0.5 },
              { d: "M0 520 C 420 600, 600 600, 800 540 C 1000 480, 1180 480, 1600 560", stroke: "url(#phi-streak-indigo)", w: 2.5, op: 0.5 },
              { d: "M0 300 C 460 230, 620 240, 800 300 C 980 360, 1140 350, 1600 270", stroke: "url(#phi-streak-indigo)", w: 1.5, op: 0.35 },
              { d: "M0 600 C 460 680, 620 670, 800 600 C 980 530, 1140 540, 1600 640", stroke: "url(#phi-streak-violet)", w: 1.5, op: 0.35 },
            ].map((p, i) => (
              <motion.path
                key={i}
                d={p.d}
                stroke={p.stroke}
                strokeWidth={p.w}
                strokeLinecap="round"
                initial={{ opacity: p.op * 0.5 }}
                animate={{ opacity: [p.op * 0.5, p.op, p.op * 0.5] }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6,
                }}
              />
            ))}
          </g>
        </svg>

        {/* Ambient particle dots */}
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-violet-300"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.45, 0.1] }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

        {/* Top + bottom edge fades for depth */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#06060a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06060a] to-transparent" />
      </div>

      {/* ---------- Content ---------- */}
      <div className="container-site relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-8">
          {/* LEFT — label + copy + link */}
          <Reveal
            variants={fadeUp}
            className="order-2 max-w-sm lg:order-1"
          >
            <h2 className="text-3xl font-medium tracking-tight text-white">
              PR-PhI
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              Physical Intelligence is built for the reliability, versatility,
              and explainability essential for automating industrial workflows.
            </p>
            <a
              href="#products"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-xs font-medium tracking-widest text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              LEARN MORE
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>

          {/* CENTER — glowing Phi */}
          <div className="relative order-1 flex items-center justify-center lg:order-2">
            {/* Dark server-rack / barcode bars behind the symbol */}
            <div
              aria-hidden
              className="absolute inset-0 flex items-center justify-center gap-[6px] opacity-60"
            >
              {Array.from({ length: 13 }).map((_, i) => {
                const center = 6;
                const dist = Math.abs(i - center);
                const height = 60 - dist * 6;
                return (
                  <span
                    key={i}
                    className="rounded-full bg-gradient-to-b from-white/[0.07] via-violet-500/10 to-transparent"
                    style={{ width: 10, height: `${height}%` }}
                  />
                );
              })}
            </div>

            {/* Inner radial glow disc */}
            <div
              aria-hidden
              className="absolute h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(167,139,250,0.35)_0%,_rgba(124,58,237,0.12)_45%,_transparent_72%)] blur-2xl md:h-[34rem] md:w-[34rem]"
            />

            <motion.span
              className={cn(
                "relative select-none font-sans text-[14rem] font-medium leading-none text-white md:text-[20rem]",
              )}
              style={{
                textShadow:
                  "0 0 18px rgba(255,255,255,0.55), 0 0 60px rgba(167,139,250,0.85), 0 0 120px rgba(124,58,237,0.7)",
              }}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
            >
              <motion.span
                className="inline-block"
                animate={{
                  scale: [1, 1.035, 1],
                  opacity: [0.92, 1, 0.92],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Φ
              </motion.span>
            </motion.span>
            <span className="sr-only">PR-Phi physical intelligence symbol</span>
          </div>

          {/* RIGHT — spec list */}
          <motion.ul
            className="order-3 flex flex-col"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {PHI_SPECS.map((spec, i) => (
              <motion.li
                key={spec.title}
                variants={fadeUp}
                className={cn(
                  "py-5",
                  i !== 0 && "border-t border-white/10",
                )}
              >
                <h3 className="text-base font-medium text-white">
                  {spec.title}
                </h3>
                <p className="mt-1.5 text-sm text-violet-300/70">
                  {spec.detail}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
