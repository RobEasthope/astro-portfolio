// eslint-disable-next-line import/no-unresolved
import { z } from "astro:content";

export const GigSchemaDataProps = {
  employer: z.string().optional(),
  employerUrl: z.string().url().optional(),
  jobTitle: z.string(),
  jobType: z.string(),
  startDate: z.string(),
  endDate: z.string(),
};

export const GigSchemaProps = z.object({ ...GigSchemaDataProps });
