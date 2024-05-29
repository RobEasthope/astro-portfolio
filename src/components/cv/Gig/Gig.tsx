import { Box } from "~/components/ui/Box/Box";
import { Type } from "~/components/_base/Type/Type";

import { GigDate } from "~/components/about/GigIndex/components/Gig/GigDate";

export type GigProps = {
  _id?: string;
  client: OrganisationProps;
  jobTitle: string;
  description: BasicTextProps;
  startDate: string;
  endDate?: string;
};

export function Gig({
  client,
  jobTitle,
  description,
  startDate,
  endDate = "present",
}: GigProps) {
  return (
    <Box as="article">
      <Type as="h4" className="font-bold">
        {client?.name} / {jobTitle}
      </Type>

      <GigDate startDate={startDate} endDate={endDate} />

      {/* <Prose
      as="div"
      content={description}
      components={BasicTextComponents}
      className="print:max-w-full"
    /> */}
    </Box>
  );
}
