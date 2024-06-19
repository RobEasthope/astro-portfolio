import { Box } from "@/components/_base/Box/Box";
import { ExternalLink } from "@/components/_base/ExternalLink/ExternalLink";
import { Prose } from "@/components/_base/Prose/Prose";
import { Type } from "@/components/_base/Type/Type";
import { TwoColContainer } from "@/components/containers/TwoColContainer/TwoColContainer";
import { GigDate } from "@/components/cv/GigDate/GigDate";
import { EDUCATION } from "@/data/EDUCATION";

export function Education() {
  return (
    <TwoColContainer heading="Education & academic citations">
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

      <Box as="article" className="mt-2">
        <Type as="h4" className="font-bold">
          European Space Agency cs2eo project
        </Type>

        <Prose as="div" className="italic">
          Ewart, M., Bizon, J., Alford, J., Easthope, R., Gourmelen, N., Horton,
          A., Incatasciato, A., Parrinello, T., Bouffard, J., Di Bella, A.,
          Goss, T., Michael, C., Meloni, M. 2022. cs2eo Version 3,{" "}
          <ExternalLink href="http://cs2eo.org">http://cs2eo.org</ExternalLink>.
          European Space Agency, 19/06/2024
        </Prose>
      </Box>
    </TwoColContainer>
  );
}
