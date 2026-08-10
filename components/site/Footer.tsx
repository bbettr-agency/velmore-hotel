import Link from "next/link";
import { site } from "@/config/site";

/**
 * Sitewide footer — a quiet close, not a utility strip. Dark estate ground, the
 * brand mark + one calm line, config-driven wayfinding (from `routes`), the
 * confirmed contact facts only (email + location; NO phone/address — TO CONFIRM),
 * and a restrained agency credit. Config-driven.
 */
export function Footer() {
  const f = site.footer;
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-estate-900 text-ivory">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(100% 80% at 84% 0%, rgba(196,150,62,.14) 0%, rgba(196,150,62,0) 46%), linear-gradient(180deg,#141f18 0%, #101a15 100%)",
        }}
      />
      <div className="mx-auto max-w-container px-6 py-20 md:px-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* brand + line */}
          <div className="md:col-span-5">
            <Link href="/" className="flex flex-col leading-none" aria-label={`${site.brand.name} ${site.brand.suffix}`}>
              <span className="font-serif text-[30px] font-semibold tracking-[.02em] text-white">{site.brand.name}</span>
              <span className="mt-[6px] pl-[2px] text-[9.5px] uppercase tracking-[.42em] text-champagne-light">
                {site.brand.suffix}
              </span>
            </Link>
            <p className="mt-6 max-w-[34ch] font-serif text-[19px] italic leading-[1.5] text-ivory/80 md:text-[20px]">
              {f.tagline}
            </p>
            <div className="mt-7 space-y-1 text-[14px] text-ivory/75">
              <p>
                <a href={`mailto:${site.contact.email}`} className="underline-offset-4 hover:text-champagne-light hover:underline">
                  {site.contact.email}
                </a>
              </p>
              <p>{site.contact.location}</p>
            </div>
          </div>

          {/* wayfinding */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-6 md:col-start-7">
            {f.groups.map((g) => (
              <div key={g.title}>
                <p className="text-[10.5px] font-semibold uppercase tracking-[.24em] text-champagne-light">{g.title}</p>
                <ul className="mt-4 space-y-[10px]">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[14px] text-ivory/80 underline-offset-4 hover:text-white hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* hairline + bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-7 text-[12px] text-ivory/55 sm:flex-row sm:items-center sm:justify-between md:mt-20">
          <p>
            © {year} {site.brand.name} {site.brand.suffix}. {f.legal}
          </p>
          <a
            href={f.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-[.16em] underline-offset-4 hover:text-champagne-light hover:underline"
          >
            {f.credit.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
