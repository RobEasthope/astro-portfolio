import { Box } from "@/components/ui/Box/Box";
import { Type } from "@/components/ui/Type/Type";

import { romanize } from "./romanize";

export function Footer() {
  const timeStamp = new Date();

  return (
    <Box as="footer" className="print:hidden">
      <Box as="div" className="mx-auto flex flex-col gap-1 px-1 py-1">
        <Type
          as="p"
          className="hover:text-ink text-center text-sm hover:cursor-default"
        >
          © {romanize(timeStamp.getFullYear())}
        </Type>
      </Box>
    </Box>
  );
}
