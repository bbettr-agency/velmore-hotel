import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { ImageBand } from "@/components/sections/ImageBand";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/site/Footer";
import { pageMetadata } from "@/lib/metadata";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("spa");

export default function SpaPage() {
  const p = pages.spa;
  return (
    <main id="main">
      <PageHero {...p.hero} />
      <Statement {...p.statement} />
      <ImageBand {...p.band} />
      <Faq {...p.faq} tone="ivory" />
      <CtaBand {...p.cta} />
      <Footer />
    </main>
  );
}
