const words = ["Seasonal", "Handcrafted", "Timeless"];

export default function Marquee() {
  const row = Array.from({ length: 4 }, () => words).flat();
  return (
    <section aria-hidden className="overflow-hidden border-y border-line bg-bg2 py-[26px]">
      <div className="flex w-max animate-marquee whitespace-nowrap font-serif text-[clamp(2rem,4vw,3.4rem)] font-light italic leading-none">
        {[0, 1].map((k) => (
          <div key={k} className="flex gap-12 pr-12">
            {row.map((w, i) => (
              <span key={i} className="flex gap-12">
                {w}
                <i className="text-[.8em] not-italic text-gold">✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
