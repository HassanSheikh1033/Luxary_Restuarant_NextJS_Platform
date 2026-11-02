import { Reveal } from "./Reveal";
import { TiltCard } from "./Tilt";

const team = [
  ["ÉL", "Étienne Laurent", "Chef & Founder", "Opened Maison Aurelia in 1998. Still cooks service five nights a week."],
  ["CR", "Camille Roux", "Head Sommelier", "Twenty years building the cellar. Master Sommelier since 2014."],
  ["MD", "Marc Delacroix", "Chef de Cuisine", "Trained in Lyon and Kyoto. Leads the kitchen on the nights the founder rests."],
  ["IV", "Inès Valmont", "Pastry Chef", "Creator of the gold-leaf parfait. Formerly of Paris’s grandest patisseries."],
  ["TB", "Thomas Berger", "Maître d’", "Fourteen years at the door. Remembers every guest’s name and favourite table."],
  ["LN", "Léa Navarro", "Events Director", "Designs private dinners from six to forty guests, down to the last candle."],
];

export default function Team() {
  return (
    <section className="section bg-bg2">
      <div className="wrap">
        <div className="mb-14 max-w-[700px]">
          <Reveal><p className="eyebrow">The Team</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">The people <em className="text-gold2">behind the pass</em></h2></Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(([mono, name, role, bio], i) => (
            <Reveal key={name} delay={(i % 3) * 0.08}>
              <TiltCard className="h-full">
                <div className="h-full border border-line bg-bg/60 p-9">
                  <div className="mb-8 grid h-20 w-20 place-items-center rounded-full border border-gold/50 font-serif text-3xl italic text-gold2">{mono}</div>
                  <p className="text-[.72rem] uppercase tracking-[.3em] text-gold">{role}</p>
                  <h3 className="mb-3 mt-1 font-serif text-[1.9rem] font-light leading-tight">{name}</h3>
                  <p className="text-muted">{bio}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
