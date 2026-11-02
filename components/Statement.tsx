"use client";

import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const text =
  "We do not simply serve dinner. We stage an evening where every course becomes a memory worth keeping.";

function Word({ w, range, progress, gold }: { w: string; range: [number, number]; progress: MotionValue<number>; gold?: boolean }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [14, 0]);
  return (
    <span className="mr-[.28em] inline-block overflow-hidden align-top">
      <motion.span style={{ opacity, y }} className={`inline-block ${gold ? "italic text-gold2" : ""}`}>
        {w}
      </motion.span>
    </span>
  );
}

/** Words light up one by one as the section scrolls through the viewport. */
export default function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  const gold = new Set(["memory", "evening"]);

  return (
    <section ref={ref} className="section bg-bg2">
      <div className="wrap">
        <p className="eyebrow">Philosophy</p>
        <p className="max-w-[1000px] font-serif text-[clamp(2rem,5vw,4.4rem)] font-light leading-[1.15]">
          {words.map((w, i) => {
            const s = i / words.length;
            return (
              <Word key={i} w={w} range={[s, Math.min(s + 1.5 / words.length, 1)]} progress={scrollYProgress} gold={gold.has(w.replace(/[.,]/g, ""))} />
            );
          })}
        </p>
      </div>
    </section>
  );
}
