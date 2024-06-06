import { v4 as uuidv4 } from "uuid";
import { Box } from "@/components/_base/Box/Box";
import {
  SuperLink,
  type SuperLinkProps,
} from "@/components/_base/SuperLink/SuperLink";
import { Type } from "@/components/_base/Type/Type";

export type NavListingProps = {
  links: SuperLinkProps[];
};

export function NavListing({ links }: NavListingProps) {
  return (
    <Box as="ul" className="flex flex-row gap-1 sm:gap-1.5 xl:gap-2">
      {links?.map((link) => (
        <Type as="li" key={uuidv4()} className="text-base">
          <SuperLink href={link?.href} type={link?.type}>
            {link?.title}
          </SuperLink>
        </Type>
      ))}
    </Box>
  );
}
