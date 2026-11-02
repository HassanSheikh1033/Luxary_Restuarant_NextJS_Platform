"use client";

import { motion } from "framer-motion";
import ParallaxBg from "./ParallaxBg";
import { EASE } from "@/lib/motion";

/** Cinematic banner that opens every inner page. */
export default function PageHero({
  eyebrow,
  lines,
  sub,
  img,
}: {
  eyebrow: string;
  lines: React.ReactNode[];
  sub: string;
  img: string;
}) {
  return (
    <section className="relative grid h-[78svh] min-h-[520px] place-items-center overflow-hidden text-center">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
      >
        <ParallaxBg src={img} amount={12} priority offset={["start start", "end start"]} />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,10,9,.55),rgba(11,10,9,.92)),linear-gradient(transparent_60%,#0b0a09)]" />

      <div className="relative px-6 pt-16">
        <motion.p
          className="eyebrow !text-gold2 [text-shadow:0_2px_14px_rgba(0,0,0,.9)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
        >
          {eyebrow}
        </motion.p>
        <h1 className="mb-6 font-serif text-[clamp(3rem,9vw,7.5rem)] font-light leading-[1.05] tracking-[-.01em]">
          {lines.map((l, i) => (
            <span key={i} className="block overflow-hidden pb-[.08em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, ease: EASE, delay: 0.4 + i * 0.14 }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className="mx-auto max-w-[560px] text-[1.1rem] text-ink/85 [text-shadow:0_2px_16px_rgba(0,0,0,.95)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.9 }}
        >
          {sub}
        </motion.p>
      </div>

      <div className="absolute bottom-[30px] left-1/2 h-[60px] w-px overflow-hidden bg-line">
        <span className="absolute left-0 top-0 h-2/5 w-full animate-cue bg-gold" />
      </div>
    </section>
  );
}
