import { cn } from "@/utils/tailwind";

export type LineBreakProps = {
  className?: string;
};

export function LineBreak({ className }: LineBreakProps) {
  return (
    <hr
      className={cn(
        'flex h-1 items-center justify-center border-none after:block after:h-[2px] after:w-3 after:bg-dark-saffron  after:content-[""]',
        className,
      )}
    />
  );
}
