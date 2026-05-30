"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PRODUCTS } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Product showcase that drops up from the bottom nav when PRODUCTS is opened.
 *
 * The outer wrapper owns the viewport centering (`fixed left-1/2
 * -translate-x-1/2`) while the inner element owns the entrance animation — if
 * framer-motion animated the same node, its inline `transform` would clobber
 * the `-translate-x-1/2` and the panel would drift off-centre.
 */
export function ProductsPanel({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed bottom-[78px] left-1/2 z-50 w-[min(94vw,880px)] -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="rounded-2xl border border-white/10 bg-[#1b1b1d]/95 p-3 shadow-2xl shadow-black/50 backdrop-blur">
              <ul className="flex justify-center gap-2.5 overflow-x-auto pb-1">
                {PRODUCTS.map((p, i) => (
                  <motion.li
                    key={p.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.05,
                      duration: 0.3,
                      ease: EASE,
                    }}
                    className="shrink-0"
                  >
                    <a href="#products" className="group block">
                      <div className="relative h-44 w-32 overflow-hidden rounded-xl bg-[#0c0c0f] sm:w-36">
                        {"phi" in p ? (
                          <PhiCard />
                        ) : (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={p.img}
                              alt={p.name}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {"comingSoon" in p && (
                              <div className="absolute inset-0 grid place-items-center bg-black/45">
                                <span className="text-center text-base font-medium leading-tight text-white">
                                  Coming
                                  <br />
                                  Soon
                                </span>
                              </div>
                            )}
                          </>
                        )}
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                      </div>
                      <p className="mt-2.5 text-center text-xs font-semibold tracking-wide text-white">
                        {p.name}
                      </p>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/** Dark card with a breathing, glowing Greek capital Phi for PR-PHI. */
function PhiCard() {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,#1a1340,#06060a_70%)]">
      <div className="absolute h-24 w-24 rounded-full bg-violet-500/30 blur-2xl" />
      <motion.span
        className="relative font-sans text-6xl font-medium leading-none text-white"
        style={{
          textShadow:
            "0 0 10px rgba(255,255,255,0.6), 0 0 34px rgba(167,139,250,0.85)",
        }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        Φ
      </motion.span>
    </div>
  );
}
