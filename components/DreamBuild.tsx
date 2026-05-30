"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";

/** Small registration-mark "+" cross, used around the Venn circumferences. */
function CrossMark({ x, y }: { x: number; y: number }) {
  return (
    <g stroke="currentColor" strokeWidth={1} className="text-gray-400/50">
      <line x1={x - 7} y1={y} x2={x + 7} y2={y} />
      <line x1={x} y1={y - 7} x2={x} y2={y + 7} />
    </g>
  );
}

export default function DreamBuild({
  id = "dream-build",
  title,
}: {
  id?: string;
  title?: React.ReactNode;
} = {}) {
  return (
    <section
      id={id}
      className="relative grid min-h-screen place-items-center overflow-hidden bg-mist py-32"
    >
      {/* Decorative Venn centerpiece — two static horizontal circles; only the
          registration marks orbit, each around its own circle's centre. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid place-items-center"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg
          viewBox="0 0 800 520"
          className="h-[120vw] max-h-[640px] w-[120vw] max-w-[900px]"
          fill="none"
        >
          {/* Left circle + its orbiting marks */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 320 260"
              to="360 320 260"
              dur="55s"
              repeatCount="indefinite"
            />
            <circle cx={320} cy={260} r={210} stroke="currentColor" strokeWidth={1} className="text-gray-400/40" />
            <CrossMark x={320} y={50} />
            <CrossMark x={110} y={260} />
            <CrossMark x={320} y={470} />
            <CrossMark x={170} y={112} />
            <CrossMark x={170} y={408} />
          </g>

          {/* Right circle + its orbiting marks (opposite direction) */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 480 260"
              to="-360 480 260"
              dur="55s"
              repeatCount="indefinite"
            />
            <circle cx={480} cy={260} r={210} stroke="currentColor" strokeWidth={1} className="text-gray-400/40" />
            <CrossMark x={480} y={50} />
            <CrossMark x={690} y={260} />
            <CrossMark x={480} y={470} />
            <CrossMark x={630} y={112} />
            <CrossMark x={630} y={408} />
          </g>

          {/* Shared intersection mark (static) */}
          <CrossMark x={400} y={260} />
        </svg>
      </motion.div>

      {/* Centered content over the circles */}
      <Reveal
        variants={fadeUp}
        className="container-site relative z-10 flex flex-col items-center text-center"
      >
        <h2
          className={cn(
            "text-5xl font-normal leading-[1.05] tracking-tight text-ink md:text-6xl",
          )}
        >
          {title ?? (
            <>
              Dream, Discover, and Build
              <br />
              with Us
            </>
          )}
        </h2>

        <a
          href="#contact"
          className="group mt-12 inline-flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-ink"
        >
          <span className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.22em]">
            Let&apos;s Connect
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
          <span className="h-px w-40 bg-gray-400/50 transition-colors group-hover:bg-ink/60" />
        </a>
      </Reveal>
    </section>
  );
}
