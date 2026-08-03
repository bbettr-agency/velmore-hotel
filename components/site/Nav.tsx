import Link from "next/link";
import { site } from "@/config/site";

export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="absolute inset-x-0 top-0 z-30 flex items-center gap-8 px-6 py-6 text-ivory md:px-12"
    >
      <Link href="/" className="mr-auto flex flex-col leading-none" aria-label={`${site.brand.name} ${site.brand.suffix}`}>
        <span className="font-serif text-[27px] font-semibold tracking-[.02em] text-white">
          {site.brand.name}
        </span>
        <span className="mt-[5px] pl-[2px] text-[9px] uppercase tracking-[.42em] text-champagne-light">
          {site.brand.suffix}
        </span>
      </Link>

      <ul className="hidden items-center gap-[26px] lg:flex">
        {site.nav.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[13.5px] text-ivory/90 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={site.cta.primary.href}
        className="hidden rounded-md bg-champagne px-5 py-[11px] text-[13px] font-semibold text-ink shadow-accent transition-colors hover:bg-champagne-dark sm:inline-block"
      >
        {site.cta.primary.label}
      </Link>

      {/* Mobile menu affordance */}
      <button
        type="button"
        aria-label="Open menu"
        className="flex w-6 flex-col gap-[5px] lg:hidden"
      >
        <span className="h-[2px] rounded bg-ivory" />
        <span className="h-[2px] rounded bg-ivory" />
        <span className="h-[2px] rounded bg-ivory" />
      </button>
    </nav>
  );
}
