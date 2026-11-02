"use client";

import { motion } from "framer-motion";
import ParallaxBg from "./ParallaxBg";
import { EASE } from "@/lib/motion";
import LinkButton from "./LinkButton";

const START = 1.55; // wait for the loader to lift

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.4, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: EASE, delay },
});

export default function Hero() {
  return (
    <section className="relative grid h-[100svh] min-h-[640px] place-items-center overflow-hidden text-center">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: EASE, delay: 0.4 }}
      >
        <ParallaxBg
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
          amount={12}
          priority
          offset={["start start", "end start"]}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,10,9,.55),rgba(11,10,9,.9)),linear-gradient(transparent_60%,#0b0a09)]" />

      <div className="relative px-6">
        <motion.p className="eyebrow !text-gold2 [text-shadow:0_2px_14px_rgba(0,0,0,.9)]" {...fade(START)}>
          Two Michelin Stars · Est. 1998
        </motion.p>
        <h1 className="mb-7 font-serif text-[clamp(3.2rem,10vw,8.5rem)] font-light leading-[1.08] tracking-[-.01em]">
          <Line delay={START + 0.1}>The Art of</Line>
          <Line delay={START + 0.25}>
            <em className="text-gold2">Refined</em> Taste
          </Line>
        </h1>
        <motion.p className="mx-auto mb-11 max-w-[480px] text-[1.1rem] text-ink/85 [text-shadow:0_2px_16px_rgba(0,0,0,.95)]" {...fade(START + 0.5)}>
          An evening of seasonal craft, candlelight and quiet theatre.
        </motion.p>
        <motion.div {...fade(START + 0.65)}>
          <LinkButton href="/reservations">Reserve a Table</LinkButton>
        </motion.div>
      </div>

      {/* rotating seal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: START + 0.9 }}
        className="absolute bottom-10 right-[clamp(24px,5vw,64px)] hidden h-[130px] w-[130px] md:block"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full animate-[spin_24s_linear_infinite]">
          <defs><path id="seal" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
          <text className="fill-gold2" fontSize="15" letterSpacing="5.2" style={{ textTransform: "uppercase" }}>
            <textPath href="#seal">Two Michelin Stars ✦ Since 1998 ✦</textPath>
          </text>
        </svg>
        <span className="absolute inset-0 grid place-items-center font-serif text-4xl italic text-gold2">A</span>
      </motion.div>

      <a href="#story" aria-label="Scroll" className="absolute bottom-[34px] left-1/2 h-[70px] w-px overflow-hidden bg-line">
        <span className="absolute left-0 top-0 h-2/5 w-full animate-cue bg-gold" />
      </a>
    </section>
  );
}
