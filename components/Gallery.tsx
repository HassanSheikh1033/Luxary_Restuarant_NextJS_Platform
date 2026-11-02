import { Reveal, RevealImage } from "./Reveal";
import ScrollTilt from "./Tilt";
import LinkButton from "./LinkButton";

const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="wrap">
        <div className="mb-16">
          <Reveal><p className="eyebrow">Gallery</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">Moments at <em className="text-gold2">the table</em></h2></Reveal>
        </div>

        <ScrollTilt angle={12}>
        <div className="grid auto-rows-[clamp(160px,22vw,300px)] grid-cols-2 gap-5 md:grid-cols-12">
          <RevealImage hoverZoom src={u("photo-1559339352-11d035aa65de", 900)} className="col-span-2 md:col-span-7 md:row-span-2" />
          <RevealImage hoverZoom src={u("photo-1544148103-0773bf10d330", 700)} className="md:col-span-5" sizes="(max-width: 768px) 50vw, 40vw" />
          <RevealImage hoverZoom src={u("photo-1432139509613-5c4255815697", 700)} className="md:col-span-5" sizes="(max-width: 768px) 50vw, 40vw" />
          <RevealImage hoverZoom src={u("photo-1577106263724-2c8e03bfe9cf", 1200)} className="col-span-2 md:col-span-12" sizes="100vw" />
        </div>
        </ScrollTilt>
        <Reveal><div className="mt-12 text-center"><LinkButton href="/gallery">View Full Gallery</LinkButton></div></Reveal>
      </div>
    </section>
  );
}
