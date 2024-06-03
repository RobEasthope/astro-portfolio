import { Diamond } from "@/components/decoration/Diamond/Diamond";
import { Box } from "@/components/ui/Box/Box";
import { Type } from "@/components/ui/Type/Type";
import type { ReactNode } from "react";

type LandingPageSectionProps = {
  id: string;
  heading: string;
  children: ReactNode;
};

export function LandingPageSection({
  id,
  heading,
  children,
}: LandingPageSectionProps) {
  return (
    <Box as="section" id={id} className="w-full">
      <Box
        as="div"
        className="mx-auto flex max-w-prose flex-col justify-center gap-1 md:max-w-7xl md:flex-row md:gap-2"
      >
        <Type
          as="h2"
          className="tracking-none text-center text-2xl md:w-1/3 md:text-left"
        >
          {heading}
        </Type>
        <Diamond className="flex sm:my-0.5 md:hidden" />
        <Box as="div" className="md:w-2/3">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
