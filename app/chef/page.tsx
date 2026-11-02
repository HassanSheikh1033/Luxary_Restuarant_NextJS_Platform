import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Chef from "@/components/Chef";
import Principles from "@/components/Principles";
import Sourcing from "@/components/Sourcing";
import CtaBand from "@/components/CtaBand";
import { u } from "@/lib/ui";

export const metadata: Metadata = { title: "The Chef — Maison Aurelia" };

export default function ChefPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Chef"
        lines={["Étienne", <em key="l" className="text-gold2">Laurent</em>]}
        sub="Two Michelin stars, one stubborn idea: fewer ingredients, more attention."
        img={u("photo-1577219491135-ce391730fb2c", 2000)}
      />
      <Chef />
      <Principles />
      <Sourcing />
      <CtaBand title="Dine with the chef" text="Six seats at the pass. No menu, no script — only Chef Étienne, the fire and the evening." cta="Reserve the Chef’s Table" />
    </main>
  );
}
