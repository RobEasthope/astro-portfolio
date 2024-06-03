import { BsDot } from "react-icons/bs";

import { cn } from "@/utils/tailwind";

import type { SpacerProps } from "@/components/decoration/Spacer/Spacer";

export type DotProps = {
  spacingTop?: SpacerProps["height"];
  spacingBottom?: SpacerProps["height"];
  className?: string;
};

export function Dot({
  spacingTop = "0",
  spacingBottom = "0",
  className,
}: DotProps) {
  return (
    <div
      className={cn(
        `flex h-1 w-full items-center justify-center text-lg text-decoration`,
        `mt-${spacingTop}`,
        `mb-${spacingBottom}`,
        "print:my-0.5",
        "h-0.25 w-0.25 rotate-45",
        "bg-tomato-10",
        "mx-auto",
        className,
      )}
    >
      {/* <BsDot /> */}
    </div>
  );
}
