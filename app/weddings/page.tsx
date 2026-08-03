import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("weddings");
export default function WeddingsPage() {
  return <RoutePlaceholder route="weddings" />;
}
