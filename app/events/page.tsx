import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("events");
export default function EventsPage() {
  return <RoutePlaceholder route="events" />;
}
