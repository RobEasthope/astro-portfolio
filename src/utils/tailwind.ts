import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stylesCheck(styles: string | ClassValue[]) {
  if(!styles) return {};

  return {
    className: cn(styles)
  }
}
