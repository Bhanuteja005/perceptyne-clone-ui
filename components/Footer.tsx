"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { PerceptyneGlyph } from "@/components/ui/PerceptyneGlyph";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { FOOTER_COLUMNS } from "@/data/site";
import { cn } from "@/lib/utils";

/** Minimal X (formerly Twitter) glyph — lucide ships no dedicated X icon. */
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "YouTube", href: "#", Icon: Youtube },
  { label: "X", href: "#", Icon: XIcon },
] as const;

const linkClass =
  "text-sm text-gray-600 transition-colors hover:text-black";

function LinkColumn({
  title,
  links,
  activeIndex,
}: {
  title?: string;
  links: readonly string[];
  activeIndex?: number;
}) {
  return (
    <Reveal variants={fadeUp} className="flex flex-col gap-4">
      {title ? (
        <h3 className="text-sm font-semibold tracking-tight text-black">
          {title}
        </h3>
      ) : (
        <span className="hidden h-5 md:block" aria-hidden />
      )}
      <ul className="flex flex-col gap-3">
        {links.map((link, i) => (
          <li key={link}>
            <a
              href="#"
              className={cn(linkClass, i === activeIndex && "text-violet-400")}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden pt-24 pb-32"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 82%, #F1ECFB 93%, #E6DEF8 100%)",
      }}
    >
      {/* Soft violet bloom kept very low so only the bottom edge is tinted */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-56 h-[20rem] bg-violet-400/15 blur-[150px]"
      />

      {/* Faint Perceptyne brand glyph */}
      <PerceptyneGlyph className="absolute right-4 top-8 z-0 hidden h-[20rem] w-auto md:block lg:right-16 lg:h-[24rem]" />

      <div className="container-site relative">
        {/* Top row: logo */}
        <Reveal variants={fadeUp}>
          <Logo dark={false} />
        </Reveal>

        {/* Middle: brand blurb + newsletter */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal variants={fadeUp}>
            <p className="max-w-sm text-sm leading-relaxed text-gray-600">
              Intelligent robotics platform designed to handle complex
              industrial work; rapidly deployed, workflow-friendly, and powered
              by real-time AI.
            </p>
          </Reveal>

          <Reveal variants={fadeUp} className="lg:justify-self-end lg:max-w-md">
            <div className="w-full">
              <h2 className="text-xl font-medium tracking-tight text-black">
                Stay Updated
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Get the latest news and updates from Perceptyne
              </p>
              <form
                className="mt-5 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black placeholder:text-gray-500 outline-none transition-colors focus:border-violet-400 focus:bg-white"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="shrink-0 rounded-xl bg-black px-6 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-black/80"
                >
                  SUBSCRIBE
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Link columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          <LinkColumn
            title={FOOTER_COLUMNS.company.title}
            links={FOOTER_COLUMNS.company.links}
            activeIndex={0}
          />
          <LinkColumn
            title={FOOTER_COLUMNS.legal.title}
            links={FOOTER_COLUMNS.legal.links}
          />
          <LinkColumn links={FOOTER_COLUMNS.legalExtra.links} />

          <Reveal variants={fadeUp} className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-tight text-black">
              Social
            </h3>
            <ul className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    aria-label={label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white/60 text-gray-700 transition-colors hover:border-violet-400 hover:text-black"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </Reveal>
        </motion.div>

        {/* Bottom bar */}
        <Reveal
          variants={fadeUp}
          className="mt-20 flex flex-col gap-3 border-t border-black/10 pt-8 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© 2025 Perceptyne. All rights reserved.</p>
          <p>Design by Wings</p>
        </Reveal>
      </div>
    </footer>
  );
}
