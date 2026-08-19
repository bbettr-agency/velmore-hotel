import { PageHero } from "@/components/sections/PageHero";
import { Footer } from "@/components/site/Footer";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageJsonLd } from "@/lib/jsonld";
import { pages } from "@/config/pages";
import { site } from "@/config/site";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  const { hero, form } = pages.contact;
  return (
    <main id="main">
      <JsonLd data={pageJsonLd("contact")} />
      <PageHero {...hero} />

      <section id="enquire" className="scroll-mt-24 bg-ivory py-24 md:py-28">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12">
          {/* intro + reassurance */}
          <div className="md:col-span-5">
            <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[34px] bg-champagne" />
              {form.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[18ch] font-serif text-[28px] font-semibold leading-[1.12] tracking-[-.01em] text-estate-700 md:text-[36px]">
              {form.heading}
            </h2>
            <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.7] text-charcoal md:text-[16px]">{form.intro}</p>

            <ul className="mt-8 space-y-3">
              {form.steps.map((s, i) => (
                <li key={s} className="flex items-start gap-3 text-[14.5px] text-estate-700">
                  <span aria-hidden className="mt-[1px] grid h-5 w-5 shrink-0 place-items-center rounded-full bg-champagne/15 text-[11px] font-semibold text-champagne-dark">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-1.5 border-t border-estate-100 pt-6 text-[14px] text-charcoal">
              <p>
                <a href={`mailto:${site.contact.email}`} className="font-semibold text-champagne-dark underline-offset-4 hover:underline">
                  {site.contact.email}
                </a>
              </p>
              <p>
                <a href={site.contact.phoneHref} className="font-semibold text-champagne-dark underline-offset-4 hover:underline">
                  {site.contact.phone}
                </a>
              </p>
              <p className="text-steel">{site.contact.address}</p>
            </div>
          </div>

          {/* the form */}
          <div className="md:col-span-7 md:col-start-6">
            <div className="rounded-xl bg-mist/50 p-6 shadow-card md:p-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
