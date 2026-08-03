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
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-md px-6 py-[15px] text-[14.5px] font-semibold transition-colors duration-200",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
