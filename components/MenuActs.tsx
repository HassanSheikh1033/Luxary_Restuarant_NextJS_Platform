"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { u } from "@/lib/ui";
import { EASE } from "@/lib/motion";

type Act = {
  no: string;
  name: string;
  tag: string;
  text: string;
  img: string;
  courses: [string, string][];
};

const acts: Act[] = [
  {
    no: "I",
    name: "The Opening",
    tag: "Raw & cold · 6:45 pm",
    text: "The evening begins in brightness: cold plates, sharp acidity and the sea. Nothing is cooked that does not need to be.",
    img: u("photo-1414235077428-338989a2e8c0", 1100),
    courses: [
      ["Oscietra Caviar", "Hand-cut chive, crème fraîche, buckwheat blini"],
      ["Langoustine Tartare", "Finger lime, shiso, cultured cream"],
      ["Cured Sea Bream", "Yuzu, fennel, green apple"],
      ["Garden Consommé", "Chilled heirloom tomato, herb oil, basil flower"],
    ],
  },
  {
    no: "II",
    name: "The Sea",
    tag: "Warm & delicate · 7:45 pm",
    text: "Butter, shellfish and gentle heat. Sauces arrive in small pours, made minutes before they reach the table.",
    img: u("photo-1574484284002-952d92456975", 1100),
    courses: [
      ["Hokkaido Scallop", "Brown butter, yuzu kosho, golden cauliflower"],
      ["Saffron Butter Salmon", "Lemon, fennel pollen, saffron beurre blanc"],
      ["Lobster Bisque", "Cognac, tarragon, warm brioche"],
    ],
  },
  {
    no: "III",
    name: "The Earth",
    tag: "Deep & savoury · 8:30 pm",
    text: "The kitchen turns inland. Truffle, grain and the best of the farm, cooked slowly and finished over fire.",
    img: u("photo-1432139555190-58524dae6a55", 1100),
    courses: [
      ["Black Truffle Risotto", "Aged carnaroli, Périgord truffle, parmesan 36 months"],
      ["Iberico Pork Cutlet", "Caramelised apple, charred broccolini, pan jus"],
    ],
  },
  {
    no: "IV",
    name: "The Fire",
    tag: "The centrepiece · 9:15 pm",
    text: "One plate, built around one ingredient. Wagyu aged for six weeks, seared hard and rested for exactly as long as it was cooked.",
    img: u("photo-1432139509613-5c4255815697", 1100),
    courses: [["Wagyu A5 Tenderloin", "Bone-marrow jus, smoked pommes purée, winter greens"]],
  },
  {
    no: "V",
    name: "The Sweet Ending",
    tag: "Cheese & dessert · 9:45 pm",
    text: "A trolley of twenty-four cheeses, then the dish the house is known for. Dessert is never an afterthought here.",
    img: u("photo-1551024506-0bccd828d307", 1100),
    courses: [
      ["Aged Cheese Trolley", "Twenty-four cheeses, seasonal chutneys, walnut bread"],
      ["Vanilla Gold Parfait", "Madagascan vanilla, salted caramel, Valrhona grand cru"],
    ],
  },
];

function Arch({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-3 rounded-t-[999px] border border-gold/40" />
      <div className="relative h-full w-full overflow-hidden rounded-t-[999px]">
        <Image src={src} alt="" fill sizes="(max-width:768px) 80vw, 40vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function ActBlock({ act, index, setActive }: { act: Act; index: number; setActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) setActive(index);
  }, [inView, index, setActive]);

  return (
    <div ref={ref} className="flex min-h-[100svh] flex-col justify-center py-20">
      {/* mobile image */}
      <Arch src={act.img} className="mb-12 aspect-[3/4] w-[78%] md:hidden" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <p className="eyebrow">Act {act.no} · {act.tag}</p>
        <h2 className="mb-6 font-serif text-[clamp(3rem,6.5vw,6rem)] font-light leading-[1] tracking-[-.01em]">
          {act.name.split(" ").slice(0, -1).join(" ")}{" "}
          <em className="text-gold2">{act.name.split(" ").slice(-1)}</em>
        </h2>
        <p className="mb-10 max-w-[520px] text-[1.05rem] text-muted">{act.text}</p>

        <ul className="max-w-[560px]">
          {act.courses.map(([n, d], i) => (
            <motion.li
              key={n}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 * i }}
              className="group border-t border-line py-5 transition-colors duration-500 hover:border-gold"
            >
              <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] font-light leading-tight transition-colors duration-500 group-hover:text-gold2">{n}</h3>
              <p className="text-[.95rem] text-muted">{d}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

/** The tasting menu told in five acts: a pinned arch of photography changes as the courses scroll past. */
export default function MenuActs() {
  const [active, setActive] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const act = acts[active];

  return (
    <section className="relative">
      <div className="wrap pt-[clamp(80px,10vw,140px)] text-center">
        <p className="eyebrow">The Tasting Menu</p>
        <h2 className="h2 mx-auto max-w-[800px]">Five acts, <em className="text-gold2">twelve courses</em></h2>
        <p className="mx-auto max-w-[520px] text-muted">Scroll through the evening as it unfolds — from the first cold plate to the last spoon of parfait.</p>
      </div>

      <div ref={wrap} className="wrap grid gap-[clamp(40px,7vw,120px)] md:grid-cols-2">
        {/* sticky visual */}
        <div className="relative hidden md:block">
          <div className="sticky top-0 grid h-screen place-items-center">
            <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[min(44vw,36rem)] italic leading-none text-transparent [-webkit-text-stroke:1px_rgba(201,164,92,.14)]">
              {act.no}
            </span>
            <motion.div style={{ y: drift }} className="relative aspect-[3/4] w-[min(80%,460px)]">
              <div className="absolute -inset-3 rounded-t-[999px] border border-gold/40" />
              <div className="relative h-full w-full overflow-hidden rounded-t-[999px]">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={act.no}
                    className="absolute inset-0"
                    initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }}
                    animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.3, ease: EASE }}
                  >
                    <Image src={act.img} alt={act.name} fill sizes="40vw" className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="absolute -bottom-12 left-0 right-0 text-center text-[.7rem] uppercase tracking-[.35em] text-gold">
                Act {act.no} <span className="text-muted">/ V</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* scrolling acts */}
        <div>
          {acts.map((a, i) => (
            <ActBlock key={a.no} act={a} index={i} setActive={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
