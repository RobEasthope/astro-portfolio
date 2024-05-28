// eslint-disable-next-line import/no-unresolved
import { z } from "astro:content";

export const GigSchemaDataProps = {
  employer: z.string(),
  employerUrl: z.string().url(),
  jobTitle: z.string(),
  jobType: z.string(),
  startDate: z.string(),
  endDate: z.string(),
};

export const GigSchemaProps = z.object({ ...GigSchemaDataProps });
