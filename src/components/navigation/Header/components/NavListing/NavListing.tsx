import { v4 as uuidv4 } from "uuid";
import { Box } from "@/components/_base/Box/Box";
import {
  SuperLink,
  type SuperLinkProps,
} from "@/components/_base/SuperLink/SuperLink";
import { Type } from "@/components/_base/Type/Type";
import { cn } from "@/utils/tailwind";
import { cva } from "class-variance-authority";

const navlistingVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      mode: {
        light: "text-white",
        dark: "text-ink",
      },
    },
    defaultVariants: {
      mode: "dark",
    },
  },
);

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
          className={cn(`text-base`, navlistingVariants({ mode }))}
        >
          <SuperLink href={link?.href} type={link?.type}>
            {link?.title}
          </SuperLink>
        </Type>
      ))}
    </Box>
  );
}
