import { Reveal } from "./Reveal";
import ParallaxBg from "./ParallaxBg";
import { TiltCard } from "./Tilt";

const cards = [
  ["I", "The Dining Room", "Velvet, brass and candlelight across forty intimate seats."],
  ["II", "The Cellar", "Over 3,000 labels curated by our head sommelier."],
  ["III", "Chef’s Table", "Six seats at the pass for an unscripted, immersive evening."],
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-[clamp(100px,14vw,200px)]">
      <ParallaxBg src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=80" amount={14} />
      <div className="absolute inset-0 bg-bg/80" />
      <div className="wrap relative">
        <Reveal><p className="eyebrow">The Experience</p></Reveal>
        <Reveal delay={0.08}><h2 className="h2">Every detail, <em className="text-gold2">considered</em></h2></Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(([n, title, text], i) => (
            <Reveal key={n} delay={i * 0.1}>
              <TiltCard className="h-full"><div className="h-full border border-line bg-bg2/60 p-[44px_34px] backdrop-blur-sm transition-colors duration-700 hover:border-gold">
                <span className="font-serif text-2xl italic text-gold">{n}</span>
                <h3 className="mb-2.5 mt-3.5 font-serif text-[1.9rem] font-light leading-tight">{title}</h3>
                <p className="text-muted">{text}</p>
              </div></TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
