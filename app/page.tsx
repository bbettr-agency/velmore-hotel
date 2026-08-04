import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/hero/Hero";
import { JourneySelector } from "@/components/home/JourneySelector";
import { EstateIntro } from "@/components/home/EstateIntro";
import { ConferencesPreview } from "@/components/home/ConferencesPreview";
import { WeddingsPreview } from "@/components/home/WeddingsPreview";

export default function HomePage() {
  return (
    <main id="main">
      <Nav />
      <Hero />
      <JourneySelector />
      <EstateIntro />
      <ConferencesPreview />
      <WeddingsPreview />
    </main>
  );
}
