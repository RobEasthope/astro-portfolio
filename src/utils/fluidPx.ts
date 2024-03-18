import {
  LOWER_SCREEN_SIZE,
  UPPER_SCREEN_SIZE,
} from "./FLUID_SCREEN_SIZES";

// Returns a fluid clamp value based on screen size. Min and max values are in pixels.
export const fluidPx = ({ min, max }: { min: number; max: number }) =>
  `clamp(${min}px, calc(${min}px + (${max} - ${min}) * ((100vw - ${LOWER_SCREEN_SIZE}px) / (${UPPER_SCREEN_SIZE} - ${LOWER_SCREEN_SIZE}))), ${max}px)`;
