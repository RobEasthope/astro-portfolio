// eslint-disable-next-line import/no-unresolved
import { z } from "astro:content";

export const WorkSchemaZProps = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string(),
  agency: z.string().optional(),
  agencyUrl: z.string().url().optional(),
  client: z.string().optional(),
  clientUrl: z.string().url().optional(),
  projectUrlTitle: z.string().optional(),
  projectUrl: z.string().url().optional(),
  repoTitle: z.string().optional(),
  repoUrl: z.string().url().optional(),
  tools: z.string().optional(),
  dates: z.string(),
  thumbnailImage: z.any().optional(),
});
