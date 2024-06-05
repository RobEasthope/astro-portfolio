import YouTube from "react-youtube";
import { Box } from "@/components/_base/Box/Box";
import { Type } from "@/components/_base/Type/Type";

import "./YoutubeVideo.css";
import { getYoutubeIdfromUrl } from "./getYoutubeIdfromUrl";

export type YoutubeVideoProps = {
  url?: string;
  caption?: string;
  maxWidth: "small" | "text" | "medium" | "large" | "full";
};

export function YoutubeVideo({
  url,
  caption,
  maxWidth = "medium",
}: YoutubeVideoProps) {
  if (!url) {
    return null;
  }

  return (
    <Box as="section" breakout blockSpacing>
      <Box as="div" className="mx-auto" maxWidth={maxWidth}>
        <Box as="div">
          <YouTube
            videoId={getYoutubeIdfromUrl(url)}
            className="youtube-video relative aspect-video"
          />
        </Box>
        <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
          <Type as="figcaption" className="text-gray-600 text-sm italic ">
            {caption}
          </Type>
        </Box>
      </Box>
    </Box>
  );
}

export default YoutubeVideo;
