import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("gallery");
export default function GalleryPage() {
  return <RoutePlaceholder route="gallery" />;
}
