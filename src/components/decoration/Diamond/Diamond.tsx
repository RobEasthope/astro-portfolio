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
        `flex h-1 items-center justify-center text-center text-lg text-sage-12`,
        `mt-${spacingTop}`,
        `mb-${spacingBottom}`,
        "print:my-0.5",
        className,
      )}
    >
      <FaSquareFull className="rotate-45 text-[0.5rem]" />
    </div>
  );
}
