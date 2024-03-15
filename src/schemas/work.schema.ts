import z from "zod";

export const WorkSchemaZProps = z.object({
  title: z.string(),
  description: z.string(),
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
});
