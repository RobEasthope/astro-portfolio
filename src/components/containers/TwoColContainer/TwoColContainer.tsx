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
    <Box as="section" className="w-full py-2 md:py-3 lg:py-6 print:py-2">
      <Box
        as="div"
        className="mx-auto flex w-full max-w-prose flex-col justify-center gap-1 md:max-w-7xl md:flex-row md:gap-2 print:mx-0 print:max-w-full print:flex-row print:gap-3"
      >
        <Box
          as="div"
          className="mb-1 w-full md:flex md:max-w-[44ch] md:flex-shrink print:mb-0 print:w-1/6"
        >
          <Type
            as="h2"
            variant="section-heading"
            className="text-center md:text-left print:text-left"
          >
            {heading}
          </Type>
        </Box>
        <Diamond className="flex md:hidden" />
        <Box as="div" className="w-full max-w-prose print:max-w-full">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
