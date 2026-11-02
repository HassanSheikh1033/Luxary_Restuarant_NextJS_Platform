import { Reveal } from "./Reveal";
import ParallaxBg from "./ParallaxBg";
import ScrollTilt, { TiltCard } from "./Tilt";
import LinkButton from "./LinkButton";

const rooms = [
  {
    name: "Le Salon Privé",
    guests: "8 – 14 guests",
    price: "From 340 per guest",
    text: "A panelled room with its own entrance, fireplace and sommelier. Ideal for anniversaries, board dinners and quiet celebrations.",
    items: ["Dedicated service team", "Bespoke menu with the chef", "Private cellar access", "Floral and music design"],
  },
  {
    name: "The Chef’s Table",
    guests: "6 guests",
    price: "From 480 per guest",
    text: "Six seats at the pass. No printed menu — Chef Étienne cooks, explains and improvises through the whole evening.",
    items: ["Seven-hour experience", "Reserve wine flight included", "Recipe cards to take home", "Meet the team afterwards"],
  },
  {
    name: "La Maison Entière",
    guests: "Up to 40 guests",
    price: "On request",
    text: "The whole restaurant, closed to the public for one night. Reception in the cellar, dinner in the dining room, dessert on the terrace.",
    items: ["Exclusive use from 6pm", "Cocktail reception & canapés", "Tailored menu & wine list", "Event planner on site"],
  },
];

export default function Private() {
  return (
    <section id="private" className="relative overflow-hidden py-[clamp(100px,14vw,200px)]">
      <ParallaxBg src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80" amount={12} />
      <div className="absolute inset-0 bg-bg/85" />
      <div className="wrap relative">
        <Reveal><p className="eyebrow">Private Dining</p></Reveal>
        <Reveal delay={0.08}><h2 className="h2">Make the evening <em className="text-gold2">yours</em></h2></Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-[640px] text-[1.05rem] text-muted">
            From an intimate table of six to a full restaurant buy-out, our events team designs every detail — menu,
            wines, flowers, music and timing — around the people at the table.
          </p>
        </Reveal>

        <ScrollTilt angle={14} className="mt-16">
          <div className="grid gap-6 md:grid-cols-3">
            {rooms.map((r) => (
              <TiltCard key={r.name} className="h-full">
                <div className="flex h-full flex-col border border-line bg-bg2/70 p-9 backdrop-blur-sm">
                  <p className="text-[.72rem] uppercase tracking-[.3em] text-gold">{r.guests}</p>
                  <h3 className="mb-3 mt-2 font-serif text-[2rem] font-light leading-tight">{r.name}</h3>
                  <p className="mb-6 text-muted">{r.text}</p>
                  <ul className="mb-8 space-y-2 text-[.92rem]">
                    {r.items.map((it) => (
                      <li key={it} className="flex gap-3"><span className="text-gold">✦</span>{it}</li>
                    ))}
                  </ul>
                  <p className="mt-auto border-t border-line pt-5 font-serif text-2xl text-gold2">{r.price}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </ScrollTilt>
        <Reveal><div className="mt-14 text-center"><LinkButton href="/private-dining">Enquire About Private Dining</LinkButton></div></Reveal>
      </div>
    </section>
  );
}
