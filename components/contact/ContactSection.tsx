"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";

const EMAIL = "info@perceptyne.com";

const inputClass =
  "w-full border-b border-white/15 bg-transparent pb-3 pt-1 text-[15px] text-white placeholder:text-white/45 outline-none transition-colors focus:border-white/60";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#050505] py-28 md:py-32"
    >
      <div className="container-site grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left — heading + direct details */}
        <div className="flex flex-col">
          <Reveal variants={fadeUp}>
            <p className="font-mono text-sm tracking-tight text-white/45">
              / Contact
            </p>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.05}>
            <h1 className="mt-5 text-5xl font-normal leading-[1.05] tracking-tight text-white md:text-6xl">
              Let&apos;s Start the
              <br />
              Conversation
            </h1>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
              Reach out for inquiries, collaborations, or to book a discussion
              slot.
            </p>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.15}>
            <div className="mt-16">
              <p className="text-sm text-white/50">Reach Us Directly by Email</p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-2xl font-normal tracking-tight text-white transition-colors hover:text-violet-300 md:text-[1.75rem]"
                >
                  {EMAIL}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="grid h-8 w-8 place-items-center rounded-md text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.2}>
            <div className="mt-10">
              <p className="text-sm text-white/50">Find Us on the Map</p>
              <a
                href="https://maps.google.com/?q=Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex items-center gap-1 text-2xl font-normal tracking-tight text-white md:text-[1.75rem]"
              >
                Hyderabad
                <ArrowUpRight className="h-6 w-6 text-violet-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — form card */}
        <Reveal variants={fadeUp} delay={0.1}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-[#0c0c0e] p-7 md:p-10"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "5px 5px",
            }}
          >
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
              <input className={inputClass} placeholder="First Name" aria-label="First Name" />
              <input className={inputClass} placeholder="Last Name" aria-label="Last Name" />
            </div>

            <div className="mt-8">
              <input
                type="email"
                className={inputClass}
                placeholder="Your Email"
                aria-label="Your Email"
              />
            </div>

            <div className="mt-8 flex items-end gap-3">
              <span className="pb-3 text-[15px] text-white/70">+91</span>
              <input
                type="tel"
                className={inputClass}
                placeholder="Phone Number"
                aria-label="Phone Number"
              />
            </div>

            <div className="relative mt-8">
              <select
                defaultValue=""
                aria-label="Select Your Interest"
                className="w-full appearance-none border-b border-white/15 bg-transparent pb-3 pt-1 text-[15px] text-white/45 outline-none transition-colors focus:border-white/60 [&>option]:bg-[#0c0c0e] [&>option]:text-white"
              >
                <option value="" disabled>
                  Select Your Interest
                </option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="careers">Careers</option>
                <option value="press">Press</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-0 top-1 h-5 w-5 text-white/45" />
            </div>

            <div className="mt-8">
              <textarea
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Your Message"
                aria-label="Your Message"
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.99 }}
              className="group mt-10 flex w-full items-center overflow-hidden rounded-xl"
            >
              <span className="flex flex-1 items-center justify-center bg-white py-4 text-sm font-semibold tracking-wide text-black transition-colors group-hover:bg-white/90">
                CONNECT NOW
              </span>
              <span className="grid h-[52px] w-[58px] place-items-center border-l border-black/10 bg-white text-black transition-colors group-hover:bg-white/90">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
