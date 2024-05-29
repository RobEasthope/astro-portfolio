// eslint-disable-next-line import/no-unresolved
import { getCollection } from "astro:content";

import { LineBreak } from "@/components/decoration/LineBreak/LineBreak";
import { Box } from "@/components/ui/Box/Box";
import { InternalLink } from "@/components/ui/InternalLink/InternalLink";
import { Type } from "@/components/ui/Type/Type";
import { v4 as uuidv4 } from "uuid";

const listedProjects = await getCollection("work");
const listedProjectsByDate = listedProjects.sort((a, b) => {
  return (
    new Date(b.data.endDate).getTime() - new Date(a.data.endDate).getTime()
  );
});

export function WorkSection() {
  return (
    <Box as="section" id="work" className="mx-auto">
      <Box as="section" id="work" className="mx-auto max-w-5xl">
        <Type as="h1" className="mb-0.5 text-center text-2xl leading-tight">
          Work
        </Type>

        <Type as="p" className="mb-1 text-center text-md italic">
          Some of the projects I have worked on
        </Type>

        <LineBreak className="my-1" align="centre" />
      </Box>

      <Box
        as="ul"
        className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-x-1 gap-y-0.5 sm:grid-cols-2 md:grid-cols-3 md:gap-x-2 md:gap-y-1 lg:grid-cols-4"
      >
        {listedProjectsByDate?.map((project) => (
          <Type key={uuidv4()} as="li">
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