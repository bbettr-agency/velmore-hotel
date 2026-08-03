import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/config/site";

export const metadata = pageMetadata("contact");
export default function ContactPage() {
  return (
    <RoutePlaceholder route="contact">
      <p className="mt-8 text-[14px] text-ivory/75">
        Email{" "}
        <a href={`mailto:${site.contact.email}`} className="font-semibold text-champagne-light hover:underline">
          {site.contact.email}
        </a>{" "}
        · {site.contact.location}
      </p>
    </RoutePlaceholder>
  );
}
