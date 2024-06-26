import Vimeo from "@u-wave/react-vimeo";

import { Box } from "@/components/_base/Box/Box";
import { Type } from "@/components/_base/Type/Type";

// TYPES
export type VimeoVideoProps = {
  url?: string;
  caption?: string;
  maxWidth: "small" | "text" | "medium" | "large" | "full";
};

// MARKUP
export function VimeoVideo({
  url,
  caption,
  maxWidth = "medium",
}: VimeoVideoProps) {
  if (!url) {
    return null;
  }

  return (
    <Box as="section" breakout blockSpacing>
      <Box as="div" className="mx-auto" maxWidth={maxWidth}>
        <Vimeo video={url} responsive />
        <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
          <Type as="figcaption" className="text-gray-600 text-sm italic ">
            {caption}
          </Type>
        </Box>
      </Box>
    </Box>
  );
}

export default VimeoVideo;
