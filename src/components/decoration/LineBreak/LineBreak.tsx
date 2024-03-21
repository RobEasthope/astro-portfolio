import { cn } from "@/utils/tailwind";

export type LineBreakProps = {
  className?: string;
};

export function LineBreak({ className }: LineBreakProps) {
  return (
    <hr
      className={cn(
        'flex h-1 items-center border-none after:block after:h-[2px] after:w-3 after:bg-darkSaffron  after:content-[""]',
        className,
      )}
    />
  );
}
