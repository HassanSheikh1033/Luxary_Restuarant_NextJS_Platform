import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBand from "@/components/CtaBand";
import { u } from "@/lib/ui";

export const metadata: Metadata = { title: "Gallery — Maison Aurelia" };

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        lines={["Moments at", <em key="t" className="text-gold2">the table</em>]}
        sub="Dishes, rooms, the cellar and the kitchen — as they look on an ordinary night."
        img={u("photo-1550966871-3ed3cdb5ed0c", 2000)}
      />
      <GalleryGrid />
      <CtaBand title="See it in person" text="Photographs are one thing. Join us for the evening itself." />
    </main>
  );
}
