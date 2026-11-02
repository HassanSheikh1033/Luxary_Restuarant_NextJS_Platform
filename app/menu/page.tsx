import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MenuActs from "@/components/MenuActs";
import MenuCard from "@/components/MenuCard";
import MenuInfo from "@/components/MenuInfo";
import CtaBand from "@/components/CtaBand";
import { u } from "@/lib/ui";

export const metadata: Metadata = { title: "Menu — Maison Aurelia" };

export default function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Menu"
        lines={["A tasting", <em key="j" className="text-gold2">journey</em>]}
        sub="Twelve courses, cooked from the market and paired with the cellar."
        img={u("photo-1414235077428-338989a2e8c0", 2000)}
      />
      <MenuActs />
      <MenuCard />
      <MenuInfo />
      <CtaBand title="Taste it yourself" text="Tables open sixty days ahead. The menu changes with the seasons — reserve while the market is at its best." />
    </main>
  );
}
