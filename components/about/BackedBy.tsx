"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { INVESTORS } from "@/data/site";
import { cn } from "@/lib/utils";

/** Absolute placements for the investor wordmarks around the headline (lg+). */
const POSITIONS = [
  "left-[6%] top-[18%]",
  "right-[8%] top-[14%]",
  "right-[5%] top-[52%]",
  "left-[10%] bottom-[20%]",
  "left-1/2 bottom-[12%] -translate-x-1/2",
  "left-[40%] top-[10%]",
];

function Wordmark({
  name,
  sub,
  className,
}: {
  name: string;
  sub: string;
  className?: string;
}) {
  return (
    <div className={cn("select-none text-center", className)}>
      <p className="text-lg font-semibold tracking-tight text-white/70 md:text-xl">
        {name}
      </p>
      {sub && <p className="mt-0.5 text-[10px] text-white/35">{sub}</p>}
    </div>
  );
}

export default function BackedBy() {
  return (
    <section
      id="backed-by"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08080a] py-28"
    >
      {/* Dotted grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(120% 100% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(120% 100% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      {/* Investor wordmarks scattered (desktop) */}
      <div className="absolute inset-0 hidden lg:block">
        {INVESTORS.map((inv, i) => (
          <motion.div
            key={inv.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            className={cn("absolute", POSITIONS[i])}
          >
            <Wordmark name={inv.name} sub={inv.sub} />
          </motion.div>
        ))}
      </div>

      {/* Centre headline */}
      <Reveal
        variants={fadeUp}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <span className="mb-6 inline-flex rounded-md border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-white/80">
          Whiteboard
        </span>
        <h2 className="text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
          BACKED BY
          <br />
          VISIONARIES
        </h2>
      </Reveal>

      {/* Mobile wordmark row */}
      <div className="absolute inset-x-0 bottom-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 lg:hidden">
        {INVESTORS.map((inv) => (
          <Wordmark key={inv.name} name={inv.name} sub="" />
        ))}
      </div>
    </section>
  );
}
