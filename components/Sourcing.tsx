import { Reveal, RevealImage } from "./Reveal";
import ScrollTilt from "./Tilt";

const producers = [
  ["Ferme de Bellevue", "38 km", "Heirloom vegetables & herbs", "Harvested at dawn and on our pass by noon. Chef visits every Monday to choose what will be planted next."],
  ["Domaine du Gâtinais", "62 km", "Honey, saffron & eggs", "Single-hive honey and hand-picked saffron from a family that has farmed the same field since 1911."],
  ["Maison Bordier", "410 km", "Cultured butter", "Churned in small batches and delivered twice a week — the butter on every table and in every sauce."],
  ["Pêcherie de Quiberon", "450 km", "Langoustines & sea bream", "Line-caught and delivered live. If the boats don’t go out, the menu changes."],
];

export default function Sourcing() {
  return (
    <section className="section bg-bg2">
      <div className="wrap">
        <div className="mb-16 max-w-[760px]">
          <Reveal><p className="eyebrow">From the Source</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">Every plate has an <em className="text-gold2">address</em></h2></Reveal>
          <Reveal delay={0.16}>
            <p className="text-[1.05rem] text-muted">
              Ninety percent of what reaches your table comes from producers Chef Étienne knows by name. We publish
              where each ingredient is from, how far it travelled, and who grew it — because provenance is the first
              step of flavour.
            </p>
          </Reveal>
        </div>

        <div className="grid items-start gap-[clamp(40px,7vw,100px)] md:grid-cols-[5fr_6fr]">
          <ScrollTilt angle={12} className="md:sticky md:top-28">
            <RevealImage src={`https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=80`} className="aspect-[4/5]" />
          </ScrollTilt>

          <div>
            {producers.map(([name, km, what, text], i) => (
              <Reveal key={name} delay={0.03}>
                <div className="grid grid-cols-[1fr_auto] gap-6 border-b border-line py-9 first:pt-0">
                  <div>
                    <p className="text-[.72rem] uppercase tracking-[.3em] text-gold">{what}</p>
                    <h3 className="mb-2 mt-2 font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-tight">{name}</h3>
                    <p className="text-muted">{text}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-5xl font-light leading-none text-gold2">{km.split(" ")[0]}</span>
                    <span className="block text-[.7rem] uppercase tracking-[.25em] text-muted">km away</span>
                    <span className="mt-4 block font-serif italic text-gold">0{i + 1}</span>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <p className="pt-8 text-[.95rem] italic text-muted">
                Our kitchen composts or returns every scrap — and has sent nothing to landfill since 2019.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
