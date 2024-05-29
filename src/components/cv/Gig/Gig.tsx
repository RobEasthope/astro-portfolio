import { Box } from "@/components/ui/Box/Box";
import { Type } from "@/components/ui/Type/Type";
import { GigDate } from "@/components/cv/GigDate/GigDate";
import type { GigSchemaProps } from "@/schemas/gig.schema";
import type { z } from "astro:content";
import { ExternalLink } from "@/components/ui/ExternalLink/ExternalLink";

export function Gig({
  employer,
  employerUrl,
  jobTitle,
  startDate,
  endDate,
}: z.infer<typeof GigSchemaProps>) {
  return (
    <Box as="article">
      <Type as="h4" className="font-bold">
        <ExternalLink href={employerUrl}>{employer}</ExternalLink> / {jobTitle}
      </Type>

      <GigDate startDate={startDate} endDate={endDate} />
    </Box>
  );
}
