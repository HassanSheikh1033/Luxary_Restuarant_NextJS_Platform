"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { TiltCard } from "./Tilt";
import { menuTabs } from "@/lib/menuData";
import { EASE } from "@/lib/motion";

const meta: Record<string, [string, string]> = {
  tasting: ["12 courses", "4 hours"],
  prelude: ["7 courses", "2½ hours"],
  vegetarian: ["8 courses", "3 hours"],
  sweet: ["5 sweet things", "à la carte"],
};

/** Pick a journey, then read it as an engraved menu card. */
export default function MenuCard() {
  const [id, setId] = useState(menuTabs[0].id);
  const tab = menuTabs.find((t) => t.id === id)!;

  return (
    <section className="section bg-bg2">
      <div className="wrap">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <Reveal><p className="eyebrow">Choose Your Journey</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">Four ways to <em className="text-gold2">dine</em></h2></Reveal>
          <Reveal delay={0.14}><p className="text-muted">Select a menu to read it as it is printed and placed on your table.</p></Reveal>
        </div>

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menuTabs.map((t, i) => {
            const on = t.id === id;
            return (
              <Reveal key={t.id} delay={i * 0.07}>
                <TiltCard className="h-full">
                  <button
                    onClick={() => setId(t.id)}
                    className={`relative h-full w-full border p-7 text-left transition-colors duration-700 ${on ? "border-gold bg-gold/[.08]" : "border-line bg-bg/60 hover:border-gold/60"}`}
                  >
                    <p className="text-[.68rem] uppercase tracking-[.3em] text-gold">{meta[t.id][0]}</p>
                    <h3 className="mb-6 mt-2 font-serif text-[1.8rem] font-light leading-tight">{t.label}</h3>
                    <p className="font-serif text-4xl font-light text-gold2">{t.price}</p>
                    <p className="mt-1 text-[.72rem] uppercase tracking-[.22em] text-muted">{meta[t.id][1]}</p>
                    <span className={`absolute right-5 top-5 h-2 w-2 rounded-full transition-all duration-500 ${on ? "bg-gold2 shadow-[0_0_14px_#e6c985]" : "bg-line"}`} />
                  </button>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* printed card */}
        <div className="mx-auto max-w-[720px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 50, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ transformPerspective: 1400 }}
              className="relative border border-gold/50 bg-gradient-to-b from-bg to-bg2 p-3 shadow-[0_40px_100px_rgba(0,0,0,.55)]"
            >
              <div className="border border-gold/25 px-[clamp(24px,6vw,72px)] py-[clamp(40px,6vw,72px)] text-center">
                <p className="font-serif text-2xl italic tracking-[.06em] text-gold2">Maison Aurelia</p>
                <p className="mt-1 text-[.65rem] uppercase tracking-[.5em] text-muted">Paris · Since 1998</p>

                <div className="my-8 flex items-center justify-center gap-4 text-gold">
                  <span className="h-px w-16 bg-gold/50" /> ✦ <span className="h-px w-16 bg-gold/50" />
                </div>

                <h3 className="font-serif text-[clamp(2.2rem,4.4vw,3.2rem)] font-light leading-none">{tab.label}</h3>
                <p className="mt-3 font-serif text-3xl text-gold2">{tab.price}</p>
                <p className="mx-auto mt-3 max-w-[420px] text-[.9rem] italic text-muted">{tab.note}</p>

                <div className="mt-12 space-y-9">
                  {tab.courses.map(([name, desc, pairing], i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: EASE, delay: 0.25 + i * 0.06 }}
                    >
                      <h4 className="font-serif text-[clamp(1.5rem,2.6vw,1.9rem)] font-light leading-tight">{name}</h4>
                      <p className="mx-auto mt-1 max-w-[460px] text-[.92rem] italic text-muted">{desc}</p>
                      <p className="mt-1.5 text-[.65rem] uppercase tracking-[.3em] text-gold">{pairing}</p>
                      {i < tab.courses.length - 1 && <span className="mx-auto mt-7 block h-px w-8 bg-gold/40" />}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-14 flex items-center justify-center gap-4 text-gold">
                  <span className="h-px w-16 bg-gold/50" /> ✦ <span className="h-px w-16 bg-gold/50" />
                </div>
                <Link href="/reservations" className="btn mt-10">Reserve this menu</Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
