import type { GigSchemaProps } from "@/schemas/gig.schema";
import type { z } from "astro:content";
import { Box } from "@/components/_base/Box/Box";
import { Type } from "@/components/_base/Type/Type";

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
    <Box as="div" className="flex flex-wrap italic">
      <Type as="p">
        {startMonth} {startYear !== endYear && startYear}
      </Type>
      {startDateFull !== endDateFull ? (
        <Type as="span">&nbsp;&ndash;&nbsp;</Type>
      ) : (
        <>&nbsp;</>
      )}

      <Type as="p">
        {startDateFull !== endDateFull && endMonth} {endYear}
      </Type>
    </Box>
  );
}
