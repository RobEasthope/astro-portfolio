import type { ImageMetadata } from "astro";

export type GalleryImageProps = {
  image: ImageMetadata;
  alt?: string;
  caption?: string;
};
