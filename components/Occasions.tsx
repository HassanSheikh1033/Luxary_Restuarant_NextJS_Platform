import { Reveal } from "./Reveal";
import { TiltCard } from "./Tilt";

const occasions = [
  ["Weddings & Engagements", "Intimate wedding dinners and rehearsal evenings for up to forty, with a custom menu and floral design."],
  ["Corporate Dinners", "Board dinners, client evenings and launches in a space that quietly signals how much you care."],
  ["Anniversaries & Birthdays", "From a candlelit table for two to a surprise dinner for twelve — handwritten menus and a cake from our pastry chef."],
  ["Wine Dinners", "Producer-led evenings with Camille: a single estate, a vertical of vintages, and a menu cooked around them."],
];

export default function Occasions() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="mb-14 max-w-[700px]">
          <Reveal><p className="eyebrow">Occasions</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">Evenings worth <em className="text-gold2">marking</em></h2></Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {occasions.map(([t, text], i) => (
            <Reveal key={t} delay={(i % 2) * 0.1}>
              <TiltCard className="h-full">
                <div className="h-full border border-line bg-bg2/60 p-10">
                  <span className="font-serif text-xl italic text-gold">0{i + 1}</span>
                  <h3 className="mb-3 mt-2 font-serif text-[2rem] font-light leading-tight">{t}</h3>
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
