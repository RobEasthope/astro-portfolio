// eslint-disable-next-line import/no-unresolved
import { getCollection } from "astro:content";

import { LineBreak } from "@/components/decoration/LineBreak/LineBreak";
import { Box } from "@/components/ui/Box/Box";
import { InternalLink } from "@/components/ui/InternalLink/InternalLink";
import { Type } from "@/components/ui/Type/Type";

const projects = await getCollection("work");

export function WorkSection() {
  return (
    <Box as="section">
      <Box as="div" className="mx-auto max-w-prose">
        <Type as="h1" className="mb-0.5 text-center text-3xl leading-none">
          Work
        </Type>

        <Type as="p" className="mb-1 text-center text-md italic">
          Some of the projects I have worked on
        </Type>

        <LineBreak className="my-1" />
      </Box>

      <Box
        as="ul"
        className="mx-auto grid grid-cols-1 gap-x-1 gap-y-0.5 sm:grid-cols-2 md:grid-cols-3 md:gap-x-2 md:gap-y-1"
        maxWidth="medium"
      >
        {projects?.map((project) => (
          <Type as="li">
            <InternalLink
              href={project.data.url}
              className="flex h-full flex-row gap-0.5"
            >
              {project.data.title}
            </InternalLink>
          </Type>
        ))}
      </Box>
    </Box>
  );
}
