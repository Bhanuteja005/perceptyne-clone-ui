"use client";

import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";

export default function QuoteBand() {
  return (
    <section
      id="quote"
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(120% 70% at 50% 8%, rgba(167,139,250,0.5) 0%, rgba(167,139,250,0) 55%), linear-gradient(180deg, #3b1d8f 0%, #6d3ff0 42%, #2a1466 100%)",
      }}
    >
      {/* Decorative bloom layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 40% at 70% 18%, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0) 60%), radial-gradient(80% 50% at 50% 100%, rgba(8,4,28,0.55) 0%, rgba(8,4,28,0) 60%)",
        }}
      />

      <div className="container-site relative z-10 flex flex-1 items-center py-40 md:py-48">
        <Reveal variants={fadeUp} as="blockquote" className="max-w-[60%] min-w-[20rem]">
          <p className="text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-[3.4rem]">
            &ldquo;The future is about eliminating dull and dangerous tasks for
            humans. Let machines handle the grid, so people can build, think and
            lead without fatigue and fear.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
