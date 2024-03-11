import { Box } from '@/components/ui/Box/Box';
import { Prose } from '@/components/ui/Prose/Prose';
import type React from 'react';

export type TextProps = {
  children?: React.ReactNode;
};

export function Text({ children }: TextProps) {
  if (!children) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      <Prose
        as="div"
        className="mx-auto font-serif"
      >{children}</Prose>
    </Box>
  );
}

export default Text;
