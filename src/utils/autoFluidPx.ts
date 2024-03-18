import { AUTO_FLUID_DIVISOR } from "~/styles/AUTO_FLUID_DIVISOR";
import {
  LOWER_SCREEN_SIZE,
  UPPER_SCREEN_SIZE,
} from "~/styles/FLUID_SCREEN_SIZES";

export const autoFluidPx = ({
  max,
  divisor = AUTO_FLUID_DIVISOR,
}: {
  max: number;
  divisor?: number;
}) =>
  `clamp(${max / divisor}px, calc(${max / divisor}px + (${max} - ${
    max / divisor
  }) * ((100vw - ${LOWER_SCREEN_SIZE}px) / (${UPPER_SCREEN_SIZE} - ${LOWER_SCREEN_SIZE}))), ${max}px)`;
