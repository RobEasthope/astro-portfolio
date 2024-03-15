// 1. Import utilities from `astro:content`
// eslint-disable-next-line import/no-unresolved
import { z, defineCollection } from "astro:content";
import { WorkSchemaZProps } from "@/schemas/work.schema";

// 2. Define your collection(s)
const workCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: WorkSchemaZProps,
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  work: workCollection,
};
