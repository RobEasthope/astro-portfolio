import { Box } from "@/components/_base/Box/Box";
import { Type } from "@/components/_base/Type/Type";
import MuxPlayer from "@mux/mux-player-react/lazy";

export function MuxVideo({ videoID, caption }: { videoID: string, caption: string }) {
  return (<Box as="section" breakout blockSpacing>
  <Box as="figure" className="mx-auto" maxWidth={maxWidth}>
    <MuxPlayer
    playbackId="9VeINC4f1SC23jNX01VDhxV6rmwI3DTz01"
    metadata={{
      video_id: "Yytp7lXoNk1ndRc8a01TK3nbn02XdNmhq7",
      video_title: "Flight off Great End",
      viewer_user_id: "user-id-007",
    }}
    streamType="on-demand"
    loop
    autoPlay
    muted
    client:load
  />
    <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
      <Type as="figcaption" className="text-gray-600 text-sm italic ">
        {caption}
      </Type>
    </Box>
  </Box>
</Box>;
)}