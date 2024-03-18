import { Box } from "@/components/ui/Box/Box";
import { InternalLink } from "@/components/ui/InternalLink/InternalLink";
// import { SanityImage } from '@/components/_base/SanityImage/SanityImage';
import { cn } from "@/utils/tailwind";
import { WorkSchemaZProps } from "@/schemas/work.schema";
import type { z } from "astro:content";

export type ProjectIndexCardProps = Pick<
  z.infer<typeof WorkSchemaZProps>,
  "title" | "url" | "description"
>;

export function ProjectIndexCard({
  title,
  url,
  description,
}: ProjectIndexCardProps) {
  return (
    <Box as="li">
      <InternalLink
        href={url}
        className="flex h-full flex-row items-center gap-0.5 text-left sm:flex-col sm:gap-0.25 sm:text-center"
      >
        {/* <SanityImage
          src={project?.thumbnailImage}
          alt={project?.title}
          aspectRatio={project?.containLogo ? 0 : 1}
          className={cn(
            'rounded-full w-2 h-2 flex-shrink-0',
            !project?.containLogo && '!object-contain',
          )}
          wrapperClassName="flex items-center"
          cover={!project?.containLogo}
        /> */}

        {title}
      </InternalLink>
    </Box>
  );
}
