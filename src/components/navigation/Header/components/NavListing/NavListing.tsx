import { v4 as uuidv4 } from "uuid";
import { Box } from "@/components/_base/Box/Box";
import {
  SuperLink,
  type SuperLinkProps,
} from "@/components/_base/SuperLink/SuperLink";
import { Type } from "@/components/_base/Type/Type";
import { cn } from "@/utils/tailwind";

export type NavListingProps = {
  links: SuperLinkProps[];
  mode: "light" | "dark";
};

export function NavListing({ links, mode }: NavListingProps) {
  return (
    <Box as="ul" className="flex flex-row gap-1 xl:gap-2">
      {links?.map((link) => (
        <Type
          as="li"
          key={uuidv4()}
          className={cn(
            `text-base`,
            mode === "light" ? "text-white" : "text-ink",
          )}
        >
          <SuperLink href={link?.href} type={link?.type}>
            {link?.title}
          </SuperLink>
        </Type>
      ))}
    </Box>
  );
}
