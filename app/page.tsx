import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/hero/Hero";
import { JourneySelector } from "@/components/home/JourneySelector";

export default function HomePage() {
  return (
    <main id="main">
      <Nav />
      <Hero />
      <JourneySelector />
    </main>
  );
}
