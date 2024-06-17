import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/utils/tailwind";
import { FaSquareFull } from "react-icons/fa";

const DiamondPageBreak = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto flex w-full flex-row items-center gap-0.5",
      className,
    )}
  >
    <hr className="h-[1px] w-1/2 bg-gray-6 print:h-[1pt] print:bg-typography" />

    <FaSquareFull className="rotate-45 text-[0.5rem]" />

    <hr className="h-[1px] w-1/2 bg-gray-6 print:h-[1pt] print:bg-typography" />
  </div>
));
DiamondPageBreak.displayName = SeparatorPrimitive.Root.displayName;

export { DiamondPageBreak };
