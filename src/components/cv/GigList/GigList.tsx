import { Gig } from "@/components/cv/Gig/Gig";
import { Box } from "@/components/ui/Box/Box";
import type { GigSchemaProps } from "@/schemas/gig.schema";
import type { z } from "astro:content";
import { v4 as uuidv4 } from "uuid";

export type GigListProps = {
  gigs: { data: z.infer<typeof GigSchemaProps>; body: string }[];
};

export function GigList({ gigs }: GigListProps) {
  if (!gigs?.length) return null;

  return (
    <Box as="ul" className="flex max-w-prose flex-col gap-1.5 print:gap-0.5">
      {gigs?.map((gig) => <Gig key={uuidv4()} gig={gig} />)}
    </Box>
  );
}
