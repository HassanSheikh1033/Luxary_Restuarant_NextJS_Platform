"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { u } from "@/lib/ui";
import { EASE } from "@/lib/motion";

type Shot = { id: string; cat: string; caption: string; tall?: boolean };

const shots: Shot[] = [
  { id: "photo-1559339352-11d035aa65de", cat: "Rooms", caption: "The terrace at golden hour" },
  { id: "photo-1414235077428-338989a2e8c0", cat: "Dishes", caption: "Oscietra caviar", tall: true },
  { id: "photo-1577106263724-2c8e03bfe9cf", cat: "Kitchen", caption: "Finishing the pass" },
  { id: "photo-1432139509613-5c4255815697", cat: "Dishes", caption: "Wagyu A5 tenderloin" },
  { id: "photo-1506377247377-2a5b3b417ebb", cat: "Cellar", caption: "Burgundy, in the glass", tall: true },
  { id: "photo-1550966871-3ed3cdb5ed0c", cat: "Rooms", caption: "The dining room" },
  { id: "photo-1574484284002-952d92456975", cat: "Dishes", caption: "Saffron butter salmon" },
  { id: "photo-1553361371-9b22f78e8b1d", cat: "Cellar", caption: "A pour at the table" },
  { id: "photo-1577219491135-ce391730fb2c", cat: "Kitchen", caption: "Service, 8:45 pm", tall: true },
  { id: "photo-1432139555190-58524dae6a55", cat: "Dishes", caption: "Iberico pork cutlet" },
  { id: "photo-1464226184884-fa280b87c399", cat: "Kitchen", caption: "This morning’s harvest" },
  { id: "photo-1551024506-0bccd828d307", cat: "Dishes", caption: "Vanilla gold parfait" },
  { id: "photo-1474722883778-792e7990302f", cat: "Cellar", caption: "Harvest grapes" },
  { id: "photo-1544148103-0773bf10d330", cat: "Rooms", caption: "A table set for two" },
];

const cats = ["All", "Dishes", "Rooms", "Cellar", "Kitchen"];

export default function GalleryGrid() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = shots.filter((s) => cat === "All" || s.cat === cat);

  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (open === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    addEventListener("keydown", key);
    document.documentElement.style.overflow = "hidden";
    return () => {
      removeEventListener("keydown", key);
      document.documentElement.style.overflow = "";
    };
  }, [open, step]);

  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="mb-14 flex flex-wrap justify-center gap-x-2 gap-y-3 border-b border-line pb-6">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className="relative px-5 py-2 text-[.78rem] uppercase tracking-[.25em]">
                <span className={`transition-colors duration-500 ${cat === c ? "text-gold2" : "text-muted hover:text-ink"}`}>{c}</span>
                {cat === c && <motion.span layoutId="gal-tab" transition={{ duration: 0.6, ease: EASE }} className="absolute inset-x-5 -bottom-[25px] h-px bg-gold" />}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={cat} className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {list.map((s, i) => (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.06 * i }}
              onClick={() => setOpen(i)}
              data-cursor="View"
              className={`group relative block w-full break-inside-avoid overflow-hidden ${s.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
            >
              <Image src={u(s.id, 900)} alt={s.caption} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-left opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[.68rem] uppercase tracking-[.3em] text-gold">{s.cat}</p>
                <p className="font-serif text-xl">{s.caption}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && list[open] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[150] grid place-items-center bg-bg/95 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <motion.div
              key={list[open].id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative h-[80vh] w-[min(92vw,1200px)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={u(list[open].id, 1800)} alt={list[open].caption} fill sizes="92vw" className="object-contain" priority />
            </motion.div>
            <div className="absolute inset-x-0 bottom-8 text-center">
              <p className="text-[.68rem] uppercase tracking-[.3em] text-gold">{list[open].cat} · {open + 1} / {list.length}</p>
              <p className="font-serif text-2xl">{list[open].caption}</p>
            </div>
            <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-4 top-1/2 h-12 w-12 -translate-y-1/2 border border-line text-gold transition-colors hover:border-gold md:left-10">←</button>
            <button aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-4 top-1/2 h-12 w-12 -translate-y-1/2 border border-line text-gold transition-colors hover:border-gold md:right-10">→</button>
            <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-6 top-6 h-12 w-12 border border-line text-xl text-gold transition-colors hover:border-gold">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
