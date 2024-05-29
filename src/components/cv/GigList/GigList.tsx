import Gig from "@/components/cv/Gig/Gig.astro";
import { Box } from "@/components/ui/Box/Box";
import type { GigSchemaProps } from "@/schemas/gig.schema";
import type { z } from "astro:content";
import { v4 as uuidv4 } from "uuid";

export type GigListProps = {
  gigs: z.infer<typeof GigSchemaProps>[];
};

export function GigList({ gigs }: GigListProps) {
  if (!gigs?.length) return null;

  return (
    <Box as="ul" className="flex flex-col gap-1.5 print:gap-0.5">
      {gigs?.map((gig) => (
        <Gig
          client={gig.client}
          key={uuidv4()}
          jobTitle={gig.jobTitle}
          description={gig.description}
          startDate={gig.startDate}
          endDate={gig.endDate}
        />
      ))}
    </Box>
  );
}
