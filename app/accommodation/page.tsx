import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("accommodation");
export default function AccommodationPage() {
  return <RoutePlaceholder route="accommodation" />;
}
