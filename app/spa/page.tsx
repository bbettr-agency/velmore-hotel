import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("spa");
export default function SpaPage() {
  return <RoutePlaceholder route="spa" />;
}
