"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=80`;

export const signature = [
  { no: "I", name: "Oscietra Caviar", note: "Chive, crème fraîche, blini", img: u("photo-1414235077428-338989a2e8c0") },
  { no: "II", name: "Saffron Salmon", note: "Lemon, fennel pollen, beurre blanc", img: u("photo-1574484284002-952d92456975") },
  { no: "III", name: "Wagyu A5", note: "Bone-marrow jus, charred broccolini", img: u("photo-1432139509613-5c4255815697") },
  { no: "IV", name: "Iberico Cutlet", note: "Caramelised apple, pan jus", img: u("photo-1432139555190-58524dae6a55") },
  { no: "V", name: "Vanilla Gold Parfait", note: "Salted caramel, Valrhona", img: u("photo-1551024506-0bccd828d307") },
];

/** Pinned section: vertical scroll drives a horizontal track of signature dishes. */
export default function Signature() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const measure = () => track.current && setDist(Math.max(0, track.current.scrollWidth - innerWidth));
    measure();
    addEventListener("resize", measure);
    return () => removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const imgX = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={section} className="relative h-[420vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="wrap mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Signature</p>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-light leading-none">
              Five <em className="text-gold2">acts</em>
            </h2>
          </div>
          <p className="hidden text-[.72rem] uppercase tracking-[.3em] text-muted md:block">Scroll to explore →</p>
        </div>

        <motion.div ref={track} style={{ x }} className="flex gap-8 pl-[max(24px,calc((100vw-1200px)/2))] pr-[10vw]">
          {signature.map((d) => (
            <article key={d.no} data-cursor="Taste" className="group relative h-[58vh] w-[78vw] shrink-0 overflow-hidden md:w-[34vw]">
              <motion.div style={{ x: imgX }} className="absolute -inset-x-[12%] inset-y-0">
                <Image src={d.img} alt={d.name} fill sizes="50vw" className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="font-serif text-xl italic text-gold">{d.no}</span>
                <h3 className="font-serif text-4xl font-light leading-tight">{d.name}</h3>
                <p className="text-sm text-muted">{d.note}</p>
              </div>
              <div className="absolute inset-0 border border-line transition-colors duration-700 group-hover:border-gold" />
            </article>
          ))}
        </motion.div>

        <div className="wrap mt-8">
          <div className="h-px w-full bg-line">
            <motion.div style={{ width: bar }} className="h-px bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
