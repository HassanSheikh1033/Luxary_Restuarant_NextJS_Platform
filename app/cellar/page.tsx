import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Cellar from "@/components/Cellar";
import Sommelier from "@/components/Sommelier";
import CtaBand from "@/components/CtaBand";
import { u } from "@/lib/ui";

export const metadata: Metadata = { title: "The Cellar — Maison Aurelia" };

export default function CellarPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Cellar"
        lines={["Three thousand", <em key="l" className="text-gold2">labels</em>]}
        sub="Fourteen thousand bottles, cellared patiently beneath the dining room."
        img={u("photo-1506377247377-2a5b3b417ebb", 2000)}
      />
      <Cellar />
      <Sommelier />
      <CtaBand title="Pour something rare" text="Ask for the Sommelier’s Cellar flight — six guests each evening, by reservation." cta="Reserve with a Pairing" />
    </main>
  );
}
