import type { GalleryImageProps } from '@/components/blocks/Gallery/components/GalleryImage/GalleryImage';
import { GalleryImage } from '@/components/blocks/Gallery/components/GalleryImage/GalleryImage';

import { Box } from '@/components/ui/Box/Box';
import { Type } from '@/components/ui/Type/Type';

// TYPES
export type GalleryProps = {
  images: GalleryImageProps[];
  galleryCaption?: string;
  columns: 'null' | '1' | '2' | '3' | '4' | '5' | undefined;
  aspectRatio: number;
  maxWidth: 'small' | 'text' | 'medium' | 'large' | 'full';
};

// MARKUP
export function Gallery({
  images,
  galleryCaption,
  columns,
  aspectRatio,
  maxWidth = 'large',
}: GalleryProps) {
  if (!images) {
    return null;
  }

  return (
    <Box as="section" breakout blockSpacing>
      <Box
        as="div"
        className="mx-auto grid gap-0.75"
        maxWidth={maxWidth}
        columns={columns}
      >
        {images &&
          images?.map((card) => (
            <GalleryImage
              key={card?._key}
              _type={card?._type}
              image={card?.image}
              galleryAspectRatio={aspectRatio}
              aspectRatio={card?.aspectRatio}
              maxWidth={card?.maxWidth}
              caption={card?.caption}
            />
          ))}
        <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
          <Type as="figcaption" className="text-sm italic text-gray-600">
            {galleryCaption}
          </Type>
        </Box>
      </Box>
    </Box>
  );
}

export default Gallery;
