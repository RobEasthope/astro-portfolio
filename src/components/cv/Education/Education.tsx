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

            <Box as="section" className="flex gap-0.5">
              <Type as="p" className="capitalize italic">
                {edu.name}
              </Type>
              <Type as="span" className="capitalize italic">
                •
              </Type>
              <GigDate startDate={edu.startDate} endDate={edu.endDate} />
            </Box>
          </Box>
        ))}
      </Box>
    </TwoColContainer>
  );
}
