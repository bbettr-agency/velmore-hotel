import Link from "next/link";
import { site } from "@/config/site";

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
        <path d="M14 9.5V7.8c0-.8.2-1.3 1.4-1.3H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v1.6H8.2V12h2.4v8h3V12h2.3l.4-2.5H13.6z" />
      </svg>
    );
  }
  // Instagram
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Sitewide footer — a quiet close, not a utility strip. Dark estate ground, the
 * brand mark + one calm line, config-driven wayfinding (from `routes`), the
 * client-confirmed contact facts (email · phone · address · location) and social
 * profiles, and a restrained agency credit. Config-driven.
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
            <div className="mt-7 space-y-1.5 text-[14px] text-ivory/75">
              <p>
                <a href={`mailto:${site.contact.email}`} className="underline-offset-4 hover:text-champagne-light hover:underline">
                  {site.contact.email}
                </a>
              </p>
              <p>
                <a href={site.contact.phoneHref} className="underline-offset-4 hover:text-champagne-light hover:underline">
                  {site.contact.phone}
                </a>
              </p>
              <p className="text-ivory/60">{site.contact.address}</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {site.contact.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Velmoré on ${s.label}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-champagne hover:text-champagne-light"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
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
