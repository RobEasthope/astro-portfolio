import { cva, type VariantProps } from "class-variance-authority";

import { cn, stylesCheck } from "@/utils/tailwind";

const lineBreakVariants = cva(
  // Base styles
  null,
  {
    variants: {
      align: {
        centre: "justify-center",
        left: "justify-start",
        right: "justify-end",
      },
    },
    defaultVariants: {
      align: "centre",
    },
  },
);

export interface LineBreakProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof lineBreakVariants> {}

export function LineBreak({ align, className }: LineBreakProps) {
  return (
    <hr
      className={stylesCheck(
        cn(
          'flex h-1 items-center border-none after:block after:h-[2px] after:w-3 after:bg-dark-saffron  after:content-[""]',
          lineBreakVariants({ align }),
          className,
        ),
      )}
    />
  );
}
