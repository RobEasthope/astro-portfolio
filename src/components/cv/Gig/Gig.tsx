import { Box } from "@/components/ui/Box/Box";
import { Type } from "@/components/ui/Type/Type";
import { GigDate } from "@/components/cv/GigDate/GigDate";
import type { GigSchemaProps } from "@/schemas/gig.schema";
import type { z } from "astro:content";

export function Gig({
  employer,
  jobTitle,
  startDate,
  endDate,
  body,
}: z.infer<typeof GigSchemaProps>) {
  return (
    <Box as="article">
      <Type as="h4" className="font-bold">
        {employer} / {jobTitle}
      </Type>

      <GigDate startDate={startDate} endDate={endDate} />

      {body}
    </Box>
  );
}
