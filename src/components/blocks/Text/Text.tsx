import type React from "react";
import { Box } from "@/components/_base/Box/Box";
import { Prose } from "@/components/_base/Prose/Prose";

export type TextProps = {
  children?: React.ReactNode;
};

export function Text({ children }: TextProps) {
  if (!children) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      <Prose as="div" className="mx-auto font-serif">
        {children}
      </Prose>
    </Box>
  );
}

export default Text;
