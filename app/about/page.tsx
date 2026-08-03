import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("about");
export default function AboutPage() {
  return <RoutePlaceholder route="about" />;
}
