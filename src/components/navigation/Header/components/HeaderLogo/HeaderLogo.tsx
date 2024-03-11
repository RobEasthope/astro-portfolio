import { Box } from '@/components/ui/Box/Box';
import { InternalLink } from '@/components/ui/InternalLink/InternalLink';
import { Type } from '@/components/ui/Type/Type';

export type HeaderLogoProps = {
  logo: string;
  homePageSlug: string;
};

export function HeaderLogo({ logo, homePageSlug }: HeaderLogoProps) {
  return <Box
    as="div"
    className="absolute left-1/2 flex flex-1 -translate-x-1/2 items-center justify-center"
  >
    <InternalLink
      href={homePageSlug}
      className="p-0.25"
    >
      <Type as="span" className="sr-only">
        Rob Easthope
      </Type>
      <SanityImage
        src={logo}
        alt={METADATA_HARD_CODED_FALLBACKS.TITLE}
        className="h-1.25 w-1.25"
      />
    </InternalLink>
  </Box>
}
