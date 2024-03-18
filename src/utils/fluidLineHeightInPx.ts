import {
  LOWER_SCREEN_SIZE,
  UPPER_SCREEN_SIZE,
} from "@/utils/FLUID_SCREEN_SIZES";

// Returns a fluid clamp value based line height in pixels based off the min and max font sizes and lineheights.
export const fluidLineHeightInPx = ({
  minFontSize,
  maxFontSize,
  minLineHeight,
  maxLineHeight,
}: {
  minFontSize: number;
  maxFontSize: number;
  minLineHeight: number;
  maxLineHeight: number;
}) => {
  const min = minFontSize * minLineHeight;
  const max = maxFontSize * maxLineHeight;
  return [
    `clamp(${min}px, calc(${min}px + (${max} - ${min}) * ((100vw - ${LOWER_SCREEN_SIZE}px) / (${UPPER_SCREEN_SIZE} - ${LOWER_SCREEN_SIZE}))), ${max}px)`,
  ];
};
