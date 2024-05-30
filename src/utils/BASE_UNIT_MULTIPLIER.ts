import { MAX_SPACING_SIZE, MIN_SPACING_SIZE } from "tailwind.config";

export const BASE_UNIT_MULTIPLIER = (multiplier: number) =>
  `calc(clamp(${MIN_SPACING_SIZE}px,calc(${MIN_SPACING_SIZE}px+(${MAX_SPACING_SIZE}-${MIN_SPACING_SIZE})*((100vw-320px)/(1934-320))),${MAX_SPACING_SIZE}px)*${multiplier})`;
