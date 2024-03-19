// 1. Import utilities from `astro:content`
// eslint-disable-next-line import/no-unresolved
import { defineCollection, z } from "astro:content";
import { WorkSchemaZProps } from "@/schemas/work.schema";

// 2. Define your collection(s)
const workCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
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
      thumbnailImage: image()
        .refine((img) => img.width >= 64, {
          message: "Cover image must be at least 64 pixels wide!",
        })
        .optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  work: workCollection,
};
