import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/hero/Hero";
import { JourneySelector } from "@/components/home/JourneySelector";
import { EstateIntro } from "@/components/home/EstateIntro";
import { ConferencesPreview } from "@/components/home/ConferencesPreview";
import { WeddingsPreview } from "@/components/home/WeddingsPreview";
import { StayPreview } from "@/components/home/StayPreview";
import { SpaPreview } from "@/components/home/SpaPreview";
import { DiningPreview } from "@/components/home/DiningPreview";
import { GalleryShowcase } from "@/components/home/GalleryShowcase";
import { ReviewsTrust } from "@/components/home/ReviewsTrust";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <main id="main">
      <Nav />
      <Hero />
      <JourneySelector />
      <EstateIntro />
      <ConferencesPreview />
      <WeddingsPreview />
      <StayPreview />
      <SpaPreview />
      <DiningPreview />
      <GalleryShowcase />
      <ReviewsTrust />
      <FinalCta />
    </main>
  );
}
