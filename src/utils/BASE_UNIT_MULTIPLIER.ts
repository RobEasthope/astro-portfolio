import { BASE_UNIT } from "tailwind.config";

export const BASE_UNIT_MULTIPLIER = (multipier: number) =>
  `calc(${BASE_UNIT} * ${multipier})`;
