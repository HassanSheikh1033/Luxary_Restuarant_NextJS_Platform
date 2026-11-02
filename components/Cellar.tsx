"use client";

import { motion } from "framer-motion";
import { Reveal, RevealImage } from "./Reveal";
import ScrollTilt, { TiltCard } from "./Tilt";
import LinkButton from "./LinkButton";
import { EASE } from "@/lib/motion";

const u = (id: string, w = 1100) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const regions = [
  ["Burgundy", 640],
  ["Bordeaux", 520],
  ["Champagne", 410],
  ["Rhône", 280],
  ["Piedmont", 210],
  ["Mosel", 160],
] as const;

const flights = [
  ["Classic", "6 pours", "120", "Benchmark producers from the great regions — the cleanest expression of each course."],
  ["Reserve", "8 pours", "260", "Older vintages and smaller estates, including two magnums poured at the table."],
  ["Sommelier’s Cellar", "10 pours", "540", "Rare bottles from the private collection. Limited to six guests each evening."],
];

export default function Cellar() {
  return (
    <section id="cellar" className="section">
      <div className="wrap">
        <div className="grid items-center gap-[clamp(40px,7vw,100px)] md:grid-cols-2">
          <div>
            <Reveal><p className="eyebrow">The Cellar</p></Reveal>
            <Reveal delay={0.08}><h2 className="h2">Three thousand <em className="text-gold2">labels</em></h2></Reveal>
            <Reveal>
              <p className="mb-5 text-[1.05rem] text-muted">
                Beneath the dining room, a vaulted limestone cellar holds fourteen thousand bottles at a constant twelve
                degrees. Head sommelier Camille Roux has spent two decades building it — buying young, cellaring patiently,
                and pouring only when a wine is ready.
              </p>
              <p className="text-[1.05rem] text-muted">
                Every course on the tasting menu has a pairing chosen with the chef, and every pairing can be changed —
                the cellar is deep enough to follow your taste wherever it goes.
              </p>
              <div className="mt-8"><LinkButton href="/cellar">Explore the Cellar</LinkButton></div>
            </Reveal>

            <div className="mt-10 space-y-5">
              {regions.map(([name, n], i) => (
                <Reveal key={name} delay={i * 0.05}>
                  <div className="flex items-baseline justify-between text-[.8rem] uppercase tracking-[.22em]">
                    <span>{name}</span>
                    <span className="text-gold2">{n} labels</span>
                  </div>
                  <div className="mt-2 h-px w-full bg-line">
                    <motion.div
                      className="h-px bg-gold"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(n / 640) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <ScrollTilt axis="y" angle={-14}>
            <RevealImage src={u("photo-1506377247377-2a5b3b417ebb")} className="aspect-[4/5]" />
          </ScrollTilt>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {flights.map(([name, pours, price, text], i) => (
            <Reveal key={name} delay={i * 0.1}>
              <TiltCard className="h-full">
                <div className="h-full border border-line bg-bg2/60 p-9">
                  <p className="text-[.72rem] uppercase tracking-[.3em] text-gold">{pours}</p>
                  <h3 className="mb-3 mt-2 font-serif text-[2rem] font-light leading-tight">{name}</h3>
                  <p className="mb-8 text-muted">{text}</p>
                  <p className="font-serif text-4xl font-light text-gold2">{price}<span className="ml-1 text-sm text-muted">per guest</span></p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
