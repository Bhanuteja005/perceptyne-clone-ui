"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/data/site";
import { ProductsPanel } from "@/components/ProductsPanel";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Floating bottom navigation, shared across pages.
 *
 * On the hero it is collapsed to a plain "＋ MENU" button; scrolling into the
 * second section auto-expands it into HOME / ABOUT / PRODUCTS / CAREERS.
 * HOME and ABOUT are real routes; PRODUCTS opens a product showcase panel
 * (the "+" turns into "×"). Picking any link while on the hero collapses the
 * menu back to "＋ MENU".
 */
export function BottomNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [pastHero, setPastHero] = useState(false);
  const [manualOpen, setManualOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.55;
      setPastHero(past);
      if (past) setManualOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click anywhere outside the nav closes the hero menu / products panel.
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current?.contains(e.target as Node)) return;
      setProductsOpen(false);
      setManualOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const open = pastHero || manualOpen;

  const collapseOnHero = () => {
    setProductsOpen(false);
    if (!pastHero) setManualOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
    >
      <div className="relative" ref={navRef}>
        <ProductsPanel open={open && productsOpen} />

        <motion.div
          layout
          transition={{ layout: { duration: 0.45, ease: EASE } }}
          className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#1b1b1d]/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur"
        >
          <AnimatePresence initial={false} mode="popLayout">
            {open ? (
              NAV_LINKS.map((link, i) => {
                const hasPlus = "hasPlus" in link && link.hasPlus;
                const isActive = !hasPlus && pathname === link.href;
                const showCross = hasPlus && productsOpen;

                const inner = (
                  <>
                    {link.label}
                    {hasPlus && (
                      <motion.span
                        animate={{ rotate: showCross ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="inline-flex"
                      >
                        <Plus className="h-3 w-3" />
                      </motion.span>
                    )}
                  </>
                );

                const className = cn(
                  "flex items-center gap-1 rounded-md px-4 py-2 text-[11px] font-semibold tracking-wide transition-colors sm:px-5",
                  isActive
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                );

                return (
                  <motion.div
                    key={link.label}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: EASE, delay: i * 0.04 }}
                  >
                    {hasPlus ? (
                      <button
                        type="button"
                        onClick={() => setProductsOpen((v) => !v)}
                        className={className}
                      >
                        {inner}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={collapseOnHero}
                        className={className}
                      >
                        {inner}
                      </Link>
                    )}
                  </motion.div>
                );
              })
            ) : (
              <motion.button
                key="menu"
                type="button"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setManualOpen(true)}
                aria-label="Open menu"
                className="flex items-center gap-2 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-white/80 transition-colors hover:text-white sm:px-5"
              >
                <Plus className="h-4 w-4" />
                MENU
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
}
