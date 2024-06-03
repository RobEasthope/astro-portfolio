import { FaSquareFull } from "react-icons/fa";

import { cn } from "@/utils/tailwind";

import type { SpacerProps } from "@/components/decoration/Spacer/Spacer";

export type DiamondProps = {
  spacingTop?: SpacerProps["height"];
  spacingBottom?: SpacerProps["height"];
  className?: string;
};

export function Diamond({
  spacingTop = "0",
  spacingBottom = "0",
  className,
}: DiamondProps) {
  return (
    <div
      className={cn(
        `flex h-1 w-full items-center justify-center text-lg text-decoration`,
        `mt-${spacingTop}`,
        `mb-${spacingBottom}`,
        "print:my-0.5",
        "rotate-45 text-[0.5rem]",
        "mx-auto",
        className,
      )}
    >
      <FaSquareFull />
    </div>
  );
}
