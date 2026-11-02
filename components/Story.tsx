"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal, RevealImage } from "./Reveal";
import ScrollTilt from "./Tilt";
import { usePathname } from "next/navigation";
import LinkButton from "./LinkButton";

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const c = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => ref.current && (ref.current.textContent = String(Math.round(v))),
    });
    return () => c.stop();
  }, [inView, to]);

  return <b ref={ref} className="block font-serif text-5xl font-light leading-none text-gold2">0</b>;
}

const stats = [
  [2, "Michelin Stars"],
  [27, "Years of craft"],
  [12, "Courses"],
] as const;

export default function Story() {
  const home = usePathname() === "/";
  return (
    <section id="story" className="section">
      <div className="wrap grid items-center gap-[clamp(40px,8vw,120px)] md:grid-cols-2">
        <ScrollTilt angle={14} axis="y">
          <RevealImage
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80"
            className="aspect-[4/5]"
          />
        </ScrollTilt>
        <div>
          <Reveal><p className="eyebrow">Our Story</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2">Where patience becomes <em className="text-gold2">flavour</em></h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mb-[18px] text-[1.05rem] text-muted">
              For over twenty-five years, Chef Étienne Laurent has built Maison Aurelia on a single belief: that great cooking is the quiet pursuit of perfection. Every ingredient is sourced within a day of the table, every plate finished by hand.
            </p>
            <p className="text-[1.05rem] text-muted">We invite you to slow down — and let the evening unfold.</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-11 flex gap-[clamp(26px,4vw,44px)] border-t border-line pt-8">
              {stats.map(([n, label]) => (
                <div key={label}>
                  <Count to={n} />
                  <span className="text-[.72rem] uppercase tracking-[.22em] text-muted">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          {home && <Reveal><div className="mt-10"><LinkButton href="/story">Our Full Story</LinkButton></div></Reveal>}
        </div>
      </div>
    </section>
  );
}
