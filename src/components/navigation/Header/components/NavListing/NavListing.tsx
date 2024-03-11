import { Box } from '@/components/ui/Box/Box';
import { Type } from '@/components/ui/Type/Type';

export type NavListingProps = {
  links:
    | [
        | ExternalLinkWithTitleSchemaProps
        | InternalLinkWithTitleSchemaProps
        | EmailLinkWithTitleSchemaProps,
      ]
    | null;
};

export function NavListing({ links }: NavListingProps) {
  return <Box as="ul" className="hidden flex-row gap-1 sm:flex">
    {links?.map((link) => (
      <Type as="li" key={link?._key} className="text-base">
        <SuperLink link={link}>{link.title}</SuperLink>
      </Type>
    ))}
  </Box>
}
