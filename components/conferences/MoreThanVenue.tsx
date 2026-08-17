import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { Img } from "@/config/images";

type Card = {
  eyebrow: string;
  heading: string;
  body: string;
  image: Img;
  link?: { label: string; href: string };
};

/**
 * "More than a venue" — a compact two-card pairing (accommodation + certified-
 * halal catering) that gives the residential + catering proposition prominence
 * without a full section each. Confirmed facts only: no menus, no "award-winning"
 * claims. The accommodation card links into the existing /accommodation page.
 */
export function MoreThanVenue({
  eyebrow,
  heading,
  lead,
  cards,
}: {
  eyebrow?: string;
  heading: string;
  lead?: string;
  cards: readonly Card[];
}) {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          {eyebrow ? (
            <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
              {eyebrow}
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
            </p>
          ) : null}
          <h2 className="mx-auto mt-5 max-w-[24ch] font-serif text-[26px] font-semibold leading-[1.14] tracking-[-.01em] text-estate-700 md:text-[34px]">
            {heading}
          </h2>
          {lead ? <p className="mx-auto mt-5 max-w-[56ch] text-[15.5px] leading-[1.75] text-charcoal md:text-[16px]">{lead}</p> : null}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2">
          {cards.map((c) => (
            <Reveal key={c.heading} preset="fadeUpItem" className="overflow-hidden rounded-lg bg-white shadow-card">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 768px) 46vw, 92vw" className="object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-champagne-dark">{c.eyebrow}</p>
                <h3 className="mt-2.5 font-serif text-[21px] font-semibold leading-[1.18] text-estate-700 md:text-[23px]">{c.heading}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-charcoal">{c.body}</p>
                {c.link ? (
                  <Link
                    href={c.link.href}
                    className="group mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-estate-700 underline-offset-4 hover:text-champagne-dark hover:underline"
                  >
                    {c.link.label}
                    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
