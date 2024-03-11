import { cn } from "@/utils/tailwind";

export type LineBreakProps = {
  className?: string;
};

export function LineBreak({ className }: LineBreakProps) {
  return <hr
    className={cn(
      'flex items-center justify-center h-1 after:content-[""] after:block after:w-3 after:h-0.125 after:bg-darkSaffron  border-none',
      className,
    )}
  />
}
