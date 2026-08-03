import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("dining");
export default function DiningPage() {
  return <RoutePlaceholder route="dining" />;
}
