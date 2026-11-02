import { Reveal } from "./Reveal";
import { TiltCard } from "./Tilt";

const notes = [
  ["Seasonal by Nature", "The menu changes with the market — typically three to four dishes each month. If a course you loved has gone, the chef will happily cook it from memory."],
  ["Allergies & Diets", "Tell us when you reserve and every course is adapted. Vegetarian and pescatarian menus with 48 hours’ notice; vegan and gluten-free with 72."],
  ["Pairings", "A classic pairing, a reserve pairing, or a non-alcoholic pairing of house-made infusions, kombucha and aged teas — each composed with the chef."],
  ["Service", "A discretionary 12.5% service charge is included. Prices are in euros and include VAT. Menus are served to the whole table."],
];

export default function MenuInfo() {
  return (
    <section className="section bg-bg2">
      <div className="wrap">
        <div className="mb-14 max-w-[700px]">
          <Reveal><p className="eyebrow">Good to Know</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">About the <em className="text-gold2">menus</em></h2></Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {notes.map(([t, text], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <TiltCard className="h-full">
                <div className="h-full border border-line bg-bg/60 p-9">
                  <h3 className="mb-3 font-serif text-[1.9rem] font-light leading-tight">{t}</h3>
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
