import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/hero/Hero";
import { JourneyPeek } from "@/components/home/JourneyPeek";

export default function HomePage() {
  return (
    <main id="main">
      <Nav />
      <Hero />
      <JourneyPeek />
    </main>
  );
}
