import { Reveal, RevealImage } from "./Reveal";
import ScrollTilt from "./Tilt";
import { u } from "@/lib/ui";

const facts = [
  ["3,200", "Labels"],
  ["14,000", "Bottles"],
  ["12°", "Cellar temperature"],
  ["1947", "Oldest vintage"],
];

export default function Sommelier() {
  return (
    <section className="section">
      <div className="wrap grid items-center gap-[clamp(40px,7vw,100px)] md:grid-cols-2">
        <ScrollTilt angle={14}>
          <RevealImage src={u("photo-1553361371-9b22f78e8b1d", 1000)} className="aspect-[4/5]" />
        </ScrollTilt>
        <div>
          <Reveal><p className="eyebrow">The Sommelier</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">Camille <em className="text-gold2">Roux</em></h2></Reveal>
          <Reveal>
            <p className="mb-6 font-serif text-[clamp(1.4rem,2.4vw,2rem)] font-light italic leading-snug">
              “A great wine should answer the plate, not compete with it.”
            </p>
            <p className="mb-5 text-[1.05rem] text-muted">
              Camille joined Maison Aurelia in 2004 and became Master Sommelier a decade later. She buys young and
              cellars patiently — trusting small growers over famous labels, and pouring a bottle only when it is ready.
            </p>
            <p className="text-[1.05rem] text-muted">
              Her pairings are built course by course with the chef, and she will happily rewrite them for your taste,
              your budget or the bottle you brought for the occasion.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
            {facts.map(([n, l], i) => (
              <Reveal key={l} delay={i * 0.06}>
                <p className="font-serif text-4xl font-light text-gold2">{n}</p>
                <p className="text-[.72rem] uppercase tracking-[.25em] text-muted">{l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
