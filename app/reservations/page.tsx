import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { ReservationForm } from "@/components/Forms";
import { u } from "@/lib/ui";

export const metadata: Metadata = { title: "Reservations — Maison Aurelia" };

const info = [
  ["Hours", "Tue – Wed 6:00 – 11:00 pm\nThu – Sat 6:00 – 11:30 pm\nClosed Sunday & Monday"],
  ["Dress", "Smart, elegant attire. Jackets encouraged for gentlemen. No sportswear or beachwear."],
  ["Policy", "Free changes or cancellation up to 72 hours before. After that, a deposit of 100 per guest is retained."],
  ["Large parties", "Seven guests or more: please call +33 1 42 00 00 00, or enquire about private dining."],
];

export default function ReservationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reservations"
        lines={["Join us", <em key="e" className="text-gold2">this evening</em>]}
        sub="Tables open sixty days ahead at 10am Paris time. Weekends fill within hours."
        img={u("photo-1544148103-0773bf10d330", 2000)}
      />
      <section className="section">
        <div className="wrap grid gap-[clamp(40px,7vw,100px)] md:grid-cols-[7fr_4fr]">
          <Reveal><ReservationForm /></Reveal>
          <aside className="md:sticky md:top-28 md:self-start">
            {info.map(([t, text], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="border-t border-line py-6">
                  <p className="text-[.72rem] uppercase tracking-[.3em] text-gold">{t}</p>
                  <p className="mt-2 whitespace-pre-line text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </aside>
        </div>
      </section>
      <Faq />
    </main>
  );
}
