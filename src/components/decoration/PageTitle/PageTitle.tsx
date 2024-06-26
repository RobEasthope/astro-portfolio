import { LineBreak } from "@/components/decoration/LineBreak/LineBreak";
import { Box } from "@/components/_base/Box/Box";
import { Type } from "@/components/_base/Type/Type";

// TYPES
export type PageTitleProps = {
  heading: string;
};

export function PageTitle({ heading }: PageTitleProps) {
  if (!heading) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      <Box as="div">
        <Box as="div" className="text-center">
          <Type as="h1" className="text-xl leading-none">
            {heading}
          </Type>

          <LineBreak className="mt-1" />
        </Box>
      </Box>
    </Box>
  );
}

export default PageTitle;
