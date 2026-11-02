"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { menuTabs } from "@/lib/menuData";
import { EASE } from "@/lib/motion";

export default function MenuTabs() {
  const [active, setActive] = useState(menuTabs[0].id);
  const tab = menuTabs.find((t) => t.id === active)!;

  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="mb-14 flex flex-wrap justify-center gap-x-2 gap-y-3 border-b border-line pb-6">
            {menuTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="relative px-5 py-2 text-[.78rem] uppercase tracking-[.25em] transition-colors duration-500"
              >
                <span className={active === t.id ? "text-gold2" : "text-muted hover:text-ink"}>{t.label}</span>
                {active === t.id && (
                  <motion.span layoutId="menu-tab" transition={{ duration: 0.6, ease: EASE }} className="absolute inset-x-5 -bottom-[25px] h-px bg-gold" />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mb-12 text-center">
              <p className="font-serif text-[clamp(3rem,6vw,5rem)] font-light leading-none text-gold2">{tab.price}</p>
              <p className="mx-auto mt-4 max-w-[520px] text-muted">{tab.note}</p>
            </div>

            <div className="mx-auto max-w-[960px]">
              {tab.courses.map(([name, desc, pairing], i) => (
                <motion.article
                  key={name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.05 * i }}
                  className="group grid grid-cols-[40px_1fr] items-baseline gap-4 border-b border-line py-7 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:bg-gradient-to-r hover:from-gold/[.07] hover:to-transparent hover:pl-5 md:grid-cols-[60px_1fr_240px] md:gap-6"
                >
                  <span className="font-serif text-xl italic text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-[clamp(1.5rem,2.6vw,2.1rem)] font-light leading-tight transition-colors duration-500 group-hover:text-gold2">{name}</h3>
                    <p className="text-[.95rem] text-muted">{desc}</p>
                  </div>
                  <p className="col-start-2 text-[.72rem] uppercase tracking-[.22em] text-gold md:col-start-3 md:text-right">
                    <span className="mb-1 block text-muted">Paired with</span>
                    {pairing}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
