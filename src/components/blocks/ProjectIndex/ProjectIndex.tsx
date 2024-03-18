import { ProjectIndexCard } from "@/components/blocks/ProjectIndex/components/ProjectIndexCard";

import { Box } from "@/components/ui/Box/Box";
import { v4 as uuidv4 } from "uuid";
import { WorkSchemaZProps } from "@/schemas/work.schema";
import type { z } from "astro:content";

// TYPES
export type ProjectIndexProps = {
  projects: z.infer<typeof WorkSchemaZProps>[];
};

// MARKUP
export function ProjectIndex({ projects }: ProjectIndexProps) {
  if (!projects) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      {projects?.length > 0 && (
        <Box
          as="ul"
          className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
        >
          {projects?.map((project, i) => (
            <ProjectIndexCard key={uuidv4()} project={project} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default ProjectIndex;
