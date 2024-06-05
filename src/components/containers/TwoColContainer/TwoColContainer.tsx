import { Diamond } from "@/components/decoration/Diamond/Diamond";
import type { ReactNode } from "react";
import { Box } from "@/components/_base/Box/Box";
import { Type } from "@/components/_base/Type/Type";

type TwoColContainerProps = {
  id: string;
  heading: string;
  children: ReactNode;
};

export function TwoColContainer({
  id,
  heading,
  children,
}: TwoColContainerProps) {
  return (
    <Box as="section" id={id} className="w-full">
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
        {/* <Diamond className="flex sm:my-0.5 md:hidden" /> */}
        <Box as="div" className="w-full max-w-prose">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
