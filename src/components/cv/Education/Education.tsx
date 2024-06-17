import { Box } from "@/components/_base/Box/Box";
import { Type } from "@/components/_base/Type/Type";
import { TwoColContainer } from "@/components/containers/TwoColContainer/TwoColContainer";

export function Education() {
  return (
    <TwoColContainer heading="Education">
      <Box
        as="div"
        className="mx-auto flex max-w-prose flex-col items-center gap-0.5 md:items-start"
      >
        <Type as="h2" className="text-lg font-bold">
          University of York
        </Type>
        <Type as="h3" className="text-sm font-semibold">
          BSc Computer Science
        </Type>
        <Type as="p" className="text-sm">
          2016 - 2019
        </Type>
      </Box>
    </TwoColContainer>
  );
}
