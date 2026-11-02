import { Reveal } from "./Reveal";

const quotes = [
  ["“The most quietly astonishing meal in Paris.”", "Le Figaro"],
  ["“Cooking of rare precision and soul.”", "Michelin Guide"],
  ["“An evening you will not forget.”", "Condé Nast"],
];

const awards = [
  ["★★", "Michelin Guide", "Two stars since 2011"],
  ["18/20", "Gault & Millau", "Four toques"],
  ["#23", "World’s 50 Best", "Restaurant list 2025"],
  ["Grand", "Wine Spectator", "Award of Excellence"],
];

export default function Press() {
  return (
    <section className="section border-t border-line">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-3">
          {quotes.map(([q, src], i) => (
            <Reveal key={src} delay={i * 0.12}>
              <div className="text-center">
                <span className="font-serif text-6xl leading-none text-gold/50">✦</span>
                <p className="mt-4 font-serif text-[1.7rem] font-light italic leading-snug">{q}</p>
                <p className="mt-5 text-[.72rem] uppercase tracking-[.3em] text-gold">{src}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 border-y border-line md:grid-cols-4">
          {awards.map(([big, name, note], i) => (
            <Reveal key={name} delay={i * 0.08}>
              <div className="border-line px-6 py-10 text-center md:border-r md:last:border-r-0">
                <p className="font-serif text-5xl font-light text-gold2">{big}</p>
                <p className="mt-3 text-[.76rem] uppercase tracking-[.25em]">{name}</p>
                <p className="mt-1 text-sm text-muted">{note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
