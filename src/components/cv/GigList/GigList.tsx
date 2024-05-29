import Gig from "@/components/cv/Gig/Gig.astro";
import { Box } from "@/components/ui/Box/Box";

export type GigListProps = {
  gigs: GigProps[];
};

export function GigList({ gigs }: GigListProps) {
  if (!gigs?.length) return null;

  return (
    <Box as="ul" className="flex flex-col gap-1.5 print:gap-0.5">
      {gigs?.map((gig, i) => (
        <Gig
          key={`${gig?._id || ""}-${i}`}
          client={gig.client}
          jobTitle={gig.jobTitle}
          description={gig.description}
          startDate={gig.startDate}
          endDate={gig.endDate}
        />
      ))}
    </Box>
  );
}
