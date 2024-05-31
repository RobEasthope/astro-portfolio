import { Box } from "@/components/ui/Box/Box";
import { Type } from "@/components/ui/Type/Type";
import { GigDate } from "@/components/cv/GigDate/GigDate";
import type { GigSchemaProps } from "@/schemas/gig.schema";
import type { z } from "astro:content";
import { ExternalLink } from "@/components/ui/ExternalLink/ExternalLink";

export async function Gig({
  gig,
}: {
  gig: { data: z.infer<typeof GigSchemaProps> };
}) {
  const { employer, employerUrl, jobTitle, startDate, endDate } = gig.data;
  const { Content } = await gig.render();

  return (
    <Box as="article">
      <Type as="h4" className="font-bold">
        <ExternalLink href={employerUrl}>{employer}</ExternalLink> / {jobTitle}
      </Type>

      <GigDate startDate={startDate} endDate={endDate} />

      <Content />
    </Box>
  );
}
