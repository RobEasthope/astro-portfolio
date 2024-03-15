import { cn } from "@/utils/tailwind";

export type LineBreakProps = {
  className?: string;
};

export function LineBreak({ className }: LineBreakProps) {
  return (
    <hr
      className={cn(
        'after:h-0.125 after:bg-darkSaffron flex h-1 items-center justify-center border-none after:block after:w-3  after:content-[""]',
        className,
      )}
    />
  );
}
