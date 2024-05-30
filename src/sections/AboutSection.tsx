import { Box } from "@/components/ui/Box/Box";
import { EmailLink } from "@/components/ui/EmailLink/EmailLink";
import { Type } from "@/components/ui/Type/Type";

export function AboutSection() {
  return (
    <Box as="section" id="about" className="mx-auto max-w-7xl">
      <Type as="h1" className="text-3xl leading-tight">
        Hello there!
        <br /> I am Rob Easthope, a front end developer working on the web.
      </Type>

      <Type as="p" className="prose mt-1 text-lg">
        Want to chat? Feel free to{" "}
        <EmailLink emailAddress="hello@robeasthope.com">email me</EmailLink>.
      </Type>
    </Box>
  );
}
