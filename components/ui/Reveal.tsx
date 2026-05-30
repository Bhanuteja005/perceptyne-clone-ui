"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Thin wrapper that reveals its children on scroll into view.
 * Defaults to the shared `fadeUp` variant.
 */
export function Reveal({
  children,
  variants = fadeUp,
  className,
  as = "div",
  delay,
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "blockquote" | "p" | "ul";
  delay?: number;
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay !== undefined ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
