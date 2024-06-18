import { createElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, stylesCheck } from "@/utils/tailwind";

const typeVariants = cva(
  // Base styles
  null,
  {
    variants: {
      variant: {
        base: "text-base",
      },
    },
    defaultVariants: {
      variant: "base",
    },
  },
);

export interface TypeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typeVariants> {
  as: // All valid HTML text elements
  | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "dt"
    | "dd"
    | "span"
    | "small"
    | "div"
    | "figcaption"
    | "q"
    | "li";
}

export function Type({
  as = "p",
  variant = "base",
  className,
  children,
  ...rest
}: TypeProps) {
  if (!children) {
    return null;
  }

  return createElement(
    as,
    {
      className: stylesCheck(cn(typeVariants({ variant }), className)),
      ...rest,
    },
    children,
  );
}
