import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";

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
  return (
    <header className="relative h-[calc(100vh-76px)] min-h-[600px] overflow-hidden text-ivory [isolation:isolate]">
      {/* --- dusk glass hall (CSS photography placeholder, docs/16) --- */}
      <div aria-hidden className="absolute inset-0 -z-[6] hero-sky" />
      <div aria-hidden className="absolute inset-0 -z-[5] hero-mullions" />
      <div aria-hidden className="absolute -z-[5] hero-arch" />
      <div aria-hidden className="absolute inset-0 -z-[4] hero-chandeliers" />
      <div aria-hidden className="absolute -z-[4] hero-groundglow" />
      <div aria-hidden className="absolute inset-0 -z-[3] hero-vignette" />
      <div aria-hidden className="absolute inset-0 -z-[2] hero-scrim" />
      <p className="absolute right-5 top-[92px] z-[5] text-[9px] uppercase tracking-[.1em] text-white/40">
        {hero.imageNote}
      </p>

      {/* --- content: lower-third, left (Composition 1) --- */}
      <div className="absolute bottom-[8.5%] left-6 z-10 max-w-[620px] md:left-12">
        <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.30em] text-champagne-light">
          <span aria-hidden className="h-px w-[34px] bg-champagne" />
          {hero.eyebrow}
        </p>

        {/* LCP element — renders at first paint, never animated in */}
        <h1 className="mt-5 font-serif text-[42px] font-semibold leading-[1.02] tracking-[-.015em] text-white [text-shadow:0_2px_40px_rgba(0,0,0,.35)] sm:text-[54px] md:text-[66px]">
          {hero.headline[0]}
          <br />
          <span className="italic">{hero.headline[1]}</span>
        </h1>

        <p className="reveal reveal-1 mt-5 max-w-[50ch] text-[15px] leading-[1.6] text-ivory/90 md:text-[17px]">
          {hero.sub}
        </p>

        <ul className="reveal reveal-2 mt-6 flex flex-wrap items-center gap-x-5 gap-y-[10px]">
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
        </ul>

        <div className="reveal reveal-3 mt-[30px] flex flex-wrap items-center gap-[14px]">
          <Button href={cta.primary.href} variant="primary" className="max-sm:flex-1">
            {cta.primary.label}
            <Arrow />
          </Button>
          <Button href={cta.secondary.href} variant="secondary" className="max-sm:flex-1">
            {cta.secondary.label}
          </Button>
        </div>
        <p className="reveal reveal-3 mt-[14px] text-[11.5px] tracking-[.01em] text-ivory/60">
          {cta.reassurance}
        </p>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-[22px] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-[9px] text-ivory/60 md:flex">
        <span className="text-[9.5px] uppercase tracking-[.28em] [writing-mode:vertical-rl]">Scroll</span>
        <span aria-hidden className="h-[34px] w-px bg-gradient-to-b from-ivory/5 to-ivory/60" />
      </div>
    </header>
  );
}
