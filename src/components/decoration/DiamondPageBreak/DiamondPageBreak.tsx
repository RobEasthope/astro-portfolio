import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { Diamond } from "@/components/decoration/Diamond/Diamond";

const DiamondPageBreak = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className }, ref) => (

    <Diamond />

    <div className="h-[1px] w-1/2 bg-gray-6" />
  </div>
));
DiamondPageBreak.displayName = SeparatorPrimitive.Root.displayName;

export { DiamondPageBreak };
