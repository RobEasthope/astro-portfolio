import { fluidLineHeightInPx } from "~/styles/utils/fluidLineHeightInPx";
import { fluidPx } from "~/styles/utils/fluidPx";

// Takes pixel values and returns a fluid font size and line height. Line height is set to 1.5 by default.
export const fluidTypeSize = ({
  minFontSize,
  maxFontSize,
  minLineHeight,
  maxLineHeight,
}: {
  minFontSize: number;
  maxFontSize: number;
  minLineHeight: number;
  maxLineHeight: number;
}) => [
  [fluidPx({ min: minFontSize, max: maxFontSize })],
  {
    lineHeight: fluidLineHeightInPx({
      minFontSize,
      maxFontSize,
      minLineHeight,
      maxLineHeight,
    }),
  },
];
