"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { ContactButton } from "@/components/ui/ContactButton";

/**
 * Single fixed top navigation bar (logo + Contact pill).
 *
 * Because the page uses stacked sticky sections of alternating dark/light
 * backgrounds, the bar colour adapts to whichever section currently sits
 * under it. Sections opt-in by setting `data-theme="dark" | "light"` and are
 * tracked with an IntersectionObserver against a sentinel line near the top.
 */
export function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-theme]")
    );
    if (!sections.length) return;

    // The probe line sits ~46px from the top (vertical centre of the bar).
    const PROBE = 46;

    const update = () => {
      let current: "dark" | "light" = "dark";
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= PROBE && rect.bottom > PROBE) {
          current = (el.dataset.theme as "dark" | "light") ?? "dark";
        }
      }
      setTheme((prev) => (prev === current ? prev : current));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const isDarkBg = theme === "dark";

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[60]"
    >
      <div className="container-site flex items-center justify-between py-5 md:py-6">
        <Logo dark={isDarkBg} />
        <ContactButton variant={isDarkBg ? "light" : "dark"} />
      </div>
    </motion.header>
  );
}
