"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import { MobileMenu } from "@/components/site/MobileMenu";

/** A route is active when it matches exactly or is a parent of the current path. */
export function isActivePath(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const pathname = usePathname() || "/";
  const onHome = pathname === "/";
  // Away from the homepage, surface an explicit Home link so visitors never have
  // to rely on the logo or the back button. The logo also always routes to "/".
  const items = onHome ? site.nav : [{ label: "Home", href: "/" }, ...site.nav];

  return (
    <nav
      aria-label="Primary"
      className="absolute inset-x-0 top-0 z-30 flex items-center gap-8 px-6 py-6 text-ivory md:px-12"
    >
      <Link href="/" className="mr-auto flex flex-col leading-none" aria-label={`${site.brand.name} ${site.brand.suffix} — home`}>
        <span className="font-serif text-[27px] font-semibold tracking-[.02em] text-white">
          {site.brand.name}
        </span>
        <span className="mt-[5px] pl-[2px] text-[9px] uppercase tracking-[.42em] text-champagne-light">
          {site.brand.suffix}
        </span>
      </Link>

      <ul className="hidden items-center gap-[22px] lg:flex xl:gap-[26px]">
        {items.map((item) => {
          const active = isActivePath(item.href, pathname);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-[13.5px] transition-colors hover:text-white ${active ? "text-white" : "text-ivory/90"}`}
              >
                {item.label}
                {active ? <span aria-hidden className="absolute -bottom-[7px] left-0 h-px w-full bg-champagne" /> : null}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href={site.cta.primary.href}
        className="hidden rounded-md bg-champagne px-5 py-[11px] text-[13px] font-semibold text-ink shadow-accent transition-colors hover:bg-champagne-dark sm:inline-block"
      >
        {site.cta.primary.label}
      </Link>

      <MobileMenu items={items} pathname={pathname} />
    </nav>
  );
}
