import { Box } from "@/components/ui/Box/Box";
import { Type } from "@/components/ui/Type/Type";

// TYPES
export type ImageBlockProps = {
  image?: string;
  caption?: string;
  maxWidth: "small" | "text" | "medium" | "large" | "full";
};

// MARKUP
export function ImageBlock({
  image,
  caption,
  maxWidth = "medium",
}: ImageBlockProps) {
  if (!image) {
    return null;
  }

  return (
    <Box as="section" breakout blockSpacing>
      <Box as="figure" className="mx-auto" maxWidth={maxWidth}>
        {/* <SanityImage src={image} alt={caption} aspectRatio={aspectRatio} /> */}
        <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
          <Type as="figcaption" className="text-sm italic text-gray-600 ">
            {caption}
          </Type>
        </Box>
      </Box>
    </Box>
  );
}
