import { Box } from "@/components/ui/Box/Box";
import { Type } from "@/components/ui/Type/Type";
import { GigDate } from "@/components/cv/GigDate/GigDate";
import type { GigSchemaProps } from "@/schemas/gig.schema";
import type { z } from "astro:content";
import { ExternalLink } from "@/components/ui/ExternalLink/ExternalLink";
import ReactMarkdown from "react-markdown";
import { Prose } from "@/components/ui/Prose/Prose";

export function Gig({
  gig,
}: {
  gig: { data: z.infer<typeof GigSchemaProps>; body: string };
}) {
  const { employer, employerUrl, jobTitle, startDate, endDate } = gig.data;

  return (
    <Box as="article">
      <Type as="h4" className="font-bold">
        <ExternalLink href={employerUrl}>{employer}</ExternalLink> / {jobTitle}
      </Type>

      <GigDate startDate={startDate} endDate={endDate} />

      <Prose as="section">
        <ReactMarkdown>{gig.body}</ReactMarkdown>
      </Prose>
    </Box>
  );
}
