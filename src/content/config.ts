// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const workCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
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
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  work: workCollection,
};
