import type { ReactNode } from "react";
import { Box } from "@/components/_base/Box/Box";
import { Type } from "@/components/_base/Type/Type";
import { Diamond } from "@/components/decoration/Diamond/Diamond";

type TwoColContainerProps = {
  heading: string;
  children: ReactNode;
};

export function TwoColContainer({ heading, children }: TwoColContainerProps) {
  return (
    <Box as="section" className="w-full py-2 md:py-3 lg:py-6">
      <Box
        as="div"
        className="mx-auto flex max-w-prose flex-col justify-center gap-1 md:max-w-7xl md:flex-row md:gap-2"
      >
        <Box as="div" className="md:w-full md:max-w-[44ch]">
          <Type
            as="h2"
            className="text-center text-2xl leading-none md:text-left"
          >
            {heading}
          </Type>
        </Box>
        <Diamond className="flex md:hidden" />
        <Box as="div" className="w-full max-w-prose">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
