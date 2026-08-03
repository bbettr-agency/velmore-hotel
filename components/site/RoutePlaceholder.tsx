import { Nav } from "@/components/site/Nav";
import { Button } from "@/components/ui/Button";
import { site, type RouteKey, routes } from "@/config/site";
import Link from "next/link";

/**
 * Temporary, on-brand page scaffold for routes not yet built (final architecture
 * in place from day one). A dark estate header keeps the (ivory) nav legible and
 * signals "inner page" vs the dusk home hero. Replaced by the real page per the
 * page-order plan.
 */
export function RoutePlaceholder({ route, children }: { route: RouteKey; children?: React.ReactNode }) {
  const r = routes[route];
  return (
    <main id="main">
      <Nav />
      <header className="relative flex min-h-[68vh] items-center overflow-hidden bg-estate-900 text-ivory">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 90% at 82% 8%, rgba(196,150,62,.22) 0%, rgba(196,150,62,0) 45%), linear-gradient(160deg,#1a2a20 0%, #141f18 60%, #101a15 100%)",
          }}
        />
        <div className="mx-auto w-full max-w-container px-6 pb-16 pt-32 md:px-12">
          <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.30em] text-champagne-light">
            <span aria-hidden className="h-px w-[34px] bg-champagne" />
            {r.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[16ch] font-serif text-[44px] font-semibold leading-[1.04] tracking-[-.015em] text-white sm:text-[56px]">
            {r.title}
          </h1>
          <p className="mt-5 max-w-[54ch] text-[16px] leading-[1.6] text-ivory/85 md:text-[18px]">{r.blurb}</p>

          <div className="mt-8 flex flex-wrap items-center gap-[14px]">
            <Button href={site.cta.primary.href} variant="primary">
              {site.cta.primary.label}
            </Button>
            <Button href={site.cta.secondary.href} variant="secondary">
              {site.cta.secondary.label}
            </Button>
          </div>

          {children}
        </div>
      </header>

      <section className="bg-ivory px-6 py-14 md:px-12">
        <div className="mx-auto flex max-w-container flex-col items-start gap-3">
          <p className="text-[13px] uppercase tracking-[.22em] text-steel">In progress</p>
          <p className="max-w-[60ch] text-[15px] leading-[1.6] text-charcoal">
            The full {r.title.toLowerCase()} experience is being crafted. In the meantime, book a
            viewing of the estate or send us your date — we reply the same business day.
          </p>
          <Link href="/" className="mt-2 text-[14px] font-semibold text-champagne-dark hover:underline">
            ← Back to Velmoré
          </Link>
        </div>
      </section>
    </main>
  );
}
