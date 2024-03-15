import { Box } from '@/components/ui/Box/Box';
import { InternalLink } from '@/components/ui/InternalLink/InternalLink';
import { Type } from '@/components/ui/Type/Type';

export type HeaderLogoProps = {
  // logo: string;
};

export function HeaderLogo({ logo }: HeaderLogoProps) {
  return <Box
    as="div"
    className="absolute left-1/2 flex flex-1 -translate-x-1/2 items-center justify-center"
  >
    <InternalLink
      href="/"
      className="p-0.25"
    >
      <Type as="span" className="sr-only">
        Rob Easthope
      </Type>
        <img src={logo.src} alt="Saffron roundel logo" className="h-8 w-8" />
    </InternalLink>
  </Box>
}