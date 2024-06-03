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
      <Box as="div" className="mx-auto flex max-w-7xl flex-row gap-2">
        <Type as="h2" className="tracking-none mt-1 w-1/3 text-2xl">
          {heading}
        </Type>

        {children}
      </Box>
    </Box>
  );
}
