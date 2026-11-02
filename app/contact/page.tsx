import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactInfo from "@/components/ContactInfo";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/Forms";
import { u } from "@/lib/ui";

export const metadata: Metadata = { title: "Contact — Maison Aurelia" };

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        lines={["We would love", <em key="h" className="text-gold2">to hear from you</em>]}
        sub="Questions, press, gift cards or a note after your visit."
        img={u("photo-1517248135467-4c7edcad34c4", 2000)}
      />
      <ContactInfo />
      <section className="section bg-bg2">
        <div className="wrap grid gap-[clamp(40px,7vw,100px)] md:grid-cols-[4fr_7fr]">
          <div>
            <Reveal><p className="eyebrow">Write to Us</p></Reveal>
            <Reveal delay={0.08}><h2 className="h2">Send a <em className="text-gold2">message</em></h2></Reveal>
            <Reveal delay={0.16}><p className="text-muted">We reply to every message within one working day.</p></Reveal>
          </div>
          <Reveal><ContactForm /></Reveal>
        </div>
      </section>
    </main>
  );
}
