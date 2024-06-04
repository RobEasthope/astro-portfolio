import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { Diamond } from "@/components/decoration/Diamond/Diamond";

const DiamondPageBreak = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className="mx-auto flex w-full flex-row items-center gap-0.5"
    >
      <div className="h-[1px] w-1/2 bg-gray-6" />

      <Diamond />

      <div className="h-[1px] w-1/2 bg-gray-6" />
    </div>
  ),
);
DiamondPageBreak.displayName = SeparatorPrimitive.Root.displayName;

export { DiamondPageBreak };
