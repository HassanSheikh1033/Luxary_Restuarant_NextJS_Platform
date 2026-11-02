"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { Reveal } from "./Reveal";
import ScrollTilt from "./Tilt";
import LinkButton from "./LinkButton";
import { EASE } from "@/lib/motion";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

const dishes = [
  ["Oscietra Caviar", "Hand-cut chive, crème fraîche, buckwheat blini", 48, u("photo-1414235077428-338989a2e8c0")],
  ["Saffron Butter Salmon", "Lemon, fennel pollen, saffron beurre blanc", 36, u("photo-1574484284002-952d92456975")],
  ["Iberico Pork Cutlet", "Caramelised apple, charred broccolini, pan jus", 54, u("photo-1432139555190-58524dae6a55")],
  ["Wagyu A5 Tenderloin", "Bone-marrow jus, smoked pommes purée, winter greens", 92, u("photo-1432139509613-5c4255815697")],
  ["Vanilla Gold Parfait", "Madagascan vanilla, salted caramel, Valrhona grand cru", 28, u("photo-1551024506-0bccd828d307")],
] as const;

export default function Menu() {
  const [hover, setHover] = useState<number | null>(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  return (
    <section
      id="menu"
      className="section"
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      <div className="wrap">
        <div className="mb-16">
          <Reveal><p className="eyebrow">The Menu</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">A tasting <em className="text-gold2">journey</em></h2></Reveal>
        </div>

        <ScrollTilt angle={7} scaleFrom={0.95}>
        <div onMouseLeave={() => setHover(null)}>
          {dishes.map(([name, desc, price], i) => (
            <Reveal key={name} delay={0.04}>
              <article
                onMouseEnter={() => setHover(i)}
                className={`grid grid-cols-[44px_1fr_auto] items-center gap-3.5 border-b border-line py-[34px] transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] md:grid-cols-[70px_1fr_auto] md:gap-6 ${
                  hover !== null && hover !== i ? "opacity-35" : ""
                } ${hover === i ? "pl-6" : ""}`}
              >
                <span className="font-serif text-xl italic text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={`font-serif text-[clamp(1.6rem,3vw,2.3rem)] font-light leading-[1.1] transition-colors duration-500 ${hover === i ? "text-gold2" : ""}`}>{name}</h3>
                  <p className="text-[.95rem] text-muted">{desc}</p>
                </div>
                <span className="font-serif text-3xl font-light text-gold2">{price}</span>
              </article>
            </Reveal>
          ))}
        </div>
        </ScrollTilt>

        <Reveal>
          <p className="mt-10 text-center text-[.78rem] uppercase tracking-[.2em] text-muted">
            Tasting menu 185 per guest · Wine pairing 120
          </p>
        </Reveal>
        <Reveal><div className="mt-10 text-center"><LinkButton href="/menu">View Full Menu</LinkButton></div></Reveal>
      </div>

      {/* floating preview that follows the cursor */}
      <motion.div
        style={{ x: mx, y: my }}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
      >
        <AnimatePresence>
          {hover !== null && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.85, rotate: -4, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, scale: 1, rotate: 3, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative ml-[90px] -mt-[170px] h-[340px] w-[260px] overflow-hidden border border-gold/60 bg-bg2 shadow-[0_30px_80px_rgba(0,0,0,.6)]"
            >
              {dishes.map((d, i) => (
                <Image
                  key={d[0]}
                  src={d[3]}
                  alt=""
                  fill
                  sizes="260px"
                  loading="eager"
                  className={`object-cover transition-opacity duration-500 ${i === hover ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
