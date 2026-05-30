"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * "CONTACT US →" — shown as a split text pill + arrow pill that merge into a
 * single rounded rectangle on hover (the gap closes and the adjacent corners
 * square off). `variant` adapts the colour to dark / light backgrounds.
 */
export function ContactButton({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const isLight = variant === "light";
  const surface = isLight
    ? "bg-white/90 text-black group-hover:bg-white"
    : "bg-black text-white group-hover:bg-black";

  return (
    <motion.a
      href="/contact"
      whileTap={{ scale: 0.98 }}
      className={cn("group inline-flex items-center", className)}
    >
      <span
        className={cn(
          "inline-flex h-[42px] items-center rounded-xl px-5 text-xs font-semibold tracking-wide transition-all duration-300 group-hover:rounded-r-none",
          surface
        )}
      >
        CONTACT US
      </span>
      <span
        className={cn(
          "grid h-[42px] w-[46px] place-items-center rounded-xl transition-all duration-300 group-hover:rounded-l-none",
          surface
        )}
      >
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </motion.a>
  );
}
