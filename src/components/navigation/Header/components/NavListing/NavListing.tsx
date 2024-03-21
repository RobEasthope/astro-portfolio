import { Box } from "@/components/ui/Box/Box";
import {
  SuperLink,
  type SuperLinkProps,
} from "@/components/ui/SuperLink/SuperLink";
import { Type } from "@/components/ui/Type/Type";
import { v4 as uuidv4 } from "uuid";

export type NavListingProps = {
  links: SuperLinkProps[];
};

export function NavListing({ links }: NavListingProps) {
  return (
    <Box as="ul" className="flex flex-row gap-1">
      {links?.map((link) => (
        <Type as="li" key={uuidv4()} className="text-sm sm:text-base">
          <SuperLink href={link?.href} type={link?.type}>
            {link?.title}
          </SuperLink>
        </Type>
      ))}
    </Box>
  );
}
