import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Marquee from "@/components/Marquee";
import Statement from "@/components/Statement";
import Signature from "@/components/Signature";
import Chef from "@/components/Chef";
import Menu from "@/components/Menu";
import Evening from "@/components/Evening";
import Experience from "@/components/Experience";
import Cellar from "@/components/Cellar";
import Sourcing from "@/components/Sourcing";
import Gallery from "@/components/Gallery";
import Private from "@/components/Private";
import Press from "@/components/Press";
import Faq from "@/components/Faq";
import Reserve from "@/components/Reserve";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Story />
      <Marquee />
      <Statement />
      <Signature />
      <Chef />
      <Menu />
      <Evening />
      <Experience />
      <Cellar />
      <Sourcing />
      <Gallery />
      <Private />
      <Press />
      <Faq />
      <Reserve />
    </main>
  );
}
