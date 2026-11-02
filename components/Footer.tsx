"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const h4 = "mb-3 text-xs font-normal uppercase tracking-[.3em] text-gold";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["12%", "-4%"]);

  return (
    <footer ref={ref} className="overflow-hidden border-t border-line pt-20">
      <div className="wrap grid gap-10 md:grid-cols-5">
        <div>
          <div className="font-serif text-2xl tracking-[.06em]">Maison <em className="text-gold2">Aurelia</em></div>
          <p className="mt-2 text-muted">Contemporary French tasting menus, a vaulted cellar and an unhurried evening — since 1998.</p>
        </div>
        <div>
          <h4 className={h4}>Explore</h4>
          {[["Our Story", "/story"], ["Menu", "/menu"], ["The Chef", "/chef"], ["The Cellar", "/cellar"], ["Private Dining", "/private-dining"], ["Gallery", "/gallery"], ["Reservations", "/reservations"], ["Contact", "/contact"]].map(([l, h]) => (
            <Link key={h} href={h} className="block text-muted transition-colors hover:text-gold2">{l}</Link>
          ))}
        </div>
        <div>
          <h4 className={h4}>Visit</h4>
          <p className="text-muted">12 Rue de la Paix</p>
          <p className="text-muted">75002 Paris, France</p>
          <p className="mt-2 text-muted">Métro Opéra · Valet available</p>
        </div>
        <div>
          <h4 className={h4}>Hours</h4>
          <p className="text-muted">Tue – Sat · 6pm – 11pm</p>
          <p className="text-muted">Prélude menu · Tue &amp; Wed</p>
          <p className="text-muted">Closed Sun &amp; Mon</p>
        </div>
        <div>
          <h4 className={h4}>Contact</h4>
          <p className="text-muted">+33 1 42 00 00 00</p>
          <p className="text-muted">reserve@maisonaurelia.com</p>
          <p className="text-muted">events@maisonaurelia.com</p>
        </div>
      </div>

      <motion.div
        style={{ x, WebkitTextStroke: "1px rgba(201,164,92,.55)" }}
        className="mt-16 select-none whitespace-nowrap font-serif text-[clamp(6rem,22vw,22rem)] font-light italic leading-[.85] text-transparent"
      >
        Maison Aurelia
      </motion.div>
      <p className="pb-8 pt-6 text-center text-[.78rem] text-muted">© 2026 Maison Aurelia. All rights reserved.</p>
    </footer>
  );
}
