import { BsDot } from 'react-icons/bs';

import { cn } from '@/utils/tailwind';
import { Box } from '@/components/_base/Box/Box';

import type { SpacerProps } from '@/components/decoration/Spacer/Spacer';

export type DotProps = {
  spacingTop?: SpacerProps['height'];
  spacingBottom?: SpacerProps['height'];
  className?: string;
};

export function Dot({
  spacingTop = '0',
  spacingBottom = '0',
  className,
}: DotProps) {
  return <Box
    as="div"
    className={cn(
      `flex w-full justify-center items-center h-1 mx-auto text-lg text-ink`,
      `mt-${spacingTop}`,
      `mb-${spacingBottom}`,
      'print:my-0.5',
      className,
    )}
  >
    <BsDot />
  </Box>
}
