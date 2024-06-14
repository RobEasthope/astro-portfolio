import { Box } from "@/components/_base/Box/Box";
import { Type } from "@/components/_base/Type/Type";
import MuxPlayer from "@mux/mux-player-react/lazy";

export type MuxVideoProps = {
  videoID: string;
  caption: string;
};

export function MuxVideo({ videoID, caption }: MuxVideoProps) {
  return (
    <Box as="section" breakout blockSpacing>
      <Box as="figure" className="mx-auto">
        <MuxPlayer
          playbackId={videoID}
          metadata={{
            video_id: "Yytp7lXoNk1ndRc8a01TK3nbn02XdNmhq7",
            video_title: "Flight off Great End",
            viewer_user_id: "user-id-007",
          }}
          streamType="on-demand"
          client:load
        />
        {caption && (
          <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
            <Type as="figcaption" className="text-gray-600 text-sm italic ">
              {caption}
            </Type>
          </Box>
        )}
      </Box>
    </Box>
  );
}
