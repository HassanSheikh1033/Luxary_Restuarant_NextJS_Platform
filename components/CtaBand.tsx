import { Reveal } from "./Reveal";
import ParallaxBg from "./ParallaxBg";
import LinkButton from "./LinkButton";

/** Closing call-to-action that ends every inner page. */
export default function CtaBand({
  title = "Reserve your evening",
  text = "Tables open sixty days ahead. Join us for an unhurried evening at Maison Aurelia.",
  href = "/reservations",
  cta = "Reserve a Table",
  img = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80",
}: {
  title?: string;
  text?: string;
  href?: string;
  cta?: string;
  img?: string;
}) {
  return (
    <section className="relative overflow-hidden py-[clamp(100px,14vw,190px)] text-center">
      <ParallaxBg src={img} amount={10} />
      <div className="absolute inset-0 bg-bg/85" />
      <div className="wrap relative">
        <Reveal><p className="eyebrow">Maison Aurelia</p></Reveal>
        <Reveal delay={0.08}>
          <h2 className="h2">{title.split(" ").slice(0, -1).join(" ")} <em className="text-gold2">{title.split(" ").slice(-1)}</em></h2>
        </Reveal>
        <Reveal delay={0.16}><p className="mx-auto mb-10 max-w-[520px] text-muted">{text}</p></Reveal>
        <Reveal delay={0.24}><LinkButton href={href}>{cta}</LinkButton></Reveal>
      </div>
    </section>
  );
}
