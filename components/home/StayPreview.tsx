import Image from "next/image";
import { site } from "@/config/site";
import { img } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger } from "@/components/motion/Reveal";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Homepage Stay preview — the third change of pace after Conferences (capability)
 * and Weddings (emotion): calm, rest, "everything is here". Deliberately NOT a
 * side-by-side split — a centered, spacious, image-led composition (wide
 * environmental image + a quiet garden detail) with generous breathing room and
 * a restrained on-load settle. Confirmed facts only; photography is a clearly
 * labelled "still required" placeholder (docs/17 §3.4). Config-driven.
 */
export function StayPreview() {
  const s = site.stayPreview;
  return (
    <section aria-labelledby="stay-heading" className="bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-container px-6 md:px-12">
        {/* centered header — softer rhythm, generous measure */}
        <Reveal className="mx-auto max-w-[46rem] text-center">
          <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
            <span aria-hidden className="h-px w-[26px] bg-champagne" />
            {s.eyebrow}
            <span aria-hidden className="h-px w-[26px] bg-champagne" />
          </p>
          <h2
            id="stay-heading"
            className="mx-auto mt-6 max-w-[16ch] font-serif text-[30px] font-semibold leading-[1.12] tracking-[-.01em] text-estate-700 md:text-[40px]"
          >
            {s.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-[16px] leading-[1.85] text-charcoal md:text-[17px]">
            {s.lead}
          </p>
        </Reveal>

        {/* image-led band — a light-filled room + a quiet garden detail */}
        <Reveal preset="imageReveal" className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-card">
              <Image src={img.deluxeRoomView.src} alt={img.deluxeRoomView.alt} fill sizes="(min-width: 768px) 62vw, 100vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 stay-vignette" />
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg shadow-card md:aspect-auto md:h-full">
              <Image src={img.gardensArchway.src} alt={img.gardensArchway.alt} fill sizes="(min-width: 768px) 32vw, 100vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 stay-detail-vignette" />
            </div>
          </div>
        </Reveal>

        {/* quiet supporting proof — spaced, not a dense list */}
        <Stagger as="ul" className="mx-auto mt-14 grid max-w-[52rem] grid-cols-1 gap-8 text-center sm:grid-cols-3 md:mt-16">
          {s.proof.map((p) => (
            <Reveal key={p.label} as="li" preset="fadeUpItem">
              <p className="font-serif text-[22px] font-semibold text-estate-700 md:text-[24px]">{p.label}</p>
              <p className="mt-1 text-[13px] uppercase tracking-[.16em] text-steel">{p.note}</p>
            </Reveal>
          ))}
        </Stagger>

        {/* centered CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-[14px] md:mt-14">
          <Button href={s.primary.href} variant="primary" track={{ cta: "explore_stay", location: "home_stay" }}>
            {s.primary.label}
            <Arrow />
          </Button>
          <a
            href={s.secondary.href}
            data-cta="check_availability"
            data-location="home_stay"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-estate-700 underline-offset-4 hover:text-champagne-dark hover:underline"
          >
            {s.secondary.label}
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
