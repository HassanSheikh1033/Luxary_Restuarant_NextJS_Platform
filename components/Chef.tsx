import { Reveal, RevealImage } from "./Reveal";
import ScrollTilt from "./Tilt";
import LinkButton from "./LinkButton";

const u = (id: string, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const timeline = [
  ["1998", "Maison Aurelia opens", "Twenty-two seats above a Left Bank wine merchant, and one tasting menu."],
  ["2004", "First Michelin star", "Awarded after six years of cooking only what the market allowed."],
  ["2011", "Second star", "The kitchen moves to Rue de la Paix; the dining room is rebuilt around the pass."],
  ["2019", "Green Star", "Recognised for a zero-waste kitchen and a 60 km sourcing radius."],
  ["2025", "Chef’s Table", "Six seats inside the kitchen — no menu, no script."],
];

export default function Chef() {
  return (
    <section id="chef" className="section">
      <div className="wrap">
        <div className="grid items-start gap-[clamp(40px,7vw,110px)] md:grid-cols-[5fr_6fr]">
          <ScrollTilt axis="y" angle={14} className="md:sticky md:top-28">
            <div className="relative">
              <RevealImage src={u("photo-1583394293214-28ded15ee548")} className="aspect-[4/5]" />
              <div className="pointer-events-none absolute -bottom-5 -right-5 hidden h-full w-full border border-gold/40 md:block" />
            </div>
          </ScrollTilt>

          <div>
            <Reveal><p className="eyebrow">The Chef</p></Reveal>
            <Reveal delay={0.08}>
              <h2 className="h2">Étienne <em className="text-gold2">Laurent</em></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mb-6 font-serif text-[clamp(1.4rem,2.4vw,2rem)] font-light italic leading-snug text-ink/90">
                “A great plate is an argument won quietly. Nothing on it is there to impress — everything is there because it had to be.”
              </p>
            </Reveal>
            <Reveal>
              <p className="mb-5 text-[1.05rem] text-muted">
                Born in a Burgundy village of four hundred people, Étienne learned to cook at his grandmother’s stove and to
                be exact at the stoves of Lyon, Kyoto and Copenhagen. He spent eleven years as a commis, sous-chef and
                chef de partie before opening Maison Aurelia at thirty-one with borrowed copper pans and a single, stubborn idea.
              </p>
            </Reveal>
            <Reveal>
              <p className="mb-5 text-[1.05rem] text-muted">
                That idea has not changed: cook with fewer ingredients and more attention. Sauces are reduced for days, fish is
                aged on the bone, and every vegetable arrives from a farm he has personally walked. The result is a cuisine of
                clarity — classical in structure, modern in restraint, and unmistakably his.
              </p>
            </Reveal>
            <Reveal>
              <p className="mb-10 text-[1.05rem] text-muted">
                He still cooks service five nights a week, and still tastes every sauce before it leaves the kitchen.
              </p>
            </Reveal>

            <div className="border-t border-line">
              {timeline.map(([year, title, text], i) => (
                <Reveal key={year} delay={i * 0.04}>
                  <div className="grid grid-cols-[72px_1fr] gap-5 border-b border-line py-6">
                    <span className="font-serif text-2xl italic text-gold">{year}</span>
                    <div>
                      <h3 className="font-serif text-[1.6rem] font-light leading-tight">{title}</h3>
                      <p className="text-[.95rem] text-muted">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-10 font-serif text-4xl italic text-gold2">É. Laurent</p>
              <div className="mt-8"><LinkButton href="/chef">Meet the Chef</LinkButton></div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
