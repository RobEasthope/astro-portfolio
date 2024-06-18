import { Box } from "@/components/_base/Box/Box";
import { ExternalLink } from "@/components/_base/ExternalLink/ExternalLink";
import { Type } from "@/components/_base/Type/Type";
import { TwoColContainer } from "@/components/containers/TwoColContainer/TwoColContainer";
import { GigDate } from "@/components/cv/GigDate/GigDate";
import { EDUCATION } from "@/data/EDUCATION";

export function Education() {
  return (
    <TwoColContainer heading="Education">
      <Box
        as="div"
        className="mx-auto flex max-w-prose flex-col items-center gap-1 md:items-start print:max-w-full print:flex-row print:items-start print:gap-3"
      >
        {EDUCATION.map((edu) => (
          <Box as="article" key={edu.name}>
            <Type as="h4" className="font-bold">
              <ExternalLink href={edu.url}>{edu.qualification}</ExternalLink>
            </Type>

            <Type
              as="p"
              variant="gig-subheading"
              className="flex w-full gap-0.5 print:flex-col print:gap-0"
            >
              {edu.name}
              <span className="print:hidden">•</span>
              <GigDate startDate={edu.startDate} endDate={edu.endDate} />
            </Type>
          </Box>
        ))}
      </Box>
    </TwoColContainer>
  );
}
