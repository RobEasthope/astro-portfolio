import type { GigSchemaProps } from "@/schemas/gig.schema";
import type { z } from "astro:content";

export type GigDateProps = {
  startDate: z.infer<typeof GigSchemaProps>["startDate"];
  endDate: z.infer<typeof GigSchemaProps>["endDate"] | Date;
};

export function GigDate({ startDate, endDate = new Date() }: GigDateProps) {
  const parsedStartDate = new Date(startDate);
  const parsedEndDate = new Date(endDate);

  const startDateFull = parsedStartDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const startMonth = parsedStartDate.toLocaleString("default", {
    month: "long",
  });
  const startYear = parsedStartDate.getFullYear();

  const endDateFull = parsedEndDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const endMonth = parsedEndDate.toLocaleString("default", {
    month: "long",
  });
  const endYear = parsedEndDate.getFullYear();

  return (
    <span className="inline-flex flex-wrap">
      {startMonth} {startYear !== endYear && startYear}
      {startDateFull !== endDateFull ? <>&nbsp;&ndash;&nbsp;</> : <>&nbsp;</>}
      {startDateFull !== endDateFull && endMonth} {endYear}
    </span>
  );
}
