// 1. Import utilities from `astro:content`
// eslint-disable-next-line import/no-unresolved
import { defineCollection, z } from "astro:content";
import { WorkSchemaDataProps } from "@/schemas/work.schema";
import { GigSchemaDataProps } from "@/schemas/gig.schema";

// 2. Define your collection(s)
const workCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      ...WorkSchemaDataProps,
      thumbnailImage: image()
        .refine((img) => img.width >= 64, {
          message: "Cover image must be at least 64 pixels wide!",
        })
        .optional(),
    }),
});

const gigCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: () =>
    z.object({
      ...GigSchemaDataProps,
    }),
});

const landingCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: () => z.object({}),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  work: workCollection,
  gigs: gigCollection,
  landing: landingCollection,
};
