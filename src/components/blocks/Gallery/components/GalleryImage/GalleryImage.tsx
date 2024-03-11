import * as Dialog from '@radix-ui/react-dialog';
import { Box } from '~/components/_base/Box/Box';
import { SanityImage } from '~/components/_base/SanityImage/SanityImage';
import { Type } from '~/components/_base/Type/Type';

// TYPES
export type GalleryImageProps = {
  image?: string;
  galleryAspectRatio?: number;
  aspectRatio: number;
  caption?: string;
};

// MARKUP
export function GalleryImage({
  image,
  galleryAspectRatio,
  aspectRatio = 1,
  caption,
}: GalleryImageProps) {
  if (!image) {
    return null;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Box as="figure">
          <SanityImage src={image} alt="" aspectRatio={galleryAspectRatio} />
        </Box>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed left-0 top-0 z-10 h-screen w-screen bg-white" />

        <Dialog.Content className="bg-whitefocus:outline-none fixed left-0 top-0 z-50 h-screen w-screen overflow-y-auto sm:px-1 sm:pb-1 lg:px-2 lg:pb-2 lg:pt-0">
          <Dialog.Title className="sr-only">{caption}</Dialog.Title>
          <Box
            as="div"
            className="flex w-full flex-nowrap items-center justify-end"
          >
            <Dialog.Close className="p-0.5">
              <Type as="span" className="text-sm font-medium leading-none">
                Close
              </Type>
            </Dialog.Close>
          </Box>
          <Box as="figure">
            <Box as="div" className="mx-auto">
              <SanityImage
                src={image}
                alt={caption}
                aspectRatio={aspectRatio}
              />
              <Type
                as="figcaption"
                className="my-0.5 max-w-prose font-serif text-sm italic text-center mx-auto"
              >
                {caption}
              </Type>
            </Box>
          </Box>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default GalleryImage;
