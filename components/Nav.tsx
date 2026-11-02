"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { EASE } from "@/lib/motion";

export const pages = [
  ["Story", "/story"],
  ["Menu", "/menu"],
  ["Chef", "/chef"],
  ["Cellar", "/cellar"],
  ["Private Dining", "/private-dining"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export default function Nav() {
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 60);
    setHidden(y > prev && y > 600);
  });

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-gold to-gold2"
      />
      <motion.header
        animate={{ y: hidden && !open ? "-100%" : 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[clamp(24px,5vw,64px)] transition-all duration-500 ${
          scrolled || open ? "border-b border-line bg-bg/80 py-4 backdrop-blur-[14px]" : "py-[26px]"
        }`}
      >
        <Link href="/" className="relative z-[2] font-serif text-2xl tracking-[.06em]">
          Maison <em className="text-gold2">Aurelia</em>
        </Link>

        <nav
          className={`items-center gap-[clamp(18px,2.2vw,34px)] max-lg:fixed max-lg:inset-0 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:gap-7 max-lg:bg-bg max-lg:transition-opacity max-lg:duration-500 lg:flex ${
            open ? "max-lg:opacity-100" : "max-lg:pointer-events-none max-lg:opacity-0"
          }`}
        >
          {pages.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`group relative py-1 text-[.74rem] uppercase tracking-[.2em] transition-colors max-lg:text-lg ${active ? "text-gold2" : ""}`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-right bg-gold transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:origin-left group-hover:scale-x-100 ${
                    active ? "origin-left scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/reservations"
            className="border border-gold px-[22px] py-2.5 text-[.74rem] uppercase tracking-[.2em] text-gold2 transition-colors duration-500 hover:bg-gold hover:text-bg max-lg:text-lg"
          >
            Reserve
          </Link>
        </nav>

        <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className="relative z-[2] h-5 w-8 lg:hidden">
          <span className={`absolute left-0 h-px w-full bg-ink transition-all duration-500 ${open ? "top-[9px] rotate-45" : "top-[5px]"}`} />
          <span className={`absolute left-0 h-px w-full bg-ink transition-all duration-500 ${open ? "bottom-2.5 -rotate-45" : "bottom-[5px]"}`} />
        </button>
      </motion.header>
    </>
  );
}
