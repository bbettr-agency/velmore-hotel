import Link from "next/link";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "secondary";

const styles: Record<Variant, string> = {
  // Accent (champagne) is reserved for the primary CTA only (docs/12).
  primary:
    "bg-champagne text-ink shadow-accent hover:bg-champagne-dark",
  secondary:
    "bg-ivory/[.06] text-white border border-ivory/50 backdrop-blur-[2px] hover:bg-ivory/[.14]",
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
  track,
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  /** Tracking-ready hooks — GTM/analytics can select on these (docs/08 event taxonomy). */
  track?: { cta: string; location: string };
}) {
  const cls = clsx(
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-[15px] text-[14.5px] font-semibold transition-[transform,background-color,box-shadow] duration-200 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-px active:translate-y-0 motion-reduce:transform-none",
    styles[variant],
    className,
  );
  // External destinations (e.g. the Allura Day Spa booking site) open safely in a
  // new tab; internal routes use next/link for client-side navigation.
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" data-cta={track?.cta} data-location={track?.location} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} data-cta={track?.cta} data-location={track?.location} className={cls}>
      {children}
    </Link>
  );
}
