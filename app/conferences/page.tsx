import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("conferences");
export default function ConferencesPage() {
  return <RoutePlaceholder route="conferences" />;
}
