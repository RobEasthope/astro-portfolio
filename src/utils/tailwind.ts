import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stylesCheck(styles: string | undefined) {
  if(!styles) return undefined;

  return styles;
}
