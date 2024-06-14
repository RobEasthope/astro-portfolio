import AstroImage from "@/components/_base/AstroImage/AstroImage.astro";
import { Box } from "@/components/_base/Box/Box";
import { Type } from "@/components/_base/Type/Type";

export function MuxVideo({ videoID, caption }: { videoID: string, caption: string }) {
  return (<Box as="section" breakout blockSpacing>
  <Box as="figure" className="mx-auto" maxWidth={maxWidth}>
    <AstroImage src={image} alt={caption} className="mx-auto my-0" />
    <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
      <Type as="figcaption" className="text-gray-600 text-sm italic ">
        {caption}
      </Type>
    </Box>
  </Box>
</Box>;
)}