import { cn } from "@/utils/tailwind";
import type { ReactNode } from "react";
import { Box } from "@/components/_base/Box/Box";
import "./prose.css";

export type ProseProps = {
  as: string;
  className?: string;
  children: ReactNode;
};

export function Prose({ as = "div", className, children }: ProseProps) {
  if (!children) {
    return null;
  }

  return (
    <Box as={as} className={cn("prose text-base text-ink", className)}>
      {children}
    </Box>
  );
}
