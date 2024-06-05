import { v4 as uuidv4 } from "uuid";
import { Box } from "@/components/_base/Box/Box";
import { ExternalLink } from "@/components/_base/ExternalLink/ExternalLink";
import { Prose } from "@/components/_base/Prose/Prose";
import { Type } from "@/components/_base/Type/Type";

export type OrganisationProps = {
  name?: string;
  url?: string;
  hidden?: boolean;
};

export type OrganisationsProps = {
  heading: string;
  description: string;
  organisations: OrganisationProps[];
};

export function Organisations({
  heading,
  description,
  organisations,
}: OrganisationsProps) {
  if (!organisations) return null;

  return (
    <Box as="section" blockSpacing>
      <Box as="div" className="mx-auto max-w-6xl">
        <Type as="h2">{heading}</Type>
        <Prose as="div" className="mx-auto mb-2 text-center text-md">
          {description}
        </Prose>
        <Box
          as="ul"
          className="grid grid-cols-1 gap-0.5 gap-x-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {organisations?.map((org) => (
            <Box key={uuidv4()} as="li">
              <ExternalLink href={org?.url || ""}>{org.name}</ExternalLink>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
