import Image from "next/image";
import { site } from "@/config/site";
import { img } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Homepage Dining preview — the image-FIRST section: a full-bleed dining
 * photograph does the emotional work, with copy as a restrained overlay. A new
 * composition (edge-to-edge band + overlaid copy panel) distinct from every prior
 * section. Sells the EXPERIENCE — gathering, shared meals, conversation,
 * hospitality — and the confirmed certified-halal welcome. NAME-NEUTRAL
 * (restaurant name unconfirmed); NO invented menu/cuisine/pricing/chefs/hours; NO
 * alcohol/bar imagery (docs/17 §3.6). Photography is a clearly labelled "still
 * required" placeholder. Config-driven.
 */
export function DiningPreview() {
  const d = site.diningPreview;
  return (
    <section
      aria-labelledby="dine-heading"
      className="relative isolate flex min-h-[600px] overflow-hidden md:min-h-[660px]"
    >
      {/* full-bleed image — carries the emotion */}
      <Image src={img.diningRoom.src} alt={img.diningRoom.alt} fill sizes="100vw" className="object-cover object-center" />
      <div aria-hidden className="absolute inset-0 dine-scrim" />

      {/* restrained overlaid copy — supports the image */}
      <div className="relative mx-auto flex w-full max-w-container items-end px-6 py-16 md:items-center md:px-12 md:py-24">
        <Reveal className="max-w-[34rem]">
          <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-light">
            <span aria-hidden className="h-px w-[34px] bg-champagne/70" />
            {d.eyebrow}
          </p>
          <h2
            id="dine-heading"
            className="mt-5 max-w-[16ch] font-serif text-[32px] font-semibold leading-[1.1] tracking-[-.01em] text-ivory md:text-[44px]"
          >
            {d.heading}
          </h2>
          <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.8] text-ivory/80 md:text-[16px]">
            {d.body}
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-black/20 px-3.5 py-[7px] text-[11px] font-semibold uppercase tracking-[.14em] text-champagne-light backdrop-blur-[2px]">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-champagne" />
            {d.halalChip}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href={d.primary.href} variant="primary" track={{ cta: "explore_dining", location: "home_dining" }}>
              {d.primary.label}
              <Arrow />
            </Button>
            <a
              href={d.secondary.href}
              data-cta="dining_enquire"
              data-location="home_dining"
              className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-ivory/90 underline-offset-4 hover:text-champagne-light hover:underline"
            >
              {d.secondary.label}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
