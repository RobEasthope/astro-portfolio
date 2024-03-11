
import { Box } from '@/components/ui/Box/Box';
import { InternalLink } from '@/components/ui/InternalLink/InternalLink';
// import { SanityImage } from '@/components/_base/SanityImage/SanityImage';
import { cn } from '@/utils/tailwind';

export type ProjectIndexCardProps = {
  project: ProjectProps['page'];
};

export function ProjectIndexCard({ project }: ProjectIndexCardProps) {
  if (!project?.displayProject) {
    return null;
  }

  return (
    <Box as="li">
      <InternalLink
        href={project?.href}
        className="flex h-full flex-row sm:flex-col items-center gap-0.5 sm:gap-0.25 text-left sm:text-center"
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

        {project?.title}
      </InternalLink>
    </Box>
  );
}
