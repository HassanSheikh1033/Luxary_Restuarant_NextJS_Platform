import { Reveal } from "./Reveal";
import { TiltCard } from "./Tilt";

const values = [
  ["I", "Restraint", "We cook with fewer ingredients and more attention. If something does not make the plate better, it does not go on the plate."],
  ["II", "Provenance", "Every ingredient has a name and an address. We buy from people we can look in the eye, and we publish who they are."],
  ["III", "Patience", "Sauces are reduced for days, fish is aged on the bone, wines are cellared for decades. Time is our most important ingredient."],
  ["IV", "Hospitality", "The best meals are felt as much as tasted. Our team is trained to anticipate, never to intrude."],
];

export default function Values() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="mb-14 max-w-[700px]">
          <Reveal><p className="eyebrow">What We Believe</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">Four <em className="text-gold2">principles</em></h2></Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(([n, t, text], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <TiltCard className="h-full">
                <div className="h-full border border-line bg-bg2/60 p-9">
                  <span className="font-serif text-2xl italic text-gold">{n}</span>
                  <h3 className="mb-3 mt-3 font-serif text-[2rem] font-light leading-tight">{t}</h3>
                  <p className="text-muted">{text}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
