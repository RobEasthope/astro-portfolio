import { Box } from "@/components/_base/Box/Box";
import { EmailLink } from "@/components/_base/EmailLink/EmailLink";
import { ExternalLink } from "@/components/_base/ExternalLink/ExternalLink";
import { Type } from "@/components/_base/Type/Type";
import { TwoColContainer } from "@/components/containers/TwoColContainer/TwoColContainer";

export function CVHeader() {
  return (
    <TwoColContainer heading="">
      <Box
        as="div"
        className="mx-auto flex max-w-prose flex-col items-center gap-0.5 md:items-start"
      >
        <Type as="h1" className="text-lg font-bold">
          Rob Easthope
        </Type>
        <Box
          as="div"
          className="flex flex-wrap justify-center gap-0.25 md:justify-start"
        >
          <EmailLink
            emailAddress="hello@robeasthope.com"
            className="inline-block"
          >
            hello@robeasthope.com
          </EmailLink>
          /
          <ExternalLink href="tel:07545839971" className="inline-block">
            07545 83 99 71
          </ExternalLink>
        </Box>

        <Box
          as="div"
          className="flex flex-wrap justify-center gap-0.5 md:justify-start print:gap-0.25"
        >
          <ExternalLink href="https://www.linkedin.com/in/rob-easthope/">
            LinkedIn<span className="hidden print:inline">:</span>
            <span className="hidden print:inline"> LinkedIn </span>
          </ExternalLink>
          <Type as="span" className="mx-0.125">
            {" & "}
          </Type>
          <ExternalLink href="https://github.com/RobEasthope">
            Github<span className="hidden print:inline">:</span>
            <span className="hidden print:inline"> GitHub </span>
          </ExternalLink>
          <Type as="span" className="mx-0.125 print:hidden">
            {" & "}
          </Type>
          <ExternalLink href="https://www.robeasthope.com">
            Portfolio<span className="hidden print:inline">:</span>
            <span className="hidden print:inline"> robeasthope.com </span>
          </ExternalLink>
        </Box>
      </Box>
    </TwoColContainer>
  );
}
