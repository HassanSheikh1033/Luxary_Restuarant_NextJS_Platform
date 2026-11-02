import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Story from "@/components/Story";
import Statement from "@/components/Statement";
import History from "@/components/History";
import Values from "@/components/Values";
import Team from "@/components/Team";
import Press from "@/components/Press";
import CtaBand from "@/components/CtaBand";
import { u } from "@/lib/ui";

export const metadata: Metadata = { title: "Our Story — Maison Aurelia" };

export default function StoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        lines={["Where patience", <>becomes <em key="f" className="text-gold2">flavour</em></>]}
        sub="Twenty-seven years of quiet, stubborn, beautiful cooking."
        img={u("photo-1517248135467-4c7edcad34c4", 2000)}
      />
      <Story />
      <Statement />
      <History />
      <Values />
      <Team />
      <Press />
      <CtaBand />
    </main>
  );
}
