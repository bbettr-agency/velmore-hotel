import { site } from "@/config/site";
import { img } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { HeroVideo } from "@/components/hero/HeroVideo";
import { heroStack } from "@/engine/motion";
import { MOTION_CHARACTER } from "@/config/motion";

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Hero() {
  const { hero, trust, cta } = site;
  const hero0 = heroStack({ character: MOTION_CHARACTER });
  return (
    <header className="relative h-[calc(100vh-76px)] min-h-[600px] overflow-hidden text-ivory [isolation:isolate]">
      {/* --- ambient estate video (poster paints first; reduced-motion safe) --- */}
      <HeroVideo poster={img.estateFacade.src} className="absolute inset-0 -z-[6] h-full w-full object-cover" />
      <div aria-hidden className="absolute inset-0 -z-[3] page-vignette" />
      <div aria-hidden className="absolute inset-0 -z-[2] hero-center-scrim" />

      {/* --- content: centred --- */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center md:px-12">
        <Reveal as="p" {...hero0.step(0)} className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.30em] text-champagne-light">
          <span aria-hidden className="h-px w-[34px] bg-champagne" />
          {hero.eyebrow}
        </Reveal>

        {/* LCP element — renders at first paint, never animated in */}
        <h1 {...hero0.lcp} className="mt-5 font-serif text-[42px] font-semibold leading-[1.02] tracking-[-.015em] text-white [text-shadow:0_2px_40px_rgba(0,0,0,.35)] sm:text-[54px] md:text-[66px]">
          {hero.headline[0]}
          <br />
          <span className="italic">{hero.headline[1]}</span>
        </h1>

        <Reveal as="p" {...hero0.step(1)} className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-[1.6] text-ivory/90 md:text-[17px]">
          {hero.sub}
        </Reveal>

        <Reveal as="ul" {...hero0.step(2)} className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-[10px]">
          {trust.map((t) =>
            t.kind === "badge" ? (
              <li key={t.label}>
                <span className="inline-flex items-center gap-[7px] rounded-full border border-champagne px-[13px] py-[5px] text-[11.5px] font-semibold uppercase tracking-[.04em] text-champagne-light">
                  <Check />
                  {t.label}
                </span>
              </li>
            ) : (
              <li key={t.label} className="flex items-center gap-[9px] text-[12.5px] text-ivory/90">
                <span aria-hidden className="h-1 w-1 rounded-full bg-champagne" />
                {t.label}
              </li>
            ),
          )}
        </Reveal>

        <Reveal {...hero0.step(3)} className="mt-[30px] flex flex-wrap items-center justify-center gap-[14px]">
          <Button href={cta.primary.href} variant="primary" className="max-sm:flex-1">
            {cta.primary.label}
            <Arrow />
          </Button>
          <Button href={cta.secondary.href} variant="secondary" className="max-sm:flex-1">
            {cta.secondary.label}
          </Button>
        </Reveal>
        <Reveal as="p" {...hero0.step(4)} className="mt-[14px] text-[11.5px] tracking-[.01em] text-ivory/60">
          {cta.reassurance}
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-[22px] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-[9px] text-ivory/60 md:flex">
        <span className="text-[9.5px] uppercase tracking-[.28em] [writing-mode:vertical-rl]">Scroll</span>
        <span aria-hidden className="h-[34px] w-px bg-gradient-to-b from-ivory/5 to-ivory/60" />
      </div>
    </header>
  );
}
