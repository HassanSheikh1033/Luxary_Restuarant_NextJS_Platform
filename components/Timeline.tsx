"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "./Reveal";

export type Step = [label: string, title: string, text: string];

/** Sticky heading on the left, a vertical line on the right that draws itself as you scroll. */
export default function Timeline({
  eyebrow,
  title,
  intro,
  steps,
  dark = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  steps: Step[];
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const line = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const dot = dark ? "bg-bg2" : "bg-bg";

  return (
    <section className={`section ${dark ? "bg-bg2" : ""}`}>
      <div className="wrap grid gap-16 md:grid-cols-[4fr_7fr]">
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">{title}</h2></Reveal>
          <Reveal delay={0.16}><p className="text-[1.05rem] text-muted">{intro}</p></Reveal>
        </div>

        <div ref={ref} className="relative pl-10 md:pl-14">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-line md:left-[11px]" />
          <motion.div style={{ scaleY: line }} className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-gold2 to-gold md:left-[11px]" />

          {steps.map(([label, t, text]) => (
            <Reveal key={label + t}>
              <div className="relative pb-20">
                <span className={`absolute -left-10 top-2 grid h-[15px] w-[15px] place-items-center rounded-full border border-gold md:-left-14 md:h-[23px] md:w-[23px] ${dot}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold2" />
                </span>
                <p className="font-serif text-xl italic text-gold">{label}</p>
                <h3 className="mb-2 font-serif text-[clamp(1.8rem,3.2vw,2.6rem)] font-light leading-tight">{t}</h3>
                <p className="max-w-[560px] text-[1.02rem] text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
