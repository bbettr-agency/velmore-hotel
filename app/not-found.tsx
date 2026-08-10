import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { site } from "@/config/site";

export const metadata = { title: "Page not found — Velmoré Hotel & Spa", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main">
      <Nav />
      <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-estate-900 text-ivory">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 90% at 82% 8%, rgba(196,150,62,.20) 0%, rgba(196,150,62,0) 45%), linear-gradient(160deg,#1a2a20 0%, #141f18 60%, #101a15 100%)",
          }}
        />
        <div className="mx-auto w-full max-w-container px-6 py-24 text-center md:px-12">
          <p className="text-[11.5px] font-semibold uppercase tracking-[.30em] text-champagne-light">Lost the path</p>
          <h1 className="mx-auto mt-5 max-w-[18ch] font-serif text-[38px] font-semibold leading-[1.08] text-white md:text-[52px]">
            We can’t find that page.
          </h1>
          <p className="mx-auto mt-5 max-w-[46ch] text-[15.5px] leading-[1.7] text-ivory/80">
            The page may have moved. Head back to the estate, or start with your occasion.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded-md bg-champagne px-6 py-[15px] text-[14.5px] font-semibold text-ink shadow-accent hover:bg-champagne-dark">
              Back to Velmoré →
            </Link>
            <Link href={site.cta.primary.href} className="text-[14.5px] font-semibold text-ivory/90 underline-offset-4 hover:text-champagne-light hover:underline">
              Book a viewing
            </Link>
          </div>
          <nav aria-label="Popular pages" className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-ivory/70">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-champagne-light hover:underline">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <Footer />
    </main>
  );
}
