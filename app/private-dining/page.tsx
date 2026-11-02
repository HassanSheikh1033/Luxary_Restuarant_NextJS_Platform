import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Private from "@/components/Private";
import Occasions from "@/components/Occasions";
import Process from "@/components/Process";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/Forms";
import { u } from "@/lib/ui";

export const metadata: Metadata = { title: "Private Dining — Maison Aurelia" };

export default function PrivateDiningPage() {
  return (
    <main>
      <PageHero
        eyebrow="Private Dining"
        lines={["Make the evening", <em key="y" className="text-gold2">yours</em>]}
        sub="From a table of six to the whole restaurant, designed around the people you invite."
        img={u("photo-1559339352-11d035aa65de", 2000)}
      />
      <Private />
      <Occasions />
      <Process />
      <section id="enquire" className="section">
        <div className="wrap grid gap-[clamp(40px,7vw,100px)] md:grid-cols-[4fr_7fr]">
          <div>
            <Reveal><p className="eyebrow">Enquire</p></Reveal>
            <Reveal delay={0.08}><h2 className="h2">Tell us about <em className="text-gold2">your evening</em></h2></Reveal>
            <Reveal delay={0.16}>
              <p className="text-muted">Prefer to talk? Call our events director on +33 1 42 00 00 01 or write to events@maisonaurelia.com.</p>
            </Reveal>
          </div>
          <Reveal><EnquiryForm /></Reveal>
        </div>
      </section>
    </main>
  );
}
